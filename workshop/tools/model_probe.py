"""Actual Azure identity-based embedding/chat access before expensive AKS."""
import json
from pathlib import Path
import subprocess
import time
import urllib.error
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
config = json.loads((ROOT / '.state/config.json').read_text())
endpoint = f'https://{config["stem"]}-ai.openai.azure.com'
token = json.loads(subprocess.check_output(['az', 'account', 'get-access-token', '--subscription', config['subscription'],
                                          '--resource', 'https://cognitiveservices.azure.com/', '-o', 'json'], text=True))['accessToken']


def call(deployment, operation, data):
    url = endpoint + '/openai/v1/' + operation
    data = {**data, 'model': deployment}
    for attempt in range(36):
        request = urllib.request.Request(url, json.dumps(data).encode(),
                  {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(request, timeout=150) as response:
                return json.load(response)
        except urllib.error.HTTPError as error:
            if error.code in (401, 403, 429, 503) and attempt < 35:
                print(f'Model {deployment}: HTTP {error.code}; waiting for RBAC/quota, attempt {attempt + 1}/36', flush=True)
                time.sleep(5)
            else:
                raise SystemExit(f'Model {deployment} failed with HTTP {error.code}. Check model availability, OpenAI User role, deployment SKU and TPM quota. No AKS resources have been started.') from None
    raise RuntimeError('Model probe deadline exceeded')


embedding = call('embedding', 'embeddings', {'input': ['A fictional lamp outputs 420 lumens.'], 'dimensions': 1536})
assert len(embedding['data'][0]['embedding']) == 1536, 'Embedding dimensions differ from the Flyway schema'
chat = call('chat', 'chat/completions', {'messages': [{'role': 'user', 'content': 'Reply with a short greeting.'}],
              'reasoning_effort': 'low', 'max_completion_tokens': 3000})
assert chat['choices'][0]['message'].get('content'), 'Model returned no answer; inspect model type and completion token budget'
(ROOT / '.state/models-ready.json').write_text(json.dumps({'endpoint': endpoint, 'embeddingDimensions': 1536, 'checked': time.time()}))
print('Actual Azure inference passed: 1536-dimensional embedding and non-empty chat response (wording is not asserted).')
