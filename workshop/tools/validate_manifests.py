"""Render standard Kubernetes fixtures for strict kubeconform validation.

This is offline validation input, not live admission or Azure verification.
"""
from render_manifests import render, ROOT
import yaml

values = {'PRODUCTS_CLIENT_ID':'11111111-1111-1111-1111-111111111111',
          'CHAT_CLIENT_ID':'22222222-2222-2222-2222-222222222222',
          'APP_CONFIG_ENDPOINT':'https://fixture.azconfig.io', 'ACR_HOST':'fixture.azurecr.io',
          'IMAGE_TAG':'w1-fixture', 'ALLOWED_CIDR':'198.51.100.2/32'}
output = ROOT / '.tools/rendered.yaml'
output.parent.mkdir(exist_ok=True)
text = '\n---\n'.join(render(path.read_text(), values) for path in sorted((ROOT / 'k8s').glob('*.yaml')))
output.write_text(text)
resources = list(yaml.safe_load_all(text))
print(f'{len(resources)} standard Kubernetes resources rendered to {output}; validate with kubeconform.')
