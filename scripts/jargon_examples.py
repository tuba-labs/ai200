"""Small, concrete examples shared by term cards, popovers and the glossary."""

EXAMPLES = {
    'bicep': {
        'terms': ['bicep', 'infrastructure-as-code'],
        'language': 'Bicep',
        'filename': 'main.bicep',
        'summary': 'Declares an Azure Storage account and returns its resource ID.',
        'code': """param location string = resourceGroup().location
param storageName string = concat('study', uniqueString(resourceGroup().id))

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageName
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
  properties: {
    supportsHttpsTrafficOnly: true
    allowBlobPublicAccess: false
    minimumTlsVersion: 'TLS1_2'
  }
}

output storageId string = storage.id
""",
        'notes': [
            'param declares inputs. The defaults use the resource group’s location and a name derived from its ID.',
            'resource declares the Azure resource type, API version and configuration. Standard_LRS selects standard locally redundant storage.',
            'The properties require HTTPS and disable anonymous blob access. output exposes the created resource ID.',
        ],
    },
    'kubernetes-manifest': {
        'terms': ['kubernetes-manifest', 'kubernetes-deployment'],
        'language': 'YAML · Kubernetes',
        'filename': 'deployment.yaml',
        'summary': 'Describes a Kubernetes Deployment with two web-server pods.',
        'code': """apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-web
spec:
  replicas: 2
  selector:
    matchLabels:
      app: hello-web
  template:
    metadata:
      labels:
        app: hello-web
    spec:
      containers:
        - name: web
          image: nginx:stable-alpine
          ports:
            - containerPort: 80
          resources:
            requests:
              cpu: "100m"
              memory: "64Mi"
            limits:
              cpu: "250m"
              memory: "128Mi"
""",
        'notes': [
            'apiVersion and kind identify the Kubernetes resource. metadata.name gives the Deployment its name.',
            'replicas: 2 requests two pods. The selector matches the labels in the pod template.',
            'The container runs nginx on port 80. Its requests reserve 0.1 CPU core and 64 MiB; the limits cap CPU at 0.25 core and memory at 128 MiB.',
        ],
    },
    'dockerfile': {
        'terms': ['dockerfile'],
        'language': 'Dockerfile',
        'filename': 'Dockerfile',
        'summary': 'Builds an image that starts Python’s built-in HTTP server.',
        'code': """FROM python:3.12-slim
WORKDIR /app
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000", "--bind", "0.0.0.0"]
""",
        'notes': [
            'FROM selects the base image containing Python. WORKDIR sets the working directory inside the image.',
            'CMD starts the server when a container starts. Python serves the contents of /app.',
            'EXPOSE documents the container port; publishing that port to the host is a separate runtime setting.',
        ],
    },
    'github-actions': {
        'terms': ['github-actions', 'ci'],
        'language': 'YAML · GitHub Actions',
        'filename': 'check-python.yml',
        'summary': 'A continuous integration workflow that checks Python syntax on a push or a manual run.',
        'code': """name: Check Python
on: [push, workflow_dispatch]
jobs:
  syntax:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: actions/setup-python@v6
        with:
          python-version: '3.12'
      - name: Check Python syntax
        run: python -m compileall -q .
""",
        'notes': [
            'Save the workflow under .github/workflows/ in a repository. on chooses the events that start it.',
            'The job checks out the repository and selects Python 3.12 on a hosted Linux runner.',
            'compileall checks Python syntax. It is a CI check; it does not run application tests or deploy an app.',
        ],
    },
    'json': {
        'terms': ['json'],
        'language': 'JSON',
        'summary': 'An object with a string value and a number. JSON uses quoted property names.',
        'code': '{"service": "orders", "replicas": 2}',
    },
    'local-settings-json': {
        'terms': ['local-settings-json'],
        'language': 'JSON · local.settings.json',
        'inline': True,
        'summary': 'Values supplies local environment variables: select the Python worker, use the local Azurite storage emulator and set APP_MODE. Start Azurite before using UseDevelopmentStorage=true. IsEncrypted: false means these settings are stored unencrypted. In Azure, configure the corresponding app settings instead.',
        'code': """{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "python",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "APP_MODE": "development"
  }
}""",
    },
    'host-json': {
        'terms': ['host-json'],
        'language': 'JSON · host.json',
        'inline': True,
        'summary': 'Sets a two-minute execution timeout and Information-level logging for the Function App. The hosting plan’s timeout limits still apply. version: 2.0 identifies the host.json schema; it does not select the deployed Functions runtime version.',
        'code': """{
  "version": "2.0",
  "functionTimeout": "00:02:00",
  "logging": {
    "logLevel": {
      "default": "Information"
    }
  }
}""",
    },
    'yaml': {
        'terms': ['yaml'],
        'language': 'YAML',
        'summary': 'The same two settings expressed as YAML key/value pairs.',
        'code': 'service: orders\nreplicas: 2',
    },
    'sql': {
        'terms': ['sql'],
        'language': 'SQL',
        'summary': 'Reads id and content from a documents table containing a topic column.',
        'code': "SELECT id, content FROM documents\nWHERE topic = 'Azure';",
    },
    'kql': {
        'terms': ['kql'],
        'language': 'KQL',
        'summary': 'Returns failed requests from the Application Insights workspace table.',
        'code': 'AppRequests\n| where Success == false',
    },
    'powershell': {
        'terms': ['powershell'],
        'language': 'PowerShell',
        'summary': 'Defines a variable and prints “Starting orders”.',
        'code': '$service = "orders"\nWrite-Output "Starting $service"',
    },
    'azure-cli': {
        'terms': ['azure-cli', 'cli'],
        'language': 'Azure CLI',
        'summary': 'Lists resource groups in the selected Azure subscription after signing in.',
        'code': 'az group list --output table',
    },
    'ncrontab': {
        'terms': ['ncrontab'],
        'language': 'Azure Functions NCRONTAB',
        'summary': 'Runs every five minutes at second zero. This six-field format includes seconds; the default time zone is UTC.',
        'code': '0 */5 * * * *',
    },
    'url': {
        'terms': ['url', 'uri'],
        'language': 'URL',
        'summary': 'https is the scheme, example.com the host, /orders the path and id=42 the query.',
        'code': 'https://example.com/orders?id=42',
    },
    'http-request': {
        'terms': ['http', 'http-request'],
        'language': 'HTTP/1.1',
        'summary': 'A request line and Host header asking example.com for /orders.',
        'code': 'GET /orders HTTP/1.1\nHost: example.com\n\n',
    },
    'jsonb': {
        'terms': ['jsonb'],
        'language': 'PostgreSQL',
        'summary': 'Converts a JSON value to JSONB and reads service as text; the result is orders.',
        'code': """SELECT '{"service":"orders"}'::jsonb ->> 'service';""",
    },
    'resource-request': {
        'terms': ['resource-request'],
        'language': 'YAML · container resources fragment',
        'summary': 'Inside a container’s resources.requests block, requests 0.1 CPU core and 64 MiB of memory.',
        'code': 'cpu: "100m"\nmemory: "64Mi"',
    },
    'net': {
        'terms': ['net'],
        'language': 'C# on .NET',
        'summary': 'A line in a C# console program that prints a greeting.',
        'code': 'System.Console.WriteLine("Hello from .NET");',
    },
    'environment-variable': {
        'terms': ['environment-variable'],
        'language': 'PowerShell',
        'summary': 'Sets an environment variable in the current shell process, then reads its value.',
        'code': '$env:APP_MODE = "development"\nWrite-Output $env:APP_MODE',
    },
    'promql': {
        'terms': ['promql'],
        'language': 'PromQL',
        'summary': 'Calculates the average per-second increase of an http_requests_total counter over five minutes.',
        'code': 'rate(http_requests_total[5m])',
    },
}


def inline(example):
    return example.get('inline', False) or len(example['code'].strip().splitlines()) <= 2
