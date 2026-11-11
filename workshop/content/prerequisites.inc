<h2 id="before-you-begin">Required before the workshop</h2>
<ul><li><strong>Account:</strong> an active Azure subscription with billing/credits. Plan roughly US$5–15 for a 3½-hour run and prompt cleanup; see <a href="./reference.html#costs">cost assumptions</a>.</li><li><strong>Permissions:</strong> subscription Owner, or Contributor + Role Based Access Control Administrator. Organizational policy can still restrict deployments.</li><li><strong>Capacity:</strong> regional services, eight free vCPUs for the selected VM family/region (node + upgrade surge), and chat/embedding model quota. The checker verifies these; actual model access is tested before AKS creation.</li><li><strong>Computer:</strong> package-download access and a Linux-container Docker engine. Windows setup below targets x64 Windows 11 with virtualization/admin access; recommend 16 GB RAM and 30 GB free disk.</li></ul>
<h2 id="tools">Local tools</h2>
<p>Run workshop commands in <strong>Bash from the repository root</strong>. Windows tools installed outside WSL do not replace Linux tools.</p>
<table><thead><tr><th>Tool</th><th>Baseline</th></tr></thead><tbody><tr><td>Azure CLI / Bicep</td><td>CLI 2.91+ / Bicep 0.49.2</td></tr><tr><td>Docker</td><td>Engine 24+ with BuildKit; running in Linux-container mode</td></tr><tr><td>Java / Python</td><td>Java 21; Python 3.12+ with venv/pip</td></tr><tr><td>kubectl</td><td>Installer uses 1.34.1; stay within one minor of AKS</td></tr><tr><td>Utilities</td><td>Bash 4+, Git, jq 1.6+, curl, OpenSSL 3, zip/unzip</td></tr></tbody></table>
<p>No existing AKS cluster, local PostgreSQL, Helm or Functions host is needed.</p>
<h2 id="windows-setup">Setup downloads</h2>
<p><a href="./scripts/setup-windows.ps1" download="setup-windows.ps1">Windows setup (.ps1)</a> · <a href="./scripts/setup-ubuntu.sh" download="setup-ubuntu.sh">Ubuntu tools (.sh)</a>. Windows uses Docker Desktop + WSL2; native Linux can use Docker Engine. These scripts install local software only.</p>
<details class="optional"><summary>Windows / Ubuntu installation steps</summary>
<ol><li>Review {{file:scripts/setup-windows.ps1}}. In Administrator PowerShell, open its download folder and run below. Add <code>-WhatIf</code> to preview. Install <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget/">App Installer</a> if WinGet is missing.</li></ol>
{{snippet:scripts/setup-windows.ps1:run}}
<ol start="2"><li>Restart if requested, then rerun. Open Ubuntu 24.04 and create its Linux user. <code>wsl --list --verbose</code> should show version 2.</li><li>Start Docker Desktop; choose WSL2/Linux containers and enable <strong>Settings → Resources → WSL Integration → Ubuntu-24.04</strong>. Review <a href="https://docs.docker.com/desktop/setup/install/windows-install/">Docker's license requirements</a>; WinGet accepts package/source agreements.</li><li>Copy/extract the repository into Ubuntu, e.g. <code>~/ai200</code>. In that repository root, run:</li></ol>
{{snippet:commands.sh:setup-ubuntu}}
<p>The Ubuntu script installs the listed tools and <code>workshop/.tools/venv</code>. No second Docker daemon is installed. See {{file:scripts/setup-ubuntu.sh}} or the <a href="./reference.html#sources">official installation links</a> for other systems.</p>
</details>
<p>Already set up? Check local tools without Azure sign-in:</p>
{{snippet:commands.sh:local-check}}
<h2 id="bootstrap">Sign in and check Azure</h2>
<p>Clone the three application repos into sibling folders (or set <code>AI200_APPS_DIR</code> to their parent). Existing checkouts are preserved:</p>
{{snippet:commands.sh:get-apps}}
<p>Run <code>az login</code>, deliberately select your development subscription with <code>az account set --subscription SUBSCRIPTION_ID</code>, then confirm <code>az account show</code>.</p>
{{snippet:commands.sh:bootstrap}}
<p>Review <code>workshop/.state/config.json</code>. Use a distinct <code>--prefix</code> per participant in a shared subscription, before provisioning.</p>
<details class="optional" id="bootstrap-settings"><summary>Bootstrap defaults and overrides</summary><p>Bootstrap saves non-secret config in <code>workshop/.state/config.json</code>: Sweden Central, prefix <code>raglab</code>, selected subscription and your public IPv4 /32. Review it. Shared subscription? Give each participant a different <code>--prefix</code>. Other overrides: {{file:tools/bootstrap.py}}.</p></details>
<details class="optional" id="permissions"><summary>Checker failures and provider registration</summary>
<p>If providers are unregistered, register them and rerun the checks:</p>
{{snippet:commands.sh:providers}}
<ul><li><strong>Missing quota/model offers:</strong> register providers first; empty API results do not prove capacity. Check Subscription → Usage + quotas or change region.</li><li><strong>Permission denied:</strong> obtain the subscription roles listed above; check deny policies.</li><li><strong>Docker unavailable:</strong> start Desktop and enable Ubuntu integration.</li><li><strong>Java mismatch:</strong> select Java 21 through <code>JAVA_HOME</code>/<code>PATH</code> in Bash.</li></ul>
<p>Keep the same prefix/subscription after provisioning; change a colliding name before creation. If your VPN/public IP changes, update the exact allowed /32.</p>
</details>
<h2 id="local-tools">Prepare verification tools</h2>
{{snippet:commands.sh:tools}}
<p>Resume this environment with <code>source workshop/.tools/venv/bin/activate</code>.</p>
<div class="verification" id="verify"><strong>Verification:</strong> the full checker reports "All read-only gates passed." No paid resources have been created. Continue to provisioning.</div>
