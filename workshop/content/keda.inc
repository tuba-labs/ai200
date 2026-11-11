<div class="start-card"><p><strong>Requires:</strong> chat works, demo tools are installed and all manuals are ready.</p></div>
<h2 id="configure">Enable queue-driven scaling</h2>
{{snippet:commands.sh:keda}}
<p>{{file:k8s/keda.yaml}} scales only ProductsChat: <strong>0–3 replicas</strong>, two active messages per worker, 10-second polling, 60-second cooldown. KEDA reads metrics; workers process messages. Its scaler uses a separate identity.</p>
<p>The demo temporarily adds a <strong>20-second delay per request</strong> to make backlog visible. Normal operation has no delay.</p>
<h2 id="observe">Terminal A: observe</h2>
{{snippet:commands.sh:observe}}
<p>Wait for chat to reach zero; Products stays at one. The observer shows replicas and active/dead-letter counts for up to eight minutes.</p>
<h2 id="load">Terminal B: send eight questions</h2>
{{snippet:commands.sh:load}}
<p>This submits eight persistent questions and waits for their answers (hard maximum twelve). Each normally incurs one embedding + one chat call.</p>
<p><strong>Observe:</strong> idle 0 → queued messages → worker starts → more than one worker → completed answers → cooldown back to 0. Management metrics can lag; record actual replicas/timing.</p>
<h2 id="threshold">Compare threshold 4, then reset</h2>
<p>After the first cycle returns to idle:</p>
{{snippet:commands.sh:threshold}}
<p>Targeting four messages per worker should scale less aggressively under similar backlog. The final command restores normal settings and disables the delay.</p>
<div class="verification"><strong>Verification:</strong> both cycles complete, the first exceeds one worker, no new dead letters, and chat returns to zero. Products stays at one; demo delay is off.</div>
<details class="optional" id="capacity"><summary>What affects scaling?</summary><p>Queue depth drives desired replicas; worker concurrency is one and prefetch zero. Model quota can throttle extra workers. Polling, cold starts, cooldown and HPA stabilization affect timing.</p><p>The single D4ds_v5 node has four vCPUs/16 GiB before reservations. Products requests 500m/768 MiB; each worker 250m/384 MiB. Maximum three workers fits without node autoscaling.</p></details>
<details class="optional"><summary>Troubleshooting</summary><ul><li><strong>ScaledObject not Ready / 403:</strong> inspect its conditions and <code>kube-system/keda-operator</code> logs; check the scaler's federation/Receiver role, not only the worker's.</li><li><strong>Only one worker:</strong> confirm delay=20, threshold=2 and prefetch=0; inspect HPA metrics. Repeat bounded load only after diagnosis.</li><li><strong>Never zero:</strong> check backlog, cooldown/stabilization and competing manual scaling.</li><li><strong>Pending / model 429:</strong> inspect Pod capacity or reduce max replicas/load; more replicas cannot overcome model quota.</li></ul></details>
