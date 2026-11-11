<div class="start-card"><p><strong>Requires:</strong> stages 03–05 pass; images are in ACR.</p></div>
<h2 id="manifests">Read the manifests</h2>
<ul><li>{{file:k8s/products.yaml}}: Deployment keeps one Java Pod running; service account + Pod labels enable identity. Startup permits initialization; readiness checks the database; liveness checks the process.</li><li>{{file:k8s/service.yaml}}: LoadBalancer Service selects ready Products Pods and forwards 443 → 8443. Access is restricted to your public IPv4 /32.</li></ul>
<h2 id="apply">Deploy and sign in</h2>
{{snippet:commands.sh:products}}
<p>The stage creates the Service, waits for an IP, installs a TLS Secret and deploys Products. Open the printed URL; username <code>participant</code>, password from <code>bash workshop/scripts/credentials.sh</code> in your terminal.</p>
<p><strong>TLS:</strong> the two-day certificate is self-signed. Compare the printed SHA-256 fingerprint before accepting the browser warning. CLI tools trust <code>workshop/.state/tls.crt</code>.</p>
<h2 id="observe">Inspect and restart</h2>
{{snippet:commands.sh:inspect-rollout}}
<p>Find one ready Pod, the load-balancer IP, Flyway startup/validation and probe settings. The restart replaces the Pod and reuses the database schema.</p>
<div class="verification" id="upload-state"><strong>Verification:</strong> sign in and open both upload/chat views; the restarted deployment becomes Ready. <strong>Wait until the next chapter's Function subscription is ready before uploading.</strong> Earlier BlobCreated events are not replayed automatically.</div>
<details class="optional"><summary>Troubleshooting</summary><ul><li><strong>ImagePullBackOff:</strong> describe the Pod; verify the pushed tag and kubelet AcrPull role.</li><li><strong>CrashLoopBackOff:</strong> inspect <code>kubectl logs -n products deployment/products --previous</code>; check settings, vault and private DB access.</li><li><strong>Endpoint blocked:</strong> check VPN/public IP against <code>allowedCidr</code>; update the exact /32 and rerun stage 06.</li><li><strong>Expired certificate:</strong> rerun stage 06, restart Products and check the new fingerprint.</li><li><strong>Write API 403:</strong> use the UI or obtain CSRF/session state from <code>/api/csrf</code>, as the supplied clients do.</li></ul></details>
