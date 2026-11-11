"""Register the Blob-extension webhook without logging/persisting its key."""
import json
import os
from pathlib import Path
import subprocess
import tempfile
import time
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
config = json.loads((ROOT / '.state/config.json').read_text())
stem, group, subscription = config['stem'], config['group'], config['subscription']


def az(*args, capture=True):
    return subprocess.run(['az', *args, '--subscription', subscription, '--only-show-errors', '-o', 'json'],
                          capture_output=capture, text=True, check=True)


key = None
for attempt in range(60):
    try:
        keys = json.loads(az('functionapp', 'keys', 'list', '-g', group, '-n', stem + '-embedder').stdout)
        key = keys.get('systemKeys', {}).get('blobs_extension')
        if key:
            break
    except subprocess.CalledProcessError:
        pass
    print('Waiting for Functions Blob extension and host storage identity (bounded 5-minute check)', flush=True)
    time.sleep(5)
if not key:
    raise SystemExit('No blobs_extension system key. Check Function deployment, Storage Blob Data Owner/Queue Contributor/Account Contributor, host settings, and app startup logs.')
topic = json.loads(az('eventgrid', 'system-topic', 'show', '-g', group, '-n', stem + '-events').stdout)
url = 'https://' + stem + '-embedder.azurewebsites.net/runtime/webhooks/blobs?' + urllib.parse.urlencode({
    'functionName': 'Host.Functions.IndexManual', 'code': key})
storage_id = f'/subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Storage/storageAccounts/{stem}st'
body = {'properties': {
    'destination': {'endpointType': 'WebHook', 'properties': {'endpointUrl': url}},
    'filter': {'subjectBeginsWith': '/blobServices/default/containers/manuals/blobs/products/',
               'subjectEndsWith': '.txt', 'includedEventTypes': ['Microsoft.Storage.BlobCreated']},
    'eventDeliverySchema': 'EventGridSchema',
    'retryPolicy': {'maxDeliveryAttempts': 10, 'eventTimeToLiveInMinutes': 1440},
    'deadLetterWithResourceIdentity': {'identity': {'type': 'SystemAssigned'}, 'deadLetterDestination': {
        'endpointType': 'StorageBlob', 'properties': {'resourceId': storage_id, 'blobContainerName': 'event-deadletters'}}},
}}
handle, filename = tempfile.mkstemp(dir=ROOT / '.state', prefix='event-webhook-', suffix='.json')
try:
    with os.fdopen(handle, 'w') as file:
        json.dump(body, file)
    os.chmod(filename, 0o600)
    target = 'https://management.azure.com' + topic['id'] + '/eventSubscriptions/manual-created?api-version=2022-06-15'
    result = az('rest', '--method', 'put', '--url', target, '--body', '@' + filename)
    value = json.loads(result.stdout)
    print('Event subscription: ' + value['properties']['provisioningState'] + '. Webhook key was not logged.')
finally:
    Path(filename).unlink(missing_ok=True)
