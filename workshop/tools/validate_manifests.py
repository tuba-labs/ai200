"""Render fixtures and validate KEDA resources against official pinned CRDs.

Standard resources are additionally checked by kubeconform (see README).
This is structural validation, not live-cluster admission or Azure verification.
"""
import json
from pathlib import Path
import urllib.request

import jsonschema
import yaml
from render_manifests import render, ROOT

values = {'PRODUCTS_CLIENT_ID':'11111111-1111-1111-1111-111111111111',
          'CHAT_CLIENT_ID':'22222222-2222-2222-2222-222222222222',
          'KEDA_CLIENT_ID':'33333333-3333-3333-3333-333333333333',
          'APP_CONFIG_ENDPOINT':'https://fixture.azconfig.io', 'ACR_HOST':'fixture.azurecr.io',
          'IMAGE_TAG':'w1-fixture', 'ALLOWED_CIDR':'198.51.100.2/32', 'SERVICEBUS_NAME':'fixture-bus'}
output = ROOT / '.tools/rendered.yaml'
output.parent.mkdir(exist_ok=True)
text = '\n---\n'.join(render(path.read_text(), values) for path in sorted((ROOT / 'k8s').glob('*.yaml')))
output.write_text(text)
resources = list(yaml.safe_load_all(text))
for kind, plural in [('ScaledObject','scaledobjects'), ('TriggerAuthentication','triggerauthentications')]:
    crd_file = ROOT / f'.tools/keda-{plural}-2.18.2.yaml'
    if not crd_file.exists():
        url = f'https://raw.githubusercontent.com/kedacore/keda/v2.18.2/config/crd/bases/keda.sh_{plural}.yaml'
        urllib.request.urlretrieve(url, crd_file)
    crd = yaml.safe_load(crd_file.read_text())
    schema = next(version for version in crd['spec']['versions'] if version['name'] == 'v1alpha1')['schema']['openAPIV3Schema']
    for resource in resources:
        if resource.get('kind') == kind:
            jsonschema.Draft7Validator(schema).validate(resource)
            print(f'{kind}: official KEDA 2.18.2 CRD structure validated')
print(f'{len(resources)} manifest resources rendered to {output}; now validate standard resources with kubeconform.')
