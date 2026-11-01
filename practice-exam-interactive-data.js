/* Independently authored exercises. Reference links explain the tested behavior. */
(function () {
  'use strict';
  const learn = 'https://learn.microsoft.com/en-us/';
  const options = values => values.map(([id, text]) => ({id, text}));
  const slot = (id, label, values) => ({id, label, ...(values ? {options: options(values)} : {})});
  const question = (id, domain, service, type, reference, details) => ({
    id, domain, service, type, contextId: null, instructions: [], tags: ['Original practice'],
    sourceUrl: reference.startsWith('https://') ? reference : learn + reference,
    setUrl: reference.startsWith('https://') ? reference : learn + reference, ...details,
  });
  window.AI200_INTERACTIVE_BANK = {
    schemaVersion: 1, bankId: 'ai200-interactive-v1',
    source: {kind: 'original', name: 'AI-200 Study group', filterLabel: 'Original practice',
      url: learn + 'credentials/certifications/azure-ai-cloud-developer/',
      attribution: 'Original exercises written for this study site; technical references: Microsoft Learn.'},
    contexts: [], questions: [
      question('i-aks-order', 1, 'AKS · deployment recovery', 'order', 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment', {
        prompt: 'A new image makes the API deployment unhealthy. The previous revision is known to work. Follow the recovery runbook: inspect the saved revisions, restore the last working revision, wait for recovery, and only then test the API. Arrange the commands.',
        options: options([['test', 'Send a request to the API endpoint and verify the response.'],
          ['wait', 'kubectl rollout status deployment/api'], ['undo', 'kubectl rollout undo deployment/api'],
          ['history', 'kubectl rollout history deployment/api']]),
        correctAnswers: ['history', 'undo', 'wait', 'test'],
        explanation: 'History identifies the retained revisions. Undo restores the previous pod template. Rollout status waits for that recovery before the endpoint check. The runbook requires testing after the rollout completes.',
      }),
      question('i-aks-match', 1, 'AKS · container probes', 'match', 'https://kubernetes.io/docs/concepts/workloads/pods/probes/', {
        prompt: 'One container needs three separate health signals. Match the Kubernetes probe to each desired behavior. Reuse is allowed.',
        reuse: true, options: options([['ready', 'Readiness probe'], ['live', 'Liveness probe'], ['start', 'Startup probe']]),
        slots: [slot('boot', 'Allow a lengthy initialization before liveness checks begin.'),
          slot('traffic', 'Temporarily stop sending Service traffic to this container.'),
          slot('restart', 'Restart a container that remains deadlocked after initialization.'),
          slot('maintenance', 'Keep the process running but remove it from ready endpoints during maintenance.')],
        correctAnswers: ['start', 'ready', 'live', 'ready'],
        explanation: 'A startup probe gates liveness and readiness checks during initialization. A failed readiness check removes the Pod from ready Service endpoints without restarting it. A failed liveness check can restart the container.',
      }),
      question('i-pg-order', 2, 'PostgreSQL · vector table setup', 'order', 'azure/postgresql/extensions/how-to-use-pgvector', {
        prompt: 'The vector extension is already allowlisted on your server, but is not installed in this database. A new table must contain a vector(3) column. Follow a runbook that bulk-loads its data before building the HNSW index, then tests that index. Arrange the four actions.',
        options: options([['load', 'Insert the supplied three-dimensional embeddings into the new table.'],
          ['index', 'Create an HNSW index on the populated embedding column, then run the test query.'],
          ['extension', 'Run CREATE EXTENSION vector in the target database.'],
          ['table', 'Create the new table with an embedding vector(3) column.']]),
        correctAnswers: ['extension', 'table', 'load', 'index'],
        explanation: 'The vector type must be installed before it can be used in a table. The table must exist before rows can be inserted. This runbook explicitly postpones index construction and testing until after the initial load; PostgreSQL also permits creating an index before loading data.',
      }),
      question('i-pg-code', 2, 'PostgreSQL · safe Python queries', 'dropdown', 'azure/postgresql/connectivity/connect-python', {
        prompt: 'A psycopg connection is already open. Complete this lookup so that an untrusted customer code is passed as a value, rather than inserted into SQL text. The query returns the matching row, if any.',
        code: ['with conn.cursor() as cur:', '    cur.execute("SELECT id FROM customers WHERE code = {{placeholder}}", {{arguments}})', '    row = cur.{{fetch}}()'],
        slots: [slot('placeholder', 'SQL value placeholder', [['literal', "'{customer_code}'"], ['bound', '%s'], ['format', '{customer_code}']]),
          slot('arguments', 'Parameter argument', [['tuple', '(customer_code,)'], ['text', 'customer_code'], ['none', 'None']]),
          slot('fetch', 'Read one result row', [['all', 'fetchall'], ['one', 'fetchone'], ['execute', 'execute']])],
        correctAnswers: ['bound', 'tuple', 'one'],
        explanation: 'Psycopg uses an unquoted %s placeholder for a value and receives the values separately. A one-element Python tuple needs its trailing comma. fetchone returns one row (or None); it does not execute another statement.',
      }),
      question('i-sb-match', 3, 'Service Bus · message settlement', 'match', 'azure/service-bus-messaging/message-transfers-locks-settlement', {
        prompt: 'An application receives messages in PeekLock mode. Match each processing outcome to the settlement action. Use each action at most once.',
        reuse: false, options: options([['defer', 'Defer'], ['complete', 'Complete'], ['dead', 'Dead-letter'], ['abandon', 'Abandon']]),
        slots: [slot('ok', 'The business update succeeded; remove the message.'),
          slot('retry', 'A temporary dependency failure occurred; release the lock for redelivery.'),
          slot('later', 'A prerequisite message is missing; retain this message for explicit retrieval by sequence number.'),
          slot('invalid', 'The payload is unusable; move it to the dead-letter subqueue with a reason.')],
        correctAnswers: ['complete', 'abandon', 'defer', 'dead'],
        explanation: 'Complete removes a successfully processed message. Abandon releases its lock for another delivery. Defer retains it for later retrieval using its sequence number. Dead-letter isolates an unprocessable message for investigation.',
      }),
      question('i-fn-code', 3, 'Azure Functions · Python HTTP trigger', 'dropdown', 'azure/azure-functions/functions-reference-python', {
        prompt: 'Complete a Python v2 function that accepts only POST requests at /api/inspect, requires a function key, and returns the submitted JSON as JSON. The default route prefix is unchanged.',
        code: ['import json', 'import azure.functions as func', '', 'app = func.FunctionApp()', '@app.route(route="inspect", methods=["{{method}}"],', '           auth_level=func.AuthLevel.{{auth}})', 'def inspect(req: func.HttpRequest) -> func.HttpResponse:', '    payload = req.get_json()', '    return func.HttpResponse(json.dumps(payload), mimetype="{{mime}}")'],
        slots: [slot('method', 'HTTP method', [['get', 'GET'], ['post', 'POST'], ['put', 'PUT']]),
          slot('auth', 'Authorization level', [['anon', 'ANONYMOUS'], ['function', 'FUNCTION'], ['admin', 'ADMIN']]),
          slot('mime', 'Response MIME type', [['json', 'application/json'], ['html', 'text/html'], ['text', 'text/plain']])],
        correctAnswers: ['post', 'function', 'json'],
        explanation: 'The route decorator defines the allowed methods and key requirement. FUNCTION requires a function or host key; ANONYMOUS would allow callers without a key and ADMIN requires the master key. The serialized response is JSON, so application/json is its media type.',
      }),
      question('i-kql-code', 4, 'KQL · latest deployment per service', 'dropdown', 'kusto/query/arg-max-aggregation-function', {
        prompt: 'Deployments has columns Service, Version and TimeGenerated. Each service has a unique latest timestamp. Complete the KQL query to return the Version from that latest row for each Service, with only Service and Version in the output.',
        code: ['Deployments', '| summarize {{aggregate}}(TimeGenerated, Version) by Service', '| {{output}} Service, Version'],
        slots: [slot('aggregate', 'Latest row aggregation', [['max', 'max'], ['argmax', 'arg_max'], ['count', 'count']]),
          slot('output', 'Select output columns', [['extend', 'extend'], ['project', 'project'], ['where', 'where']])],
        correctAnswers: ['argmax', 'project'],
        explanation: 'arg_max selects the row with the greatest timestamp and returns its Version, within each Service group. max would return only the maximum scalar value. project restricts output to the named columns.',
      }),
      question('i-monitor-match', 4, 'Application Insights · workspace tables', 'match', 'azure/azure-monitor/app/data-model-complete', {
        prompt: 'Your Application Insights resource uses workspace-based tables. Match each diagnostic question to the table containing the relevant telemetry. Use each table at most once.',
        reuse: false, options: options([['trace', 'AppTraces'], ['request', 'AppRequests'], ['exception', 'AppExceptions'], ['dependency', 'AppDependencies']]),
        slots: [slot('incoming', 'How long did incoming API requests take?'), slot('outgoing', 'Which outgoing database calls failed?'),
          slot('errors', 'Which exception types and stack traces were recorded?'), slot('messages', 'What diagnostic log messages did the application emit?')],
        correctAnswers: ['request', 'dependency', 'exception', 'trace'],
        explanation: 'Requests describe incoming operations. Dependencies describe outgoing calls. Exceptions store exception details. Traces contain diagnostic log messages. The workspace table names differ from the older requests, dependencies, exceptions and traces names.',
      }),
      question('i-kql-order', 4, 'KQL · calculated-column pipeline', 'order', 'kusto/query/extend-operator', {
        prompt: 'LatencySamples contains DurationMs. Build a KQL pipeline that derives Seconds, calculates its mean, and finally outputs only that mean as MeanSeconds. Each supplied line depends on columns produced by the preceding line.',
        options: options([['project', '| project MeanSeconds = AverageSeconds'], ['summarize', '| summarize AverageSeconds = avg(Seconds)'],
          ['table', 'LatencySamples'], ['extend', '| extend Seconds = DurationMs / 1000.0']]),
        correctAnswers: ['table', 'extend', 'summarize', 'project'],
        explanation: 'Start with the source table. extend creates Seconds, which summarize then aggregates into AverageSeconds. project can only rename that aggregate after it has been produced. This dependency makes the sequence unambiguous.',
      }),
    ],
  };
})();
