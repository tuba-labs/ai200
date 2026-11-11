<div class="start-card"><p><strong>Requires:</strong> stage 02 submitted, ACR created and Docker running. Azure can still be provisioning.</p></div>
<h2 id="read">Read the application</h2>
<ul><li>{{file:apps/products/src/main/java/org/tubalabs/products/ProductsController.java}}: validate UTF-8 .txt, commit product/manual IDs, upload the private blob.</li><li>{{file:apps/products/src/main/java/org/tubalabs/products/Store.java}} + {{file:apps/products/src/main/java/org/tubalabs/products/MessagePump.java}}: explicit SQL, persistent chat/outbox and reply handling.</li><li>Thymeleaf templates + {{file:apps/products/src/main/resources/static/app.js}}: server-rendered forms and browser polling.</li></ul>
<h2 id="dockerfile">Inspect the Dockerfile</h2>
<p>An image packages the application; a container runs it. The build stage uses Maven/Java 21; the runtime copies only the JAR and runs unprivileged. <code>EXPOSE</code> documents a port; <code>docker run -p</code> publishes it.</p>
<details class="optional"><summary>View Dockerfile</summary>{{code:apps/products/Dockerfile}}</details>
<h2 id="build">Build, tag and push</h2>
{{snippet:commands.sh:build}}
<p>{{file:scripts/05-images.sh}} builds both images for <code>linux/amd64</code>, logs into ACR, assigns content-derived <code>w1-…</code> tags with <code>-t</code>, and pushes. Products uses its app folder as build context; the worker uses the repository root for shared Python code. State/secrets are excluded.</p>
<h2 id="run">Run locally</h2>
{{snippet:commands.sh:inspect-container}}
<p>In another Bash terminal:</p>
{{snippet:commands.sh:inspect-check}}
<p>Expect <strong>Inspect profile</strong> and health <code>UP</code>. This profile has no upload/chat or Azure connections. Stop the container with Ctrl+C.</p>
<details class="optional"><summary>Exercise: tag the same image / build Java locally</summary><p>Using the run block's variables, execute <code>docker tag "$registry/products:$tag" products-local:$tag</code>, then <code>docker image inspect "products-local:$tag"</code>. Both references identify the same image; a tag can move, a digest identifies content.</p><p>For a local Java build: in <code>workshop/apps/products</code>, run <code>bash mvnw test</code> with Java 21. Integration tests need the <a href="./maintainer.html#local-tests">database fixture</a>.</p></details>
<div class="verification" id="verify"><strong>Verification:</strong> both pushes return digests and localhost health is UP. Continue to data/identity setup.</div>
<details class="optional"><summary>Troubleshooting</summary><ul><li><strong>Push denied:</strong> check subscription/push rights and rerun the stage's ACR login.</li><li><strong>Port busy:</strong> map <code>127.0.0.1:8081:8080</code> and use 8081 locally.</li><li><strong>Download failure:</strong> check Docker's network/proxy and rerun; completed layers are cached.</li><li><strong>Exec format error:</strong> use the supplied <code>linux/amd64</code> platform.</li></ul></details>
