"""Bounded KEDA load: at most twelve new questions; no open-ended producer."""
import argparse
import json
import time

from deployment_client import ProductsClient, ROOT

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--count', type=int, default=8, choices=range(1, 13))
args = parser.parse_args()
client = ProductsClient()
products = [product for product in client.get('/api/products') if product['status'] == 'ready']
if not products:
    raise SystemExit('Upload and index a supplied manual first.')
product = next((p for p in products if 'Aurora' in p['name']), products[0])
questions = [client.ask('Summarize the operating limits and safe usage instructions for this product.', product['id']) for _ in range(args.count)]
print(f'Created {len(questions)} persistent requests. Each may make one embedding and one chat call.', flush=True)
end = time.monotonic() + 600
pending = {question['id'] for question in questions}
while pending and time.monotonic() < end:
    for identifier in list(pending):
        result = client.get('/api/questions/' + identifier)
        if result['status'] in ('completed', 'failed'):
            print(identifier + ': ' + result['status'], flush=True)
            if result['status'] == 'failed':
                raise SystemExit('Load request failed: ' + str(result['error']))
            pending.remove(identifier)
    time.sleep(3)
if pending:
    raise SystemExit('Load deadline exceeded. Inspect request queue, worker logs, KEDA conditions and model throttling.')
(ROOT / '.state/load-result.json').write_text(json.dumps({'count': len(questions), 'requestIds': [q['id'] for q in questions]}))
print('All bounded load questions completed. Continue watching until workers return to zero.')
