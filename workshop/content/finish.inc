<div class="start-card"><p><strong>Requires:</strong> all components ready, manuals indexed and one chat worker running.</p></div>
<h2 id="smoke">Run the deployment smoke test</h2>
{{snippet:commands.sh:smoke}}
<p>Checks dependency readiness, uploads Aurora, waits for indexing, submits a temperature question and validates correlation + source evidence. Timeouts: seven minutes for indexing, eight for the reply. Results: <code>workshop/.state/smoke-result.json</code>.</p>
<div class="verification"><strong>Verification:</strong> smoke passes with a non-empty answer and the matching temperature passage/product/manual IDs. Exact model wording is not asserted. <a href="./validation.html">Maintainer validation</a> records which checks actually ran.</div>
<h2 id="diagnose">If something fails</h2>
{{snippet:commands.sh:diagnose}}
<details class="optional"><summary>Troubleshooting by boundary</summary>
<table><thead><tr><th>Symptom</th><th>Check / fix</th></tr></thead><tbody><tr><td>Upload failed</td><td>Products logs and Blob role/endpoint; retry as a new product after fixing</td></tr><tr><td>Manual waiting</td><td>Event filter, webhook and Function discovery; pre-subscription uploads need replay/new product</td></tr><tr><td>Indexing failed</td><td>Manual-ID traces, model identity/quota/dimensions and private DB access</td></tr><tr><td>Question queued</td><td>Outbox, queue and worker logs; check sender/receiver roles and the worker readiness probe</td></tr><tr><td>Question processing/failed</td><td>Worker request-ID logs, model throttling, lock renewal and deadline</td></tr><tr><td>Wrong evidence</td><td>Product filter, stored chunks, retrieval count and prompt</td></tr></tbody></table>
<p>Function logs: {{file:infra/function-logs.kql}} in Application Insights. Failure stores are separate: Event Grid's <code>event-deadletters</code> blobs, Function host's <code>webjobs-blobtrigger-poison</code>, and Service Bus <code>$DeadLetterQueue</code>. Do not dump webhook destination URLs; they contain a system key.</p>
</details>
<h2 id="cleanup">Clean up</h2>
{{snippet:commands.sh:cleanup}}
<p>The tool verifies the tagged workshop group, lists resources and requires <code>DELETE</code> plus its full name. After submission, run the printed <code>az group exists</code> check until false; confirm AKS's managed node group is also gone. Deletion may be blocked by locks/policy.</p>
<details class="optional" id="retention"><summary>Soft delete and local cleanup</summary><p>Key Vault has seven-day soft-delete retention; App Configuration one day. No purge is performed, so names may remain reserved. Provider registrations remain. Remove local <code>workshop/.state</code> only after Azure cleanup is confirmed.</p></details>
<h2 id="recap">You have exercised</h2>
<p>Docker/ACR, AKS manifests/probes/rollouts, Flyway + pgvector, Blob/Event Grid/Functions, Service Bus request/reply, identity/configuration/secrets, and grounded RAG.</p>
<p>For your first run: <a href="./maintainer.html">walkthrough checklist</a>. For production changes, indexing or additional exam coverage: <a href="./reference.html">reference notes</a>.</p>
