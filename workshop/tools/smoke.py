"""Real deployment smoke test: no fixed LLM wording assertions."""
import argparse
import json
from pathlib import Path
import subprocess
import sys
import time

from deployment_client import ProductsClient, ROOT


def wait(label, read, done, timeout):
    end = time.monotonic() + timeout
    while time.monotonic() < end:
        value = read()
        print(label + ': ' + value['status'], flush=True)
        if value['status'] == 'failed':
            raise RuntimeError(label + ' failed: ' + str(value.get('error')))
        if done(value):
            return value
        time.sleep(3)
    raise TimeoutError(label + f' exceeded {timeout}s. Check Event Grid/poison queue for indexing; KEDA, request/reply queues and worker logs for chat.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--skip-readiness', action='store_true', help='Only for a repeated smoke after a separate diagnostics check')
    args = parser.parse_args()
    if not args.skip_readiness:
        subprocess.run(['bash', str(ROOT / 'scripts/diagnostics.sh'), '--check'], check=True)
    client = ProductsClient()
    health = client.get('/actuator/health/readiness')
    if health['status'] != 'UP':
        raise RuntimeError('Products database readiness is not UP')
    manual = ROOT / 'samples/aurora-trail-lamp.txt'
    product = client.upload(manual, 'Aurora Trail Lamp · smoke ' + time.strftime('%H:%M:%S'))
    print('Uploaded immutable manual ' + product['manualId'])
    product = wait('Indexing', lambda: client.get('/api/products/' + product['id']), lambda x: x['status'] == 'ready', 420)
    question = client.ask('What is the operating temperature of the Aurora Trail Lamp?', product['id'])
    print('Request ' + question['id'] + ' · correlation ' + question['correlationId'])
    result = wait('Chat', lambda: client.get('/api/questions/' + question['id']), lambda x: x['status'] == 'completed', 480)
    if result['correlationId'] != question['correlationId'] or not result.get('answer', '').strip():
        raise RuntimeError('Answer is empty or correlation differs from the submitted request')
    supporting = [source for source in result['sources'] if source['productId'] == product['id']
                  and source['manualId'] == product['manualId'] and '-10 to 40' in source['excerpt']]
    if not supporting:
        raise RuntimeError('No supporting temperature passage in the returned sources. Inspect chunk size, retrieval count and model instructions.')
    report = {'manualId': product['manualId'], 'requestId': result['id'], 'correlationId': result['correlationId'],
              'status': result['status'], 'supportingReferences': len(supporting), 'checkedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())}
    (ROOT / '.state/smoke-result.json').write_text(json.dumps(report, indent=2) + '\n')
    print('PASS: real upload → Event Grid/Function indexing → Service Bus/KEDA worker → persisted correlated answer with relevant manual references.')
    print('This checks evidence presence, not exact LLM wording or general factual accuracy.')


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print(f'SMOKE FAILED: {type(error).__name__}: {error}', file=sys.stderr)
        print('Run bash workshop/scripts/diagnostics.sh and inspect the printed request/manual IDs. No credentials are written to the report.', file=sys.stderr)
        raise SystemExit(1)
