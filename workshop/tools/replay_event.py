"""Replay the same blob event twice without replacing an immutable manual."""
import argparse
from datetime import datetime, timezone
import json
from pathlib import Path
import subprocess
import urllib.parse
import urllib.request
from uuid import uuid4

from deployment_client import ProductsClient, ROOT

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('product_id', nargs='?', help='Defaults to the newest ready product')
args = parser.parse_args()
config = json.loads((ROOT / '.state/config.json').read_text())
client = ProductsClient()
ready = [product for product in client.get('/api/products') if product['status'] == 'ready']
if not ready:
    raise SystemExit('There is no ready manual to replay.')
product = client.get('/api/products/' + args.product_id) if args.product_id else ready[0]
if product['status'] != 'ready':
    raise SystemExit('Replay a READY manual so unchanged chunk counts are easy to compare.')


def az(*parts):
    return json.loads(subprocess.check_output(['az', *parts, '--subscription', config['subscription'], '--only-show-errors', '-o', 'json'], text=True))


properties = az('storage', 'blob', 'show', '--account-name', config['stem'] + 'st', '--auth-mode', 'login',
                '--container-name', 'manuals', '--name', product['blobName'])['properties']
key = az('functionapp', 'keys', 'list', '-g', config['group'], '-n', config['stem'] + '-embedder')['systemKeys']['blobs_extension']
endpoint = 'https://' + config['stem'] + '-embedder.azurewebsites.net/runtime/webhooks/blobs?' + urllib.parse.urlencode({
    'functionName': 'Host.Functions.IndexManual', 'code': key})
event = {'id': str(uuid4()), 'eventType': 'Microsoft.Storage.BlobCreated', 'subject': '/blobServices/default/containers/manuals/blobs/' + product['blobName'],
    'eventTime': datetime.now(timezone.utc).isoformat(), 'dataVersion': '',
    'data': {'api': 'PutBlob', 'blobType': 'BlockBlob', 'contentType': 'text/plain', 'contentLength': properties['contentLength'],
             'eTag': properties['etag'], 'url': f'https://{config["stem"]}st.blob.core.windows.net/manuals/' + product['blobName'],
             'sequencer': '00000000000000000000000000000001'}}
for _ in range(2):
    request = urllib.request.Request(endpoint, json.dumps([event]).encode(),
                                    {'Content-Type': 'application/json', 'aeg-event-type': 'Notification'})
    with urllib.request.urlopen(request, timeout=30) as response:
        print('Replay accepted: HTTP ' + str(response.status))
print('Now rerun inspect-data.sh: counts and dimensions should be unchanged. The Blob trigger may suppress the duplicate with its receipt; if code runs, its ready/checksum guard also prevents new rows.')
