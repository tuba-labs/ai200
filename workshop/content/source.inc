<p>Application source: {{repo:products}}, {{repo:embedder}}, {{repo:chat}}. This explorer contains only the workshop's infrastructure, scripts, samples and verification tools.</p>
<label for="source-select">Choose a source file</label><select id="source-select" class="source-select" aria-label="Source file"></select>
<h2 id="source-heading">Loading source files…</h2>
<div class="code-block"><div class="code-toolbar"><span>Canonical repository source</span><button type="button" class="copy-button" data-copy aria-label="Copy source file">Copy</button></div><pre><code id="source-code" data-language="text">Serve this website over HTTP to load the source explorer.</code></pre></div>
<p><a id="source-download" href="./README.md" download>Download this file</a>. For a complete working tree use the repository checkout, not separate browser downloads of dependencies.</p>
<h2 id="layout">Where to look</h2>
<ul><li><code>infra</code>, <code>scripts</code>, <code>k8s</code>: staged resources, commands and manifests.</li><li><code>samples</code>, <code>contracts</code>, <code>tools</code>, <code>tests</code>: manuals, message schemas and verification.</li><li><code>repositories.json</code>: application URLs, folder names and pinned revisions.</li></ul>
