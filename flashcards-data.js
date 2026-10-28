// Curated recall cards: one question per card. Edit data here; keep IDs stable.
window.AI200_FLASHCARDS = {
  "version": 2,
  "language": "en",
  "categories": [
    {
      "id": "acr",
      "label": "Azure Container Registry (ACR)",
      "domain": 1
    },
    {
      "id": "app-service",
      "label": "App Service",
      "domain": 1
    },
    {
      "id": "container-apps",
      "label": "Container Apps",
      "domain": 1
    },
    {
      "id": "keda",
      "label": "KEDA og hendelsesstyrt skalering",
      "domain": 1
    },
    {
      "id": "aks",
      "label": "AKS og Kubernetes",
      "domain": 1
    },
    {
      "id": "cosmos",
      "label": "Cosmos DB",
      "domain": 2
    },
    {
      "id": "postgresql",
      "label": "PostgreSQL og pgvector",
      "domain": 2
    },
    {
      "id": "redis",
      "label": "Redis",
      "domain": 2
    },
    {
      "id": "event-grid",
      "label": "Event Grid",
      "domain": 3
    },
    {
      "id": "service-bus",
      "label": "Service Bus",
      "domain": 3
    },
    {
      "id": "functions",
      "label": "Azure Functions",
      "domain": 3
    },
    {
      "id": "event-hubs",
      "label": "Event Hubs",
      "domain": 3
    },
    {
      "id": "key-vault",
      "label": "Key Vault",
      "domain": 4
    },
    {
      "id": "app-configuration",
      "label": "App Configuration",
      "domain": 4
    },
    {
      "id": "kql",
      "label": "KQL",
      "domain": 4
    },
    {
      "id": "opentelemetry",
      "label": "OpenTelemetry og sporing",
      "domain": 4
    },
    {
      "id": "monitor",
      "label": "Azure Monitor og Application Insights",
      "domain": 4
    },
    {
      "id": "identity-rbac",
      "label": "Identitet og RBAC",
      "domain": 4
    }
  ],
  "cards": [
    {
      "id": "m-01-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "Which source-code events can trigger an ACR Task?",
      "answers": [
        "Source code update - commit (enabled by default) and pull request (DISABLED by default). Needs a personal access token."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-01-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "How does an ACR base-image update trigger detect a changed dependency?",
      "answers": [
        "Base image update - enabled by default. ACR-hosted base image rebuilds immediately; Docker Hub / MCR checked at a random 10-60 min interval. Task must have built once already."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-01-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "What schedule format does an ACR Tasks timer use?",
      "answers": [
        "Timer - 5-field cron, down to once per minute."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-01-4-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "Do ACR webhooks or Artifact Cache rules start source builds?",
      "answers": [
        "Not triggers: ACR webhooks (outbound notification) and Artifact Cache rules (mirror an upstream image)."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-02-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR pull and push roles",
      "question": "Which pull and push roles apply to an ACR registry using RBAC Registry Permissions?",
      "answers": [
        "Standard (RBAC Registry Permissions): AcrPull to pull, AcrPush to push."
      ],
      "origin": "original",
      "legacyIds": [
        2
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 2",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-02-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR pull and push roles",
      "question": "Which repository roles replace AcrPull and AcrPush on an ABAC-enabled ACR registry?",
      "answers": [
        "ABAC-enabled (RBAC Registry + ABAC Repository Permissions): Container Registry Repository Reader to pull, Container Registry Repository Writer to push."
      ],
      "origin": "original",
      "legacyIds": [
        2
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 2",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-02-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR pull and push roles",
      "question": "Are legacy AcrPull, AcrPush and AcrDelete roles honored on an ABAC-enabled registry?",
      "answers": [
        "On an ABAC registry the legacy AcrPull / AcrPush / AcrDelete roles are not honored. One word in the stem flips the answer."
      ],
      "origin": "original",
      "legacyIds": [
        2
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 2",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-03-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "What does an ACR quick task do?",
      "answers": [
        "Quick task - az acr build: think docker build + docker push in the cloud. No local Docker Engine needed."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-03-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "How is a Git repository configured as an ACR Task's build context?",
      "answers": [
        "Automatically triggered task - az acr task create with --context set to a GitHub or Azure DevOps repo (#branch), --file Dockerfile and --git-access-token (PAT). The repo is the build context."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-03-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "What defines an ACR multi-step task?",
      "answers": [
        "Multi-step task - a YAML file of build, push and cmd steps, run with az acr run."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-03-4-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "What sequence connects a Git commit to a new ACR image?",
      "answers": [
        "Commit flow - push code to the repo -> commit trigger queues the task -> image built in Azure and pushed to ACR. {{.Run.ID}} in the tag gives a unique tag per run."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-03-5-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "Does using GitHub Actions automatically make a build an ACR Task?",
      "answers": [
        "Trap: a GitHub Actions workflow or Azure DevOps pipeline also builds images, but it is NOT an ACR Task. Commit and PR triggers do NOT work with GitHub Enterprise repos."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-04-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Why can a stable image tag select different content after another push?",
      "answers": [
        "Stable tag (1.0, latest, any reused tag) - keeps receiving updates. Use for base images, NOT for deployments."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-04-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Why use a different image tag for each build?",
      "answers": [
        "A new, never-reused tag identifies each build so restarts and scale-out select the intended version consistently. This depends on following the policy of not reusing the tag."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-04-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Which image reference pins exact content even if a tag moves?",
      "answers": [
        "Manifest digest - unique SHA-256 hash per image. Pull with repo@sha256:... to guarantee the version, even if the same tag is pushed again."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-04-4-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "What is the authenticated Docker push sequence for ACR?",
      "answers": [
        "Push flow - az acr login (Microsoft Entra token, valid 3 hours) -> docker tag with the login server (myregistry.azurecr.io/repo:v1) -> docker push."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-04-5-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Which image tag is assumed when none is specified?",
      "answers": [
        "latest."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-04-5-2",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "How can an ACR tag be protected from later overwrites?",
      "answers": [
        "Set write-enabled=false on the released tag; use delete-enabled=false as well when deletion must be prevented."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-05-1-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service pull from ACR",
      "question": "How can App Service pull from ACR without storing registry credentials?",
      "answers": [
        "Use a managed identity with suitable registry access. AcrPull applies to an RBAC Registry Permissions registry; an ABAC-enabled registry needs the applicable repository role instead."
      ],
      "origin": "original",
      "legacyIds": [
        5
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-05-3-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service pull from ACR",
      "question": "Why is the ACR administrator account unsuitable for a production app identity?",
      "answers": [
        "Admin credentials - registry admin user, disabled by default (az acr update --admin-enabled true). One account, full push and pull, password kept in App Service config. Dev and test only."
      ],
      "origin": "original",
      "legacyIds": [
        5
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-05-4-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service pull from ACR",
      "question": "Does pushing to the same tag automatically refresh an App Service container?",
      "answers": [
        "New tag - az webapp config container set restarts the app and pulls it. Pushing again to the SAME tag is NOT detected: restart, or enable continuous deployment (ACR webhook on push)."
      ],
      "origin": "original",
      "legacyIds": [
        5
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-06-1-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "How do App Service and Functions expose app settings to application code?",
      "answers": [
        "App settings - name-value pairs injected as environment variables when the container starts. Same image, different values per environment. No extra service needed."
      ],
      "origin": "original",
      "legacyIds": [
        6,
        50
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-06-2-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "How are App Service settings protected and named?",
      "answers": [
        "Encrypted at rest - every app setting. Names: letters, numbers and underscores; on Linux use __ in place of : for nested .NET keys."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-06-3-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "How do App Service connection strings differ from ordinary app settings?",
      "answers": [
        "Connection strings - meant for databases; the env var gets a type prefix (SQLAZURECONNSTR_, CUSTOMCONNSTR_). Non-.NET apps should just use app settings."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-06-4-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "What happens to a slot setting during an App Service slot swap?",
      "answers": [
        "Slot settings - stick to the slot during a swap (environment names, endpoints, feature flags)."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-06-5-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "Why should runtime credentials be kept out of a Dockerfile?",
      "answers": [
        "Trap: a value hardcoded in the Dockerfile is baked into the image and committed with the code. App settings supply it at runtime instead."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-07-1-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "What is the syntax of an App Service or Functions Key Vault reference?",
      "answers": [
        "Syntax - setting value @Microsoft.KeyVault(...) holding either SecretUri=<full secret URI> or VaultName=myvault;SecretName=mysecret. Version is optional."
      ],
      "origin": "original",
      "legacyIds": [
        7,
        50
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 7",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-07-2-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "Which identity permission is needed to resolve an App Service Key Vault reference?",
      "answers": [
        "Access - managed identity on the app (system-assigned by default) with Key Vault Secrets User (RBAC) or Get on secrets (access policy)."
      ],
      "origin": "original",
      "legacyIds": [
        7,
        50
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 7",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-07-3-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "Does using a Key Vault reference require secret-reading code in the app?",
      "answers": [
        "No code change - the app reads the resolved value as a normal environment variable. Works in app settings and connection strings."
      ],
      "origin": "original",
      "legacyIds": [
        7
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 7",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-07-4-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "When does App Service refresh a versionless Key Vault reference?",
      "answers": [
        "Rotation - no version in the URI -> latest version, refreshed within 24 hours. Any config change restarts the app and refetches at once."
      ],
      "origin": "original",
      "legacyIds": [
        7,
        50
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 7",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-08-1-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "Which metadata identifies an Azure Service Bus queue in a KEDA scale rule?",
      "answers": [
        "azure-servicebus -> queueName, namespace, messageCount"
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-08-2-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "Which metadata identifies an Azure Storage queue in a KEDA scale rule?",
      "answers": [
        "azure-queue (Storage) -> queueName, accountName, queueLength"
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-08-3-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "What is the default polling interval for Container Apps event-driven scaling?",
      "answers": [
        "30 seconds."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-08-3-2",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "When does the default 300-second Container Apps cooldown apply?",
      "answers": [
        "When scaling from the final active replica down to zero; it is different from the polling interval."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-08-4-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "How is the target replica count estimated from a queue-length metric?",
      "answers": [
        "desiredReplicas = ceil(currentMetricValue / targetMetricValue)"
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-08-5-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "What are the Container Apps min/max replica settings used for?",
      "answers": [
        "minReplicas 0 = scale to zero. maxReplicas default 10, configurable to 1,000."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-09-1-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "Which Kubernetes Service type is the default?",
      "answers": [
        "ClusterIP - the default. Internal only."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-09-2-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "What does a Kubernetes NodePort Service expose?",
      "answers": [
        "NodePort - opens a port on every node."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-09-3-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "What does a Kubernetes LoadBalancer Service provision?",
      "answers": [
        "An external load balancer through the cloud provider. It can be public or internal depending on its configuration."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-09-4-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "What does a Kubernetes ExternalName Service return?",
      "answers": [
        "A DNS alias to an external hostname rather than routing traffic to selected pods."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-09-5-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "Is Kubernetes Ingress a Service type?",
      "answers": [
        "Ingress is NOT a Service type. It is a separate object doing HTTP host / path / TLS routing, backed by an ingress controller."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-10-1-1",
      "domain": 1,
      "category": "aks",
      "title": "Rolling update defaults",
      "question": "What are the default Deployment rolling-update maxSurge and maxUnavailable values?",
      "answers": [
        "25% each. Percentage rounding depends on replica count; these settings control additional and unavailable pods, not an unconditional availability guarantee."
      ],
      "origin": "original",
      "legacyIds": [
        10
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 10",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-10-2-1",
      "domain": 1,
      "category": "aks",
      "title": "Rolling update defaults",
      "question": "What are the default DaemonSet rolling-update surge and unavailability settings?",
      "answers": [
        "DaemonSet: maxUnavailable 1, maxSurge 0."
      ],
      "origin": "original",
      "legacyIds": [
        10
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 10",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-10-3-1",
      "domain": 1,
      "category": "aks",
      "title": "Rolling update defaults",
      "question": "What are the default AKS node-pool upgrade surge and unavailability settings?",
      "answers": [
        "AKS node pool upgrade: max surge 1 node, max unavailable 0."
      ],
      "origin": "original",
      "legacyIds": [
        10
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 10",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-11-1-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What happens when a Kubernetes liveness probe fails repeatedly?",
      "answers": [
        "Liveness fails -> kubelet terminates the container, restart policy applies."
      ],
      "origin": "original",
      "legacyIds": [
        11
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-11-2-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What happens when a Kubernetes readiness probe fails?",
      "answers": [
        "Readiness fails -> pod IP removed from Endpoints, but not restarted."
      ],
      "origin": "original",
      "legacyIds": [
        11
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-11-3-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What is the purpose of a Kubernetes startup probe?",
      "answers": [
        "Startup - holds the other two off while a slow app boots."
      ],
      "origin": "original",
      "legacyIds": [
        11
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-11-4-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What should be inspected when healthy pods receive no Service traffic?",
      "answers": [
        "Inspect the Service selector, pod labels, readiness, endpoints/EndpointSlices and targetPort. A running process alone does not prove that Service traffic can reach it."
      ],
      "origin": "original",
      "legacyIds": [
        11,
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-12-1-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "How does single-revision mode route Container Apps traffic?",
      "answers": [
        "Single (default) - one active revision, all traffic switches at once, weights unavailable."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-12-2-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "What does multiple-revision mode allow in Container Apps?",
      "answers": [
        "Multiple - revisions coexist, you set the weights."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-12-3-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "What is the deployment-labels revision mode in Container Apps?",
      "answers": [
        "It manages deployment routing through named labels such as staging and production, supporting promotion, traffic management and rollback through label history. Enable the supported deployment-labels feature before using it."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-12-4-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "What must Container Apps revision traffic weights total?",
      "answers": [
        "Traffic weights require Multiple mode and must total 100."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-12-5-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "How can one Container Apps revision have a stable test URL?",
      "answers": [
        "A revision label gives one revision its own stable URL with no production traffic diverted."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-1-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "What are the main parts of a custom Container Apps scale rule?",
      "answers": [
        "Rule parts - type = the KEDA scaler (azure-servicebus, azure-queue), metadata such as the queue name, and auth by secret or managed identity. Replica limits and polling are optional."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-2-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Which Azure CLI options configure a Container Apps scale rule?",
      "answers": [
        "CLI - --scale-rule-type, --scale-rule-metadata, --scale-rule-auth or --scale-rule-identity, plus --min-replicas / --max-replicas."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-3-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "What is the trade-off of setting Container Apps minReplicas to zero?",
      "answers": [
        "The app can scale to zero when idle, avoiding replica resource-consumption charges on the Consumption plan. A later request or event can incur cold-start latency. Dedicated capacity and other Azure resources may still incur charges."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-4-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Why keep at least one Container Apps replica running?",
      "answers": [
        "Min 1 or more - one replica always running. Recommended for production to avoid cold start latency."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-5-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "What does a Container Apps HTTP scale rule measure?",
      "answers": [
        "HTTP rule - concurrent requests (default 10); it does NOT watch a queue. With ingress and no rule -> default HTTP rule, 0 to 10 replicas."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-6-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Can CPU- or memory-only Container Apps rules scale an app from zero?",
      "answers": [
        "No. They need a running replica to report the metric."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-13-6-2",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Does changing a Container Apps scale rule create a revision?",
      "answers": [
        "Yes. Scaling configuration is revision-scoped."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-14-1-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "Are Container Apps secrets scoped to an app or a revision?",
      "answers": [
        "Scope - app level, shared by revisions. Adding or changing a secret does NOT create a revision: restart the revision or deploy a new one."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-14-2-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "How is a Container Apps secret linked to Key Vault?",
      "answers": [
        "Key Vault reference (preferred in production) - the secret holds keyVaultUrl = the Key Vault secret URI (.../secrets/name) + identity (system, or a user-assigned resource ID)."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-14-3-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "Which identity can be pre-authorized for Key Vault before a Container App is created?",
      "answers": [
        "Identity - enable managed identity and grant Key Vault Secrets User. At az containerapp create use a user-assigned identity; the system one does not exist yet."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-14-4-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "When are versionless Container Apps Key Vault references refreshed?",
      "answers": [
        "Rotation - no version in the URI -> latest version within 30 minutes; revisions using it in env vars restart automatically."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-14-5-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "How does a Container Apps container consume an app secret?",
      "answers": [
        "Read it - env var value secretref:<secret-name>, a scale rule auth, or a Secret volume (one file per secret)."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-15-1-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "What does a Kubernetes Deployment manifest describe?",
      "answers": [
        "Manifest - a YAML file (NOT XML): apiVersion apps/v1, kind Deployment, metadata, spec with replicas, selector.matchLabels (must match the template labels) and containers."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-15-2-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "Which command declaratively creates or updates resources from a Kubernetes manifest?",
      "answers": [
        "Declarative - kubectl apply -f deployment.yaml creates OR updates; Kubernetes reconciles the cluster to the desired state."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-15-3-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "What is the sequence for a rolling image update in Kubernetes?",
      "answers": [
        "Change the image reference in the manifest, run kubectl apply -f, then watch kubectl rollout status. Pods are replaced gradually; readiness, capacity and rolling-update settings determine availability."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-15-4-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "Which command rolls a Kubernetes Deployment back?",
      "answers": [
        "Roll back - kubectl rollout undo. The Recreate strategy replaces everything at once with a brief outage. Do NOT delete the Deployment or scale to 0 to update."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-15-5-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "How can a pod consume a Kubernetes Secret without embedding its value in a manifest?",
      "answers": [
        "Secrets - never hardcode them in a manifest; reference a Kubernetes Secret with secretKeyRef."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-16-1-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "What does the Kubernetes Horizontal Pod Autoscaler scale?",
      "answers": [
        "HPA (HorizontalPodAutoscaler) - adds or removes pod replicas on CPU, memory or custom metrics, for example minReplicas 3, maxReplicas 10, averageUtilization 50."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-16-2-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "What resource setting is needed for CPU-utilization-based HPA scaling?",
      "answers": [
        "CPU requests on the relevant containers, plus available resource metrics, usually through metrics-server. CPU limits are not a prerequisite for calculating utilization."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-16-3-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "What does the Kubernetes Vertical Pod Autoscaler adjust?",
      "answers": [
        "VPA - right-sizes CPU/memory requests/limits; it does NOT add pods. Modes: Off, Initial, Recreate, InPlaceOrRecreate (AKS 1.34+); Auto is deprecated."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-16-4-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "When does the Kubernetes cluster autoscaler add nodes?",
      "answers": [
        "Cluster autoscaler - adds nodes when pods are Pending for lack of resources."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-16-5-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "What distinguishes KEDA from CPU-only autoscaling?",
      "answers": [
        "KEDA - event-driven, can scale to zero. Do NOT add a separate HPA to a workload KEDA already scales."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-16-6-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "Which command changes a Deployment's replica count manually?",
      "answers": [
        "Manual - kubectl scale --replicas=5."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-17-1-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "Which pod diagnostics should be checked before changing probes or replica counts?",
      "answers": [
        "Start here - kubectl describe pod (events, probes, env, mounts) and kubectl logs. Diagnose BEFORE changing probes, replicas or nodes."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-17-2-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "How do you inspect logs from a container's previous crashed instance?",
      "answers": [
        "CrashLoopBackOff - the app crashes. kubectl logs --previous shows the last crashed instance."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-17-3-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "What does ImagePullBackOff indicate?",
      "answers": [
        "ImagePullBackOff - image cannot be pulled: wrong path or tag, or no registry access. Events say why."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-17-4-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "What does an unschedulable Pending pod require you to inspect?",
      "answers": [
        "Pending - cannot be scheduled; events show Insufficient cpu / memory."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-17-6-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "Which kubectl tools help inspect events, individual containers and resource usage?",
      "answers": [
        "Also - kubectl get events, kubectl logs -c <container>, kubectl port-forward, kubectl top (metrics server)."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "prep-acr-001",
      "domain": 1,
      "title": "ACR geo-replication",
      "category": "acr",
      "question": "Which ACR service tier supports geo-replication?",
      "answers": [
        "Premium."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-001",
          "url": "https://ai200prep.com/questions/acr-001/"
        }
      ]
    },
    {
      "id": "prep-acr-010",
      "domain": 1,
      "title": "ACR Private Link",
      "category": "acr",
      "question": "Which ACR service tier supports private endpoints?",
      "answers": [
        "Premium."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-010",
          "url": "https://ai200prep.com/questions/acr-010/"
        }
      ]
    },
    {
      "id": "prep-acr-003",
      "domain": 1,
      "title": "Import an image",
      "category": "acr",
      "question": "Which Azure CLI command imports an existing image into ACR without local Docker?",
      "answers": [
        "az acr import. This copies an existing image; it does not build source code."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-003",
          "url": "https://ai200prep.com/questions/acr-003/"
        }
      ]
    },
    {
      "id": "prep-acr-004",
      "domain": 1,
      "title": "ACR login server",
      "category": "acr",
      "question": "What is the usual public-cloud ACR login server hostname format?",
      "answers": [
        "<registry-name>.azurecr.io."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-004",
          "url": "https://ai200prep.com/questions/acr-004/"
        }
      ]
    },
    {
      "id": "prep-p-acr-m01",
      "domain": 1,
      "title": "Image authenticity",
      "category": "acr",
      "question": "What does image signature verification add beyond digest pinning?",
      "answers": [
        "It verifies the image's signer and provenance. A digest identifies content but does not by itself establish who produced it; tools such as Notation and policy enforcement can verify signatures."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-acr-m01",
          "url": "https://ai200prep.com/questions/p-acr-m01/"
        }
      ]
    },
    {
      "id": "prep-p-acr-008",
      "domain": 1,
      "title": "Repository-scoped access",
      "category": "acr",
      "question": "What can an ACR repository-scoped token restrict?",
      "answers": [
        "Actions such as pull or push to specified repositories through its scope map, rather than granting registry-wide access."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-acr-008",
          "url": "https://ai200prep.com/questions/p-acr-008/"
        },
        {
          "label": "AI-200 Prep · acr-015",
          "url": "https://ai200prep.com/questions/acr-015/"
        }
      ]
    },
    {
      "id": "prep-acr-012",
      "domain": 1,
      "title": "Private registry access",
      "category": "acr",
      "question": "What must accompany an ACR private endpoint when public registry access is disabled?",
      "answers": [
        "Private DNS resolution and network connectivity from the client network to the private endpoint. A private endpoint alone does not fix DNS or routing."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-012",
          "url": "https://ai200prep.com/questions/acr-012/"
        },
        {
          "label": "AI-200 Prep · p-acr-004",
          "url": "https://ai200prep.com/questions/p-acr-004/"
        },
        {
          "label": "AI-200 Prep · c-nw-003",
          "url": "https://ai200prep.com/questions/c-nw-003/"
        }
      ]
    },
    {
      "id": "prep-acr-014",
      "domain": 1,
      "title": "Recover an ACR deletion",
      "category": "acr",
      "question": "Which ACR capability can recover accidentally deleted artifacts when enabled beforehand?",
      "answers": [
        "Soft delete, within its configured retention period and supported registry configuration."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-014",
          "url": "https://ai200prep.com/questions/acr-014/"
        },
        {
          "label": "AI-200 Prep · p-acr-016",
          "url": "https://ai200prep.com/questions/p-acr-016/"
        }
      ]
    },
    {
      "id": "prep-p-acr-014",
      "domain": 1,
      "title": "Customer-managed encryption",
      "category": "acr",
      "question": "What does ACR need to encrypt registry data with a customer-managed Key Vault key?",
      "answers": [
        "A supported Premium registry, a customer-managed key and a user-assigned managed identity authorized to use the key."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-acr-014",
          "url": "https://ai200prep.com/questions/p-acr-014/"
        },
        {
          "label": "AI-200 Prep · acr-019",
          "url": "https://ai200prep.com/questions/acr-019/"
        }
      ]
    },
    {
      "id": "prep-acr-017",
      "domain": 1,
      "title": "List image tags",
      "category": "acr",
      "question": "Which Azure CLI command lists a repository's tags in ACR?",
      "answers": [
        "az acr repository show-tags --name <registry> --repository <repository>."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-017",
          "url": "https://ai200prep.com/questions/acr-017/"
        }
      ]
    },
    {
      "id": "prep-aks-001",
      "domain": 1,
      "title": "AKS system pool",
      "category": "aks",
      "question": "What runs in an AKS system node pool?",
      "answers": [
        "Critical cluster services such as CoreDNS and metrics-server. System pools are intended for these system workloads and use Linux."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-001",
          "url": "https://ai200prep.com/questions/aks-001/"
        },
        {
          "label": "AI-200 Prep · p-aks-025",
          "url": "https://ai200prep.com/questions/p-aks-025/"
        }
      ]
    },
    {
      "id": "prep-aks-009",
      "domain": 1,
      "title": "Pod identity",
      "category": "aks",
      "question": "How does Microsoft Entra Workload ID authenticate an AKS workload?",
      "answers": [
        "It federates a Kubernetes service account token to an Entra identity with suitable Azure data-plane permissions. No application credential needs to be stored in the pod."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-009",
          "url": "https://ai200prep.com/questions/aks-009/"
        },
        {
          "label": "AI-200 Prep · p-aks-020",
          "url": "https://ai200prep.com/questions/p-aks-020/"
        },
        {
          "label": "AI-200 Prep · rbac-010",
          "url": "https://ai200prep.com/questions/rbac-010/"
        },
        {
          "label": "AI-200 Prep · p-rbac-016",
          "url": "https://ai200prep.com/questions/p-rbac-016/"
        },
        {
          "label": "AI-200 Prep · kv-035",
          "url": "https://ai200prep.com/questions/kv-035/"
        }
      ]
    },
    {
      "id": "prep-aks-025",
      "domain": 1,
      "title": "Workload ID prerequisite",
      "category": "aks",
      "question": "Which AKS issuer feature is required for service-account federation with Entra Workload ID?",
      "answers": [
        "Enable the OIDC issuer and workload identity support, then configure the federated identity credential for the intended service account."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-025",
          "url": "https://ai200prep.com/questions/aks-025/"
        }
      ]
    },
    {
      "id": "prep-aks-015",
      "domain": 1,
      "title": "Voluntary disruptions",
      "category": "aks",
      "question": "What does a Kubernetes PodDisruptionBudget protect?",
      "answers": [
        "The permitted number of unavailable pods during voluntary disruptions such as a node drain. It does not prevent all failures or guarantee application availability."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-015",
          "url": "https://ai200prep.com/questions/aks-015/"
        },
        {
          "label": "AI-200 Prep · p-aks-005",
          "url": "https://ai200prep.com/questions/p-aks-005/"
        },
        {
          "label": "AI-200 Prep · aks-043",
          "url": "https://ai200prep.com/questions/aks-043/"
        }
      ]
    },
    {
      "id": "prep-p-aks-008",
      "domain": 1,
      "title": "Pod network policy",
      "category": "aks",
      "question": "Which Kubernetes resource restricts which pods may connect to selected pods?",
      "answers": [
        "NetworkPolicy, enforced by a network implementation that supports it."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-008",
          "url": "https://ai200prep.com/questions/p-aks-008/"
        }
      ]
    },
    {
      "id": "prep-p-aks-006",
      "domain": 1,
      "title": "Namespace permissions",
      "category": "aks",
      "question": "How is native Kubernetes read-only access limited to one namespace?",
      "answers": [
        "Define a Role with the required read verbs and bind it with a RoleBinding in that namespace."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-006",
          "url": "https://ai200prep.com/questions/p-aks-006/"
        }
      ]
    },
    {
      "id": "prep-aks-016",
      "domain": 1,
      "title": "Application Gateway ingress",
      "category": "aks",
      "question": "Which AKS ingress integration uses Azure Application Gateway and its WAF?",
      "answers": [
        "Application Gateway Ingress Controller (AGIC)."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-016",
          "url": "https://ai200prep.com/questions/aks-016/"
        }
      ]
    },
    {
      "id": "prep-aks-017",
      "domain": 1,
      "title": "Private AKS API",
      "category": "aks",
      "question": "What does an AKS private cluster make private?",
      "answers": [
        "The Kubernetes API server endpoint, reachable through the configured private network and DNS path rather than a public API endpoint."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-017",
          "url": "https://ai200prep.com/questions/aks-017/"
        }
      ]
    },
    {
      "id": "prep-aks-019",
      "domain": 1,
      "title": "Interruptible compute",
      "category": "aks",
      "question": "Which AKS pool suits workloads that tolerate eviction in exchange for lower compute cost?",
      "answers": [
        "A user node pool using Azure Spot virtual machines, with application handling for eviction and rescheduling."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-019",
          "url": "https://ai200prep.com/questions/aks-019/"
        },
        {
          "label": "AI-200 Prep · c-nw-004",
          "url": "https://ai200prep.com/questions/c-nw-004/"
        }
      ]
    },
    {
      "id": "prep-p-aks-011",
      "domain": 1,
      "title": "Shared Kubernetes files",
      "category": "aks",
      "question": "Which Azure storage service commonly backs a Kubernetes ReadWriteMany file volume?",
      "answers": [
        "Azure Files, through an appropriate CSI storage class."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-011",
          "url": "https://ai200prep.com/questions/p-aks-011/"
        }
      ]
    },
    {
      "id": "prep-aks-021",
      "domain": 1,
      "title": "Service mesh",
      "category": "aks",
      "question": "What can the managed Istio service mesh add between AKS services?",
      "answers": [
        "Service-to-service traffic controls and mutual TLS without implementing those mechanisms separately in each application."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-021",
          "url": "https://ai200prep.com/questions/aks-021/"
        },
        {
          "label": "AI-200 Prep · aks-039",
          "url": "https://ai200prep.com/questions/aks-039/"
        }
      ]
    },
    {
      "id": "prep-aks-022",
      "domain": 1,
      "title": "Overlay networking",
      "category": "aks",
      "question": "How does Azure CNI Overlay reduce VNet address consumption?",
      "answers": [
        "Pods receive addresses from a separate overlay address space instead of each consuming an address from the node subnet."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-022",
          "url": "https://ai200prep.com/questions/aks-022/"
        }
      ]
    },
    {
      "id": "prep-aks-023",
      "domain": 1,
      "title": "Stateful workloads",
      "category": "aks",
      "question": "Which Kubernetes controller gives pods stable identities and ordered stateful management?",
      "answers": [
        "StatefulSet, typically together with persistent volume claims for durable storage."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-023",
          "url": "https://ai200prep.com/questions/aks-023/"
        }
      ]
    },
    {
      "id": "prep-p-aks-014",
      "domain": 1,
      "title": "Drain a node",
      "category": "aks",
      "question": "Which kubectl operation evicts workloads for node maintenance while respecting disruption budgets?",
      "answers": [
        "kubectl drain <node>, with appropriate options such as --ignore-daemonsets. Check disruption budgets and workload state first."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-014",
          "url": "https://ai200prep.com/questions/p-aks-014/"
        }
      ]
    },
    {
      "id": "prep-aks-031",
      "domain": 1,
      "title": "Cordon a node",
      "category": "aks",
      "question": "What does kubectl cordon do to existing pods?",
      "answers": [
        "It leaves existing pods running while marking the node unschedulable for new pods. It does not drain the node."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-031",
          "url": "https://ai200prep.com/questions/aks-031/"
        }
      ]
    },
    {
      "id": "prep-aks-026",
      "domain": 1,
      "title": "Stop an AKS cluster",
      "category": "aks",
      "question": "Which Azure CLI command stops an eligible AKS cluster while preserving its configuration?",
      "answers": [
        "az aks stop. This is different from deleting the cluster; storage and other retained resources can still incur charges."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-026",
          "url": "https://ai200prep.com/questions/aks-026/"
        }
      ]
    },
    {
      "id": "prep-aks-027",
      "domain": 1,
      "title": "Node image upgrade",
      "category": "aks",
      "question": "How can an AKS node pool refresh its operating-system image without choosing a new Kubernetes version?",
      "answers": [
        "Use a node-image-only upgrade, such as az aks nodepool upgrade --node-image-only."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-027",
          "url": "https://ai200prep.com/questions/aks-027/"
        }
      ]
    },
    {
      "id": "prep-aks-028",
      "domain": 1,
      "title": "Policy admission",
      "category": "aks",
      "question": "What does a Deny Azure Policy admission rule do to a non-compliant Kubernetes workload?",
      "answers": [
        "It rejects the admission request. Azure Policy for Kubernetes uses admission-policy components to enforce the configured policy."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-028",
          "url": "https://ai200prep.com/questions/aks-028/"
        },
        {
          "label": "AI-200 Prep · p-aks-016",
          "url": "https://ai200prep.com/questions/p-aks-016/"
        }
      ]
    },
    {
      "id": "prep-aks-040",
      "domain": 1,
      "title": "Namespace resource controls",
      "category": "aks",
      "question": "How do ResourceQuota and LimitRange differ in Kubernetes?",
      "answers": [
        "ResourceQuota constrains aggregate resource consumption in a namespace. LimitRange supplies or constrains per-object resource settings such as container requests and limits."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-040",
          "url": "https://ai200prep.com/questions/aks-040/"
        },
        {
          "label": "AI-200 Prep · aks-033",
          "url": "https://ai200prep.com/questions/aks-033/"
        }
      ]
    },
    {
      "id": "prep-aks-037",
      "domain": 1,
      "title": "Image pull policy",
      "category": "aks",
      "question": "What does Kubernetes imagePullPolicy: Always check at container startup?",
      "answers": [
        "It resolves the image reference through the registry. Layers already cached for that digest can be reused; Always does not necessarily download every layer again."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-037",
          "url": "https://ai200prep.com/questions/aks-037/"
        }
      ]
    },
    {
      "id": "prep-p-aks-010",
      "domain": 1,
      "title": "Dedicated GPU scheduling",
      "category": "aks",
      "question": "Why is a toleration alone insufficient to require GPU placement?",
      "answers": [
        "A toleration only permits scheduling onto a matching tainted node. Use a node selector or affinity as well to require the intended GPU nodes."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-010",
          "url": "https://ai200prep.com/questions/p-aks-010/"
        },
        {
          "label": "AI-200 Prep · aks-038",
          "url": "https://ai200prep.com/questions/aks-038/"
        }
      ]
    },
    {
      "id": "prep-ca-001",
      "domain": 1,
      "title": "Container Apps environment",
      "category": "container-apps",
      "question": "What is a Container Apps environment?",
      "answers": [
        "A shared boundary for container apps, including environment networking and selected logging configuration. An app and a revision are separate objects within that environment."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-001",
          "url": "https://ai200prep.com/questions/ca-001/"
        },
        {
          "label": "AI-200 Prep · p-ca-003",
          "url": "https://ai200prep.com/questions/p-ca-003/"
        },
        {
          "label": "AI-200 Prep · p-ca-021",
          "url": "https://ai200prep.com/questions/p-ca-021/"
        }
      ]
    },
    {
      "id": "prep-ca-002",
      "domain": 1,
      "title": "Revision snapshot",
      "category": "container-apps",
      "question": "What does a Container Apps revision represent?",
      "answers": [
        "An immutable snapshot of revision-scoped app configuration, such as the image and container settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-002",
          "url": "https://ai200prep.com/questions/ca-002/"
        }
      ]
    },
    {
      "id": "prep-ca-003",
      "domain": 1,
      "title": "Container Apps ingress",
      "category": "container-apps",
      "question": "How do internal and external Container Apps ingress differ?",
      "answers": [
        "Internal ingress limits the app's direct ingress visibility to its environment. External ingress publishes it through the environment boundary; public reachability also depends on the environment network configuration."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-003",
          "url": "https://ai200prep.com/questions/ca-003/"
        },
        {
          "label": "AI-200 Prep · p-ca-004",
          "url": "https://ai200prep.com/questions/p-ca-004/"
        }
      ]
    },
    {
      "id": "prep-ca-007",
      "domain": 1,
      "title": "Dapr state",
      "category": "container-apps",
      "question": "Which Dapr component connects an application to a persistent state backend?",
      "answers": [
        "A state store component, such as a Cosmos DB state store."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-007",
          "url": "https://ai200prep.com/questions/ca-007/"
        }
      ]
    },
    {
      "id": "prep-ca-010",
      "domain": 1,
      "title": "Scheduled container work",
      "category": "container-apps",
      "question": "Which Container Apps resource runs finite work on a cron schedule?",
      "answers": [
        "A scheduled Container Apps Job, rather than a continuously running container app."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-010",
          "url": "https://ai200prep.com/questions/ca-010/"
        },
        {
          "label": "AI-200 Prep · p-ca-006",
          "url": "https://ai200prep.com/questions/p-ca-006/"
        }
      ]
    },
    {
      "id": "prep-p-ca-022",
      "domain": 1,
      "title": "Manual container work",
      "category": "container-apps",
      "question": "Which Container Apps job trigger runs finite work on demand?",
      "answers": [
        "A manual job trigger. Configure completion and replica settings for the workload and explicitly provide the job's required configuration."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-022",
          "url": "https://ai200prep.com/questions/p-ca-022/"
        }
      ]
    },
    {
      "id": "prep-p-ca-009",
      "domain": 1,
      "title": "Dapr invocation",
      "category": "container-apps",
      "question": "What does Dapr service invocation add to calls between participating services?",
      "answers": [
        "Service discovery and invocation through the sidecar, with configurable resilience and supported transport security such as mutual TLS."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-009",
          "url": "https://ai200prep.com/questions/p-ca-009/"
        }
      ]
    },
    {
      "id": "prep-ca-030",
      "domain": 1,
      "title": "Dapr app ID",
      "category": "container-apps",
      "question": "What does a Dapr appId identify?",
      "answers": [
        "The target application used for Dapr service discovery and invocation."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-030",
          "url": "https://ai200prep.com/questions/ca-030/"
        }
      ]
    },
    {
      "id": "prep-ca-011",
      "domain": 1,
      "title": "Dedicated workload profile",
      "category": "container-apps",
      "question": "Which Container Apps workload profile provides allocated compute capacity for sustained workloads?",
      "answers": [
        "A Dedicated workload profile, sized for the workload's CPU and memory requirements."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-011",
          "url": "https://ai200prep.com/questions/ca-011/"
        },
        {
          "label": "AI-200 Prep · p-ca-018",
          "url": "https://ai200prep.com/questions/p-ca-018/"
        }
      ]
    },
    {
      "id": "prep-ca-012",
      "domain": 1,
      "title": "Custom HTTPS domain",
      "category": "container-apps",
      "question": "What is required to serve a Container App through a custom HTTPS hostname?",
      "answers": [
        "A custom domain binding, valid DNS configuration and an appropriate managed or supplied TLS certificate."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-012",
          "url": "https://ai200prep.com/questions/ca-012/"
        }
      ]
    },
    {
      "id": "prep-p-ca-010",
      "domain": 1,
      "title": "Built-in sign-in",
      "category": "container-apps",
      "question": "How can Container Apps require Microsoft Entra sign-in without implementing the sign-in flow in app code?",
      "answers": [
        "Use built-in authentication with the Microsoft identity provider, often called Easy Auth."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-010",
          "url": "https://ai200prep.com/questions/p-ca-010/"
        }
      ]
    },
    {
      "id": "prep-p-ca-011",
      "domain": 1,
      "title": "Persistent container files",
      "category": "container-apps",
      "question": "How is Azure Files mounted in a Container App?",
      "answers": [
        "Configure the storage association on the environment, then reference and mount the volume in the app's container configuration."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-011",
          "url": "https://ai200prep.com/questions/p-ca-011/"
        },
        {
          "label": "AI-200 Prep · ca-019",
          "url": "https://ai200prep.com/questions/ca-019/"
        }
      ]
    },
    {
      "id": "prep-p-ca-012",
      "domain": 1,
      "title": "Revision startup diagnostics",
      "category": "container-apps",
      "question": "Where should a failing Container Apps revision's provisioning errors be investigated?",
      "answers": [
        "The revision's system logs and provisioning state, alongside its container console logs when available."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-012",
          "url": "https://ai200prep.com/questions/p-ca-012/"
        }
      ]
    },
    {
      "id": "prep-p-ca-017",
      "domain": 1,
      "title": "Ingress IP restrictions",
      "category": "container-apps",
      "question": "Where are allowed or denied client IP ranges configured for Container Apps ingress?",
      "answers": [
        "In the app's ingress IP restriction rules."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-017",
          "url": "https://ai200prep.com/questions/p-ca-017/"
        }
      ]
    },
    {
      "id": "prep-ca-025",
      "domain": 1,
      "title": "HTTP/2 ingress",
      "category": "container-apps",
      "question": "Which Container Apps HTTP ingress transport supports end-to-end HTTP/2 such as gRPC?",
      "answers": [
        "http2, with an application that supports the protocol. Raw TCP ingress is a different setting."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-025",
          "url": "https://ai200prep.com/questions/ca-025/"
        }
      ]
    },
    {
      "id": "prep-ca-027",
      "domain": 1,
      "title": "Consumption billing units",
      "category": "container-apps",
      "question": "Which resource-time units are used for Container Apps Consumption compute usage?",
      "answers": [
        "vCPU-seconds and GiB-seconds, subject to the plan's billing rules and grants."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-027",
          "url": "https://ai200prep.com/questions/ca-027/"
        }
      ]
    },
    {
      "id": "prep-p-ca-007",
      "domain": 1,
      "title": "Graceful shutdown",
      "category": "container-apps",
      "question": "Why should a Container Apps container handle termination gracefully during a revision change?",
      "answers": [
        "It needs to finish or safely stop in-flight work within the termination grace period before the process is stopped."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-007",
          "url": "https://ai200prep.com/questions/p-ca-007/"
        }
      ]
    },
    {
      "id": "m-18-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What read guarantee does Cosmos DB Strong consistency provide?",
      "answers": [
        "Strong - always the latest committed write. Not available with multiple write regions."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-18-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "How does Cosmos DB Bounded staleness bound replication lag?",
      "answers": [
        "Bounded staleness - lags by at most K versions or T time, whichever hits first."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-18-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "Which Cosmos DB consistency level provides session read-your-own-writes?",
      "answers": [
        "Session - the default. Read-your-own-writes within one session token."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-18-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What ordering guarantee does Cosmos DB Consistent prefix provide?",
      "answers": [
        "Consistent prefix - never out of order, no time bound."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-18-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What is not bounded by Cosmos DB Eventual consistency?",
      "answers": [
        "Eventual - weakest, no bound."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-18-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What are the minimum Bounded staleness settings for single-region and multi-region Cosmos DB accounts?",
      "answers": [
        "Minimums: multi-region 100,000 write ops or 300 s; single-region 10 ops or 5 s."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-18-7-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "Which Cosmos DB consistency levels bound cross-region staleness?",
      "answers": [
        "Only Strong and Bounded staleness bound cross-region lag."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-19-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What distinguishes a Cosmos DB flat vector index?",
      "answers": [
        "flat - brute force, full precision, 100% recall. Max 505 dimensions."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-19-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What distinguishes a Cosmos DB quantizedFlat vector index?",
      "answers": [
        "quantizedFlat - compressed then brute force. Max 4096."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-19-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What distinguishes a Cosmos DB DiskANN vector index?",
      "answers": [
        "diskANN - graph-based approximate. Max 4096. Best at scale."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-19-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What happens before a Cosmos DB quantizedFlat or DiskANN index has enough vectors?",
      "answers": [
        "quantizedFlat and diskANN need at least 1,000 vectors, otherwise Cosmos full-scans."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-19-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "Which distance functions can a Cosmos DB vector embedding policy use?",
      "answers": [
        "distanceFunction: cosine (default), dotproduct, euclidean."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-19-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "Can an existing Cosmos DB vector embedding policy be edited in place?",
      "answers": [
        "Policy settings cannot be edited in place."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-20-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "How much throughput does a typical 1-KB Cosmos DB point read consume?",
      "answers": [
        "A point read of a 1 KB item by id and partition key = 1 RU. A write of the same item is roughly 5 RU."
      ],
      "origin": "original",
      "legacyIds": [
        20
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-20-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "Within what range does Cosmos DB autoscale adjust provisioned RU/s?",
      "answers": [
        "Autoscale scales between 10% and 100% of the configured maximum."
      ],
      "origin": "original",
      "legacyIds": [
        20
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-20-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "How does the Cosmos DB SDK handle throughput throttling?",
      "answers": [
        "Exceeding throughput -> HTTP 429, status RequestRateTooLarge, header x-ms-retry-after-ms (milliseconds). The SDK retries automatically."
      ],
      "origin": "original",
      "legacyIds": [
        20
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-20-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "Where is Cosmos DB shared throughput configured?",
      "answers": [
        "At database level, where the provisioned RU/s is shared by its participating containers. Dedicated throughput is configured on an individual container."
      ],
      "origin": "original",
      "legacyIds": [
        20,
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-21-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "What does Cosmos DB latest-version change feed omit?",
      "answers": [
        "Latest version mode - the default. Current state of each changed item. Deletes are not captured. Unlimited retention."
      ],
      "origin": "original",
      "legacyIds": [
        21
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-21-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "What does Cosmos DB all-versions-and-deletes change feed require?",
      "answers": [
        "All versions and deletes mode - every create, update and delete. Requires continuous backups. NoSQL API only."
      ],
      "origin": "original",
      "legacyIds": [
        21
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-21-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "What state does a Cosmos DB lease container store?",
      "answers": [
        "Checkpoints/continuation state and partition ownership. Processor instances use leases to divide the monitored container's work; a lease has one owner at a time."
      ],
      "origin": "original",
      "legacyIds": [
        21,
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-21-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "Which partition key is used for a partitioned Cosmos DB lease container?",
      "answers": [
        "A partitioned lease container needs /id as its partition key."
      ],
      "origin": "original",
      "legacyIds": [
        21
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-22-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "Which Cosmos DB indexing modes are available in the policy?",
      "answers": [
        "indexingMode: consistent (default, index updates synchronously with each write) or none."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-22-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "What does the default Cosmos DB included path /* mean?",
      "answers": [
        "includedPaths default is /* - every property of every item."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-22-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "Which system-property path is excluded by the default Cosmos DB indexing policy?",
      "answers": [
        "excludedPaths default contains /_etag/?"
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-22-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "Which Cosmos DB indexing path wins when inclusion and exclusion overlap?",
      "answers": [
        "The more specific path wins when a path is in both lists."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-22-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "How can indexing fewer Cosmos DB properties reduce write RU cost?",
      "answers": [
        "To cut write RUs: exclude the paths no query filters on. Adding included paths while leaving /* in place is a no-op."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-23-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "How is a CosmosClient created?",
      "answers": [
        "CosmosClient - created first, from the account endpoint and key (or a connection string). It connects lazily, on the first operation."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-23-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "Which Cosmos DB SDK object performs item CRUD and queries?",
      "answers": [
        "Container (Python ContainerProxy) - database.get_container_client(\"name\"), .NET GetContainer(). Runs item CRUD and queries: create_item, read_item, upsert_item, delete_item, query_items."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-23-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "What is the Python SDK sequence for querying an existing Cosmos DB container?",
      "answers": [
        "Python order: create the client -> name the database -> get the container -> run the query."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-23-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "Should DatabaseProxy and ContainerProxy be constructed directly?",
      "answers": [
        "DatabaseProxy and ContainerProxy are NOT constructed directly - the client hands them out. An indexing policy is container configuration, not an SDK object."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-24-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "How should a Cosmos DB document represent an embedding?",
      "answers": [
        "Store each embedding as an array of numbers, NOT a Base64 string. The vector policy sets path, dataType, dimensions, distanceFunction."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-24-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "Does a Cosmos DB composite index accelerate VectorDistance queries?",
      "answers": [
        "Vector index - makes VectorDistance faster and cheaper in RU. A composite index does NOT serve vector distance."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-24-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "Why exclude an embedding array from ordinary Cosmos DB property indexing?",
      "answers": [
        "Exclude the vector path (/embedding/*) from the regular index - indexing it wastes storage and raises write RU."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-24-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "How can lower-precision vector representations reduce Cosmos DB storage?",
      "answers": [
        "Lower precision - float16 cuts vector storage 50%; quantizedFlat and diskANN compress vectors."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-24-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "What Cosmos DB SQL pattern returns the nearest five embeddings?",
      "answers": [
        "Query: SELECT TOP 5 c.id, VectorDistance(c.embedding, @q) AS score FROM c ORDER BY VectorDistance(c.embedding, @q)."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-24-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "Is a vector embedding policy part of a Cosmos DB SQL query?",
      "answers": [
        "Strong consistency, OFFSET, DISTINCT, GROUP BY: no help. The vector policy is container setup, NOT part of the query."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-25-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "What are the four parts of a Cosmos DB change feed processor?",
      "answers": [
        "Parts - monitored container, lease container, compute instance, delegate (your handler code)."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-25-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "How do several Cosmos DB change feed processor instances divide work?",
      "answers": [
        "Scale out - more instances with the same lease container, the same processor name and different instance names. Leases spread evenly."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-25-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "Which change feed model calls a handler without repeated full-container scans?",
      "answers": [
        "Push model (processor or Azure Functions trigger) reacts to inserts and updates - no scheduled full scans or SELECT polling."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-25-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "How can Python consume Cosmos DB change feed without a native change feed processor client?",
      "answers": [
        "The processor is .NET and Java only. Python and Node.js use the pull model: query_items_change_feed plus a continuation token."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-25-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "Does stronger consistency distribute change feed work among workers?",
      "answers": [
        "Strong consistency and autoscale throughput do NOT distribute work."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which pgvector operator and index operator class implement Euclidean distance?",
      "answers": [
        "<-> Euclidean / L2 -> vector_l2_ops"
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which pgvector operator and index operator class implement cosine distance?",
      "answers": [
        "<=> cosine -> vector_cosine_ops"
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which pgvector operator and index operator class implement negative inner product?",
      "answers": [
        "<#> negative inner product -> vector_ip_ops"
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Why must a pgvector query operator match its index operator class?",
      "answers": [
        "The index operator class must match the operator in the query, or the index is ignored."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "What is the indexed-dimension limit for pgvector's vector type in HNSW and IVFFlat?",
      "answers": [
        "2,000 dimensions for vector. Other representations, such as halfvec, have different limits; pg_diskann is a separate extension."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-6-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "What extension name must be allow-listed for pgvector on Azure PostgreSQL?",
      "answers": [
        "Allowlist the extension in azure.extensions as vector, not pgvector."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-26-7-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which PostgreSQL columns use metadata indexes rather than vector indexes?",
      "answers": [
        "B-tree is for metadata columns; a vector index is for the embedding column. Never the reverse."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-27-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "Which port connects through built-in PgBouncer on Azure PostgreSQL?",
      "answers": [
        "Port 6432 for PgBouncer. Direct PostgreSQL is 5432. Same hostname."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-27-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "How is built-in PgBouncer enabled on Azure PostgreSQL?",
      "answers": [
        "Enable with the server parameter pgbouncer.enabled = true. No restart needed."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-27-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "What is the default pool mode of Azure's built-in PgBouncer?",
      "answers": [
        "Azure default pool_mode = transaction (open-source PgBouncer defaults to session)."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-27-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "What are common built-in PgBouncer pool and timeout defaults?",
      "answers": [
        "default_pool_size 50, max_client_conn 5000, server_idle_timeout 600."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-27-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "Which Azure PostgreSQL compute tiers support built-in PgBouncer?",
      "answers": [
        "Not available on the Burstable tier. Supported on General Purpose and Memory Optimized."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-27-6-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "Why is increasing max_connections different from adding a connection pool?",
      "answers": [
        "Raising max_connections is not pooling - more connections means more contention."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-28-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How can an application authenticate to Azure PostgreSQL with managed identity?",
      "answers": [
        "Managed identity - the app gets a Microsoft Entra token and passes it as the password. No stored credentials. Map it to a role with pgaadauth_create_principal."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-28-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How does a client-side PostgreSQL connection pool reduce overhead?",
      "answers": [
        "Pooling library (psycopg_pool, Npgsql built-in pool) - reuses warm connections. A new connection costs 50-200 ms: TCP, TLS, auth and a new server process."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-28-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How should a PostgreSQL connection pool be bounded across app instances?",
      "answers": [
        "Set a maximum pool size - cap it at what the server allows divided by app instances (1,000 / 10 -> 100 each). Too large or unlimited overwhelms the server."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-28-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How should user input be passed to a PostgreSQL query?",
      "answers": [
        "Parameterized query - %s placeholders, values passed as a tuple: cur.execute(sql, (doc_id,)). NEVER string formatting or concatenation; hand-escaping quotes is NOT the fix."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-28-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "Which changes do not remove the cost of opening a new PostgreSQL connection?",
      "answers": [
        "Raising max_connections or shared_buffers, or adding read replicas, does NOT remove connection setup cost. Retry with backoff is for transient faults."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-29-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "Which PostgreSQL column types suit embeddings and dates?",
      "answers": [
        "Columns - embedding as vector(n), NOT varchar, text or JSON. Dates as timestamptz, NOT free-form text. Typed columns filter and index reliably."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-29-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "What is the build sequence for bulk-loaded PostgreSQL vector retrieval?",
      "answers": [
        "Build order - create table -> load data -> create indexes -> ANALYZE -> query. Loading before indexing is faster and gives a better index layout."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-29-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "What SQL retrieves the five closest Finance documents by cosine distance?",
      "answers": [
        "Query - WHERE department = 'Finance' ORDER BY embedding <=> $1 LIMIT 5. Use the exact match: ILIKE 'fin%' matches more than Finance."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-29-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "How can a B-tree index help a metadata-filtered PostgreSQL vector query?",
      "answers": [
        "It can narrow rows efficiently when the planner chooses a filter-first plan. Inspect EXPLAIN; approximate-index filtering and recall depend on the chosen plan."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-29-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "Which index belongs on a PostgreSQL embedding column?",
      "answers": [
        "Vector index (hnsw, ivfflat, diskann) on the embedding - fewer distance calculations. Either index alone can lower P95. More dimensions ADD compute."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-30-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Which resource is the first candidate when vector distance computation is CPU-bound?",
      "answers": [
        "CPU-bound latency (distance math, CPU over 70%) -> scale vCores."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-30-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Which resource can help when a vector-index working set no longer fits in memory?",
      "answers": [
        "Index working set no longer fits (cache hit ratio below 99%, more disk reads) -> more memory."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-30-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "How do typical Azure PostgreSQL tiers differ in memory per vCore?",
      "answers": [
        "Memory per vCore: Burstable 2 GB, General Purpose 4 GB, Memory Optimized 8 GB."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-30-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Which Azure PostgreSQL feature handles growing storage needs?",
      "answers": [
        "Growing embeddings -> storage autogrow. Premium SSD only; grows online unless it crosses 4,096 GiB."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-30-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "How should a PostgreSQL memory scale-up be validated?",
      "answers": [
        "Prove it: baseline P95 plus EXPLAIN ANALYZE -> check memory pressure and cache hit ratio -> move to more memory per vCore -> rerun the same benchmark."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-30-6-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Why do max_connections and backup retention not fix a CPU-bound vector query?",
      "answers": [
        "max_connections and read replicas do NOT cut single-query latency. Backup retention adds no capacity."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-31-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "Which Redis eviction policies consider only keys with an expiry?",
      "answers": [
        "volatile-lru, volatile-lfu, volatile-random, volatile-ttl"
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-31-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "Which Redis eviction policies can select from all keys?",
      "answers": [
        "allkeys-lru, allkeys-lfu, allkeys-random"
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-31-3-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "What does Redis noeviction do when memory is exhausted?",
      "answers": [
        "noeviction - writes fail with an error"
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-31-4-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "What happens to a volatile Redis policy when no keys have an expiry?",
      "answers": [
        "volatile-* only consider keys that have a TTL. If no key has one, nothing is evicted and writes start failing."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-31-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "Which Redis eviction policy should be checked when provisioning an Azure cache?",
      "answers": [
        "Inspect the configured maxmemory-policy for the actual service and workload. Legacy Azure Cache for Redis commonly uses volatile-lru; the Managed Redis vector lab requires noeviction."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-31-6-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "How do Redis LRU and LFU rank keys for eviction?",
      "answers": [
        "LRU ranks by recency of last access (approximate, sampled via maxmemory-samples). LFU ranks by count."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-32-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Expiration vs eviction",
      "question": "What triggers Redis key expiration?",
      "answers": [
        "The per-key expiry time, configured with commands such as EXPIRE or SET with EX. Expiration does not require memory pressure."
      ],
      "origin": "original",
      "legacyIds": [
        32
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 32",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-32-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Expiration vs eviction",
      "question": "What triggers Redis key eviction?",
      "answers": [
        "Instance memory pressure at maxmemory. maxmemory-policy determines eligible keys and the selection strategy; per-key expiration is a separate mechanism."
      ],
      "origin": "original",
      "legacyIds": [
        32,
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 32",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-33-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis ports by tier",
      "question": "Which Azure Redis services use port 10000?",
      "answers": [
        "Azure Managed Redis and the legacy Azure Cache for Redis Enterprise/Enterprise Flash tiers. The port identifies the service endpoint; it does not by itself establish whether TLS is enabled."
      ],
      "origin": "original",
      "legacyIds": [
        33
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 33",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-33-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis ports by tier",
      "question": "Which ports are used by Azure Cache for Redis Basic, Standard and Premium?",
      "answers": [
        "Azure Cache for Redis, Basic / Standard / Premium: 6380 TLS, 6379 non-TLS."
      ],
      "origin": "original",
      "legacyIds": [
        33
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 33",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-34-1-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Which RediSearch schema field type supports KNN vector search?",
      "answers": [
        "Schema field types: TEXT, TAG, NUMERIC, GEO, VECTOR. Only VECTOR supports KNN."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-34-2-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "How do Redis FLAT and HNSW vector indexes differ?",
      "answers": [
        "Algorithms: FLAT (exact brute force, 100% recall) and HNSW (approximate, sub-linear - the answer for \"at scale\")."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-34-3-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Which vector distance metrics does RediSearch support?",
      "answers": [
        "DISTANCE_METRIC: COSINE, L2, IP."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-34-4-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "When must RediSearch be enabled on an Azure Managed Redis instance?",
      "answers": [
        "Modules are enabled at creation time only and cannot be added later. Not on Flash Optimized."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-34-5-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Which clustering and eviction policies are required for the Azure Redis vector lab?",
      "answers": [
        "Requires the Enterprise clustering policy and the noeviction eviction policy."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-34-6-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Does FT.CREATE index existing matching Redis keys?",
      "answers": [
        "FT.CREATE backfills existing keys unless SKIPINITIALSCAN."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-35-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "How does the cache-aside pattern work?",
      "answers": [
        "Cache-aside - read Redis; on a miss, query the database and write the result with a TTL. Repeat requests skip the database."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-35-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "How can a Redis cache entry be given a fixed lifetime?",
      "answers": [
        "TTL - SETEX key 600 value, or HSET then EXPIRE key 600. 600 s = 10 minutes, 86400 s = 24 hours. The lifetime counts from when it is set."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-35-3-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "How should cached data be invalidated after its source changes?",
      "answers": [
        "Invalidate on write - update the source, then DEL the related keys; the next read reloads. Find keys by pattern with SCAN, NOT KEYS (KEYS blocks)."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-35-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "Which Redis settings do not directly keep source data fresh?",
      "answers": [
        "Memory size, eviction policies and persistence address capacity or durability. Notifications report events but do not themselves invalidate data when an external source changes."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-36-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "How is sliding expiration implemented in Redis?",
      "answers": [
        "EXPIRE on each read (sliding expiration) - every hit pushes the TTL out, so hot keys stay and cold keys expire. Needs NO memory pressure."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-36-4-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "How does Redis volatile-ttl choose an eviction candidate?",
      "answers": [
        "volatile-ttl evicts the keys with the shortest remaining TTL. It never extends a TTL."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-36-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "What does Redis PERSIST do?",
      "answers": [
        "It removes the expiry from a key, so the key no longer expires automatically."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-36-6-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "What do Redis TTL return values -1 and -2 mean?",
      "answers": [
        "TTL returns -1 when a key has no expiry and -2 when the key does not exist."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-37-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "How can an embedding and its metadata be stored in one Redis hash?",
      "answers": [
        "Store - numpy float32 array -> tobytes() -> HSET doc:1 with a mapping of the embedding bytes plus metadata. Vector and metadata share one hash."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-37-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "What is required to search embeddings stored in Redis?",
      "answers": [
        "HSET only stores. Search needs an index: create_index (FT.CREATE) with a VECTOR field - FLAT or HNSW, TYPE, DIM, DISTANCE_METRIC - and a key prefix such as doc:."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-37-4-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "What Redis query shape retrieves the nearest embedding vectors?",
      "answers": [
        "Query - *=>[KNN 5 @embedding $query_vec AS score] with dialect 2. The query vector must have the index DIM."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-37-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "How is TLS enabled when connecting redis-py to Azure Managed Redis?",
      "answers": [
        "Connect - host name.region.redis.azure.net, port 10000, ssl=True. r.expire(key, 600) = 10 minutes."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "prep-cosmos-002",
      "domain": 2,
      "title": "Cosmos multi-region writes",
      "category": "cosmos",
      "question": "Which Cosmos DB capability allows an account to accept writes in several regions?",
      "answers": [
        "Multi-region writes, with an appropriate conflict-resolution strategy."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-002",
          "url": "https://ai200prep.com/questions/cosmos-002/"
        }
      ]
    },
    {
      "id": "prep-cosmos-004",
      "domain": 2,
      "title": "Cosmos capacity model",
      "category": "cosmos",
      "question": "How do Cosmos DB provisioned throughput and serverless differ?",
      "answers": [
        "Provisioned throughput allocates RU/s capacity. Serverless bills for consumed request units without continuously reserving a throughput amount."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-004",
          "url": "https://ai200prep.com/questions/cosmos-004/"
        }
      ]
    },
    {
      "id": "prep-cosmos-006",
      "domain": 2,
      "title": "Logical partitioning",
      "category": "cosmos",
      "question": "What should a Cosmos DB partition key balance?",
      "answers": [
        "Distribution across many logical keys and efficient access patterns. A useful key avoids hot partitions while aligning common point reads and filtered queries with partition values."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-006",
          "url": "https://ai200prep.com/questions/cosmos-006/"
        },
        {
          "label": "AI-200 Prep · p-cos-003",
          "url": "https://ai200prep.com/questions/p-cos-003/"
        },
        {
          "label": "AI-200 Prep · c-ct-001",
          "url": "https://ai200prep.com/questions/c-ct-001/"
        }
      ]
    },
    {
      "id": "prep-cosmos-008",
      "domain": 2,
      "title": "Cross-partition query",
      "category": "cosmos",
      "question": "What happens when a Cosmos DB query cannot be routed to one partition?",
      "answers": [
        "It can fan out across partitions, usually increasing coordination and request-unit cost compared with a targeted read."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-008",
          "url": "https://ai200prep.com/questions/cosmos-008/"
        }
      ]
    },
    {
      "id": "prep-cosmos-013",
      "domain": 2,
      "title": "Cosmos document expiry",
      "category": "cosmos",
      "question": "Which Cosmos DB feature automatically expires items after a configured lifetime?",
      "answers": [
        "Time to Live (TTL), enabled through the container policy and optionally overridden per item."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-013",
          "url": "https://ai200prep.com/questions/cosmos-013/"
        },
        {
          "label": "AI-200 Prep · p-cos-008",
          "url": "https://ai200prep.com/questions/p-cos-008/"
        }
      ]
    },
    {
      "id": "prep-p-cos-010",
      "domain": 2,
      "title": "Composite ordering",
      "category": "cosmos",
      "question": "Which Cosmos DB index supports ORDER BY across more than one property?",
      "answers": [
        "A composite index matching the required properties and ordering. This is different from a vector index."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-cos-010",
          "url": "https://ai200prep.com/questions/p-cos-010/"
        }
      ]
    },
    {
      "id": "prep-c-ct-002",
      "domain": 2,
      "title": "Cosmos integrated cache",
      "category": "cosmos",
      "question": "Which Cosmos DB component hosts its integrated cache for repeated supported reads?",
      "answers": [
        "A dedicated gateway. Cache behavior and eligibility depend on the supported operation and consistency settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · c-ct-002",
          "url": "https://ai200prep.com/questions/c-ct-002/"
        }
      ]
    },
    {
      "id": "prep-pg-001",
      "domain": 2,
      "title": "PostgreSQL zone redundancy",
      "category": "postgresql",
      "question": "What does zone-redundant high availability add to Azure PostgreSQL Flexible Server?",
      "answers": [
        "A standby in another availability zone and managed failover. It is not a readable reporting replica."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-001",
          "url": "https://ai200prep.com/questions/pg-001/"
        },
        {
          "label": "AI-200 Prep · pg-008",
          "url": "https://ai200prep.com/questions/pg-008/"
        },
        {
          "label": "AI-200 Prep · pg-035",
          "url": "https://ai200prep.com/questions/pg-035/"
        }
      ]
    },
    {
      "id": "prep-pg-013",
      "domain": 2,
      "title": "Read scale-out",
      "category": "postgresql",
      "question": "Which Azure PostgreSQL feature scales read-only reporting separately from the primary?",
      "answers": [
        "Read replicas, with application routing that accounts for replication lag and read-only access."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-013",
          "url": "https://ai200prep.com/questions/pg-013/"
        },
        {
          "label": "AI-200 Prep · p-pg-006",
          "url": "https://ai200prep.com/questions/p-pg-006/"
        }
      ]
    },
    {
      "id": "prep-pg-003",
      "domain": 2,
      "title": "HNSW versus IVFFlat",
      "category": "postgresql",
      "question": "How does HNSW generally trade index build cost for query quality compared with IVFFlat?",
      "answers": [
        "It typically needs more memory and build work, but can offer a better query speed/recall trade-off without IVFFlat's clustering training step."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-003",
          "url": "https://ai200prep.com/questions/pg-003/"
        }
      ]
    },
    {
      "id": "prep-p-pg-003",
      "domain": 2,
      "title": "HNSW construction",
      "category": "postgresql",
      "question": "Which pgvector HNSW parameters control graph construction?",
      "answers": [
        "m and ef_construction. Higher values can improve recall at the cost of memory and index build work."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-003",
          "url": "https://ai200prep.com/questions/p-pg-003/"
        }
      ]
    },
    {
      "id": "prep-p-pg-004",
      "domain": 2,
      "title": "HNSW query effort",
      "category": "postgresql",
      "question": "Which pgvector setting adjusts HNSW candidate search effort at query time?",
      "answers": [
        "hnsw.ef_search. A higher value generally improves recall while increasing query work."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-004",
          "url": "https://ai200prep.com/questions/p-pg-004/"
        },
        {
          "label": "AI-200 Prep · pg-026",
          "url": "https://ai200prep.com/questions/pg-026/"
        }
      ]
    },
    {
      "id": "prep-pg-016",
      "domain": 2,
      "title": "IVFFlat construction",
      "category": "postgresql",
      "question": "What does pgvector's IVFFlat lists parameter configure?",
      "answers": [
        "The number of clusters or inverted lists created during index construction."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-016",
          "url": "https://ai200prep.com/questions/pg-016/"
        }
      ]
    },
    {
      "id": "prep-pg-034",
      "domain": 2,
      "title": "IVFFlat query effort",
      "category": "postgresql",
      "question": "Which pgvector setting selects how many IVFFlat lists are searched?",
      "answers": [
        "ivfflat.probes. Searching more lists can improve recall while increasing latency."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-034",
          "url": "https://ai200prep.com/questions/pg-034/"
        },
        {
          "label": "AI-200 Prep · pg-006",
          "url": "https://ai200prep.com/questions/pg-006/"
        }
      ]
    },
    {
      "id": "prep-p-pg-005",
      "domain": 2,
      "title": "IVFFlat training data",
      "category": "postgresql",
      "question": "Why should an IVFFlat index be built with representative data already present?",
      "answers": [
        "The index derives cluster centers from the existing vectors. Poor or absent training data can produce an ineffective index layout."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-005",
          "url": "https://ai200prep.com/questions/p-pg-005/"
        }
      ]
    },
    {
      "id": "prep-pg-010",
      "domain": 2,
      "title": "PostgreSQL hybrid search",
      "category": "postgresql",
      "question": "How can PostgreSQL combine keyword and embedding relevance?",
      "answers": [
        "Combine tsvector full-text search with pgvector similarity, then fuse rankings or scores, for example with reciprocal rank fusion."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-010",
          "url": "https://ai200prep.com/questions/pg-010/"
        },
        {
          "label": "AI-200 Prep · p-pg-010",
          "url": "https://ai200prep.com/questions/p-pg-010/"
        }
      ]
    },
    {
      "id": "prep-p-pg-012",
      "domain": 2,
      "title": "Actual query execution",
      "category": "postgresql",
      "question": "What does EXPLAIN ANALYZE measure that EXPLAIN alone does not?",
      "answers": [
        "It actually executes the statement and reports observed timing and row counts. Take care with statements that modify data."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-012",
          "url": "https://ai200prep.com/questions/p-pg-012/"
        }
      ]
    },
    {
      "id": "prep-p-pg-013",
      "domain": 2,
      "title": "Vacuum maintenance",
      "category": "postgresql",
      "question": "What does ordinary PostgreSQL VACUUM do with dead row versions?",
      "answers": [
        "It makes their storage reusable and helps maintain the table. It does not generally return all that space to the operating system as VACUUM FULL can."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-013",
          "url": "https://ai200prep.com/questions/p-pg-013/"
        },
        {
          "label": "AI-200 Prep · pg-014",
          "url": "https://ai200prep.com/questions/pg-014/"
        }
      ]
    },
    {
      "id": "prep-pg-021",
      "domain": 2,
      "title": "PostgreSQL recovery",
      "category": "postgresql",
      "question": "What does PostgreSQL point-in-time restore recover?",
      "answers": [
        "Database state at a chosen point within the supported backup retention window, using backups and write-ahead logs."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-021",
          "url": "https://ai200prep.com/questions/pg-021/"
        },
        {
          "label": "AI-200 Prep · p-pg-014",
          "url": "https://ai200prep.com/questions/p-pg-014/"
        }
      ]
    },
    {
      "id": "prep-p-pg-016",
      "domain": 2,
      "title": "JSONB indexing",
      "category": "postgresql",
      "question": "Which PostgreSQL index supports JSONB containment queries such as @>?",
      "answers": [
        "A suitable GIN index; jsonb_path_ops is an operator class for a narrower supported set of operations than the default jsonb_ops."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-016",
          "url": "https://ai200prep.com/questions/p-pg-016/"
        }
      ]
    },
    {
      "id": "prep-pg-023",
      "domain": 2,
      "title": "Minimum TLS version",
      "category": "postgresql",
      "question": "Which Azure PostgreSQL server parameter sets the minimum TLS protocol version?",
      "answers": [
        "ssl_min_protocol_version, within the server's supported settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-023",
          "url": "https://ai200prep.com/questions/pg-023/"
        }
      ]
    },
    {
      "id": "prep-p-pg-017",
      "domain": 2,
      "title": "Index build memory",
      "category": "postgresql",
      "question": "Which PostgreSQL setting provides memory for maintenance work such as an HNSW index build?",
      "answers": [
        "maintenance_work_mem. Size it within the memory available to the server and concurrent work."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-017",
          "url": "https://ai200prep.com/questions/p-pg-017/"
        }
      ]
    },
    {
      "id": "prep-pg-027",
      "domain": 2,
      "title": "Database scheduling",
      "category": "postgresql",
      "question": "Which PostgreSQL extension provides cron-style database job scheduling?",
      "answers": [
        "pg_cron, where supported and enabled on the server."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-027",
          "url": "https://ai200prep.com/questions/pg-027/"
        }
      ]
    },
    {
      "id": "prep-pg-029",
      "domain": 2,
      "title": "Half-precision embeddings",
      "category": "postgresql",
      "question": "What does pgvector halfvec change compared with vector?",
      "answers": [
        "It stores components as 16-bit rather than 32-bit floating-point values, reducing component storage at the cost of precision."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-029",
          "url": "https://ai200prep.com/questions/pg-029/"
        },
        {
          "label": "AI-200 Prep · p-pg-021",
          "url": "https://ai200prep.com/questions/p-pg-021/"
        }
      ]
    },
    {
      "id": "prep-p-pg-020",
      "domain": 2,
      "title": "Persistent query statistics",
      "category": "postgresql",
      "question": "What does Azure PostgreSQL Query Store retain for performance analysis?",
      "answers": [
        "Query execution statistics and associated query information over time, so recurring regressions can be investigated."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-020",
          "url": "https://ai200prep.com/questions/p-pg-020/"
        }
      ]
    },
    {
      "id": "prep-p-pg-023",
      "domain": 2,
      "title": "Required encrypted transport",
      "category": "postgresql",
      "question": "Which Azure PostgreSQL server setting requires secure client transport?",
      "answers": [
        "require_secure_transport, enabled with supported TLS settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-023",
          "url": "https://ai200prep.com/questions/p-pg-023/"
        }
      ]
    },
    {
      "id": "prep-p-pg-025",
      "domain": 2,
      "title": "Bulk embedding ingestion",
      "category": "postgresql",
      "question": "Which PostgreSQL operation efficiently loads large batches of embedding rows?",
      "answers": [
        "COPY, including binary COPY where appropriate. Build secondary indexes after the load when the ingestion plan permits."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-025",
          "url": "https://ai200prep.com/questions/p-pg-025/"
        }
      ]
    },
    {
      "id": "prep-redis-002",
      "domain": 2,
      "title": "Redis persistence",
      "category": "redis",
      "question": "How do Redis RDB and AOF persistence differ?",
      "answers": [
        "RDB writes snapshots. AOF records write operations for replay; its possible data-loss window depends on the configured persistence/fsync behavior."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-002",
          "url": "https://ai200prep.com/questions/redis-002/"
        },
        {
          "label": "AI-200 Prep · p-red-014",
          "url": "https://ai200prep.com/questions/p-red-014/"
        },
        {
          "label": "AI-200 Prep · redis-015",
          "url": "https://ai200prep.com/questions/redis-015/"
        }
      ]
    },
    {
      "id": "prep-redis-004",
      "domain": 2,
      "title": "Sorted leaderboard",
      "category": "redis",
      "question": "Which Redis data type maintains members ordered by a score?",
      "answers": [
        "A sorted set, commonly written as ZSET."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-004",
          "url": "https://ai200prep.com/questions/redis-004/"
        },
        {
          "label": "AI-200 Prep · p-red-008",
          "url": "https://ai200prep.com/questions/p-red-008/"
        }
      ]
    },
    {
      "id": "prep-p-red-003",
      "domain": 2,
      "title": "Semantic cache",
      "category": "redis",
      "question": "How does a semantic cache reuse an answer for a paraphrased prompt?",
      "answers": [
        "Embed the prompt, search cached embeddings and accept a match only within an empirically validated similarity threshold."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-003",
          "url": "https://ai200prep.com/questions/p-red-003/"
        },
        {
          "label": "AI-200 Prep · p-red-024",
          "url": "https://ai200prep.com/questions/p-red-024/"
        }
      ]
    },
    {
      "id": "prep-p-red-004",
      "domain": 2,
      "title": "Fixed-window limiting",
      "category": "redis",
      "question": "How can Redis count requests in a fixed one-minute rate-limit window?",
      "answers": [
        "Use a key that includes the window and increment it with INCR, setting its expiry atomically or in a suitably protected operation."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-004",
          "url": "https://ai200prep.com/questions/p-red-004/"
        }
      ]
    },
    {
      "id": "prep-redis-022",
      "domain": 2,
      "title": "Sliding-window limiting",
      "category": "redis",
      "question": "How can a Redis sorted set implement a sliding-window rate counter?",
      "answers": [
        "Add timestamped requests, remove entries older than the window and count the remaining members, with atomic coordination as needed."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-022",
          "url": "https://ai200prep.com/questions/redis-022/"
        }
      ]
    },
    {
      "id": "prep-p-red-010",
      "domain": 2,
      "title": "Conditional set with expiry",
      "category": "redis",
      "question": "Which Redis SET options create an expiring key only when it does not exist?",
      "answers": [
        "NX with EX or PX, for example SET key unique-token NX EX 30. This is a lock primitive, not by itself a complete distributed-lock protocol."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-010",
          "url": "https://ai200prep.com/questions/p-red-010/"
        },
        {
          "label": "AI-200 Prep · redis-007",
          "url": "https://ai200prep.com/questions/redis-007/"
        }
      ]
    },
    {
      "id": "prep-redis-008",
      "domain": 2,
      "title": "Redis sharding",
      "category": "redis",
      "question": "What does Redis clustering distribute across shards?",
      "answers": [
        "The keyspace: different shards own different hash slots and their keys."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-008",
          "url": "https://ai200prep.com/questions/redis-008/"
        }
      ]
    },
    {
      "id": "prep-redis-009",
      "domain": 2,
      "title": "Streams versus pub/sub",
      "category": "redis",
      "question": "How do Redis Streams differ from Redis pub/sub for offline consumers?",
      "answers": [
        "Streams retain entries and support consumer groups through commands such as XADD and XREADGROUP. Pub/sub messages are ephemeral; disconnected subscribers miss them."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-009",
          "url": "https://ai200prep.com/questions/redis-009/"
        },
        {
          "label": "AI-200 Prep · p-red-012",
          "url": "https://ai200prep.com/questions/p-red-012/"
        },
        {
          "label": "AI-200 Prep · redis-019",
          "url": "https://ai200prep.com/questions/redis-019/"
        }
      ]
    },
    {
      "id": "prep-redis-016",
      "domain": 2,
      "title": "Read multiple keys",
      "category": "redis",
      "question": "Which redis-py operation retrieves several keys in one command?",
      "answers": [
        "mget([...]) for suitable string keys, subject to cluster multi-key restrictions."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-016",
          "url": "https://ai200prep.com/questions/redis-016/"
        }
      ]
    },
    {
      "id": "prep-p-red-018",
      "domain": 2,
      "title": "Command pipelining",
      "category": "redis",
      "question": "What does Redis pipelining reduce?",
      "answers": [
        "Network round trips by sending several commands before reading their replies. Pipelining alone does not make the commands one atomic transaction."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-018",
          "url": "https://ai200prep.com/questions/p-red-018/"
        }
      ]
    },
    {
      "id": "prep-p-red-020",
      "domain": 2,
      "title": "Cluster hash tags",
      "category": "redis",
      "question": "How can related Redis Cluster keys be placed in the same hash slot?",
      "answers": [
        "Give them the same non-empty hash tag in braces, such as order:{42}:items and order:{42}:status."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-020",
          "url": "https://ai200prep.com/questions/p-red-020/"
        }
      ]
    },
    {
      "id": "prep-p-red-016",
      "domain": 2,
      "title": "Cache capacity symptoms",
      "category": "redis",
      "question": "What combination suggests a Redis cache may be undersized?",
      "answers": [
        "A high eviction rate together with a falling hit ratio, interpreted alongside workload and memory metrics."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-016",
          "url": "https://ai200prep.com/questions/p-red-016/"
        }
      ]
    },
    {
      "id": "prep-p-red-011",
      "domain": 2,
      "title": "Cache stampede",
      "category": "redis",
      "question": "How can an application reduce a cache stampede when a popular key expires?",
      "answers": [
        "Coordinate repopulation with a short-lived lock or single-flight mechanism, and spread expirations with TTL jitter. Other callers can wait or use an appropriate stale value."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-011",
          "url": "https://ai200prep.com/questions/p-red-011/"
        },
        {
          "label": "AI-200 Prep · p-rd-m01",
          "url": "https://ai200prep.com/questions/p-rd-m01/"
        },
        {
          "label": "AI-200 Prep · redis-025",
          "url": "https://ai200prep.com/questions/redis-025/"
        }
      ]
    },
    {
      "id": "m-38-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid retry schedule",
      "question": "What is the Event Grid push-delivery retry schedule?",
      "answers": [
        "10 s, 30 s, 1 min, 5 min, 10 min, 30 min, 1 hr, 3 hr, 6 hr, then every 12 hours up to 24 hours, with randomization."
      ],
      "origin": "original",
      "legacyIds": [
        38
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 38",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-38-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid retry schedule",
      "question": "How long does Event Grid wait for a push endpoint response?",
      "answers": [
        "Event Grid waits 30 s for a response before queuing a retry."
      ],
      "origin": "original",
      "legacyIds": [
        38
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 38",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-38-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid retry schedule",
      "question": "Which HTTP success codes acknowledge Event Grid push delivery?",
      "answers": [
        "Only 200-204 count as a successful delivery."
      ],
      "origin": "original",
      "legacyIds": [
        38
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 38",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-39-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Which Azure-resource endpoint failures are not retried by Event Grid push delivery?",
      "answers": [
        "Azure resource endpoint: 400, 403, 413."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-39-2-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Which webhook failures are not retried by Event Grid push delivery?",
      "answers": [
        "Webhook: 400, 401, 403, 413."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-39-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Is an HTTP 404 response retried by Event Grid push delivery?",
      "answers": [
        "404 IS retried. 414 does not appear in the failure table at all."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-39-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Which limits bound Event Grid delivery retries?",
      "answers": [
        "Retry policy: max delivery attempts 1-30, default 30; event TTL 1-1440 min, default 1440. First limit hit wins."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-39-5-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "What happens to failed Event Grid events when dead-lettering is disabled?",
      "answers": [
        "Dead-lettering is off by default - without it, undelivered events are dropped. ~5 min delay to the container; dropped if the destination is unreachable for 4 hours."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-40-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "How does Event Grid filter by event type?",
      "answers": [
        "Event type - exact whole-string match on eventType."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-40-2-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "What can an Event Grid subject filter match?",
      "answers": [
        "Subject - subjectBeginsWith and subjectEndsWith only. Prefix and suffix, nothing else."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-40-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "Which Event Grid filter can inspect fields inside event data?",
      "answers": [
        "Advanced - the only filter that reads inside data. Takes operatorType, key (dot notation), value(s)."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-40-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "Which operator families do Event Grid advanced filters provide?",
      "answers": [
        "Operators: NumberGreaterThan(OrEquals), NumberLessThan(OrEquals), NumberIn / NotIn, NumberInRange / NotInRange, BoolEquals, StringContains / BeginsWith / EndsWith / In and their Not forms, IsNullOrUndefined, IsNotNull."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-40-5-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "What must be enabled to use Event Grid advanced filters on arrays?",
      "answers": [
        "Arrays need enableAdvancedFilteringOnArrays."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-41-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "What does completing a Service Bus message do?",
      "answers": [
        "Complete - deleted from the queue."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-41-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "What does abandoning a Service Bus message do?",
      "answers": [
        "Abandon - lock released, available immediately, delivery count INCREMENTS."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-41-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "How does Service Bus message deferral work?",
      "answers": [
        "Defer - stays but set aside, retrievable only by sequence number, delivery count does NOT increment."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-41-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "What does dead-lettering a Service Bus message do?",
      "answers": [
        "Dead-letter - moved to the $deadletterqueue sub-queue."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-41-5-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "How do lock expiry and lock loss differ for Service Bus delivery count?",
      "answers": [
        "Letting the lock expire behaves like abandon. Lock lost (MessageLockLostException) does not increment."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-42-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "What are Service Bus PeekLock's default and maximum lock durations?",
      "answers": [
        "Peek-lock duration default 1 minute, maximum 5 minutes, renewable."
      ],
      "origin": "original",
      "legacyIds": [
        42
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-42-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "When does Service Bus automatically dead-letter a repeatedly delivered message?",
      "answers": [
        "Max delivery count default 10. Exceeding it auto-dead-letters with reason MaxDeliveryCountExceeded."
      ],
      "origin": "original",
      "legacyIds": [
        42
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-42-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "How does Service Bus duplicate detection identify a duplicate message?",
      "answers": [
        "Duplicate detection: enabled at creation time only. Window default 10 minutes, min 20 s, max 7 days. Matches on MessageId."
      ],
      "origin": "original",
      "legacyIds": [
        42
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-42-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "What guarantees ordered Service Bus processing with competing consumers?",
      "answers": [
        "Use a session-enabled queue or subscription and the same SessionId for related messages. A plain FIFO queue does not by itself guarantee processing order across competing consumers."
      ],
      "origin": "original",
      "legacyIds": [
        42,
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-43-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "What is the setup sequence for publishing to a custom Event Grid topic?",
      "answers": [
        "Order: register the Microsoft.EventGrid provider -> create a custom topic -> create an event subscription on it, pointing at the handler."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-43-2-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "How do Event Grid custom, system and partner topics differ?",
      "answers": [
        "Custom topic - your app posts its own events to it. System topic - Azure service events (for example Storage). Partner topic - third-party SaaS events."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-43-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "What is an Event Grid domain used for?",
      "answers": [
        "Event domain - one endpoint for thousands of related topics (multitenant apps). Not part of custom topic setup."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-43-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "What does Event Grid webhook subscription validation prove?",
      "answers": [
        "Validation handshake - proves you own a webhook endpoint (validationCode, or validationUrl within 10 minutes). The Functions Event Grid trigger does it for you."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-43-5-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "Does Event Grid endpoint validation preserve undelivered events?",
      "answers": [
        "Handshake and output batching (off by default) do NOT keep rejected events. Only a dead-letter destination does."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-44-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "How are messages shared among consumers of a Service Bus queue?",
      "answers": [
        "Queue - point-to-point: each message goes to one consumer; competing consumers share the load. FIFO delivery."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-44-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "Which Service Bus entities give independent consumers their own copies?",
      "answers": [
        "Topic + subscriptions - publish/subscribe. Each subscription gets its own copy and acts like an independent virtual queue. Fan-out needs both."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-44-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "What do Service Bus subscription rules filter?",
      "answers": [
        "Rules and filters - SQL, correlation or Boolean (TrueFilter default) criteria for what a subscription receives. NOT entities."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-44-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "Where are Service Bus dead-letter queues created?",
      "answers": [
        "Dead-letter queue - automatic sub-queue of every queue and subscription. Holds messages that cannot be delivered or processed."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-44-5-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "What does Service Bus auto-forwarding do?",
      "answers": [
        "Auto-forwarding - moves messages from a queue or subscription to one other queue or topic in the same namespace. Moves, does not copy."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-45-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "ServiceBusProcessor setup",
      "question": "What is the .NET ServiceBusProcessor initialization sequence?",
      "answers": [
        "Order: new ServiceBusClient -> CreateProcessor(queueName) -> assign ProcessMessageAsync and ProcessErrorAsync -> StartProcessingAsync."
      ],
      "origin": "original",
      "legacyIds": [
        45
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 45",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-45-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "ServiceBusProcessor setup",
      "question": "Which handlers must be registered before starting a .NET ServiceBusProcessor?",
      "answers": [
        "Both handlers are mandatory - StartProcessingAsync throws InvalidOperationException if one is missing. ProcessErrorAsync receives unhandled exceptions."
      ],
      "origin": "original",
      "legacyIds": [
        45
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 45",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-45-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "ServiceBusProcessor setup",
      "question": "What are the default .NET ServiceBusProcessor receive and auto-complete settings?",
      "answers": [
        "AutoCompleteMessages - default true: completes the message after the handler finishes. ReceiveMode defaults to PeekLock."
      ],
      "origin": "original",
      "legacyIds": [
        45
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 45",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-45-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "ServiceBusProcessor setup",
      "question": "What happens when a ServiceBusProcessor message handler throws without settling?",
      "answers": [
        "Handler throws without settling -> message abandoned, NOT completed, whatever AutoCompleteMessages says."
      ],
      "origin": "original",
      "legacyIds": [
        45
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 45",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-45-5-1",
      "domain": 3,
      "category": "service-bus",
      "title": "ServiceBusProcessor setup",
      "question": "Is dead-lettering a ServiceBusProcessor initialization step?",
      "answers": [
        "Dead-lettering is a per-message call (DeadLetterMessageAsync), NOT a setup step."
      ],
      "origin": "original",
      "legacyIds": [
        45
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 45",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-46-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "What happens after Queue Storage-triggered processing repeatedly fails?",
      "answers": [
        "Queue Storage trigger: 5 attempts total including the first (maxDequeueCount in host.json), then the message goes to <queuename>-poison."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-46-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "What schedule format does an Azure Functions Timer trigger use?",
      "answers": [
        "Timer trigger: six-field NCRONTAB, seconds first (five-field is also accepted)."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-46-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "How do polling and Event Grid-based Blob triggers differ?",
      "answers": [
        "Classic blob trigger polls - up to 10 minutes latency on Consumption if idle. The Event Grid blob trigger is push-based and recommended."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-46-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "What does an Azure Functions Cosmos DB trigger use to track progress?",
      "answers": [
        "Cosmos DB trigger: reads the change feed, requires a lease container, surfaces no deletes in latest-version mode."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-47-1-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "How do Anonymous, Function and Admin HTTP authorization levels differ?",
      "answers": [
        "Anonymous - no key. Function - a function key or host key, via ?code= or the x-functions-key header. Admin - the master key."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-47-2-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "How do C# and Node.js v4 default HTTP trigger authorization levels differ?",
      "answers": [
        "Unspecified in C# defaults to Function. But in the Node.js v4 model the default is anonymous."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-47-3-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "Are Function keys enforced by the local Functions host?",
      "answers": [
        "Authorization is not enforced locally, whatever the level says."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-47-4-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "How does an HTTP trigger's methods list restrict accepted requests?",
      "answers": [
        "The method list is exhaustive: \"post\" alone means GET is rejected. Omit the list and all HTTP methods are allowed."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger supports a synchronous client response?",
      "answers": [
        "HTTP - request and response: the choice when the caller needs a synchronous reply. Serverless APIs and webhooks; add Microsoft Entra sign-in with App Service authentication."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger handles background Storage queue messages?",
      "answers": [
        "Queue Storage trigger."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-2-2",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger runs on a fixed schedule?",
      "answers": [
        "Timer trigger."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-2-3",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger reacts to Cosmos DB document changes?",
      "answers": [
        "Cosmos DB trigger, which consumes the change feed."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger reacts to pushed BlobCreated events without polling?",
      "answers": [
        "Event Grid - pushed events such as Microsoft.Storage.BlobCreated. Low latency, no polling."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "What limits the synchronous response time of an HTTP-triggered function?",
      "answers": [
        "HTTP limit: no response within 230 seconds -> the load balancer returns 502."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-48-5-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "How should slow HTTP-request work be moved into background processing?",
      "answers": [
        "Slow work: the HTTP function puts the payload on a queue and returns at once; a queue-triggered function does the work and gets the queue retries."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-49-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "How many triggers can an Azure Function have?",
      "answers": [
        "Trigger - makes the function run. Exactly one per function; it can also pass data in (a special kind of input binding)."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-49-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "What reads Blob contents into a function without Storage SDK code?",
      "answers": [
        "Input binding - passes data into the function, such as a blob's contents, with no SDK client code."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-49-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "What does an Azure Functions output binding do?",
      "answers": [
        "Output binding - writes data out, such as a new queue message. It does NOT read anything."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-49-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "Can an Azure Function have multiple optional bindings?",
      "answers": [
        "Bindings are optional; a function can have several. They avoid hardcoding access to other services."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-49-5-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "Which trigger/input/output binding combinations are supported by common Functions services?",
      "answers": [
        "Support: Timer = trigger ONLY. Queue Storage = trigger + output, no input. HTTP = trigger + output (the response). Blob and Cosmos DB = trigger, input and output."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-50-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Function app configuration",
      "question": "What is local.settings.json used for?",
      "answers": [
        "local.settings.json - local runs ONLY; Azure reads app settings, NOT this file. Excluded by the default .gitignore."
      ],
      "origin": "original",
      "legacyIds": [
        50
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-51-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "What is the secure deployment order for a Function App using Key Vault?",
      "answers": [
        "Order: storage account -> function app -> managed identity + Key Vault access -> app settings with Key Vault references -> deploy code."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-51-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "What role does AzureWebJobsStorage play in a Function App?",
      "answers": [
        "Storage first - every function app needs a storage account (Blob, Queue and Table), set in AzureWebJobsStorage."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-51-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "Why must identity permissions be configured before Key Vault references can resolve?",
      "answers": [
        "Identity before references - a reference resolves only once the identity can read the secret."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-51-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "How can GitHub Actions deploy both Bicep infrastructure and Function code?",
      "answers": [
        "GitHub Actions - YAML workflow in /.github/workflows: azure/login (OpenID Connect recommended), azure/arm-deploy for the Bicep file, Azure/functions-action for the code."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-51-5-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "Why does Core Tools publishing not replace infrastructure-as-code deployment?",
      "answers": [
        "Not declarative: Azure CLI commands are imperative steps. Core Tools publish and local Git push code only to an app that already exists."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "prep-eh-001",
      "domain": 3,
      "title": "Streaming ingestion",
      "category": "event-hubs",
      "question": "What workload is Azure Event Hubs designed to ingest?",
      "answers": [
        "High-volume event streams, such as telemetry, with retention for replay and independent consumers."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eh-001",
          "url": "https://ai200prep.com/questions/eh-001/"
        },
        {
          "label": "AI-200 Prep · p-eh-013",
          "url": "https://ai200prep.com/questions/p-eh-013/"
        }
      ]
    },
    {
      "id": "prep-p-eh-002",
      "domain": 3,
      "title": "Event Hubs ordering",
      "category": "event-hubs",
      "question": "Within what boundary does Event Hubs preserve event order?",
      "answers": [
        "Within one partition, not across the whole event hub."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-002",
          "url": "https://ai200prep.com/questions/p-eh-002/"
        },
        {
          "label": "AI-200 Prep · eh-005",
          "url": "https://ai200prep.com/questions/eh-005/"
        }
      ]
    },
    {
      "id": "prep-p-eh-003",
      "domain": 3,
      "title": "Partition-key routing",
      "category": "event-hubs",
      "question": "How are related Event Hubs events kept in the same ordered partition?",
      "answers": [
        "Use a stable partition key, such as a device ID, so those events are routed to the same partition."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-003",
          "url": "https://ai200prep.com/questions/p-eh-003/"
        },
        {
          "label": "AI-200 Prep · eh-013",
          "url": "https://ai200prep.com/questions/eh-013/"
        },
        {
          "label": "AI-200 Prep · c-fb-005",
          "url": "https://ai200prep.com/questions/c-fb-005/"
        }
      ]
    },
    {
      "id": "prep-p-eh-001",
      "domain": 3,
      "title": "Consumer parallelism",
      "category": "event-hubs",
      "question": "What bounds active partition-processing parallelism within one Event Hubs consumer group?",
      "answers": [
        "Partition count: a coordinated consumer group cannot assign the same partition to multiple active partition owners for parallel processing."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-001",
          "url": "https://ai200prep.com/questions/p-eh-001/"
        },
        {
          "label": "AI-200 Prep · p-eh-024",
          "url": "https://ai200prep.com/questions/p-eh-024/"
        }
      ]
    },
    {
      "id": "prep-eh-002",
      "domain": 3,
      "title": "Independent stream readers",
      "category": "event-hubs",
      "question": "How can two applications read the same Event Hubs stream independently?",
      "answers": [
        "Use separate consumer groups, with independent positions/checkpoints and retention long enough for the required replay."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eh-002",
          "url": "https://ai200prep.com/questions/eh-002/"
        },
        {
          "label": "AI-200 Prep · p-eh-005",
          "url": "https://ai200prep.com/questions/p-eh-005/"
        },
        {
          "label": "AI-200 Prep · c-fb-004",
          "url": "https://ai200prep.com/questions/c-fb-004/"
        },
        {
          "label": "AI-200 Prep · eh-009",
          "url": "https://ai200prep.com/questions/eh-009/"
        }
      ]
    },
    {
      "id": "prep-p-eh-004",
      "domain": 3,
      "title": "Stream checkpoint",
      "category": "event-hubs",
      "question": "What does an Event Hubs checkpoint record?",
      "answers": [
        "The processed position within a partition, so processing can resume after a restart or partition ownership change."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-004",
          "url": "https://ai200prep.com/questions/p-eh-004/"
        }
      ]
    },
    {
      "id": "prep-p-eh-006",
      "domain": 3,
      "title": "Automatic stream capture",
      "category": "event-hubs",
      "question": "Which Event Hubs feature writes incoming events to Blob Storage or Data Lake without custom consumer code?",
      "answers": [
        "Event Hubs Capture."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-006",
          "url": "https://ai200prep.com/questions/p-eh-006/"
        },
        {
          "label": "AI-200 Prep · eh-004",
          "url": "https://ai200prep.com/questions/eh-004/"
        }
      ]
    },
    {
      "id": "prep-p-eh-007",
      "domain": 3,
      "title": "Event Hubs auto-inflate",
      "category": "event-hubs",
      "question": "What does Event Hubs Standard auto-inflate increase during demand spikes?",
      "answers": [
        "Provisioned throughput units, up to the configured upper bound. It is not a substitute for designing partitions and consumers."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-007",
          "url": "https://ai200prep.com/questions/p-eh-007/"
        }
      ]
    },
    {
      "id": "prep-p-eh-008",
      "domain": 3,
      "title": "Partition count planning",
      "category": "event-hubs",
      "question": "Can an Event Hubs partition count normally be reduced in place?",
      "answers": [
        "No. Plan the count for the expected workload and check the capabilities of the chosen tier before increasing it."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-008",
          "url": "https://ai200prep.com/questions/p-eh-008/"
        }
      ]
    },
    {
      "id": "prep-eh-006",
      "domain": 3,
      "title": "Stream reader permission",
      "category": "event-hubs",
      "question": "Which Event Hubs data-plane role allows an app identity to consume events?",
      "answers": [
        "Azure Event Hubs Data Receiver."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eh-006",
          "url": "https://ai200prep.com/questions/eh-006/"
        },
        {
          "label": "AI-200 Prep · p-eh-025",
          "url": "https://ai200prep.com/questions/p-eh-025/"
        }
      ]
    },
    {
      "id": "prep-p-eh-014",
      "domain": 3,
      "title": "Stream sender permission",
      "category": "event-hubs",
      "question": "Which Event Hubs data-plane role allows an app identity to publish events?",
      "answers": [
        "Azure Event Hubs Data Sender."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-014",
          "url": "https://ai200prep.com/questions/p-eh-014/"
        }
      ]
    },
    {
      "id": "prep-p-eh-010",
      "domain": 3,
      "title": "Kafka clients",
      "category": "event-hubs",
      "question": "Which Event Hubs endpoint supports compatible Kafka clients?",
      "answers": [
        "The Kafka protocol endpoint, with appropriate authentication and supported client settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-010",
          "url": "https://ai200prep.com/questions/p-eh-010/"
        }
      ]
    },
    {
      "id": "prep-p-eh-011",
      "domain": 3,
      "title": "Event retention",
      "category": "event-hubs",
      "question": "What happens after an Event Hubs event leaves the retention window?",
      "answers": [
        "It is no longer available for replay from the event hub. Capture or another archive is needed for longer-term storage."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-011",
          "url": "https://ai200prep.com/questions/p-eh-011/"
        }
      ]
    },
    {
      "id": "prep-p-eh-012",
      "domain": 3,
      "title": "Processor coordination",
      "category": "event-hubs",
      "question": "What storage is commonly used to coordinate Event Hubs processor ownership and checkpoints?",
      "answers": [
        "A Blob Storage container used as the processor's checkpoint and ownership store."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-012",
          "url": "https://ai200prep.com/questions/p-eh-012/"
        },
        {
          "label": "AI-200 Prep · eh-012",
          "url": "https://ai200prep.com/questions/eh-012/"
        }
      ]
    },
    {
      "id": "prep-p-eh-015",
      "domain": 3,
      "title": "Replay a stream",
      "category": "event-hubs",
      "question": "How can an Event Hubs consumer replay previously retained events?",
      "answers": [
        "Start from an earlier supported offset, sequence position or timestamp within the retention window, with the intended checkpoint behavior."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-015",
          "url": "https://ai200prep.com/questions/p-eh-015/"
        }
      ]
    },
    {
      "id": "prep-eh-010",
      "domain": 3,
      "title": "Streaming SQL",
      "category": "event-hubs",
      "question": "Which Azure service can apply streaming SQL transformations to Event Hubs input?",
      "answers": [
        "Azure Stream Analytics."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eh-010",
          "url": "https://ai200prep.com/questions/eh-010/"
        }
      ]
    },
    {
      "id": "prep-p-eh-020",
      "domain": 3,
      "title": "Checkpoint frequency",
      "category": "event-hubs",
      "question": "Why can checkpointing every Event Hubs event reduce throughput?",
      "answers": [
        "It adds checkpoint-store writes and coordination overhead. Choose a checkpoint strategy that balances throughput against replay after failure."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-020",
          "url": "https://ai200prep.com/questions/p-eh-020/"
        }
      ]
    },
    {
      "id": "prep-p-eh-022",
      "domain": 3,
      "title": "Poison stream event",
      "category": "event-hubs",
      "question": "How can a stream processor move past an event that repeatedly fails?",
      "answers": [
        "Record the failure in an appropriate error/dead-letter store and advance the checkpoint only after the recovery policy has safely handled it."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eh-022",
          "url": "https://ai200prep.com/questions/p-eh-022/"
        }
      ]
    },
    {
      "id": "prep-sb-002",
      "domain": 3,
      "title": "Receive modes",
      "category": "service-bus",
      "question": "How does Service Bus PeekLock differ from ReceiveAndDelete?",
      "answers": [
        "PeekLock retains the message until explicit settlement, allowing redelivery after failure. ReceiveAndDelete removes it on receipt and can lose work if the consumer crashes."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-002",
          "url": "https://ai200prep.com/questions/sb-002/"
        },
        {
          "label": "AI-200 Prep · p-sb-012",
          "url": "https://ai200prep.com/questions/p-sb-012/"
        }
      ]
    },
    {
      "id": "prep-sb-007",
      "domain": 3,
      "title": "Scheduled message",
      "category": "service-bus",
      "question": "How is a Service Bus message scheduled for future availability?",
      "answers": [
        "Use scheduled enqueue time or an SDK scheduling operation such as ScheduleMessageAsync."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-007",
          "url": "https://ai200prep.com/questions/sb-007/"
        },
        {
          "label": "AI-200 Prep · p-sb-008",
          "url": "https://ai200prep.com/questions/p-sb-008/"
        }
      ]
    },
    {
      "id": "prep-p-sb-005",
      "domain": 3,
      "title": "Topics service tier",
      "category": "service-bus",
      "question": "Which Service Bus tiers support topics and subscriptions?",
      "answers": [
        "Standard and Premium, rather than Basic."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-005",
          "url": "https://ai200prep.com/questions/p-sb-005/"
        }
      ]
    },
    {
      "id": "prep-p-sb-006",
      "domain": 3,
      "title": "Transactional outbox",
      "category": "service-bus",
      "question": "How does a transactional outbox coordinate a database update with message publication?",
      "answers": [
        "Commit the business change and an outbox record in the same database transaction, then relay the outbox to the broker with duplicate-safe processing."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-006",
          "url": "https://ai200prep.com/questions/p-sb-006/"
        },
        {
          "label": "AI-200 Prep · c-fb-001",
          "url": "https://ai200prep.com/questions/c-fb-001/"
        }
      ]
    },
    {
      "id": "prep-sb-010",
      "domain": 3,
      "title": "Inspect without consuming",
      "category": "service-bus",
      "question": "Which Service Bus operation inspects a message without receiving and settling it?",
      "answers": [
        "Peek, which does not remove or lock the message for processing."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-010",
          "url": "https://ai200prep.com/questions/sb-010/"
        }
      ]
    },
    {
      "id": "prep-p-sb-009",
      "domain": 3,
      "title": "Message receiver permission",
      "category": "service-bus",
      "question": "Which Service Bus data role permits receiving and settling but not sending?",
      "answers": [
        "Azure Service Bus Data Receiver."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-009",
          "url": "https://ai200prep.com/questions/p-sb-009/"
        },
        {
          "label": "AI-200 Prep · sb-020",
          "url": "https://ai200prep.com/questions/sb-020/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-024",
      "domain": 3,
      "title": "Message sender permission",
      "category": "service-bus",
      "question": "Which Service Bus data role permits sending without receiving?",
      "answers": [
        "Azure Service Bus Data Sender."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-024",
          "url": "https://ai200prep.com/questions/p-rbac-024/"
        }
      ]
    },
    {
      "id": "prep-sb-017",
      "domain": 3,
      "title": "Message payload",
      "category": "service-bus",
      "question": "Where is a binary Service Bus payload stored?",
      "answers": [
        "In the message body, exposed as BinaryData or the corresponding byte representation in the SDK."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-017",
          "url": "https://ai200prep.com/questions/sb-017/"
        }
      ]
    },
    {
      "id": "prep-sb-018",
      "domain": 3,
      "title": "Message expiration",
      "category": "service-bus",
      "question": "What happens when a Service Bus message expires with dead-lettering on expiration enabled?",
      "answers": [
        "The broker moves it to the dead-letter subqueue instead of leaving it available for normal delivery."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-018",
          "url": "https://ai200prep.com/questions/sb-018/"
        },
        {
          "label": "AI-200 Prep · p-sb-023",
          "url": "https://ai200prep.com/questions/p-sb-023/"
        },
        {
          "label": "AI-200 Prep · p-sb-m01",
          "url": "https://ai200prep.com/questions/p-sb-m01/"
        }
      ]
    },
    {
      "id": "prep-p-sb-014",
      "domain": 3,
      "title": "Long-running message",
      "category": "service-bus",
      "question": "How can a Service Bus handler keep a PeekLock during long processing?",
      "answers": [
        "Renew the message lock, manually or through the SDK's supported automatic renewal configuration, while still designing for lock loss and duplicates."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-014",
          "url": "https://ai200prep.com/questions/p-sb-014/"
        }
      ]
    },
    {
      "id": "prep-sb-022",
      "domain": 3,
      "title": "Processor concurrency",
      "category": "service-bus",
      "question": "Which .NET ServiceBusProcessor option bounds simultaneous message callbacks?",
      "answers": [
        "MaxConcurrentCalls, subject to the selected processor type and session/concurrency settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-022",
          "url": "https://ai200prep.com/questions/sb-022/"
        }
      ]
    },
    {
      "id": "prep-p-sb-017",
      "domain": 3,
      "title": "Functions broker identity",
      "category": "service-bus",
      "question": "How can a Service Bus Functions binding connect without a shared-access connection string?",
      "answers": [
        "Configure an identity-based connection using the fully qualified namespace and grant the app identity the required Service Bus data role."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-017",
          "url": "https://ai200prep.com/questions/p-sb-017/"
        }
      ]
    },
    {
      "id": "prep-p-sb-018",
      "domain": 3,
      "title": "Large message payload",
      "category": "service-bus",
      "question": "What does the claim-check messaging pattern put in the broker message?",
      "answers": [
        "A reference to a payload stored elsewhere, such as Blob Storage, rather than the large payload itself."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-018",
          "url": "https://ai200prep.com/questions/p-sb-018/"
        }
      ]
    },
    {
      "id": "prep-p-sb-019",
      "domain": 3,
      "title": "Consumer backlog",
      "category": "service-bus",
      "question": "Which Service Bus metric shows a growing backlog of unprocessed work?",
      "answers": [
        "Active message count or queue depth, evaluated over time alongside arrival and completion rates."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-019",
          "url": "https://ai200prep.com/questions/p-sb-019/"
        },
        {
          "label": "AI-200 Prep · sb-035",
          "url": "https://ai200prep.com/questions/sb-035/"
        }
      ]
    },
    {
      "id": "prep-p-sb-020",
      "domain": 3,
      "title": "Correlation filter",
      "category": "service-bus",
      "question": "How does a Service Bus correlation filter differ from a SQL subscription filter?",
      "answers": [
        "It matches specified property values directly, while a SQL filter evaluates an expression. Correlation filters are useful for simple exact-property matches."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-020",
          "url": "https://ai200prep.com/questions/p-sb-020/"
        },
        {
          "label": "AI-200 Prep · sb-024",
          "url": "https://ai200prep.com/questions/sb-024/"
        }
      ]
    },
    {
      "id": "prep-p-sb-021",
      "domain": 3,
      "title": "Idle entity cleanup",
      "category": "service-bus",
      "question": "What does Service Bus AutoDeleteOnIdle configure?",
      "answers": [
        "Deletion of an eligible entity after its supported period of inactivity."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-021",
          "url": "https://ai200prep.com/questions/p-sb-021/"
        }
      ]
    },
    {
      "id": "prep-sb-030",
      "domain": 3,
      "title": "Subscription rule action",
      "category": "service-bus",
      "question": "What can a Service Bus subscription rule action modify?",
      "answers": [
        "Supported message properties during rule processing before delivery to the subscription; it is not arbitrary application code over the body."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-030",
          "url": "https://ai200prep.com/questions/sb-030/"
        }
      ]
    },
    {
      "id": "prep-sb-028",
      "domain": 3,
      "title": "Broker request/reply",
      "category": "service-bus",
      "question": "Which Service Bus properties coordinate a request/reply exchange?",
      "answers": [
        "ReplyTo identifies where the reply should be sent, and CorrelationId associates it with the original request."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-028",
          "url": "https://ai200prep.com/questions/sb-028/"
        },
        {
          "label": "AI-200 Prep · p-sb-022",
          "url": "https://ai200prep.com/questions/p-sb-022/"
        }
      ]
    },
    {
      "id": "prep-sb-034",
      "domain": 3,
      "title": "Transient broker errors",
      "category": "service-bus",
      "question": "Which .NET Service Bus client configuration controls transient-operation retries?",
      "answers": [
        "ServiceBusRetryOptions on the client configuration, including retry mode, timing and attempt limits."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-034",
          "url": "https://ai200prep.com/questions/sb-034/"
        }
      ]
    },
    {
      "id": "prep-p-sb-025",
      "domain": 3,
      "title": "Broker transaction scope",
      "category": "service-bus",
      "question": "What can a Service Bus broker transaction combine?",
      "answers": [
        "Supported send and settlement operations within its namespace/entity constraints. It does not automatically include an external database transaction."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-025",
          "url": "https://ai200prep.com/questions/p-sb-025/"
        }
      ]
    },
    {
      "id": "prep-eg-001",
      "domain": 3,
      "title": "Event notifications",
      "category": "event-grid",
      "question": "What distinguishes Event Grid's event-routing role from a work queue?",
      "answers": [
        "Event Grid routes discrete event notifications to subscribers. A work broker such as Service Bus supplies queue processing, settlement and transactional messaging features."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-001",
          "url": "https://ai200prep.com/questions/eg-001/"
        },
        {
          "label": "AI-200 Prep · p-eg-007",
          "url": "https://ai200prep.com/questions/p-eg-007/"
        }
      ]
    },
    {
      "id": "prep-p-eg-004",
      "domain": 3,
      "title": "Event delivery semantics",
      "category": "event-grid",
      "question": "Why must Event Grid push handlers tolerate duplicate deliveries?",
      "answers": [
        "Delivery is at least once; retries can deliver the same event more than once."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-004",
          "url": "https://ai200prep.com/questions/p-eg-004/"
        },
        {
          "label": "AI-200 Prep · eg-005",
          "url": "https://ai200prep.com/questions/eg-005/"
        }
      ]
    },
    {
      "id": "prep-eg-006",
      "domain": 3,
      "title": "Dead-letter storage",
      "category": "event-grid",
      "question": "What is needed to preserve undeliverable Event Grid push events in Blob Storage?",
      "answers": [
        "A configured dead-letter destination plus suitable write permissions and network access to that storage."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-006",
          "url": "https://ai200prep.com/questions/eg-006/"
        },
        {
          "label": "AI-200 Prep · p-eg-009",
          "url": "https://ai200prep.com/questions/p-eg-009/"
        }
      ]
    },
    {
      "id": "prep-eg-010",
      "domain": 3,
      "title": "Interoperable event schema",
      "category": "event-grid",
      "question": "Which interoperable event schema is supported by Event Grid?",
      "answers": [
        "CloudEvents 1.0, alongside supported Event Grid event schemas."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-010",
          "url": "https://ai200prep.com/questions/eg-010/"
        },
        {
          "label": "AI-200 Prep · p-eg-008",
          "url": "https://ai200prep.com/questions/p-eg-008/"
        }
      ]
    },
    {
      "id": "prep-eg-011",
      "domain": 3,
      "title": "Event publisher permission",
      "category": "event-grid",
      "question": "Which identity-based role allows an application to publish Event Grid events?",
      "answers": [
        "EventGrid Data Sender, at an appropriate scope, used with Microsoft Entra authentication."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-011",
          "url": "https://ai200prep.com/questions/eg-011/"
        },
        {
          "label": "AI-200 Prep · p-eg-012",
          "url": "https://ai200prep.com/questions/p-eg-012/"
        }
      ]
    },
    {
      "id": "prep-eg-013",
      "domain": 3,
      "title": "Blob creation event",
      "category": "event-grid",
      "question": "Which Azure Storage event type represents creation of a blob?",
      "answers": [
        "Microsoft.Storage.BlobCreated."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-013",
          "url": "https://ai200prep.com/questions/eg-013/"
        }
      ]
    },
    {
      "id": "prep-p-eg-014",
      "domain": 3,
      "title": "Event deduplication key",
      "category": "event-grid",
      "question": "Which Event Grid event field is commonly used as a deduplication identifier?",
      "answers": [
        "id, interpreted with the event source and an appropriate durable idempotency strategy."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-014",
          "url": "https://ai200prep.com/questions/p-eg-014/"
        }
      ]
    },
    {
      "id": "prep-p-eg-016",
      "domain": 3,
      "title": "Batched event delivery",
      "category": "event-grid",
      "question": "What changes when batched Event Grid push delivery is enabled?",
      "answers": [
        "One delivery request can contain several events in its array, within the configured count and size limits."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-016",
          "url": "https://ai200prep.com/questions/p-eg-016/"
        }
      ]
    },
    {
      "id": "prep-eg-020",
      "domain": 3,
      "title": "Pull delivery",
      "category": "event-grid",
      "question": "Which Event Grid namespace capability lets clients retrieve events at their own pace?",
      "answers": [
        "Pull delivery for supported namespace topics, rather than a push subscription to an application webhook."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-020",
          "url": "https://ai200prep.com/questions/eg-020/"
        }
      ]
    },
    {
      "id": "prep-p-eg-024",
      "domain": 3,
      "title": "Event ordering",
      "category": "event-grid",
      "question": "Does Event Grid push delivery guarantee event order?",
      "answers": [
        "No. Use application versioning, timestamps or another suitable sequencing strategy when processing order matters."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-024",
          "url": "https://ai200prep.com/questions/p-eg-024/"
        }
      ]
    },
    {
      "id": "prep-p-eg-025",
      "domain": 3,
      "title": "MQTT messaging",
      "category": "event-grid",
      "question": "Which Event Grid namespace capability supports MQTT device messaging?",
      "answers": [
        "The MQTT broker functionality, separate from the classic custom-topic push-delivery model."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-025",
          "url": "https://ai200prep.com/questions/p-eg-025/"
        }
      ]
    },
    {
      "id": "prep-func-001",
      "domain": 3,
      "title": "Classic Consumption",
      "category": "functions",
      "question": "How is classic Azure Functions Consumption compute charged for an idle application?",
      "answers": [
        "The plan can scale to zero and charges for consumed execution resources under its billing rules; retained storage and other resources are separate."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-001",
          "url": "https://ai200prep.com/questions/func-001/"
        },
        {
          "label": "AI-200 Prep · p-fn-001",
          "url": "https://ai200prep.com/questions/p-fn-001/"
        }
      ]
    },
    {
      "id": "prep-p-fn-002",
      "domain": 3,
      "title": "Warm Functions instances",
      "category": "functions",
      "question": "What does Functions Elastic Premium provide for cold-start-sensitive workloads?",
      "answers": [
        "Prewarmed/always-ready capacity and supported VNet integration, with a different cost model from scale-to-zero Consumption."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-002",
          "url": "https://ai200prep.com/questions/p-fn-002/"
        },
        {
          "label": "AI-200 Prep · func-002",
          "url": "https://ai200prep.com/questions/func-002/"
        }
      ]
    },
    {
      "id": "prep-func-003",
      "domain": 3,
      "title": "Classic Consumption timeout",
      "category": "functions",
      "question": "What is the default and maximum functionTimeout on classic Functions Consumption?",
      "answers": [
        "Five minutes by default, configurable up to ten minutes. Other hosting plans have different limits."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-003",
          "url": "https://ai200prep.com/questions/func-003/"
        },
        {
          "label": "AI-200 Prep · p-fn-009",
          "url": "https://ai200prep.com/questions/p-fn-009/"
        }
      ]
    },
    {
      "id": "prep-p-fn-004",
      "domain": 3,
      "title": "Durable chaining",
      "category": "functions",
      "question": "Which Durable Functions pattern passes each activity's result into the next activity?",
      "answers": [
        "Function chaining."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-004",
          "url": "https://ai200prep.com/questions/p-fn-004/"
        }
      ]
    },
    {
      "id": "prep-p-fn-005",
      "domain": 3,
      "title": "Durable approval",
      "category": "functions",
      "question": "How can a Durable orchestration wait for an external approval with a deadline?",
      "answers": [
        "Wait for an external event and race it against a durable timer. The persisted orchestration does not need a running compute thread throughout the wait."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-005",
          "url": "https://ai200prep.com/questions/p-fn-005/"
        },
        {
          "label": "AI-200 Prep · func-005",
          "url": "https://ai200prep.com/questions/func-005/"
        },
        {
          "label": "AI-200 Prep · p-fn-m01",
          "url": "https://ai200prep.com/questions/p-fn-m01/"
        }
      ]
    },
    {
      "id": "prep-p-fn-006",
      "domain": 3,
      "title": "Orchestrator replay",
      "category": "functions",
      "question": "Why must Durable Functions orchestrator code be deterministic?",
      "answers": [
        "The runtime replays it to rebuild state. Use the orchestration context's deterministic APIs and activities for external work rather than ordinary clock, random or direct I/O calls."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-006",
          "url": "https://ai200prep.com/questions/p-fn-006/"
        }
      ]
    },
    {
      "id": "prep-func-006",
      "domain": 3,
      "title": "Durable parallel work",
      "category": "functions",
      "question": "Which Durable Functions pattern runs parallel activities and waits for their combined result?",
      "answers": [
        "Fan-out/fan-in."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-006",
          "url": "https://ai200prep.com/questions/func-006/"
        },
        {
          "label": "AI-200 Prep · p-fn-010",
          "url": "https://ai200prep.com/questions/p-fn-010/"
        }
      ]
    },
    {
      "id": "prep-func-007",
      "domain": 3,
      "title": "Cosmos trigger batches",
      "category": "functions",
      "question": "Does a Cosmos DB-triggered function normally run once per document or once per delivered batch?",
      "answers": [
        "Once per delivered batch of changed documents, with code responsible for handling the documents in that invocation."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-007",
          "url": "https://ai200prep.com/questions/func-007/"
        }
      ]
    },
    {
      "id": "prep-p-fn-011",
      "domain": 3,
      "title": "Functions message concurrency",
      "category": "functions",
      "question": "Where is Service Bus trigger callback concurrency configured for a Functions host?",
      "answers": [
        "In the supported Service Bus extension settings in host.json, such as maxConcurrentCalls, with settings depending on extension version and trigger type."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-011",
          "url": "https://ai200prep.com/questions/p-fn-011/"
        }
      ]
    },
    {
      "id": "prep-p-fn-012",
      "domain": 3,
      "title": "Async HTTP orchestration",
      "category": "functions",
      "question": "How does the Durable Functions async HTTP API pattern avoid a long synchronous response?",
      "answers": [
        "An HTTP starter starts the orchestration and returns an accepted response with status-query links; the client checks progress separately."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-012",
          "url": "https://ai200prep.com/questions/p-fn-012/"
        },
        {
          "label": "AI-200 Prep · func-013",
          "url": "https://ai200prep.com/questions/func-013/"
        }
      ]
    },
    {
      "id": "prep-func-010",
      "domain": 3,
      "title": "Functions host settings",
      "category": "functions",
      "question": "What is host.json used for in Azure Functions?",
      "answers": [
        "App-wide Functions host configuration, including supported logging, extension, trigger and concurrency settings."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-010",
          "url": "https://ai200prep.com/questions/func-010/"
        }
      ]
    },
    {
      "id": "prep-p-fn-013",
      "domain": 3,
      "title": "Durable entity",
      "category": "functions",
      "question": "What is a Durable Functions entity?",
      "answers": [
        "An addressable unit of durable state operated on through entity operations or signals, often used in actor-like patterns."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-013",
          "url": "https://ai200prep.com/questions/p-fn-013/"
        },
        {
          "label": "AI-200 Prep · func-017",
          "url": "https://ai200prep.com/questions/func-017/"
        }
      ]
    },
    {
      "id": "prep-p-fn-016",
      "domain": 3,
      "title": "Reusable HTTP clients",
      "category": "functions",
      "question": "How should a .NET function reuse HTTP connections across invocations?",
      "answers": [
        "Use a suitable long-lived HttpClient or IHttpClientFactory instead of constructing and disposing a new connection pool for every invocation."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-016",
          "url": "https://ai200prep.com/questions/p-fn-016/"
        }
      ]
    },
    {
      "id": "prep-p-fn-018",
      "domain": 3,
      "title": "Activity retries",
      "category": "functions",
      "question": "How can a Durable orchestration retry a failing activity with backoff?",
      "answers": [
        "Use its supported retry policy/options when calling the activity, specifying attempt count and timing rather than a blocking retry loop in orchestrator code."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-018",
          "url": "https://ai200prep.com/questions/p-fn-018/"
        }
      ]
    },
    {
      "id": "prep-p-fn-021",
      "domain": 3,
      "title": "Timer coordination",
      "category": "functions",
      "question": "How does a scaled-out Functions app coordinate a Timer trigger so only one instance runs a scheduled occurrence?",
      "answers": [
        "The runtime uses a storage-backed lock/lease for supported Timer-trigger coordination."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-021",
          "url": "https://ai200prep.com/questions/p-fn-021/"
        }
      ]
    },
    {
      "id": "prep-p-fn-022",
      "domain": 3,
      "title": "Package deployment",
      "category": "functions",
      "question": "What does Functions run-from-package deployment make consistent?",
      "answers": [
        "The application runs from the deployed package rather than partially updated loose files, giving a consistent code artifact for that release."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-022",
          "url": "https://ai200prep.com/questions/p-fn-022/"
        }
      ]
    },
    {
      "id": "prep-p-fn-025",
      "domain": 3,
      "title": "Flex Consumption",
      "category": "functions",
      "question": "What does Flex Consumption add while retaining a consumption-based scaling model?",
      "answers": [
        "Supported VNet integration, configurable instance memory and more flexible scaling/always-ready options compared with classic Consumption."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-025",
          "url": "https://ai200prep.com/questions/p-fn-025/"
        }
      ]
    },
    {
      "id": "m-05-2-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "App Service pull from ACR",
      "question": "How do system-assigned and user-assigned identities differ in lifecycle?",
      "answers": [
        "System-assigned - created and deleted with the app. User-assigned - separate resource, shareable across apps, can get AcrPull before the app exists."
      ],
      "origin": "original",
      "legacyIds": [
        5,
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-07-5-1",
      "domain": 4,
      "category": "key-vault",
      "title": "App Service Key Vault refs",
      "question": "Where should non-secret configuration and credentials be stored?",
      "answers": [
        "Use app settings or App Configuration for ordinary configuration. Store passwords and API credentials in Key Vault, and use references or authorized runtime reads to obtain them."
      ],
      "origin": "original",
      "legacyIds": [
        7,
        50,
        55,
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 7",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-14-6-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Container Apps secrets",
      "question": "Which Key Vault object type should hold an API credential?",
      "answers": [
        "Trap: an API key is stored as a Key Vault secret, NOT a Key Vault key (keys are cryptographic keys)."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-1-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Can Key Vault Reader read secret values?",
      "answers": [
        "Key Vault Reader - metadata only, cannot read secret values."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-2-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Which Key Vault RBAC role reads secret values?",
      "answers": [
        "Key Vault Secrets User - reads secret contents. This is the read-a-secret role."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Which Key Vault RBAC role manages secret versions and deletion?",
      "answers": [
        "Key Vault Secrets Officer - any secret action including set and delete."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "What data-plane permissions does Key Vault Administrator grant?",
      "answers": [
        "Key Vault Administrator - all data-plane ops on keys, secrets and certificates."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-5-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "What does Key Vault Purge Operator permit?",
      "answers": [
        "Purging soft-deleted vaults; it is not a general secret-reading role."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-5-2",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "What does Key Vault Data Access Administrator manage?",
      "answers": [
        "Assignment of specified Key Vault data-plane roles, subject to its role-assignment condition."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-6-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Does Key Vault Contributor grant access to secret contents?",
      "answers": [
        "Key Vault Contributor is control-plane - manages the vault, grants no access to secret values."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-52-7-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Which vault permission model makes Key Vault data-plane role assignments effective?",
      "answers": [
        "The secret/key/cert data-plane roles work only on vaults using the Azure RBAC permission model."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-53-1-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "How does a versionless Key Vault SDK read behave after rotation?",
      "answers": [
        "Versionless read (get_secret(\"name\")) resolves to the current version -> picks up rotation with no redeploy."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-53-2-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "How does a version-pinned Key Vault SDK read behave after rotation?",
      "answers": [
        "Versioned read (version=\"123\") is pinned to an immutable version forever -> needs a manual change after every rotation."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-53-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "How can Event Grid and Functions automate rotation of a Key Vault secret?",
      "answers": [
        "Rotation flow: set an expiry date -> 30 days before, Key Vault publishes Microsoft.KeyVault.SecretNearExpiry to Event Grid -> an event subscription calls an Azure Function -> the Function writes a new version with a fresh expiry."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-53-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "Do Key Vault secrets have the same built-in rotation policies as cryptographic keys?",
      "answers": [
        "Keys have native autorotation policies. Secrets do not - only your code can change the credential on the far end."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-54-1-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "In what order does Python DefaultAzureCredential try credential types?",
      "answers": [
        "1 Environment variables. 2 Workload Identity. 3 Managed Identity. 4 Shared Token Cache (Windows only). 5 Visual Studio Code. 6 Azure CLI. 7 Azure PowerShell. 8 Azure Developer CLI. 9 Interactive browser (disabled by default). 10 Broker (WAM)."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-54-2-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "How can the same DefaultAzureCredential code run locally and on Azure?",
      "answers": [
        "Each link is skipped silently when its prerequisites are absent. Managed identity fires in Azure, a developer tool fires locally, your code does not change."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-54-3-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "What does AZURE_TOKEN_CREDENTIALS control?",
      "answers": [
        "AZURE_TOKEN_CREDENTIALS can restrict the chain to prod or dev, or to one named credential."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-54-4-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "Why is ManagedIdentityCredential normally unavailable on a developer laptop?",
      "answers": [
        "ManagedIdentityCredential fails on a laptop. ClientSecretCredential needs a stored secret."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-55-1-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration",
      "question": "What uniquely identifies an App Configuration key-value?",
      "answers": [
        "The combination of key and label. Different labels can give the same key different environment-specific values."
      ],
      "origin": "original",
      "legacyIds": [
        55,
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-55-2-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration",
      "question": "How does App Configuration's .NET provider refresh interval differ from secret refresh?",
      "answers": [
        "Refresh interval default 30 seconds (SetRefreshInterval; SetCacheExpiration is deprecated). Key Vault secret refresh is a separate interval with a 1-minute minimum."
      ],
      "origin": "original",
      "legacyIds": [
        55
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-55-3-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration",
      "question": "What is an App Configuration sentinel key used for?",
      "answers": [
        "Sentinel key - one key you bump last; the provider watches it and reloads everything at once."
      ],
      "origin": "original",
      "legacyIds": [
        55
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-55-4-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration",
      "question": "How do App Configuration Data Reader and Data Owner differ?",
      "answers": [
        "Roles: App Configuration Data Reader / Data Owner."
      ],
      "origin": "original",
      "legacyIds": [
        55
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-56-1-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "What is the setup order for reading Key Vault with an app identity?",
      "answers": [
        "Order - enable a system-assigned managed identity -> grant it Key Vault Secrets User -> read the secret at runtime with the SDK (SecretClient)."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-56-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "What scope should be preferred for an application's Key Vault permissions?",
      "answers": [
        "Scope - assign at the vault, one vault per app per environment. Key Vault Administrator at subscription scope is far too broad."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-56-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "What happens to access policies when a vault switches to Azure RBAC?",
      "answers": [
        "Access policies no longer authorize data operations; configure suitable Azure RBAC role assignments before switching."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-56-5-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "Does Key Vault's recover permission allow reading a secret value?",
      "answers": [
        "recover - restores a soft-deleted secret. It does NOT grant read."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-56-6-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "Why does copying a secret into app settings at deployment not implement rotation?",
      "answers": [
        "Read at runtime - a secret copied into app settings at deploy time is injected at startup and never sees a rotation."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-57-2-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Where secrets belong",
      "question": "Which secret lifecycle features does Key Vault provide?",
      "answers": [
        "Key Vault adds - encrypted storage with FIPS-validated modules, access logs, expiration, rotation workflows, soft delete and purge protection."
      ],
      "origin": "original",
      "legacyIds": [
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-57-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Where secrets belong",
      "question": "Who resolves a Key Vault reference stored in App Configuration?",
      "answers": [
        "App Configuration - for a secret it stores only a Key Vault reference (a URI), never the value. The two services do not talk to each other; the app reads Key Vault with its own identity."
      ],
      "origin": "original",
      "legacyIds": [
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-57-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Where secrets belong",
      "question": "How can AKS mount Key Vault objects without committing them as Kubernetes Secrets?",
      "answers": [
        "Kubernetes secrets - scoped to one cluster, not a central lifecycle store. On AKS, mount Key Vault objects with the Secrets Store CSI Driver (supports autorotation)."
      ],
      "origin": "original",
      "legacyIds": [
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-58-1-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration Python SDK",
      "question": "How is a Python AzureAppConfigurationClient authenticated?",
      "answers": [
        "Client - AzureAppConfigurationClient(base_url, credential), for example credential=DefaultAzureCredential()."
      ],
      "origin": "original",
      "legacyIds": [
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-58-2-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration Python SDK",
      "question": "Which Python App Configuration call reads a single key and label?",
      "answers": [
        "get_configuration_setting(key=, label=) - reads ONE setting by key and label. This is the read call."
      ],
      "origin": "original",
      "legacyIds": [
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-58-3-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration Python SDK",
      "question": "Which Python App Configuration calls enumerate settings or labels?",
      "answers": [
        "list_configuration_settings(key_filter=, label_filter=) - enumerates many settings. list_labels() - lists labels only, no setting value."
      ],
      "origin": "original",
      "legacyIds": [
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-59-1-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "How can a long-lived app refresh configuration without a remote call per request?",
      "answers": [
        "Cache + interval - the provider loads settings once, serves them from memory and checks again after the refresh interval. Reading the store on every request adds latency and risks throttling or overage charges."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-59-2-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "How does Python App Configuration refresh use a watch key and interval?",
      "answers": [
        "Python - load(endpoint=..., credential=..., refresh_on=[WatchKey(\"sentinel\")], refresh_interval=10), then call config.refresh(). It is a no-op until the interval elapses."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-59-3-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "How is request-driven refresh enabled with the App Configuration .NET provider?",
      "answers": [
        ".NET - ConfigureRefresh with Register(\"SentinelKey\", refreshAll: true), plus app.UseAzureAppConfiguration(). Keys are NOT watched unless registered."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-59-4-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "What should an app do when a configuration refresh fails?",
      "answers": [
        "Refresh fails -> the app keeps using the cached configuration."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-59-5-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "Why are environment variables unsuitable for in-process dynamic refresh?",
      "answers": [
        "Environment variables are NOT dynamic - injected at startup. App Service restarts the app on a change; Container Apps creates a new revision."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-1-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL where do to its input rows?",
      "answers": [
        "where (equivalent to filter) - keeps only the ROWS that match a predicate."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-2-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What rows does KQL summarize return?",
      "answers": [
        "One row per distinct combination of the by expressions, containing only group keys and aggregates. Without by, it returns one aggregate row; the original individual records are not retained."
      ],
      "origin": "original",
      "legacyIds": [
        60,
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-3-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL project do to columns?",
      "answers": [
        "project - selects, renames and can compute; drops everything unlisted."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-4-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL extend do to columns?",
      "answers": [
        "extend - appends a computed column. No by clause, cannot aggregate."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-5-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL distinct return?",
      "answers": [
        "Unique combinations of the selected column values."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-5-2",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL join do?",
      "answers": [
        "Matches rows from two tabular expressions on a key such as OperationId."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-5-3",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL render do?",
      "answers": [
        "Requests a visualization of the tabular result, such as a timechart."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-60-6-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "In what order should time filters, joins and aggregation usually run in a KQL query?",
      "answers": [
        "Order: table -> time filter -> other filters -> join -> summarize. Time filters skip whole storage extents."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-61-1-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "Which table and column names are used in the Application Insights query schema?",
      "answers": [
        "Application Insights: requests, dependencies, traces, exceptions. Columns timestamp (lowercase - KQL is case-sensitive), duration, success, operation_Id, operation_Name, cloud_RoleName."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-61-2-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "Which table and column names are used in the workspace-based query schema?",
      "answers": [
        "Log Analytics workspace: AppRequests, AppDependencies, AppTraces. Columns TimeGenerated, DurationMs, Success, OperationId, OperationName, AppRoleName."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-61-3-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "What unit is used for request duration in Application Insights queries?",
      "answers": [
        "duration is in MILLISECONDS - \"greater than two seconds\" is duration > 2000."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-61-4-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "Which telemetry field identifies the emitting service?",
      "answers": [
        "cloud_RoleName / AppRoleName = which component emitted the telemetry."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-62-1-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL time windows and grouping",
      "question": "How does KQL express the last 30 minutes?",
      "answers": [
        "ago(30m) - current UTC time minus a timespan: where timestamp > ago(30m). Literals: 30m, 1h, 2d, 10s, 100ms. No weeks."
      ],
      "origin": "original",
      "legacyIds": [
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-62-3-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL time windows and grouping",
      "question": "How does KQL bin group timestamps for a time chart?",
      "answers": [
        "bin(timestamp, 5m) - rounds down into fixed buckets: summarize count() by bin(timestamp, 5m) | render timechart (first column must be datetime)."
      ],
      "origin": "original",
      "legacyIds": [
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-62-4-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL time windows and grouping",
      "question": "Which KQL join kind is used when no kind is specified?",
      "answers": [
        "join - default kind is innerunique (dedupes the left side). Write kind=inner for a standard inner join. Put the smaller table on the left."
      ],
      "origin": "original",
      "legacyIds": [
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-63-1-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "Which tool supports an ad hoc investigation of Azure application logs?",
      "answers": [
        "KQL in Log Analytics - write and run log queries interactively over the workspace. The direct route for an ad hoc investigation."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-63-2-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "What type of operations does the Azure Activity Log record?",
      "answers": [
        "Activity log - control-plane operations: create a VM, change a key vault access policy, deployment errors. NOT application telemetry."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-63-3-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "What is an Azure Monitor workbook used for?",
      "answers": [
        "Workbooks - combine text, log queries, metrics and parameters into rich interactive reports. Built for reuse; more work than one query."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-63-4-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "Why start a KQL query with the relevant table?",
      "answers": [
        "It selects the data source and limits the scope before further operations."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-63-4-2",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "How do KQL == and =~ differ?",
      "answers": [
        "== is case-sensitive equality; =~ is case-insensitive string equality."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-64-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "What does an OpenTelemetry TracerProvider own?",
      "answers": [
        "TracerProvider - makes tracers, owns config (sampler, resource, processors). No configured provider/export pipeline -> spans do not reach Azure Monitor."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-64-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "What sends OpenTelemetry spans to Azure Monitor?",
      "answers": [
        "Exporter - the destination. AzureMonitorTraceExporter plus a connection string."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-64-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "How do BatchSpanProcessor and SimpleSpanProcessor export spans?",
      "answers": [
        "Span processor - connects provider to exporter and decides when export happens. BatchSpanProcessor = asynchronous batches on a background thread; SimpleSpanProcessor = synchronous per span."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-64-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "Which Python OpenTelemetry call starts an active span?",
      "answers": [
        "Spans - created in code with tracer.start_as_current_span()."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-65-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "What changes must be deployed before OpenTelemetry tracing becomes visible?",
      "answers": [
        "Needed - configure a trace exporter and instrument the code with the OpenTelemetry SDK (either order), then redeploy the services."
      ],
      "origin": "original",
      "legacyIds": [
        65
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-65-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "What does configure_azure_monitor configure automatically?",
      "answers": [
        "The Azure Monitor OpenTelemetry distro configures telemetry providers, Azure export and supported library instrumentation. Avoid instrumenting the same library twice."
      ],
      "origin": "original",
      "legacyIds": [
        65,
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-65-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "Does an OpenTelemetry View create trace spans?",
      "answers": [
        "OpenTelemetry View - customizes metrics, such as histogram buckets. Creates no spans."
      ],
      "origin": "original",
      "legacyIds": [
        65
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-65-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "Does TelemetryClient.TrackEvent create an OpenTelemetry span?",
      "answers": [
        "TelemetryClient.TrackEvent() - classic Application Insights API. Writes a custom event (customEvents table), not an OpenTelemetry span."
      ],
      "origin": "original",
      "legacyIds": [
        65
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-65-5-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "How do OpenTelemetry span kinds map to Application Insights request and dependency telemetry?",
      "answers": [
        "SpanKind - SERVER / CONSUMER -> requests table. CLIENT / INTERNAL / PRODUCER -> dependencies table."
      ],
      "origin": "original",
      "legacyIds": [
        65
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-66-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "What are the Python names of common OpenTelemetry samplers?",
      "answers": [
        "ALWAYS_ON, ALWAYS_OFF, TraceIdRatioBased(rate), and ParentBased(root=...). Python symbols differ from the sampler specification names and environment-variable values."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-66-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "Which standard OTEL_TRACES_SAMPLER values select ratio sampling?",
      "answers": [
        "traceidratio and parentbased_traceidratio. These environment-variable values differ from Python class names."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-66-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "Which Azure Monitor-specific sampler environment settings are available?",
      "answers": [
        "Azure Monitor values - use microsoft.fixed_percentage or microsoft.rate_limited; ARG = ratio or max traces/sec."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-66-5-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "Which OpenTelemetry sampler honors a parent's sampling decision?",
      "answers": [
        "ParentBased. Configure its root sampler for traces without a parent."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-66-5-2",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "How does TraceIdRatioBased choose which traces to retain?",
      "answers": [
        "It makes a deterministic decision from the trace ID and the configured ratio."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-66-6-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "What rate-limited sampling default is used by recent Azure Monitor Python distros?",
      "answers": [
        "configure_azure_monitor defaults to a RateLimitedSampler at 5 traces/second since 1.8.6."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-67-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Which Python OpenTelemetry sampler records all spans during local testing?",
      "answers": [
        "ALWAYS_ON, the Python instance corresponding to the AlwaysOn sampler."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-67-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Which OpenTelemetry sampler keeps approximately 10% of traces?",
      "answers": [
        "TraceIdRatioBased(0.1). For distributed traces, use a parent-based sampler when child spans should honor an upstream decision."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-67-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Where is an OpenTelemetry sampler configured?",
      "answers": [
        "NOT samplers - the span processor (BatchSpanProcessor) and the exporter. The sampler goes on the TracerProvider: TracerProvider(sampler=...)."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-67-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "How does ApplicationInsightsSampler coordinate trace selection across services?",
      "answers": [
        "Application Insights sampler - ApplicationInsightsSampler(0.1) or sampling_ratio=0.1 keeps about 10 percent; traces_per_second caps volume. It does NOT honor upstream decisions - it hashes the trace ID, so give every service the same sampler and rate."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-67-5-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Are metrics reduced by trace sampling?",
      "answers": [
        "Metrics are never sampled. Ingestion sampling is not recommended."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-68-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Trace context propagation",
      "question": "Which W3C header carries trace context between HTTP services?",
      "answers": [
        "W3C traceparent header: 00-<32-hex trace id>-<16-hex span id>-<flags>"
      ],
      "origin": "original",
      "legacyIds": [
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-68-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Trace context propagation",
      "question": "Does creating a span automatically propagate context to another process?",
      "answers": [
        "No. The current context is process-local; outbound injection and inbound extraction, often supplied by instrumentation, are required to continue the same trace."
      ],
      "origin": "original",
      "legacyIds": [
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "m-68-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Trace context propagation",
      "question": "How is OpenTelemetry context propagated through an outbound Python HTTP call?",
      "answers": [
        "You need an instrumentation library - RequestsInstrumentor().instrument() for the requests library, or a framework instrumentation to extract on the receiving side - or a manual propagate.inject(headers)."
      ],
      "origin": "original",
      "legacyIds": [
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        }
      ]
    },
    {
      "id": "prep-kv-002",
      "domain": 4,
      "title": "Recover a secret",
      "category": "key-vault",
      "question": "Which Key Vault capability retains deleted objects for possible recovery?",
      "answers": [
        "Soft delete, during the configured supported retention period."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · kv-002",
          "url": "https://ai200prep.com/questions/kv-002/"
        },
        {
          "label": "AI-200 Prep · p-kv-003",
          "url": "https://ai200prep.com/questions/p-kv-003/"
        }
      ]
    },
    {
      "id": "prep-kv-009",
      "domain": 4,
      "title": "Prevent early purge",
      "category": "key-vault",
      "question": "What does Key Vault purge protection prevent?",
      "answers": [
        "Permanent purging of protected soft-deleted vaults or objects before their retention period expires, including by administrators."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · kv-009",
          "url": "https://ai200prep.com/questions/kv-009/"
        },
        {
          "label": "AI-200 Prep · kv-017",
          "url": "https://ai200prep.com/questions/kv-017/"
        },
        {
          "label": "AI-200 Prep · p-kv-004",
          "url": "https://ai200prep.com/questions/p-kv-004/"
        }
      ]
    },
    {
      "id": "prep-kv-012",
      "domain": 4,
      "title": "Envelope encryption",
      "category": "key-vault",
      "question": "How do the DEK and KEK work in envelope encryption?",
      "answers": [
        "The data encryption key encrypts the data. A key encryption key protects the DEK, which can then be stored in wrapped/encrypted form."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · kv-012",
          "url": "https://ai200prep.com/questions/kv-012/"
        }
      ]
    },
    {
      "id": "prep-kv-013",
      "domain": 4,
      "title": "Audit secret access",
      "category": "key-vault",
      "question": "Which Key Vault diagnostic category records data-plane access such as secret reads?",
      "answers": [
        "AuditEvent, with logging routed to an appropriate destination such as Log Analytics."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · kv-013",
          "url": "https://ai200prep.com/questions/kv-013/"
        },
        {
          "label": "AI-200 Prep · p-kv-015",
          "url": "https://ai200prep.com/questions/p-kv-015/"
        }
      ]
    },
    {
      "id": "prep-p-kv-011",
      "domain": 4,
      "title": "Certificate object",
      "category": "key-vault",
      "question": "What related Key Vault objects accompany a managed certificate?",
      "answers": [
        "A certificate object and associated key and secret representations, subject to certificate policy and whether private-key material is exportable."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-kv-011",
          "url": "https://ai200prep.com/questions/p-kv-011/"
        }
      ]
    },
    {
      "id": "prep-p-kv-016",
      "domain": 4,
      "title": "Non-exported signing key",
      "category": "key-vault",
      "question": "How can an application sign using a Key Vault key without retrieving its private key?",
      "answers": [
        "Call the service's signing operation with permission to use the key; the private-key operation remains in the service."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-kv-016",
          "url": "https://ai200prep.com/questions/p-kv-016/"
        }
      ]
    },
    {
      "id": "prep-p-kv-024",
      "domain": 4,
      "title": "Managed HSM",
      "category": "key-vault",
      "question": "How does Azure Managed HSM differ from a normal Key Vault?",
      "answers": [
        "It provides a managed single-tenant HSM pool with its own security domain and local authorization model for supported cryptographic keys."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-kv-024",
          "url": "https://ai200prep.com/questions/p-kv-024/"
        },
        {
          "label": "AI-200 Prep · kv-022",
          "url": "https://ai200prep.com/questions/kv-022/"
        }
      ]
    },
    {
      "id": "prep-p-kv-023",
      "domain": 4,
      "title": "Build secrets",
      "category": "key-vault",
      "question": "How should a private package-feed token be supplied during a container build?",
      "answers": [
        "Use a supported build-time secret mechanism rather than ARG/ENV or a copied file that persists the credential in an image layer."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-kv-023",
          "url": "https://ai200prep.com/questions/p-kv-023/"
        }
      ]
    },
    {
      "id": "prep-c-tw-003",
      "domain": 4,
      "title": "Rotation overlap",
      "category": "key-vault",
      "question": "How can a credential rotation avoid immediately breaking clients that still hold the old value?",
      "answers": [
        "Use a supported overlapping/dual-credential rotation process and refresh clients before retiring the old credential. A new Key Vault version alone does not update cached clients."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · c-tw-003",
          "url": "https://ai200prep.com/questions/c-tw-003/"
        },
        {
          "label": "AI-200 Prep · p-kv-025",
          "url": "https://ai200prep.com/questions/p-kv-025/"
        }
      ]
    },
    {
      "id": "prep-rbac-001",
      "domain": 4,
      "title": "Owner and Contributor",
      "category": "identity-rbac",
      "question": "How do Azure Owner and Contributor differ in access management?",
      "answers": [
        "Both manage resources at their assigned scope; Owner can also manage role assignments, while Contributor does not grant that access-management permission."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-001",
          "url": "https://ai200prep.com/questions/rbac-001/"
        },
        {
          "label": "AI-200 Prep · p-rbac-005",
          "url": "https://ai200prep.com/questions/p-rbac-005/"
        }
      ]
    },
    {
      "id": "prep-rbac-003",
      "domain": 4,
      "title": "RBAC scope hierarchy",
      "category": "identity-rbac",
      "question": "What is the Azure RBAC scope hierarchy from broadest to narrowest?",
      "answers": [
        "Management group, subscription, resource group, resource."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-003",
          "url": "https://ai200prep.com/questions/rbac-003/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-003",
      "domain": 4,
      "title": "Inherited permissions",
      "category": "identity-rbac",
      "question": "How do Azure RBAC allow assignments combine across scopes?",
      "answers": [
        "Allowed permissions are additive and inherited down the scope hierarchy, subject to applicable conditions and deny assignments."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-003",
          "url": "https://ai200prep.com/questions/p-rbac-003/"
        }
      ]
    },
    {
      "id": "prep-rbac-011",
      "domain": 4,
      "title": "Explicit denial",
      "category": "identity-rbac",
      "question": "What can an Azure deny assignment block despite an allow role assignment?",
      "answers": [
        "The specified actions at its applicable scope. An additional allow role does not override an applicable deny assignment."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-011",
          "url": "https://ai200prep.com/questions/rbac-011/"
        },
        {
          "label": "AI-200 Prep · p-rbac-004",
          "url": "https://ai200prep.com/questions/p-rbac-004/"
        }
      ]
    },
    {
      "id": "prep-rbac-006",
      "domain": 4,
      "title": "Just-in-time access",
      "category": "identity-rbac",
      "question": "Which Entra feature provides eligible, time-bound privileged role activation?",
      "answers": [
        "Privileged Identity Management (PIM), with configured activation requirements such as approval or MFA."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-006",
          "url": "https://ai200prep.com/questions/rbac-006/"
        },
        {
          "label": "AI-200 Prep · p-rbac-008",
          "url": "https://ai200prep.com/questions/p-rbac-008/"
        }
      ]
    },
    {
      "id": "prep-rbac-007",
      "domain": 4,
      "title": "Custom role actions",
      "category": "identity-rbac",
      "question": "What does the actions field of a custom Azure RBAC role define?",
      "answers": [
        "Permitted management-plane resource operations. DataActions handles supported data-plane permissions; NotActions subtracts from that role's allowed actions rather than creating a global deny."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-007",
          "url": "https://ai200prep.com/questions/rbac-007/"
        },
        {
          "label": "AI-200 Prep · p-rbac-009",
          "url": "https://ai200prep.com/questions/p-rbac-009/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-010",
      "domain": 4,
      "title": "Custom role scope",
      "category": "identity-rbac",
      "question": "What does assignableScopes constrain in a custom Azure RBAC role?",
      "answers": [
        "Where that role definition can be assigned. It does not itself create role assignments."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-010",
          "url": "https://ai200prep.com/questions/p-rbac-010/"
        }
      ]
    },
    {
      "id": "prep-rbac-008",
      "domain": 4,
      "title": "Governance policy",
      "category": "identity-rbac",
      "question": "Which Azure service checks resources against organizational standards such as allowed locations or required tags?",
      "answers": [
        "Azure Policy."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-008",
          "url": "https://ai200prep.com/questions/rbac-008/"
        },
        {
          "label": "AI-200 Prep · p-rbac-015",
          "url": "https://ai200prep.com/questions/p-rbac-015/"
        }
      ]
    },
    {
      "id": "prep-rbac-012",
      "domain": 4,
      "title": "Deny policy effect",
      "category": "identity-rbac",
      "question": "What does the Azure Policy Deny effect do to a non-compliant resource request?",
      "answers": [
        "It prevents the request when the policy evaluation and enforcement conditions apply."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-012",
          "url": "https://ai200prep.com/questions/rbac-012/"
        }
      ]
    },
    {
      "id": "prep-rbac-019",
      "domain": 4,
      "title": "Modify policy effect",
      "category": "identity-rbac",
      "question": "Which Azure Policy effect can add or change supported resource properties such as tags?",
      "answers": [
        "Modify, with the required policy/remediation identity and permissions where applicable."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-019",
          "url": "https://ai200prep.com/questions/rbac-019/"
        }
      ]
    },
    {
      "id": "prep-rbac-016",
      "domain": 4,
      "title": "Policy initiative",
      "category": "identity-rbac",
      "question": "What is an Azure Policy initiative?",
      "answers": [
        "A group of policy definitions managed together for a governance objective."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-016",
          "url": "https://ai200prep.com/questions/rbac-016/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-007",
      "domain": 4,
      "title": "Blob read permission",
      "category": "identity-rbac",
      "question": "Which Azure data-plane role permits an app identity to read Blob content?",
      "answers": [
        "Storage Blob Data Reader at an appropriate scope."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-007",
          "url": "https://ai200prep.com/questions/p-rbac-007/"
        }
      ]
    },
    {
      "id": "prep-rbac-015",
      "domain": 4,
      "title": "Service principal",
      "category": "identity-rbac",
      "question": "What is a service principal in an Entra tenant?",
      "answers": [
        "The local tenant representation of an application identity, used for authorization and sign-in as that application."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-015",
          "url": "https://ai200prep.com/questions/rbac-015/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-014",
      "domain": 4,
      "title": "Deletion lock",
      "category": "identity-rbac",
      "question": "What does a CanNotDelete resource lock block?",
      "answers": [
        "Deletion of the protected Azure resource at the control plane, while supported read and modification operations can still be allowed."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-014",
          "url": "https://ai200prep.com/questions/p-rbac-014/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-017",
      "domain": 4,
      "title": "Manage access only",
      "category": "identity-rbac",
      "question": "Which traditional Azure built-in role manages user access without general resource management?",
      "answers": [
        "User Access Administrator, at its assigned scope."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-017",
          "url": "https://ai200prep.com/questions/p-rbac-017/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-018",
      "domain": 4,
      "title": "Team access",
      "category": "identity-rbac",
      "question": "Why assign Azure roles to an Entra group rather than separately to every team member?",
      "answers": [
        "Membership can manage the team's access centrally and reduce the number of separate role assignments."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-018",
          "url": "https://ai200prep.com/questions/p-rbac-018/"
        }
      ]
    },
    {
      "id": "prep-rbac-021",
      "domain": 4,
      "title": "App-only Graph access",
      "category": "identity-rbac",
      "question": "Which permission type is used for a background application's Microsoft Graph access without a signed-in user?",
      "answers": [
        "Application permissions, with required administrator consent and the appropriate app authentication."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-021",
          "url": "https://ai200prep.com/questions/rbac-021/"
        }
      ]
    },
    {
      "id": "prep-rbac-022",
      "domain": 4,
      "title": "Access reviews",
      "category": "identity-rbac",
      "question": "Which Entra feature supports periodic review of who should retain access?",
      "answers": [
        "Access Reviews, with the relevant supported governance configuration."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-022",
          "url": "https://ai200prep.com/questions/rbac-022/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-023",
      "domain": 4,
      "title": "Federated CI identity",
      "category": "identity-rbac",
      "question": "How can a CI pipeline authenticate to Azure without storing a long-lived client secret?",
      "answers": [
        "Use workload identity federation with an appropriate trust between the CI provider and an Entra application or supported managed identity."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-023",
          "url": "https://ai200prep.com/questions/p-rbac-023/"
        },
        {
          "label": "AI-200 Prep · p-acr-005",
          "url": "https://ai200prep.com/questions/p-acr-005/"
        }
      ]
    },
    {
      "id": "prep-p-rbac-020",
      "domain": 4,
      "title": "Role conditions",
      "category": "identity-rbac",
      "question": "What can an Azure ABAC condition add to a supported role assignment?",
      "answers": [
        "Attribute-based restrictions, such as conditions on supported Blob resources or requests, in addition to the assigned role and scope."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-020",
          "url": "https://ai200prep.com/questions/p-rbac-020/"
        }
      ]
    },
    {
      "id": "prep-rbac-027",
      "domain": 4,
      "title": "Sign-in evidence",
      "category": "identity-rbac",
      "question": "What does an Entra sign-in log reveal about an authentication attempt?",
      "answers": [
        "Information such as identity, application, IP address, outcome and applicable authentication or Conditional Access results."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-027",
          "url": "https://ai200prep.com/questions/rbac-027/"
        }
      ]
    },
    {
      "id": "prep-rbac-028",
      "domain": 4,
      "title": "Subnet traffic filtering",
      "category": "identity-rbac",
      "question": "What does an Azure Network Security Group filter?",
      "answers": [
        "Supported inbound/outbound traffic using rules such as source, destination, protocol and port; it is different from application-layer authentication."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-028",
          "url": "https://ai200prep.com/questions/rbac-028/"
        }
      ]
    },
    {
      "id": "prep-mon-003",
      "domain": 4,
      "title": "Metrics and logs",
      "category": "monitor",
      "question": "How do Azure Monitor metrics differ from logs?",
      "answers": [
        "Metrics are numeric time series. Logs are records queried through a log store such as Log Analytics; application telemetry can produce both kinds of signal."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-003",
          "url": "https://ai200prep.com/questions/mon-003/"
        }
      ]
    },
    {
      "id": "prep-mon-004",
      "domain": 4,
      "title": "Metric alert",
      "category": "monitor",
      "question": "Which Azure Monitor alert type evaluates a numeric metric against a threshold?",
      "answers": [
        "A metric alert, using supported static or dynamic threshold conditions."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-004",
          "url": "https://ai200prep.com/questions/mon-004/"
        }
      ]
    },
    {
      "id": "prep-p-mon-005",
      "domain": 4,
      "title": "Log search alert",
      "category": "monitor",
      "question": "Which Azure Monitor alert type evaluates a scheduled KQL query?",
      "answers": [
        "A log search alert, also called a scheduled query alert rule."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-005",
          "url": "https://ai200prep.com/questions/p-mon-005/"
        }
      ]
    },
    {
      "id": "prep-p-mon-004",
      "domain": 4,
      "title": "Alert actions",
      "category": "monitor",
      "question": "Which Azure Monitor object defines notification and automation actions for alert rules?",
      "answers": [
        "An action group."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-004",
          "url": "https://ai200prep.com/questions/p-mon-004/"
        },
        {
          "label": "AI-200 Prep · mon-014",
          "url": "https://ai200prep.com/questions/mon-014/"
        }
      ]
    },
    {
      "id": "prep-mon-006",
      "domain": 4,
      "title": "Availability test",
      "category": "monitor",
      "question": "What does an Application Insights standard availability test check?",
      "answers": [
        "A configured endpoint from external test locations, including supported availability and response checks."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-006",
          "url": "https://ai200prep.com/questions/mon-006/"
        },
        {
          "label": "AI-200 Prep · p-mon-021",
          "url": "https://ai200prep.com/questions/p-mon-021/"
        }
      ]
    },
    {
      "id": "prep-p-mon-007",
      "domain": 4,
      "title": "Live telemetry",
      "category": "monitor",
      "question": "Which Application Insights feature shows near-real-time telemetry during an incident or deployment?",
      "answers": [
        "Live Metrics, for supported instrumentation and configuration."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-007",
          "url": "https://ai200prep.com/questions/p-mon-007/"
        },
        {
          "label": "AI-200 Prep · mon-027",
          "url": "https://ai200prep.com/questions/mon-027/"
        }
      ]
    },
    {
      "id": "prep-p-mon-009",
      "domain": 4,
      "title": "Route resource logs",
      "category": "monitor",
      "question": "What routes supported Azure resource platform logs to Log Analytics, Storage or Event Hubs?",
      "answers": [
        "A diagnostic setting on the resource, selecting the categories and destinations."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-009",
          "url": "https://ai200prep.com/questions/p-mon-009/"
        },
        {
          "label": "AI-200 Prep · mon-029",
          "url": "https://ai200prep.com/questions/mon-029/"
        }
      ]
    },
    {
      "id": "prep-p-mon-012",
      "domain": 4,
      "title": "Alert suppression",
      "category": "monitor",
      "question": "Which Azure Monitor mechanism can suppress configured alert actions during a planned period?",
      "answers": [
        "An alert processing rule with the appropriate scope and suppression schedule."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-012",
          "url": "https://ai200prep.com/questions/p-mon-012/"
        }
      ]
    },
    {
      "id": "prep-p-mon-014",
      "domain": 4,
      "title": "Managed Prometheus",
      "category": "monitor",
      "question": "Where does Azure's managed Prometheus service store AKS metric data?",
      "answers": [
        "In an Azure Monitor workspace, queried using supported Prometheus/PromQL interfaces. This is distinct from a Log Analytics workspace."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-014",
          "url": "https://ai200prep.com/questions/p-mon-014/"
        },
        {
          "label": "AI-200 Prep · mon-026",
          "url": "https://ai200prep.com/questions/mon-026/"
        },
        {
          "label": "AI-200 Prep · p-aks-012",
          "url": "https://ai200prep.com/questions/p-aks-012/"
        },
        {
          "label": "AI-200 Prep · aks-030",
          "url": "https://ai200prep.com/questions/aks-030/"
        }
      ]
    },
    {
      "id": "prep-mon-019",
      "domain": 4,
      "title": "Control-plane log table",
      "category": "monitor",
      "question": "Which Log Analytics table contains Azure Activity Log records when collected?",
      "answers": [
        "AzureActivity."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-019",
          "url": "https://ai200prep.com/questions/mon-019/"
        }
      ]
    },
    {
      "id": "prep-p-mon-017",
      "domain": 4,
      "title": "Telemetry daily cap",
      "category": "monitor",
      "question": "Why can a telemetry ingestion daily cap hide later incidents?",
      "answers": [
        "Eligible ingestion can stop after the cap is reached, leaving gaps until collection resumes under the cap's rules."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-017",
          "url": "https://ai200prep.com/questions/p-mon-017/"
        }
      ]
    },
    {
      "id": "prep-mon-021",
      "domain": 4,
      "title": "Cross-workspace KQL",
      "category": "monitor",
      "question": "Which KQL function references another Log Analytics workspace?",
      "answers": [
        "workspace(...), with the required access and supported cross-resource query limits."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-021",
          "url": "https://ai200prep.com/questions/mon-021/"
        }
      ]
    },
    {
      "id": "prep-mon-028",
      "domain": 4,
      "title": "Application topology",
      "category": "monitor",
      "question": "What does Application Insights Application Map visualize?",
      "answers": [
        "Instrumented components and dependencies, with available call, latency and failure information."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-028",
          "url": "https://ai200prep.com/questions/mon-028/"
        },
        {
          "label": "AI-200 Prep · p-mon-024",
          "url": "https://ai200prep.com/questions/p-mon-024/"
        }
      ]
    },
    {
      "id": "prep-p-mon-013",
      "domain": 4,
      "title": "Custom metric table",
      "category": "monitor",
      "question": "Which Application Insights query table contains custom measurements?",
      "answers": [
        "customMetrics in the Application Insights schema; AppMetrics is the corresponding workspace-based table."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-013",
          "url": "https://ai200prep.com/questions/p-mon-013/"
        }
      ]
    }
  ]
};
