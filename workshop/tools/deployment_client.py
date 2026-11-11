"""Authenticated HTTPS API client. Password stays in process memory only."""
import json
from pathlib import Path
import subprocess

import requests

ROOT = Path(__file__).resolve().parents[1]


class ProductsClient:
    def __init__(self):
        config = json.loads((ROOT / '.state/config.json').read_text())
        self.endpoint = (ROOT / '.state/endpoint.txt').read_text().strip()
        if not self.endpoint.startswith('https://'):
            raise ValueError('Refusing to send workshop credentials over plaintext HTTP')
        password = subprocess.check_output(['az', 'keyvault', 'secret', 'show', '--subscription', config['subscription'],
                    '--vault-name', config['stem'] + '-kv', '--name', 'products-password', '--query', 'value', '-o', 'tsv'], text=True).strip()
        self.session = requests.Session()
        self.session.auth = ('participant', password)
        self.session.verify = str(ROOT / '.state/tls.crt')
        csrf = self.get('/api/csrf')
        self.session.headers[csrf['headerName']] = csrf['token']

    def call(self, method, path, **kwargs):
        response = self.session.request(method, self.endpoint + path, timeout=(10, 30), **kwargs)
        if response.status_code >= 400:
            raise RuntimeError(f'Products HTTP {response.status_code} for {path}. Check sign-in, source CIDR, CSRF and server logs.')
        return response.json()

    def get(self, path):
        return self.call('GET', path)

    def ask(self, question, product=None):
        return self.call('POST', '/api/questions', json={'question': question, 'productId': product})

    def upload(self, path, name):
        with path.open('rb') as manual:
            return self.call('POST', '/api/products', data={'name': name}, files={'manual': (path.name, manual, 'text/plain')})
