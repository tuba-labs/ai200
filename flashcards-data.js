// AI-200 study flashcards: reviewed questions, categories and traceable sources.
window.AI200_FLASHCARDS = {
  "version": 2,
  "language": "en",
  "categories": [
    {
      "id": "terms-1",
      "label": "Terms · Containere",
      "domain": 1,
      "kind": "term"
    },
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
      "id": "terms-2",
      "label": "Terms · AI-data",
      "domain": 2,
      "kind": "term"
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
      "id": "terms-3",
      "label": "Terms · Integrasjoner",
      "domain": 3,
      "kind": "term"
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
      "id": "terms-4",
      "label": "Terms · Sikkerhet",
      "domain": 4,
      "kind": "term"
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
      "id": "term-d1-provisioning",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Provisioning",
      "title": "Provisioning",
      "question": "What does provision mean in Azure?",
      "answers": [
        "To create and configure the resources an application needs. For example, provisioning a virtual machine allocates its compute, disks and network settings. Deploying your application code is a separate step, even when one deployment workflow does both."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure resources and provisioning",
          "url": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-resource",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Azure resource",
      "title": "Azure resource",
      "question": "What is an Azure resource?",
      "answers": [
        "An individual service instance or managed object in Azure, such as a storage account, web app or virtual machine. It has an identity and settings that Azure can create, update or delete. A resource group organizes related resources."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure resources and provisioning",
          "url": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-resource-group",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Resource group",
      "title": "Resource group",
      "question": "What is an Azure resource group?",
      "answers": [
        "A named group of related Azure resources managed together. For example, a workshop can put its app, registry and storage account in one resource group, making permissions and cleanup easier to manage."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure resources and provisioning",
          "url": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-subscription",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Azure subscription",
      "title": "Azure subscription",
      "question": "What is an Azure subscription?",
      "answers": [
        "A boundary used to organize Azure resources, billing, quotas and access. Resource groups belong to a subscription. Selecting the correct subscription before creating resources determines where they are managed and charged; it is different from a messaging-topic subscription."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure resources and provisioning",
          "url": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview",
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-region",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Azure region",
      "title": "Azure region",
      "question": "What is an Azure region?",
      "answers": [
        "A geographic area containing Azure datacenters, such as Norway East. You select a region when creating many resources to control where they run or store data. Service availability and supported configurations can differ between regions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Regions and availability zones",
          "url": "https://learn.microsoft.com/en-us/azure/reliability/regions-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/reliability/regions-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-availability-zone",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Availability zone",
      "title": "Availability zone",
      "question": "What is an Azure availability zone?",
      "answers": [
        "A physically separate group of datacenters within one Azure region, with independent power, cooling and networking. Deploying across supported zones can protect against a single-zone failure. Multiple zones in one region are different from deploying in multiple regions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Regions and availability zones",
          "url": "https://learn.microsoft.com/en-us/azure/reliability/regions-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/reliability/regions-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-sku",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "SKU",
      "title": "SKU",
      "question": "What does SKU mean for an Azure service?",
      "answers": [
        "Stock Keeping Unit. For an Azure service, it identifies the tier or size you purchase, such as ACR Premium or a virtual-machine size. That choice determines available features, capacity and pricing."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Registry tiers",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Virtual machines",
          "url": "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus",
          "https://learn.microsoft.com/en-us/azure/virtual-machines/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-vm",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Virtual machine (VM)",
      "title": "Virtual machine (VM)",
      "question": "What is a virtual machine in Azure?",
      "answers": [
        "A computer provided through software, with allocated processor capacity, memory, disks and its own operating system. VM stands for virtual machine. You install and run applications on it much like on a physical server."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Virtual machines",
          "url": "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
          "kind": "primary"
        },
        {
          "label": "Docker · Containers",
          "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/virtual-machines/overview",
          "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-cli",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "CLI",
      "title": "CLI",
      "question": "What does CLI stand for?",
      "answers": [
        "Command-line interface: controlling software by typing commands. Azure CLI uses commands starting with az. For example, az group list lists the resource groups you can access."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure CLI",
          "url": "https://learn.microsoft.com/en-us/cli/azure/what-is-azure-cli",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/cli/azure/what-is-azure-cli"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-sdk",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "SDK",
      "title": "SDK",
      "question": "What does SDK stand for?",
      "answers": [
        "Software development kit: libraries and tools your application uses to work with a platform or service. For example, the Azure Python SDK includes a SecretClient for reading Key Vault secrets. An SDK call runs from your code; a CLI command runs from a command-line tool."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Read secrets with Python",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Azure SDKs",
          "url": "https://learn.microsoft.com/en-us/azure/developer/intro/azure-developer-create-resources",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python",
          "https://learn.microsoft.com/en-us/azure/developer/intro/azure-developer-create-resources"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-iac",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Infrastructure as Code (IaC)",
      "title": "Infrastructure as Code (IaC)",
      "question": "What does Infrastructure as Code mean?",
      "answers": [
        "Describing resources and their configuration in versioned files instead of relying only on manual portal steps. IaC stands for Infrastructure as Code. A deployment tool reads the files to create or update the environment, making it easier to review and reproduce."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Infrastructure as code",
          "url": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-bicep",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Bicep",
      "title": "Bicep",
      "question": "What is Bicep in Azure?",
      "answers": [
        "A language for describing which Azure resources should exist and how they should be configured. Azure Resource Manager reads the description and creates or updates the resources. For example, one Bicep file can declare a storage account and function app."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Infrastructure as code",
          "url": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-cicd",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "CI/CD",
      "title": "CI/CD",
      "question": "What does CI/CD stand for?",
      "answers": [
        "Continuous Integration and Continuous Delivery or Deployment. CI automatically builds and checks code changes. Delivery prepares a release for deployment, often with approval; deployment automatically releases successful changes. A pipeline connects those steps so releasing an application is repeatable."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Continuous delivery",
          "url": "https://learn.microsoft.com/en-us/devops/deliver/what-is-continuous-delivery",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/devops/deliver/what-is-continuous-delivery"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-docker",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Docker",
      "title": "Docker",
      "question": "What is Docker?",
      "answers": [
        "A set of tools for building container images and running containers. For example, docker build creates an image from a Dockerfile, and docker run starts a container from that image. Docker is a product name; an image is the packaged template and a container is its running instance."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Docker · Containers",
          "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
          "kind": "primary"
        },
        {
          "label": "Docker · Images",
          "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
          "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-image",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Container image",
      "title": "Container image",
      "question": "What is a container image?",
      "answers": [
        "A packaged template containing an application, its dependencies and startup configuration. You build and store the image, then start containers from it. One image can create many separate containers, just as one installer can be used to set up multiple running copies."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Docker · Images",
          "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-container",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Container",
      "title": "Container",
      "question": "What is an application container?",
      "answers": [
        "An isolated environment running an application from a container image. It packages the application’s files and dependencies while sharing the host’s operating-system kernel. The image is the reusable template; containers are the running copies."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Docker · Containers",
          "url": "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-dockerfile",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Dockerfile",
      "title": "Dockerfile",
      "question": "What is a Dockerfile?",
      "answers": [
        "A text file of instructions for building a container image. For example, it can select a base image, copy application files, install dependencies and set the startup command. docker build reads those instructions to create the image."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Docker · Dockerfiles",
          "url": "https://docs.docker.com/reference/dockerfile/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://docs.docker.com/reference/dockerfile/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-registry",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Container registry",
      "title": "Container registry",
      "question": "What is a container registry?",
      "answers": [
        "A service that stores container images and makes them available for upload and download. A build pipeline pushes an image there, and a hosting platform pulls it to start containers. Azure Container Registry and Docker Hub are examples."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure Container Registry",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-intro",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-intro"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-acr",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "ACR",
      "title": "ACR",
      "question": "What does ACR stand for?",
      "answers": [
        "Azure Container Registry. It is Azure’s service for storing and distributing container images and related artifacts. For example, your app’s image can be stored in ACR and pulled by Azure Kubernetes Service when the app starts."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure Container Registry",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-intro",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-intro"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-repository",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Image repository",
      "title": "Image repository",
      "question": "What is a repository inside a container registry?",
      "answers": [
        "A named collection of related image versions, such as myapp. In myregistry.azurecr.io/myapp:v1, myregistry.azurecr.io is the registry hostname, myapp is the repository and v1 is the tag. An image repository stores built images; a Git repository stores source files and history."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Docker push to ACR",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-image-tag",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Image tag",
      "title": "Image tag",
      "question": "What is a container image tag?",
      "answers": [
        "A human-readable name attached to an image version, such as v1 or latest. In myapp:v1, v1 is the tag. Tags can be moved to different image content unless protected, so the word latest does not automatically mean the newest build."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-digest",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Image digest",
      "title": "Image digest",
      "question": "What is a container image digest?",
      "answers": [
        "A content-derived identifier, commonly written sha256: followed by a long hexadecimal value. It identifies the image manifest’s contents. Unlike a movable tag, referencing the digest selects that specific content, making the deployed version unambiguous."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-build-context",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Build context",
      "title": "Build context",
      "question": "What is a Docker build context?",
      "answers": [
        "The files made available to the image builder. In docker build -t myapp:v1 ., the final dot selects the current directory as the context. Dockerfile instructions such as COPY can use files from that context, subject to exclusions such as .dockerignore."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Docker · Build context",
          "url": "https://docs.docker.com/build/concepts/context/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://docs.docker.com/build/concepts/context/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-image-push",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Image push",
      "title": "Image push",
      "question": "What does pushing a container image mean?",
      "answers": [
        "Uploading an image from the local builder/client to a registry. For example, docker push myregistry.azurecr.io/myapp:v1 uploads that named image to myregistry. Giving an image a registry-qualified tag prepares its destination name; pushing performs the transfer."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Docker push to ACR",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-image-pull",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Image pull",
      "title": "Image pull",
      "question": "What does pulling a container image mean?",
      "answers": [
        "Downloading an image from a registry so it can be used locally. A container host pulls the required image content before starting the application when it is not already available in its cache. Pulling an image does not itself start a container."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Docker push to ACR",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Image pull policy",
          "url": "https://kubernetes.io/docs/concepts/containers/images/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "https://kubernetes.io/docs/concepts/containers/images/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-app-service",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "App Service",
      "title": "App Service",
      "question": "What is Azure App Service?",
      "answers": [
        "A managed platform for hosting web applications and HTTP APIs. Azure runs the hosting infrastructure, while you deploy code or a supported container and configure the app. You choose a hosting plan rather than directly managing every server."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · App Service",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-deployment-slot",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Deployment slot",
      "title": "Deployment slot",
      "question": "What is a deployment slot in Azure App Service?",
      "answers": [
        "A separate live version of an App Service app, with its own hostname and configuration. For example, deploy a new release to staging, test it, then swap it into production. The slots share the App Service plan’s compute capacity."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Deployment slots",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-container-apps",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Container Apps",
      "title": "Container Apps",
      "question": "What is Azure Container Apps?",
      "answers": [
        "A managed platform that runs containerized applications and jobs without requiring you to manage a Kubernetes cluster directly. You supply container images and settings such as ingress and scaling rules. Azure manages the underlying container-hosting infrastructure."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Container Apps",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-kubernetes",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes",
      "title": "Kubernetes",
      "question": "What is Kubernetes?",
      "answers": [
        "A platform that coordinates containers across a group of machines. It schedules workloads, replaces failed instances and manages features such as service discovery and scaling. You describe the desired application state, and its controllers work to maintain it."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-aks",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "AKS",
      "title": "AKS",
      "question": "What does AKS stand for?",
      "answers": [
        "Azure Kubernetes Service. It is Azure’s managed service for running Kubernetes clusters. Azure operates the control plane that coordinates the cluster, while your applications run in pods on worker nodes."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-cluster",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes cluster",
      "title": "Kubernetes cluster",
      "question": "What is a Kubernetes cluster?",
      "answers": [
        "A group of worker machines coordinated by a Kubernetes control plane. The worker machines run application pods, and the control plane manages where they run and how the desired workload is maintained. One cluster can host many applications."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-control-plane",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes control plane",
      "title": "Kubernetes control plane",
      "question": "What is the Kubernetes control plane?",
      "answers": [
        "The cluster’s management components. They expose its API, decide where pods should run and coordinate changes needed to maintain the desired setup. Worker nodes run the application pods. In AKS, Azure operates the managed control plane."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-node",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes / AKS node",
      "title": "Kubernetes / AKS node",
      "question": "What is a node in Kubernetes?",
      "answers": [
        "A worker machine that runs pods. It supplies CPU, memory and the container runtime needed by those pods. In Azure Kubernetes Service (AKS), a worker node is typically an Azure virtual machine in a node pool. One node can run many pods; a pod is not the machine itself."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-node-pool",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "AKS node pool",
      "title": "AKS node pool",
      "question": "What is a node pool in AKS?",
      "answers": [
        "A group of worker nodes with a common configuration, such as virtual-machine size and operating system. You can use separate pools for ordinary apps, system workloads or GPU workloads. Scaling a pool changes the number of worker machines, not directly the number of application pods."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · System node pools",
          "url": "https://learn.microsoft.com/en-us/azure/aks/use-system-pools",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "https://learn.microsoft.com/en-us/azure/aks/use-system-pools"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-pod",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes pod",
      "title": "Kubernetes pod",
      "question": "What is a pod in Kubernetes?",
      "answers": [
        "The smallest deployable unit Kubernetes schedules. It contains one or more closely related containers that share networking and can share storage. A common application pod has one main container. Kubernetes places the pod on a node and can replace it when it fails."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Kubernetes and AKS concepts",
          "url": "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/core-aks-concepts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-replica",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Replica",
      "title": "Replica",
      "question": "What is a replica of an application?",
      "answers": [
        "One running copy of the application workload. Three pod replicas means three copies serving the same application, often to handle more requests or survive one copy failing. A replica is not necessarily on its own node; several replicas can be placed on one machine unless scheduling rules prevent it."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-deployment",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes Deployment",
      "title": "Kubernetes Deployment",
      "question": "What is a Deployment in Kubernetes?",
      "answers": [
        "A workload controller that maintains a desired number of application pod replicas and manages updates to their pod template. For example, it can keep three web-server pods running while replacing them during an image update. Deployment is the controller object; the pods are the running copies."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-daemonset",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "DaemonSet",
      "title": "DaemonSet",
      "question": "What is a DaemonSet in Kubernetes?",
      "answers": [
        "It keeps a copy of a pod running on every eligible node. For example, a DaemonSet can place a log-collection agent on each worker machine. When another eligible node joins, Kubernetes creates the agent pod there too."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · DaemonSet",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-service",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes Service",
      "title": "Kubernetes Service",
      "question": "What is a Service in Kubernetes?",
      "answers": [
        "A stable network destination for a set of pods. Pod addresses can change when pods are replaced, so clients use the Service name/address instead. The Service selects the relevant pods, usually through labels, and directs traffic to their available endpoints."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-ingress",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes Ingress",
      "title": "Kubernetes Ingress",
      "question": "What is Ingress in Kubernetes?",
      "answers": [
        "A set of HTTP/HTTPS routing rules for reaching Services, often based on hostname or URL path. For example, /orders can route to the orders Service. An ingress controller implements the rules; creating an Ingress object alone does not create the working traffic handler."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Ingress",
          "url": "https://kubernetes.io/docs/concepts/services-networking/ingress/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/ingress/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-namespace",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes namespace",
      "title": "Kubernetes namespace",
      "question": "What is a namespace in Kubernetes?",
      "answers": [
        "A logical scope for grouping namespaced resources within a cluster. For example, staging and production can have separate namespaces containing Services with the same name. A namespace organizes resources and access policies; it does not automatically provide complete network or security isolation."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Namespaces",
          "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-manifest",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes manifest",
      "title": "Kubernetes manifest",
      "question": "What is a Kubernetes manifest?",
      "answers": [
        "A YAML or JSON file describing a Kubernetes resource and its desired settings. For example, a Deployment manifest specifies the image and number of replicas. Applying the file asks Kubernetes to create or update the actual resource to match."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Object manifests",
          "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/overview/working-with-objects/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-label",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes label",
      "title": "Kubernetes label",
      "question": "What is a label in Kubernetes?",
      "answers": [
        "A key/value marker attached to an object, such as app=orders on a pod. Other objects use selectors to find matching labels. For example, a Service can route to pods labeled app=orders."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Labels and selectors",
          "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-selector",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Kubernetes selector",
      "title": "Kubernetes selector",
      "question": "What is a selector in Kubernetes?",
      "answers": [
        "A rule that chooses objects by their labels. For example, a Service selector app=orders chooses matching pods as its backends. If the labels do not match, the Service cannot find those pods even though they are running."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Labels and selectors",
          "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",
          "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-request",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Resource request",
      "title": "Resource request",
      "question": "What is a resource request in Kubernetes?",
      "answers": [
        "The amount of a resource, such as CPU or memory, declared for scheduling a container. The scheduler uses requests to decide whether a node has capacity for the pod. A request is not the same as the maximum the container may consume; that is governed separately by limits and resource behavior."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Resource requests and limits",
          "url": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-limit",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "Resource limit",
      "title": "Resource limit",
      "question": "What is a resource limit in Kubernetes?",
      "answers": [
        "An upper bound configured for a container resource. CPU use can be throttled at its limit; exceeding a memory limit can cause the container to be killed. Requests guide scheduling, while limits constrain use. The two settings serve different purposes."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Resource requests and limits",
          "url": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-dns",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "DNS",
      "title": "DNS",
      "question": "What does DNS stand for?",
      "answers": [
        "Domain Name System. It translates names such as myregistry.azurecr.io into network addresses. That lets a client find the service using a readable hostname instead of having to know its current IP address."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · DNS and hostnames",
          "url": "https://learn.microsoft.com/en-us/azure/dns/dns-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/dns/dns-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-yaml",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "YAML",
      "title": "YAML",
      "question": "What is YAML?",
      "answers": [
        "A text format for structured data, commonly used for Kubernetes manifests and pipeline definitions. Its name expands to YAML Ain’t Markup Language. Indentation defines the structure, so changing a line’s indentation can change the meaning."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Object manifests",
          "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/overview/working-with-objects/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-json",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "JSON",
      "title": "JSON",
      "question": "What is JSON?",
      "answers": [
        "JavaScript Object Notation, a text format for structured data using objects, arrays and values. For example, {\"enabled\": true} is an object with a boolean setting. APIs and Azure configuration files often exchange JSON; the format is not limited to JavaScript programs."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Local function settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-keda",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "KEDA",
      "title": "KEDA",
      "question": "What does KEDA stand for?",
      "answers": [
        "Kubernetes Event-driven Autoscaling. It connects workload scaling to external signals such as queue length, so new work can start replicas even when none is running. Container Apps uses KEDA-based event scaling without requiring you to manage the underlying Kubernetes objects directly."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-cpu",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "CPU",
      "title": "CPU",
      "question": "What does CPU stand for?",
      "answers": [
        "Central Processing Unit, the general-purpose processor that executes instructions. Kubernetes CPU requests and limits describe how much processor capacity a container needs or can use. One CPU unit corresponds to one logical core; 500 millicores is half of that capacity."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Kubernetes · Resource requests and limits",
          "url": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-gpu",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "GPU",
      "title": "GPU",
      "question": "What does GPU stand for?",
      "answers": [
        "Graphics Processing Unit. It is a processor suited to many parallel calculations, including machine-learning workloads. Using a GPU in Kubernetes needs suitable GPU-enabled nodes and resource configuration; adding ordinary CPU replicas does not automatically provide GPU capacity."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · GPUs in AKS",
          "url": "https://learn.microsoft.com/en-us/azure/aks/gpu-cluster",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/gpu-cluster"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d1-cni",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "CNI",
      "title": "CNI",
      "question": "What does CNI stand for in Kubernetes networking?",
      "answers": [
        "Container Network Interface. It defines how networking plugins connect containers to a network. Azure CNI is an AKS implementation; its selected mode affects pod addresses and how pod traffic reaches other networks."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Overlay networking",
          "url": "https://learn.microsoft.com/en-us/azure/aks/azure-cni-overlay",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/azure-cni-overlay"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-url",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "URL",
      "title": "URL",
      "question": "What does URL stand for?",
      "answers": [
        "Uniform Resource Locator: an address showing how and where to access a resource. For example, https://example.com/orders specifies HTTPS as the scheme, example.com as the hostname and /orders as the path."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · HTTP concepts",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d1-uri",
      "domain": 1,
      "category": "terms-1",
      "kind": "term",
      "term": "URI",
      "title": "URI",
      "question": "What does URI stand for?",
      "answers": [
        "Uniform Resource Identifier. It identifies a resource; a URL is one kind of URI that also gives its location. A Key Vault secret URI, for example, identifies the vault, secret name and optionally its version."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-11-3-1",
      "domain": 1,
      "category": "terms-1",
      "title": "Kubernetes probes",
      "question": "What is the purpose of a Kubernetes startup probe?",
      "answers": [
        "It gives a slow-starting container time to initialize. While the startup probe has not succeeded, liveness and readiness probes are held back. Once it succeeds, those probes take over. Repeated startup failures beyond its threshold can still cause the container to restart."
      ],
      "origin": "original",
      "legacyIds": [
        11
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Health probes",
          "url": "https://kubernetes.io/docs/concepts/workloads/pods/probes/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/pods/probes/"
        ]
      },
      "coverageCategory": "aks",
      "kind": "term",
      "term": "Startup probe",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-16-1-1",
      "domain": 1,
      "category": "terms-1",
      "title": "AKS autoscalers",
      "question": "What does the Kubernetes Horizontal Pod Autoscaler scale?",
      "answers": [
        "The number of pod replicas. The Horizontal Pod Autoscaler (HPA) adds or removes replicas according to configured metrics, within its minimum and maximum counts. For example, it can add web-server pods when CPU utilization rises."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Horizontal autoscaling",
          "url": "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/"
        ]
      },
      "coverageCategory": "aks",
      "kind": "term",
      "term": "HPA · Horizontal Pod Autoscaler",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-16-3-1",
      "domain": 1,
      "category": "terms-1",
      "title": "AKS autoscalers",
      "question": "What does the Kubernetes Vertical Pod Autoscaler adjust?",
      "answers": [
        "The CPU and memory resources requested for containers. The Vertical Pod Autoscaler (VPA) recommends or applies new sizes based on usage. Applying them can require replacing pods, depending on the configured update policy."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vertical pod autoscaling",
          "url": "https://learn.microsoft.com/en-us/azure/aks/use-vertical-pod-autoscaler",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/use-vertical-pod-autoscaler"
        ]
      },
      "coverageCategory": "aks",
      "kind": "term",
      "term": "VPA · Vertical Pod Autoscaler",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-aks-015",
      "domain": 1,
      "title": "Voluntary disruptions",
      "category": "terms-1",
      "question": "What does a Kubernetes PodDisruptionBudget limit during node maintenance?",
      "answers": [
        "How many matching application pods may be evicted during voluntary disruption, such as draining a node. A PodDisruptionBudget (PDB) helps maintenance keep enough replicas available. It cannot prevent an unexpected node failure."
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
        },
        {
          "label": "Kubernetes · Disruption budgets",
          "url": "https://kubernetes.io/docs/tasks/run-application/configure-pdb/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/tasks/run-application/configure-pdb/"
        ]
      },
      "coverageCategory": "aks",
      "kind": "term",
      "term": "PDB · PodDisruptionBudget",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-aks-023",
      "domain": 1,
      "title": "Stateful workloads",
      "category": "terms-1",
      "question": "What is a Kubernetes StatefulSet used for?",
      "answers": [
        "Workloads needing stable pod identities and usually separate persistent storage per pod, such as database members. A StatefulSet gives pods predictable names and supports ordered rollout behavior. The application must still manage its own data replication and recovery."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-023",
          "url": "https://ai200prep.com/questions/aks-023/"
        },
        {
          "label": "Kubernetes · StatefulSets",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"
        ]
      },
      "coverageCategory": "aks",
      "kind": "term",
      "term": "StatefulSet",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-ca-001",
      "domain": 1,
      "title": "Container Apps environment",
      "category": "terms-1",
      "question": "What is a Container Apps environment?",
      "answers": [
        "A shared hosting boundary for Container Apps, with common networking and logging configuration. It can contain several apps. Each app has its own revisions, while the environment supplies their shared infrastructure."
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
        },
        {
          "label": "Microsoft Learn · Container Apps environments",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/environment",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/environment"
        ]
      },
      "coverageCategory": "container-apps",
      "kind": "term",
      "term": "Container Apps environment",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-ca-002",
      "domain": 1,
      "title": "Revision snapshot",
      "category": "terms-1",
      "question": "What does a Container Apps revision represent?",
      "answers": [
        "A saved version of the app’s deployment configuration, such as its container image and environment variables. That configuration is immutable: changing it creates another revision. App-level settings, such as secret definitions, are managed separately."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-002",
          "url": "https://ai200prep.com/questions/ca-002/"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "coverageCategory": "container-apps",
      "kind": "term",
      "term": "Container Apps revision",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-01-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "Which source-code events can trigger an ACR Task?",
      "answers": [
        "A commit to the configured Git branch, or creation/update of a pull request. Commit triggers are enabled by default; pull-request triggers must be enabled. The task needs access to a supported repository so ACR can register its event webhook."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · ACR Tasks",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-01-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "How does an ACR Task know when to rebuild after its base image changes?",
      "answers": [
        "During the first build, the task records the base images it depends on. With base-image triggering enabled, later updates can start a rebuild. ACR-hosted image updates trigger dependent tasks; public Docker Hub and Microsoft Container Registry images are checked at intervals of 10–60 minutes."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Base-image triggers",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-base-images",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-base-images"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-01-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "What schedule format does an ACR Tasks timer use?",
      "answers": [
        "A five-field cron expression: minute, hour, day of month, month and day of week. Times are in UTC. For example, 0 9 * * 1-5 runs at 09:00 UTC on weekdays. The shortest supported interval is one minute."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Task schedules",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-scheduled",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-scheduled"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-01-4-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks triggers",
      "question": "Do ACR webhooks or Artifact Cache rules start source builds?",
      "answers": [
        "No. A registry webhook notifies another service about registry activity. An Artifact Cache rule caches images from an upstream registry. Neither is an ACR Tasks trigger that builds application source code; task triggers are configured separately."
      ],
      "origin": "original",
      "legacyIds": [
        1
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 1",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · ACR Tasks",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-02-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR pull and push roles",
      "question": "Which pull and push roles apply to an ACR registry using RBAC Registry Permissions?",
      "answers": [
        "AcrPull allows downloading images. AcrPush allows uploading and downloading images. Use these roles when the registry’s permission mode is RBAC Registry Permissions."
      ],
      "origin": "original",
      "legacyIds": [
        2
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 2",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Registry roles",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-02-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR pull and push roles",
      "question": "Which ACR roles grant repository pull or push access when ABAC is enabled?",
      "answers": [
        "Container Registry Repository Reader allows pulls. Container Registry Repository Writer allows pushes and pulls. On an ABAC-enabled registry, conditions on these role assignments can limit access to particular repositories."
      ],
      "origin": "original",
      "legacyIds": [
        2
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 2",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Registry roles",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-02-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR pull and push roles",
      "question": "Are legacy AcrPull, AcrPush and AcrDelete roles honored on an ABAC-enabled registry?",
      "answers": [
        "No. In RBAC Registry + ABAC Repository Permissions mode, AcrPull, AcrPush and AcrDelete do not grant repository access. Assign the appropriate Container Registry Repository Reader, Writer or Contributor role instead."
      ],
      "origin": "original",
      "legacyIds": [
        2
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 2",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Registry roles",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-03-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "What does an ACR quick task do?",
      "answers": [
        "A quick task builds a container image on demand in Azure Container Registry (ACR). For example:\naz acr build --registry myregistry --image myapp:v1 .\nThis builds from the current directory, marked by the final dot, using its Dockerfile and source files. By default it uploads the resulting image to myregistry as repository myapp with tag v1. You need Azure CLI and the source files, but no local Docker Engine, because Azure runs the build."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Build an image in Azure",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-03-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "How is a Git repository configured as an ACR Task's build context?",
      "answers": [
        "Create a task whose build context is the Git repository, for example in PowerShell:\naz acr task create --registry myregistry --name build-app --image \"myapp:{{.Run.ID}}\" --context \"https://github.com/example/myapp.git#main\" --file Dockerfile --git-access-token $env:GIT_TOKEN\nReplace the registry/repository names and URL. Store the authorized repository token securely in GIT_TOKEN first. --context selects the repository’s main branch; --file selects its Dockerfile. The image tag includes the run ID. Configure supported Git triggers and token permissions so ACR can register the repository webhook."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · ACR Tasks",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-03-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "What defines an ACR multi-step task?",
      "answers": [
        "A task YAML file containing the steps and their dependencies. For example, it can build an image, run tests and push the image only after the tests pass. To run an existing file from the current directory:\naz acr run --registry myregistry --file task.yaml ."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Multi-step tasks",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-multi-step",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-multi-step"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-03-4-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "What sequence connects a Git commit to a new ACR image?",
      "answers": [
        "A commit reaches the watched branch, the repository webhook starts the ACR task, and the task builds and pushes an image. A tag containing the run ID, such as myapp:{{.Run.ID}}, gives that build its own identifiable version."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · ACR Tasks",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-03-5-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR Tasks build types",
      "question": "How can a GitHub Actions workflow run an existing ACR Task?",
      "answers": [
        "Add a workflow step that calls ACR Tasks through Azure CLI. For example, with an existing task and an authenticated Azure CLI session:\naz acr task run --registry myregistry --name build-app\nGitHub Actions starts the run, while ACR performs the configured build steps."
      ],
      "origin": "original",
      "legacyIds": [
        3
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 3",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · ACR Tasks",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced a vague “does this automatically count as that” question with the concrete relationship between the two services."
      }
    },
    {
      "id": "m-04-1-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Why can pulling myapp:latest return a different image after another push?",
      "answers": [
        "Because latest is a movable tag. Someone can push a new image under the same name, so a later pull retrieves different content. Use a protected release tag or a digest when you need a fixed version."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-04-2-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Why use a different image tag for each build?",
      "answers": [
        "To identify the build you intend to deploy. For example, myapp:build-1042 distinguishes that release from build-1043, so a restart does not accidentally select a newer build under a reused name. Keep each release tag unchanged or protect it from overwrites."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-04-3-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Which image reference pins exact content even if a tag moves?",
      "answers": [
        "Use the manifest digest, for example myregistry.azurecr.io/myapp@sha256:<digest>. The digest identifies the manifest content, so moving a tag such as latest does not change what this reference selects."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-04-4-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "How do you push a local container image to Azure Container Registry?",
      "answers": [
        "Assume myapp:v1 already exists locally and your ACR registry is named myregistry.\n\n1. Sign in to Azure and authenticate Docker to the registry:\naz login\naz acr login --name myregistry\n\n2. Give the local image a name that includes the destination registry:\ndocker tag myapp:v1 myregistry.azurecr.io/myapp:v1\n\n3. Upload the image using that full name:\ndocker push myregistry.azurecr.io/myapp:v1\n\nmyregistry.azurecr.io is the registry hostname, myapp is the repository and v1 is the version tag. Tagging adds a local name; it does not rebuild or upload the image. Replace the example names with yours and use the actual Login server shown by ACR."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Docker push to ACR",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Registry login-server names",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Kept the complete worked commands and replaced the abstract “authenticated push sequence” wording."
      }
    },
    {
      "id": "m-04-5-1",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "Which image tag is assumed when none is specified?",
      "answers": [
        "Docker assumes the tag latest. For example, docker pull myregistry.azurecr.io/myapp requests myapp:latest. The name latest does not guarantee that it is the most recently built image; it is simply a tag someone must publish."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Docker push to ACR",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Image tags and versions",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-tag-version"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-04-5-2",
      "domain": 1,
      "category": "acr",
      "title": "ACR tags and digests",
      "question": "How can an ACR tag be protected from later overwrites?",
      "answers": [
        "Set the tag attribute write-enabled to false. For example:\naz acr repository update --name myregistry --image myapp:v1 --write-enabled false\nThis prevents overwriting that tag. Set delete-enabled to false as well if the image must also be protected from deletion."
      ],
      "origin": "original",
      "legacyIds": [
        4
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 4",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Protect image tags",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-lock",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-image-lock"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-05-1-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service pull from ACR",
      "question": "How can App Service pull from ACR without storing registry credentials?",
      "answers": [
        "Enable a managed identity on the App Service app and grant it image-read access to ACR. Configure the app to use that identity for image pulls. Use AcrPull with RBAC Registry Permissions, or the appropriate repository-reader role with an ABAC-enabled registry. The app then authenticates without a stored registry password."
      ],
      "origin": "original",
      "legacyIds": [
        5
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · App Service containers",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Registry roles",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-05-3-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service pull from ACR",
      "question": "Why is the ACR administrator account unsuitable for a production app identity?",
      "answers": [
        "The registry administrator account uses shared, powerful credentials with push and pull access. Sharing them across applications makes access harder to limit and audit. Prefer a separate managed identity for each application, with only the registry permissions it needs."
      ],
      "origin": "original",
      "legacyIds": [
        5
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · App Service containers",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Registry roles",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-rbac-built-in-roles-directory-reference"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-05-4-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service pull from ACR",
      "question": "Does pushing to the same tag automatically refresh an App Service container?",
      "answers": [
        "No. The running container continues using its current image until the app pulls again. Restart/update the app to trigger a new pull, or configure App Service’s continuous-deployment webhook."
      ],
      "origin": "original",
      "legacyIds": [
        5
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 5",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · App Service containers",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/configure-custom-container"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-06-1-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "How do App Service and Functions expose app settings to application code?",
      "answers": [
        "As environment variables. For example, an app setting WORKSHOP_MODE=production can be read in Python as os.environ[\"WORKSHOP_MODE\"]. This lets you configure an application without baking each environment’s values into its image."
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
        },
        {
          "label": "Microsoft Learn · App settings",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/configure-common",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/configure-common"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-06-3-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "How do App Service connection strings differ from ordinary app settings?",
      "answers": [
        "Connection strings are exposed with a type-specific prefix, such as CUSTOMCONNSTR_ for a custom connection string. Ordinary app settings use their configured names directly. Application code must read the resulting environment-variable name, including any connection-string prefix."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · App settings",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/configure-common",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed the blanket claim that non-.NET applications should not use connection-string settings.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/configure-common"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-06-4-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "What happens to a slot setting during an App Service slot swap?",
      "answers": [
        "A setting marked as a deployment-slot setting stays with its slot during a swap. For example, staging keeps its staging database address while the application code is swapped. Use this for configuration that belongs to the environment rather than to the deployed version."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Deployment slots",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-06-5-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service app settings",
      "question": "Why should runtime credentials be kept out of a Dockerfile?",
      "answers": [
        "A value placed in a Dockerfile or image can be recovered by someone who can inspect that image or its history. Supply credentials at runtime through an authorized secret mechanism, such as a Key Vault reference, instead of distributing them with every copy of the image."
      ],
      "origin": "original",
      "legacyIds": [
        6
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 6",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-07-1-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "What is the syntax of an App Service or Functions Key Vault reference?",
      "answers": [
        "Set the app-setting value to a Key Vault reference. For example:\n@Microsoft.KeyVault(SecretUri=https://myvault.vault.azure.net/secrets/mysecret)\nAn alternative is @Microsoft.KeyVault(VaultName=myvault;SecretName=mysecret). Include a secret version to pin that version; omit it to let the platform retrieve newer versions."
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
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-07-2-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "Which identity permission is needed to resolve an App Service Key Vault reference?",
      "answers": [
        "Permission to read the secret value. Use Key Vault Secrets User on an RBAC-enabled vault, or the secrets Get permission under access policies. App Service normally uses its system-assigned identity, and the app also needs network access to the vault."
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
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-07-3-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "Does using a Key Vault reference require secret-reading code in the app?",
      "answers": [
        "No. App Service resolves the reference and supplies the secret as the app setting or connection-string value. Application code reads that value in the normal way; it does not need to call the Key Vault SDK just to resolve the platform reference."
      ],
      "origin": "original",
      "legacyIds": [
        7
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 7",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-07-4-1",
      "domain": 1,
      "category": "app-service",
      "title": "App Service Key Vault refs",
      "question": "When does App Service refresh a versionless Key Vault reference?",
      "answers": [
        "Normally within 24 hours after a new secret version is available. An app configuration change causes a restart and immediate refetch. You can also request a refresh through the authenticated Key Vault-reference refresh endpoint."
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
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-08-1-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "Which KEDA settings select a Service Bus queue and its scaling target?",
      "answers": [
        "For an azure-servicebus rule, namespace and queueName identify the queue; messageCount sets the target backlog per replica. For example, namespace=orders-bus queueName=jobs messageCount=5 watches jobs and targets about five queued messages per replica. Configure an identity or secret that can read the queue."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-08-2-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "Which KEDA settings select a Storage queue and its scaling target?",
      "answers": [
        "For an azure-queue rule, accountName and queueName identify the queue; queueLength sets the target backlog per replica. For example, accountName=mystorage queueName=jobs queueLength=5 selects jobs and targets about five messages per replica. The rule also needs queue access."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-08-3-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "What is the default polling interval for Container Apps event-driven scaling?",
      "answers": [
        "30 seconds for custom KEDA event-source rules by default. This is how often the scaler checks the source for work, such as messages waiting in a queue."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-08-3-2",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "When does the default 300-second Container Apps cooldown apply?",
      "answers": [
        "When an inactive app scales from its last replica to zero. The cooldown waits after the source stops reporting activity before removing that final replica. It is not a 300-second delay on every decrease between nonzero replica counts."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-08-4-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "How is the target replica count estimated from a queue-length metric?",
      "answers": [
        "Divide the queue length by the target messages per replica and round up. For 12 messages and a target of 5, 12 ÷ 5 rounds up to 3 replicas. The configured minimum and maximum then bound that target."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-08-5-1",
      "domain": 1,
      "category": "keda",
      "title": "KEDA scale rule",
      "question": "What are the Container Apps min/max replica settings used for?",
      "answers": [
        "minReplicas sets the scaling floor; maxReplicas sets the ceiling. For example, values of 1 and 5 let the scaler request between one and five replicas. A minimum of 0 permits the app to stop all replicas while idle."
      ],
      "origin": "original",
      "legacyIds": [
        8
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 8",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-09-1-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "Which Kubernetes Service type is the default?",
      "answers": [
        "ClusterIP. It gives the Service an address reachable inside the cluster, so clients can use that stable address to reach the selected pods."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-09-2-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "What does a Kubernetes NodePort Service expose?",
      "answers": [
        "A port on the cluster’s nodes. Traffic sent to a reachable node IP and that port is forwarded to the Service’s pods. The client still needs network/firewall access to the node."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-09-3-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "What does a Kubernetes LoadBalancer Service provision?",
      "answers": [
        "A cloud load balancer that forwards traffic to the Service, when the cluster’s cloud integration supports it. Its frontend can be public or private, depending on configuration."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-09-4-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "What does a Kubernetes ExternalName Service return?",
      "answers": [
        "A DNS alias, called a CNAME, pointing to the hostname configured in externalName. Clients resolve that name and connect to the destination. The Service does not proxy the connection."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/service/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-09-5-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes Service types",
      "question": "Is Kubernetes Ingress a Service type?",
      "answers": [
        "No. Ingress is a separate Kubernetes resource for routing HTTP/HTTPS requests to Services by hostname or URL path. An ingress controller must implement those routing rules; merely creating an Ingress object does not provide a working controller."
      ],
      "origin": "original",
      "legacyIds": [
        9
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 9",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Ingress",
          "url": "https://kubernetes.io/docs/concepts/services-networking/ingress/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/ingress/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-10-1-1",
      "domain": 1,
      "category": "aks",
      "title": "Rolling update defaults",
      "question": "What are the default Deployment rolling-update maxSurge and maxUnavailable values?",
      "answers": [
        "Both default to 25% for RollingUpdate. maxSurge allows extra pods and rounds up; maxUnavailable allows unavailable pods and rounds down. With three desired replicas, that permits one extra pod and zero unavailable pods during the update."
      ],
      "origin": "original",
      "legacyIds": [
        10
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 10",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-10-2-1",
      "domain": 1,
      "category": "aks",
      "title": "Rolling update defaults",
      "question": "What are the default DaemonSet rolling-update surge and unavailability settings?",
      "answers": [
        "maxUnavailable defaults to 1 and maxSurge to 0. The DaemonSet normally replaces pods gradually, allowing one unavailable pod without creating extra surge pods."
      ],
      "origin": "original",
      "legacyIds": [
        10
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 10",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · DaemonSet updates",
          "url": "https://kubernetes.io/docs/tasks/manage-daemon/update-daemon-set/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/tasks/manage-daemon/update-daemon-set/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-11-1-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What happens when a Kubernetes liveness probe fails repeatedly?",
      "answers": [
        "The node’s kubelet agent stops the container once the failure threshold is reached. It then follows the pod’s restart policy; a normal Deployment container is restarted. Use liveness to detect a process that needs restarting."
      ],
      "origin": "original",
      "legacyIds": [
        11
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Health probes",
          "url": "https://kubernetes.io/docs/concepts/workloads/pods/probes/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/pods/probes/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-11-2-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What happens when a Kubernetes readiness probe fails?",
      "answers": [
        "The pod is marked not ready and stops receiving normal Service traffic. The container keeps running; readiness failure alone does not restart it. This lets an application temporarily withdraw from traffic while it initializes or recovers."
      ],
      "origin": "original",
      "legacyIds": [
        11
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 11",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Health probes",
          "url": "https://kubernetes.io/docs/concepts/workloads/pods/probes/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/pods/probes/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-11-4-1",
      "domain": 1,
      "category": "aks",
      "title": "Kubernetes probes",
      "question": "What should you check when running pods receive no traffic through their Kubernetes Service?",
      "answers": [
        "Check that the Service selector matches the pod labels, the pods are Ready and the Service has matching endpoints. Then compare the Service’s targetPort with the port the app actually listens on. These checks distinguish “the process is running” from “the Service can route to it.”"
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
        },
        {
          "label": "Kubernetes · Services",
          "url": "https://kubernetes.io/docs/concepts/services-networking/service/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Debugging pods",
          "url": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/service/",
          "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-12-1-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "How does single-revision mode route Container Apps traffic?",
      "answers": [
        "The old revision serves requests until the new revision is ready. Container Apps then sends the app’s traffic to the new revision and deactivates the old one. This is the default mode; it keeps the switch between versions automatic."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-12-2-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "What does multiple-revision mode allow in Container Apps?",
      "answers": [
        "It lets several revisions run at once. You can split traffic between them, such as 90% to the current version and 10% to a new version, and choose when to deactivate old revisions."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-12-3-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "How does Deployment labels mode route traffic in Azure Container Apps?",
      "answers": [
        "It lets you route traffic through labels such as staging or production that point to revisions. To switch versions, move the label to another revision; the label’s URL stays the same. For example, production can point to v1 today and v2 after a release."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Deployment labels",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/deployment-labels",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/deployment-labels",
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced “routes deployments” with request routing and explained the label-to-revision relationship using a concrete example."
      }
    },
    {
      "id": "m-12-4-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "What must the traffic percentages for a Container Apps endpoint add up to?",
      "answers": [
        "100%. For example, 90% to v1 and 10% to v2 accounts for all traffic sent to the app’s main endpoint."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Deployment labels",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/deployment-labels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed the claim that traffic splitting is exclusively available in multiple-revision mode; deployment labels also support it.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "https://learn.microsoft.com/en-us/azure/container-apps/deployment-labels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-12-5-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps revisions",
      "question": "How can one Container Apps revision have a stable test URL?",
      "answers": [
        "Give the revision a label, such as test, and use that label’s URL. It sends requests to that specific revision even if the revision has no share of the main endpoint’s traffic. You can later move test to another revision without changing the test URL."
      ],
      "origin": "original",
      "legacyIds": [
        12
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 12",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-13-1-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "What information does a custom scaling rule need in Azure Container Apps?",
      "answers": [
        "A name, a scaler type, the scaler’s settings and any required authentication. For a Service Bus queue, the settings identify the queue and the target number of messages per replica. The scaler uses that target to decide how many app replicas are needed."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-13-2-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "How can Azure CLI configure queue-based scaling for an existing Container App?",
      "answers": [
        "For an existing app whose system-assigned identity can read the Service Bus queue:\naz containerapp update --name myapp --resource-group mygroup --min-replicas 0 --max-replicas 3 --scale-rule-name jobs --scale-rule-type azure-servicebus --scale-rule-metadata namespace=mybus queueName=jobs messageCount=5 --scale-rule-identity system\nReplace myapp, mygroup and mybus with your resources. The rule watches the jobs queue, targets five messages per replica and allows zero to three replicas."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced a long list of flags followed by the same flags again with one complete command and its effect."
      }
    },
    {
      "id": "m-13-3-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "What is the trade-off of setting Container Apps minReplicas to zero?",
      "answers": [
        "It can stop all replicas while idle, reducing Consumption-plan compute costs. The trade-off is startup delay: the next request or event may need to wait for a new replica to start. Other resources can still incur costs."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps billing",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/billing",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/billing",
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-13-4-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Why keep at least one Container Apps replica running?",
      "answers": [
        "To reduce cold-start delay. With minReplicas set to 1 or more, the app keeps capacity ready instead of starting from zero for the next request. Keeping that capacity available can cost money while the app is idle."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Container Apps billing",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/billing",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Replaced the absolute “one replica always running” claim and universal production recommendation with the actual minimum-capacity trade-off.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "https://learn.microsoft.com/en-us/azure/container-apps/billing"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-13-5-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "What does a Container Apps HTTP scale rule measure?",
      "answers": [
        "Concurrent HTTP requests: requests being handled at the same time. The target is the desired concurrency per replica, with a default of 10. As concurrency grows, Container Apps can add replicas within the configured minimum and maximum."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-13-6-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Can CPU- or memory-only Container Apps rules scale an app from zero?",
      "answers": [
        "No. CPU and memory metrics need a running replica to be measured. Use a trigger that can detect work independently of a running container, such as an HTTP or queue rule, if the app must start from zero."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-13-6-2",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps scale setup",
      "question": "Does changing a Container Apps scale rule create a revision?",
      "answers": [
        "Yes. Scaling rules belong to the revision’s configuration, so changing one creates a new revision."
      ],
      "origin": "original",
      "legacyIds": [
        13
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 13",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-14-1-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "Are Container Apps secrets scoped to an app or a revision?",
      "answers": [
        "The app. Several revisions can reference the same app secret, and changing the secret alone does not create a revision. After changing an ordinary secret value, restart the revisions that need to receive it."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps secrets",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-14-2-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "How is a Container Apps secret linked to Key Vault?",
      "answers": [
        "Create an app secret whose keyVaultUrl identifies the Key Vault secret and whose identity selects the managed identity used to read it. Give that identity permission to read the secret and network access to the vault. Containers then reference the app secret."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps secrets",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-14-3-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "Which identity can be pre-authorized for Key Vault before a Container App is created?",
      "answers": [
        "A user-assigned managed identity. It exists independently, so you can create it, grant it Key Vault access and then attach it while creating the container app. A system-assigned identity is created with the app and therefore cannot be granted access before the app exists."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps secrets",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-14-4-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "When are versionless Container Apps Key Vault references refreshed?",
      "answers": [
        "When the Key Vault URI omits a version, Container Apps retrieves a newer secret version within 30 minutes. Active revisions that use that secret through an environment variable are automatically restarted to receive it. A version-pinned URI keeps selecting its specified version."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps secrets",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-14-5-1",
      "domain": 1,
      "category": "container-apps",
      "title": "Container Apps secrets",
      "question": "How does a Container Apps container consume an app secret?",
      "answers": [
        "A common approach is to expose the secret as an environment variable. If the app already defines a secret named api-key:\naz containerapp update --name myapp --resource-group mygroup --set-env-vars API_KEY=secretref:api-key\nThe running code reads API_KEY as a normal environment variable. The setting contains the secret’s reference, while the platform supplies its value."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps secrets",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Storage mounts",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/storage-mounts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/manage-secrets",
          "https://learn.microsoft.com/en-us/azure/container-apps/storage-mounts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-15-1-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "What does a Kubernetes Deployment manifest describe?",
      "answers": [
        "The desired application setup: replica count, pod-template labels, container image and settings. Its selector must match the pod-template labels so the Deployment knows which pods it manages. Kubernetes uses this desired state to create and update the actual workload."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Kubernetes manifests support JSON as well as YAML; replaced the misleading YAML-only description.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-15-2-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "Which kubectl command creates or updates resources from a manifest file?",
      "answers": [
        "Run:\nkubectl apply -f deployment.yaml\nThis creates missing resources or updates existing ones to match the manifest’s declared configuration. The controllers then carry out the required changes."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · kubectl reference",
          "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-15-3-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "What is the sequence for a rolling image update in Kubernetes?",
      "answers": [
        "Change the container image reference in the Deployment manifest, then run:\nkubectl apply -f deployment.yaml\nkubectl rollout status deployment/myapp\nReplace myapp with the Deployment name. With RollingUpdate, pods are replaced gradually. Readiness checks, available capacity and the update strategy determine whether requests continue to succeed throughout the rollout."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-15-4-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "Which command rolls a Kubernetes Deployment back?",
      "answers": [
        "Run kubectl rollout undo deployment/myapp, replacing myapp with the Deployment name. It restores the previous retained pod-template revision. To choose a particular retained revision, add --to-revision=<number>. Monitor the result with kubectl rollout status deployment/myapp."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Deployments",
          "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · kubectl reference",
          "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
          "https://kubernetes.io/docs/reference/kubectl/quick-reference/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-15-5-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS manifests and rollouts",
      "question": "How can a pod consume a Kubernetes Secret without embedding its value in the pod manifest?",
      "answers": [
        "Reference a separately created Secret in the pod specification. Use env.valueFrom.secretKeyRef to populate an environment variable, or mount the Secret as a volume. The pod manifest contains the Secret name and key, rather than the credential value. Protect access to the Secret itself; base64 encoding is not encryption."
      ],
      "origin": "original",
      "legacyIds": [
        15
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 15",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Secrets",
          "url": "https://kubernetes.io/docs/concepts/configuration/secret/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/configuration/secret/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-16-2-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "What resource setting is needed for CPU-utilization-based HPA scaling?",
      "answers": [
        "CPU requests on the relevant containers. The HPA expresses CPU utilization as a percentage of the requested CPU, so it needs that baseline. Resource metrics, normally supplied by metrics-server, must also be available."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Horizontal autoscaling",
          "url": "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-16-5-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "Why can KEDA wake a workload from zero replicas when CPU-only scaling cannot?",
      "answers": [
        "KEDA can scale from external work signals such as messages waiting in a queue. It can therefore detect demand while no app replica is running. CPU-only scaling needs a running pod to produce CPU measurements."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Container Apps scaling",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Horizontal autoscaling",
          "url": "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/scale-app",
          "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-16-6-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS autoscalers",
      "question": "Which command changes a Deployment's replica count manually?",
      "answers": [
        "Run kubectl scale deployment/myapp --replicas=5. Replace myapp with the Deployment name. This changes the desired pod count to five; the controller then tries to create or remove pods to match it. An active autoscaler may subsequently change that count again."
      ],
      "origin": "original",
      "legacyIds": [
        16
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 16",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · kubectl reference",
          "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/reference/kubectl/quick-reference/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-17-1-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "Which two kubectl commands are a useful starting point for investigating an unhealthy pod?",
      "answers": [
        "Start with kubectl describe pod <pod-name> for status and events, then kubectl logs <pod-name> for application output. Determine whether the failure concerns scheduling, startup, probes or the application before changing configuration."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Debugging pods",
          "url": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · kubectl reference",
          "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
          "https://kubernetes.io/docs/reference/kubectl/quick-reference/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-17-2-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "How do you inspect logs from a container's previous crashed instance?",
      "answers": [
        "Run kubectl logs <pod-name> --previous. For a multi-container pod, add -c <container-name>. This requests logs from that container’s previous terminated instance in the pod, when those logs are still available. Without --previous, you normally read the current instance’s logs."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · kubectl reference",
          "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Debugging pods",
          "url": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-17-3-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "What does ImagePullBackOff indicate?",
      "answers": [
        "Kubernetes failed to download the container image and is waiting before retrying. Inspect pod events for the cause, such as a wrong tag, missing registry permission or a network/DNS error."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Image pull policy",
          "url": "https://kubernetes.io/docs/concepts/containers/images/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Debugging pods",
          "url": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/containers/images/",
          "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-17-4-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "How do you find why a Pending Kubernetes pod cannot be scheduled?",
      "answers": [
        "Read the scheduler’s events with:\nkubectl describe pod <pod-name>\nLook for FailedScheduling. It can identify insufficient CPU/memory, placement-rule conflicts, taints or storage claims that are not ready. Fix the reported constraint."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · Debugging pods",
          "url": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Expanded the overly narrow CPU/memory explanation to cover other scheduler constraints.",
        "sources": [
          "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-17-6-1",
      "domain": 1,
      "category": "aks",
      "title": "AKS pod troubleshooting",
      "question": "Which kubectl commands show current pod or node CPU and memory usage?",
      "answers": [
        "Use kubectl top pods, or kubectl top nodes for node-level usage. These commands need a working resource-metrics provider, normally metrics-server. They show current CPU and memory measurements, helping distinguish measured usage from the requests/limits in the manifest."
      ],
      "origin": "original",
      "legacyIds": [
        17
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 17",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Kubernetes · kubectl reference",
          "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/reference/kubectl/quick-reference/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "The old card mixed events, logs, port forwarding and metrics. The other diagnostics already have dedicated cards; this one now focuses on usage measurements."
      }
    },
    {
      "id": "prep-acr-001",
      "domain": 1,
      "title": "ACR geo-replication",
      "category": "acr",
      "question": "Which ACR service tier supports geo-replication?",
      "answers": [
        "The Premium tier. Geo-replication makes the registry available through replicas in multiple Azure regions."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-001",
          "url": "https://ai200prep.com/questions/acr-001/"
        },
        {
          "label": "Microsoft Learn · Registry tiers",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-acr-010",
      "domain": 1,
      "title": "ACR Private Link",
      "category": "acr",
      "question": "Which ACR service tier supports private endpoints?",
      "answers": [
        "Premium. Its private-endpoint feature lets clients access the registry through a private address in a virtual network."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-010",
          "url": "https://ai200prep.com/questions/acr-010/"
        },
        {
          "label": "Microsoft Learn · Registry tiers",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Private registry access",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-endpoints",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus",
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-endpoints"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-acr-003",
      "domain": 1,
      "title": "Import an image",
      "category": "acr",
      "question": "Which Azure CLI command imports an existing image into ACR without local Docker?",
      "answers": [
        "Use az acr import. For example, az acr import --name myregistry --source mcr.microsoft.com/hello-world:latest --image hello-world:v1 copies an existing image into your registry. It transfers image content; it does not build source code."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-003",
          "url": "https://ai200prep.com/questions/acr-003/"
        },
        {
          "label": "Microsoft Learn · Import images",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-import-images",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-import-images"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-acr-004",
      "domain": 1,
      "title": "ACR login server",
      "category": "acr",
      "question": "How do you find the login-server hostname to use for an ACR image?",
      "answers": [
        "Read the registry’s Login server value in Azure, or run:\naz acr show --name myregistry --query loginServer -o tsv\nIt is often myregistry.azurecr.io, but some registries include an additional hash in the hostname. Use the returned value for Docker image names."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-004",
          "url": "https://ai200prep.com/questions/acr-004/"
        },
        {
          "label": "Microsoft Learn · Registry login-server names",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Added the hashed login-server format used by domain-name-label-protected registries.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-acr-m01",
      "domain": 1,
      "title": "Image authenticity",
      "category": "acr",
      "question": "What does image signature verification add beyond digest pinning?",
      "answers": [
        "It verifies that a trusted identity signed the artifact and that its signed content has not changed. A digest identifies content; the signature adds a verifiable signer. Trust depends on the verification policy, and signing alone does not prove that the image has no vulnerabilities."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-acr-m01",
          "url": "https://ai200prep.com/questions/p-acr-m01/"
        },
        {
          "label": "Microsoft Learn · Image signing",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-sign-build-push",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Separated signer authentication and integrity from the broader claim of verified provenance.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-sign-build-push"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-acr-008",
      "domain": 1,
      "title": "Repository-scoped access",
      "category": "acr",
      "question": "What can an ACR repository-scoped token restrict?",
      "answers": [
        "A token’s scope map specifies which repositories it can access and which operations it may perform, such as reading or writing image content. This can give a client access to one repository without granting access to every repository in the registry."
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
        },
        {
          "label": "Microsoft Learn · Repository tokens",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-token-based-repository-permissions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-token-based-repository-permissions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-acr-012",
      "domain": 1,
      "title": "Private registry access",
      "category": "acr",
      "question": "What must accompany an ACR private endpoint when public registry access is disabled?",
      "answers": [
        "Working private connectivity and DNS resolution. The client must be able to reach the private network, and the registry hostname must resolve to the private endpoint’s addresses. Image pull/push permission is still required."
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
        },
        {
          "label": "Microsoft Learn · Private registry access",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-endpoints",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-endpoints"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-acr-014",
      "domain": 1,
      "title": "Recover an ACR deletion",
      "category": "acr",
      "question": "Which ACR capability can recover accidentally deleted artifacts when enabled beforehand?",
      "answers": [
        "The soft delete policy. Enable it before deletion so artifacts can be recovered during its configured retention period. It is currently a preview feature with restrictions, including unsupported combinations with geo-replication and Artifact Cache."
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
        },
        {
          "label": "Microsoft Learn · Registry soft delete",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-soft-delete-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-soft-delete-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-acr-017",
      "domain": 1,
      "title": "List image tags",
      "category": "acr",
      "question": "Which Azure CLI command lists a repository's tags in ACR?",
      "answers": [
        "Run az acr repository show-tags --name myregistry --repository myapp. Replace myregistry with the registry name and myapp with the repository name. This lists tag names such as v1 and latest; it does not download the images."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · acr-017",
          "url": "https://ai200prep.com/questions/acr-017/"
        },
        {
          "label": "Microsoft Learn · Docker push to ACR",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-aks-009",
      "domain": 1,
      "title": "Pod identity",
      "category": "aks",
      "question": "How does Microsoft Entra Workload ID authenticate an AKS workload?",
      "answers": [
        "The pod receives a Kubernetes service-account token. Microsoft Entra validates the configured trust for that token and exchanges it for an access token representing the associated Azure identity. The identity’s roles then determine which Azure services it may access."
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
        },
        {
          "label": "Microsoft Learn · Workload identity",
          "url": "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-aks-025",
      "domain": 1,
      "title": "Workload ID prerequisite",
      "category": "aks",
      "question": "Which AKS issuer feature is required for service-account federation with Entra Workload ID?",
      "answers": [
        "The AKS OpenID Connect (OIDC) issuer, together with workload-identity support. The issuer identifies the authority signing the service-account tokens that Microsoft Entra is configured to trust."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-025",
          "url": "https://ai200prep.com/questions/aks-025/"
        },
        {
          "label": "Microsoft Learn · Workload identity",
          "url": "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-aks-008",
      "domain": 1,
      "title": "Pod network policy",
      "category": "aks",
      "question": "Which Kubernetes resource controls network traffic into or out of pods?",
      "answers": [
        "A NetworkPolicy. It selects pods and defines allowed incoming and/or outgoing network connections. The cluster’s network implementation must enforce NetworkPolicy for those rules to take effect."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-008",
          "url": "https://ai200prep.com/questions/p-aks-008/"
        },
        {
          "label": "Kubernetes · Network policies",
          "url": "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-aks-006",
      "domain": 1,
      "title": "Namespace permissions",
      "category": "aks",
      "question": "How is native Kubernetes read-only access limited to one namespace?",
      "answers": [
        "Create a Role containing the needed read verbs, such as get, list and watch, and bind it to the user or service account with a RoleBinding in that namespace. This grants the specified namespaced access without automatically granting the same permissions across the whole cluster."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-006",
          "url": "https://ai200prep.com/questions/p-aks-006/"
        },
        {
          "label": "Kubernetes · Namespaced access",
          "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-aks-011",
      "domain": 1,
      "title": "Shared Kubernetes files",
      "category": "aks",
      "question": "Which Azure storage service commonly backs a Kubernetes ReadWriteMany file volume?",
      "answers": [
        "Azure Files, typically mounted with its CSI driver. ReadWriteMany means multiple pods, including pods on different nodes, can mount and write the shared file volume."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-aks-011",
          "url": "https://ai200prep.com/questions/p-aks-011/"
        },
        {
          "label": "Microsoft Learn · Azure Files volumes",
          "url": "https://learn.microsoft.com/en-us/azure/aks/azure-csi-files-storage-provision",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/azure-csi-files-storage-provision"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-aks-040",
      "domain": 1,
      "title": "Namespace resource controls",
      "category": "aks",
      "question": "How do ResourceQuota and LimitRange differ in Kubernetes?",
      "answers": [
        "ResourceQuota limits aggregate use in a namespace, such as total requested CPU or the number of certain objects. LimitRange sets defaults and/or allowed ranges for individual objects, such as container CPU and memory requests and limits. A quota is a namespace budget; a limit range constrains each applicable object."
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
        },
        {
          "label": "Kubernetes · Resource quotas",
          "url": "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
          "kind": "primary"
        },
        {
          "label": "Kubernetes · Limit ranges",
          "url": "https://kubernetes.io/docs/concepts/policy/limit-range/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
          "https://kubernetes.io/docs/concepts/policy/limit-range/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-aks-037",
      "domain": 1,
      "title": "Image pull policy",
      "category": "aks",
      "question": "What does Kubernetes imagePullPolicy: Always check at container startup?",
      "answers": [
        "At startup, the kubelet resolves the image reference through the registry to obtain its digest. If content with that digest is already cached, it can reuse the local layers. Always therefore checks the registry, but does not mean every image layer is downloaded again on every start."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · aks-037",
          "url": "https://ai200prep.com/questions/aks-037/"
        },
        {
          "label": "Kubernetes · Image pull policy",
          "url": "https://kubernetes.io/docs/concepts/containers/images/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/containers/images/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-aks-010",
      "domain": 1,
      "title": "Dedicated GPU scheduling",
      "category": "aks",
      "question": "Why is a toleration alone insufficient to require GPU placement?",
      "answers": [
        "A toleration permits a pod to run on a node with a matching taint; it does not require that node. Use a node selector or node affinity to require the intended GPU node pool. A workload that actually uses a GPU must also request the appropriate GPU resource, such as nvidia.com/gpu."
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
        },
        {
          "label": "Kubernetes · Taints and tolerations",
          "url": "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-ca-003",
      "domain": 1,
      "title": "Container Apps ingress",
      "category": "container-apps",
      "question": "How do internal and external Container Apps ingress differ?",
      "answers": [
        "Internal ingress accepts direct app traffic only from within the same Container Apps environment. External ingress allows traffic from outside that environment. External does not necessarily mean public internet access: an internal/private environment and network restrictions can still limit who can reach the app."
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
        },
        {
          "label": "Microsoft Learn · Container Apps ingress",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-ca-011",
      "domain": 1,
      "title": "Dedicated workload profile",
      "category": "container-apps",
      "question": "Which Container Apps workload profile uses allocated compute instances?",
      "answers": [
        "A Dedicated workload profile. It allocates compute instances with selected CPU and memory sizes for apps to use. You pay for the allocated profile capacity, which can suit sustained workloads."
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
        },
        {
          "label": "Microsoft Learn · Workload profiles",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/workload-profiles-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Container Apps billing",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/billing",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/workload-profiles-overview",
          "https://learn.microsoft.com/en-us/azure/container-apps/billing"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-ca-012",
      "domain": 1,
      "title": "Custom HTTPS domain",
      "category": "container-apps",
      "question": "What is required to serve a Container App through a custom HTTPS hostname?",
      "answers": [
        "Configure DNS for the hostname, bind that hostname to the app and associate a valid TLS certificate. For example, api.example.com must resolve to the app and have a certificate valid for api.example.com."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-012",
          "url": "https://ai200prep.com/questions/ca-012/"
        },
        {
          "label": "Microsoft Learn · Custom domains and HTTPS",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-ca-010",
      "domain": 1,
      "title": "Built-in sign-in",
      "category": "container-apps",
      "question": "How can Container Apps require Microsoft Entra sign-in without implementing the sign-in flow in app code?",
      "answers": [
        "Enable Container Apps built-in authentication and select Microsoft Entra ID as the provider. The platform handles sign-in and checks authentication before forwarding requests to your code. The app still decides which authenticated users may perform particular actions."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-010",
          "url": "https://ai200prep.com/questions/p-ca-010/"
        },
        {
          "label": "Microsoft Learn · Built-in authentication",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/authentication",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/authentication"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-ca-011",
      "domain": 1,
      "title": "Persistent container files",
      "category": "container-apps",
      "question": "How is Azure Files mounted in a Container App?",
      "answers": [
        "Register the Azure Files share on the Container Apps environment, add an app volume referring to that registration, and mount the volume at a container path. The application then accesses the share as files at that path."
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
        },
        {
          "label": "Microsoft Learn · Storage mounts",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/storage-mounts",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/storage-mounts"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-ca-012",
      "domain": 1,
      "title": "Revision startup diagnostics",
      "category": "container-apps",
      "question": "Where should a failing Container Apps revision's provisioning errors be investigated?",
      "answers": [
        "Start with the revision’s provisioning status and system logs. They show platform problems such as image-pull or startup failures. If the container started, also read its console logs for errors reported by the application."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-012",
          "url": "https://ai200prep.com/questions/p-ca-012/"
        },
        {
          "label": "Microsoft Learn · Container Apps logs",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/log-monitoring",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/log-monitoring",
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-ca-017",
      "domain": 1,
      "title": "Ingress IP restrictions",
      "category": "container-apps",
      "question": "Where do you allow or block client IP ranges for a Container App?",
      "answers": [
        "In the app’s ingress IP restrictions. Add allow or deny rules for the required client address ranges. These rules control which client networks may reach the app."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-017",
          "url": "https://ai200prep.com/questions/p-ca-017/"
        },
        {
          "label": "Microsoft Learn · Container Apps ingress",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-ca-025",
      "domain": 1,
      "title": "HTTP/2 ingress",
      "category": "container-apps",
      "question": "Which Container Apps HTTP ingress transport supports end-to-end HTTP/2 such as gRPC?",
      "answers": [
        "HTTP ingress with transport set to http2. The application must also serve HTTP/2 on its target port for end-to-end HTTP/2, including gRPC."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · ca-025",
          "url": "https://ai200prep.com/questions/ca-025/"
        },
        {
          "label": "Microsoft Learn · Container Apps ingress",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/ingress-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-ca-007",
      "domain": 1,
      "title": "Graceful shutdown",
      "category": "container-apps",
      "question": "Why should a Container Apps container handle termination gracefully during a revision change?",
      "answers": [
        "To finish or safely stop work before the platform forcibly terminates the process. Handle the termination signal, stop accepting new work and save any progress needed for a retry. The shutdown grace period is limited."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-ca-007",
          "url": "https://ai200prep.com/questions/p-ca-007/"
        },
        {
          "label": "Microsoft Learn · Container lifecycle",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/containers",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-apps/containers"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-database",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Database",
      "title": "Database",
      "question": "What is a database?",
      "answers": [
        "An organized store of data that an application can read and change. For example, an orders database keeps customer orders so the application can retrieve them later. A database system, such as PostgreSQL, manages that data."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "PostgreSQL · SQL concepts",
          "url": "https://www.postgresql.org/docs/current/tutorial-sql.html",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Cosmos DB resources",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://www.postgresql.org/docs/current/tutorial-sql.html",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-postgresql",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "PostgreSQL",
      "title": "PostgreSQL",
      "question": "What is PostgreSQL?",
      "answers": [
        "An open-source relational database system. It stores data in tables and supports SQL queries and transactions. Azure Database for PostgreSQL provides it as a managed service, so Azure handles infrastructure tasks such as server maintenance."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "PostgreSQL · SQL concepts",
          "url": "https://www.postgresql.org/docs/current/tutorial-sql.html",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · pgvector on Azure",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://www.postgresql.org/docs/current/tutorial-sql.html",
          "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-sql",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "SQL",
      "title": "SQL",
      "question": "What does SQL stand for?",
      "answers": [
        "Structured Query Language. It is a language for querying and changing data, especially in relational databases. For example, SELECT name FROM customers retrieves the names stored in a customers table."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "PostgreSQL · SQL concepts",
          "url": "https://www.postgresql.org/docs/current/tutorial-sql.html",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Cosmos DB resources",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://www.postgresql.org/docs/current/tutorial-sql.html",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-transaction",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Database transaction",
      "title": "Database transaction",
      "question": "What is a database transaction?",
      "answers": [
        "A group of database operations treated as one unit. Committing makes the changes permanent; rolling back cancels them. For example, a money transfer should subtract from one account and add to the other together, or do neither."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Transactional outbox",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/databases/guide/transactional-out-box-cosmos",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/databases/guide/transactional-out-box-cosmos"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-index",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Database index",
      "title": "Database index",
      "question": "What is a database index?",
      "answers": [
        "An extra data structure that helps the database find records without examining every record. Like a book index, it helps locate information quickly. It takes storage and must be updated when the indexed data changes."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-embedding",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Embedding",
      "title": "Embedding",
      "question": "What is an embedding?",
      "answers": [
        "A numeric representation of content, often produced by a machine-learning model. For example, a sentence can become a list of numbers whose relationships help represent its meaning. Similarity search compares compatible embeddings; it does not compare the original sentences directly."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Retrieval-augmented generation",
          "url": "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-vector",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Vector",
      "title": "Vector",
      "question": "What is a vector in similarity search?",
      "answers": [
        "An ordered list of numbers, such as [0.2, -0.4, 0.7]. Each position is a dimension. A model-generated embedding is commonly stored as a vector, and search compares it with other vectors using a distance or similarity measure."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-dimensions",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Vector dimensions",
      "title": "Vector dimensions",
      "question": "What does the dimension count of a vector mean?",
      "answers": [
        "The number of numeric components in the vector. A 1,536-dimensional embedding contains 1,536 numbers. Stored vectors, the query vector and the index configuration must use compatible dimensions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-knn",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "KNN",
      "title": "KNN",
      "question": "What does KNN mean in vector search?",
      "answers": [
        "K-nearest neighbors: finding the k closest stored vectors to a query vector according to a chosen distance measure. For example, k=5 requests the five nearest matches."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-ann",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "ANN",
      "title": "ANN",
      "question": "What does ANN stand for in vector search?",
      "answers": [
        "Approximate nearest neighbor. It finds close vectors quickly without guaranteeing the exact closest results. For example, a search can examine promising candidates instead of comparing the query against every stored vector."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://github.com/pgvector/pgvector",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-hnsw",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "HNSW",
      "title": "HNSW",
      "question": "What does HNSW stand for?",
      "answers": [
        "Hierarchical Navigable Small World. It is a graph-based method for approximate nearest-neighbor search: connected vectors help the search navigate toward likely matches. It can make large searches efficient, but uses index memory and can miss some exact neighbors."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-ivfflat",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "IVFFlat",
      "title": "IVFFlat",
      "question": "What is an IVFFlat vector index?",
      "answers": [
        "An inverted-file index with flat vector comparisons inside selected lists. It groups representative vectors into lists, then searches a chosen subset of those lists for each query. Searching more lists usually improves recall but performs more work."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-recall",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Search recall",
      "title": "Search recall",
      "question": "What does recall mean in approximate vector search?",
      "answers": [
        "The proportion of the exact nearest results that an approximate search finds. For example, if it returns eight of the exact ten nearest vectors, recall at ten is 80%. It helps measure the search-quality cost of using a faster approximate index."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-pgvector",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "pgvector",
      "title": "pgvector",
      "question": "What is pgvector?",
      "answers": [
        "A PostgreSQL extension for storing vectors and finding similar vectors. It adds vector types, distance operators and index options such as HNSW and IVFFlat. The project is named pgvector, but the SQL extension is enabled as vector."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · pgvector on Azure",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://github.com/pgvector/pgvector",
          "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-connection-pool",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Connection pool",
      "title": "Connection pool",
      "question": "What is a database connection pool?",
      "answers": [
        "A reusable set of established database connections that requests borrow and return. It avoids opening a fresh network/database connection for every query. Pool size limits how many connections that pool can use; multiple application instances can each have a separate pool."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Psycopg · Connection pools",
          "url": "https://www.psycopg.org/psycopg3/docs/advanced/pool.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://www.psycopg.org/psycopg3/docs/advanced/pool.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-pgbouncer",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "PgBouncer",
      "title": "PgBouncer",
      "question": "What is PgBouncer?",
      "answers": [
        "A connection-pooling proxy for PostgreSQL. Applications connect to PgBouncer, which reuses a smaller set of connections to the database server. This reduces the overhead of opening and closing database connections."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-cosmos",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cosmos DB",
      "title": "Cosmos DB",
      "question": "What is Azure Cosmos DB?",
      "answers": [
        "A managed database service designed to distribute data across regions and scale access to it. With its NoSQL API, applications store JSON-like records called items in containers."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cosmos DB resources",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-cosmos-container",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cosmos DB container",
      "title": "Cosmos DB container",
      "question": "What is a container in Cosmos DB?",
      "answers": [
        "A collection of items with shared settings such as partitioning and indexing. A database contains containers, and containers contain items. This is a data-storage concept, not an application container running from a Docker image."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cosmos DB resources",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-partition-key",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cosmos DB partition key",
      "title": "Cosmos DB partition key",
      "question": "What is a partition key in Cosmos DB?",
      "answers": [
        "The item property used to group related data into logical partitions. If customerId is the partition key, items with the same customerId belong together logically. This affects data distribution and which requests can target one partition instead of searching across many."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Partitioning",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-ru",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Request unit (RU)",
      "title": "Request unit (RU)",
      "question": "What is a request unit in Cosmos DB?",
      "answers": [
        "A request unit (RU) measures how much database work an operation consumes, including processor, memory and input/output work. Reading a small item usually costs fewer RUs than running an expensive query. One RU does not mean one request."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Read and query costs",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-rus",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "RU/s",
      "title": "RU/s",
      "question": "What does RU/s measure in Cosmos DB?",
      "answers": [
        "Request units per second: the rate of database work available as throughput. For example, 1,000 RU/s can support different request counts depending on how many request units each operation uses. It measures capacity over time; RU measures the work consumed by an operation."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cosmos DB autoscale",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/autoscale-faq",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Read and query costs",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/autoscale-faq",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-consistency",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Read consistency",
      "title": "Read consistency",
      "question": "What does consistency mean for a distributed database read?",
      "answers": [
        "The rules determining how up to date a read must be after data changes. Strong consistency returns the latest committed value; weaker models can permit an older value under specified rules. This matters when different replicas may have received updates at different times."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-change-feed",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Change feed",
      "title": "Change feed",
      "question": "What is a change feed in Cosmos DB?",
      "answers": [
        "An incremental stream of item changes that another component can process, such as updating a search index after a document changes. It avoids repeatedly scanning all items. What versions and deletes are available depends on the configured feed mode."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Change feed modes",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-redis",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Redis",
      "title": "Redis",
      "question": "What is Redis?",
      "answers": [
        "A data store designed for fast access to in-memory data structures such as strings, hashes and sorted sets. It is often used as a cache in front of another database, but also supports other workloads. Persistence and replication depend on configuration."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Redis · Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "kind": "primary"
        },
        {
          "label": "Redis · Sorted sets",
          "url": "https://redis.io/docs/latest/develop/data-types/sorted-sets/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "https://redis.io/docs/latest/develop/data-types/sorted-sets/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-cache",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cache",
      "title": "Cache",
      "question": "What is a cache?",
      "answers": [
        "A store of reusable data kept where it can be retrieved quickly. For example, an app can keep a database result in Redis to avoid repeating the same query. The cached copy can become outdated, so its lifetime and refresh/invalidation rules matter."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-cache-hit",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cache hit",
      "title": "Cache hit",
      "question": "What is a cache hit?",
      "answers": [
        "The requested value is found in the cache and can be used. The application can return it without reading the original database again. Whether that cached value is still fresh depends on the application's expiration and refresh rules."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-cache-miss",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cache miss",
      "title": "Cache miss",
      "question": "What is a cache miss?",
      "answers": [
        "The requested value is absent or unusable in the cache. In a cache-aside design, the application then reads the original database and may cache the result for later requests."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-ttl",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "TTL",
      "title": "TTL",
      "question": "What does TTL stand for?",
      "answers": [
        "Time to Live: a configured lifetime before a stored item or key expires. For example, a Redis value with a 600-second TTL normally expires after ten minutes unless the lifetime is changed. Expiration is driven by time, while eviction removes eligible data because of memory pressure."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Redis · EXPIRE",
          "url": "https://redis.io/docs/latest/commands/expire/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://redis.io/docs/latest/commands/expire/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-eviction",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "Cache eviction",
      "title": "Cache eviction",
      "question": "What is eviction in a Redis cache?",
      "answers": [
        "Removing keys to free memory when the configured memory limit is reached. The eviction policy decides which keys are eligible and how to choose among them. It can remove data before its expiry time; noeviction instead rejects operations that need more memory."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-lru",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "LRU",
      "title": "LRU",
      "question": "What does LRU stand for?",
      "answers": [
        "Least Recently Used. An eviction policy based on LRU favors removing data that has not been accessed recently. Redis approximates this choice rather than tracking a perfect ordering of every access."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-lfu",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "LFU",
      "title": "LFU",
      "question": "What does LFU stand for?",
      "answers": [
        "Least Frequently Used. An eviction policy based on LFU favors removing data that is accessed least often. Redis estimates access frequency and lets older access history lose influence over time."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-rag",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "RAG",
      "title": "RAG",
      "question": "What does RAG stand for?",
      "answers": [
        "Retrieval-Augmented Generation. Before generating an answer, the application retrieves relevant material and supplies it as context to the language model. For example, it can retrieve company documents through vector search. Retrieval provides context; it does not guarantee that every generated statement is correct."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Retrieval-augmented generation",
          "url": "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d2-gin",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "GIN",
      "title": "GIN",
      "question": "What does GIN stand for in PostgreSQL?",
      "answers": [
        "Generalized Inverted Index. A PostgreSQL index that helps find rows containing particular values within documents or arrays. For example, it can speed up supported searches inside JSONB data."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "PostgreSQL · JSONB indexing",
          "url": "https://www.postgresql.org/docs/current/datatype-json.html#JSON-INDEXING",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://www.postgresql.org/docs/current/datatype-json.html#JSON-INDEXING"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-diskann",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "DiskANN",
      "title": "DiskANN",
      "question": "What is DiskANN?",
      "answers": [
        "A family of graph-based algorithms for approximate nearest-neighbor search, designed to search large vector collections efficiently, including collections stored on disk. Cosmos DB offers a diskANN vector-index option."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d2-nosql",
      "domain": 2,
      "category": "terms-2",
      "kind": "term",
      "term": "NoSQL",
      "title": "NoSQL",
      "question": "What does NoSQL describe?",
      "answers": [
        "Database models that do not require the traditional relational-table model, such as document or key-value stores. The name does not mean SQL-like queries are impossible. Cosmos DB for NoSQL stores items in containers while still supporting its own SQL-style query language."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Cosmos DB resources",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/resource-model"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-redis-004",
      "domain": 2,
      "title": "Sorted leaderboard",
      "category": "terms-2",
      "question": "Which Redis data type maintains members ordered by a score?",
      "answers": [
        "A sorted set, also called a ZSET. Each unique member has a numeric score, and Redis orders members by that score. For example, ZADD leaderboard 100 alice stores Alice’s score; ZRANGE leaderboard 0 -1 WITHSCORES lists members from lowest to highest score."
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
        },
        {
          "label": "Redis · Sorted sets",
          "url": "https://redis.io/docs/latest/develop/data-types/sorted-sets/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/data-types/sorted-sets/"
        ]
      },
      "coverageCategory": "redis",
      "kind": "term",
      "term": "Sorted set (ZSET)",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-18-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What read guarantee does Cosmos DB Strong consistency provide?",
      "answers": [
        "The read returns the latest committed version of the item. This guarantee applies across the account’s regions. Strong consistency is unavailable when multiple write regions are enabled."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-18-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "How far behind can Cosmos DB reads be with Bounded staleness consistency?",
      "answers": [
        "At most the configured number of item versions, K, or time interval, T, whichever bound is reached first. Reads can be stale within those limits, but the service prevents replication lag from growing beyond them."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-18-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "Which Cosmos DB consistency level provides session read-your-own-writes?",
      "answers": [
        "Session consistency, the default. Reads using the same session token can see that session’s successful writes. Other client sessions do not automatically receive the same guarantee about those writes."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-18-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What ordering guarantee does Cosmos DB Consistent prefix provide?",
      "answers": [
        "A reader sees writes in order, without gaps in the visible sequence. If writes happen as A, then B, then C, the reader might see only A or A and B, but not C followed by A. There is no configured maximum age for the data returned."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-18-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What does Cosmos DB Eventual consistency guarantee?",
      "answers": [
        "If writes stop, replicas eventually converge on the same value. Until then, a read may return older data, with no configured maximum lag or guaranteed write ordering."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-18-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "What are the minimum Bounded staleness settings for single-region and multi-region Cosmos DB accounts?",
      "answers": [
        "Single-region accounts: 10 item versions or 5 seconds. Multi-region accounts: 100,000 versions or 300 seconds. These are the lowest permitted staleness-bound settings, not the normal lag every read will experience."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-18-7-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos consistency levels",
      "question": "Which Cosmos DB consistency levels bound cross-region staleness?",
      "answers": [
        "Strong and Bounded staleness. Strong returns the latest committed data; Bounded staleness permits lag only within configured version/time limits."
      ],
      "origin": "original",
      "legacyIds": [
        18
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 18",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-19-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What distinguishes a Cosmos DB flat vector index?",
      "answers": [
        "It compares all candidate vectors at their configured precision to find exact nearest matches, giving 100% recall. It supports up to 505 dimensions. It is exhaustive rather than an approximate graph search."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-19-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What distinguishes a Cosmos DB quantizedFlat vector index?",
      "answers": [
        "It compresses vectors to lower-precision values, then searches those values exhaustively. This can reduce index size and query cost, with a possible loss of accuracy. It supports up to 4,096 dimensions."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-19-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What distinguishes a Cosmos DB DiskANN vector index?",
      "answers": [
        "It uses a graph-based approximate search instead of comparing every candidate vector. This can make large searches more efficient, with a trade-off in exactness. It supports up to 4,096 dimensions."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-19-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "What happens to Cosmos DB quantizedFlat or DiskANN searches with fewer than 1,000 vectors?",
      "answers": [
        "quantizedFlat and DiskANN searches fall back to a full scan. Those index types need at least 1,000 vectors for the intended quantized indexing behavior. Results are still possible, but the scan can cost more request units."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-19-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "Which distance functions can a Cosmos DB vector embedding policy use?",
      "answers": [
        "cosine, dotproduct and euclidean. Cosine is the default and compares direction; dot product incorporates direction and magnitude; Euclidean distance measures straight-line distance. Choose the function expected by the embedding model, and use it consistently for indexing and search."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-19-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector indexes",
      "question": "Can an existing Cosmos DB vector embedding policy be edited in place?",
      "answers": [
        "No. Create another container with the desired vector embedding policy and migrate the items. Settings such as dimensions and distance function belong to that creation-time policy."
      ],
      "origin": "original",
      "legacyIds": [
        19
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 19",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-20-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "How many request units does a typical 1-KB Cosmos DB point read cost?",
      "answers": [
        "About 1 RU for a direct read by id and partition key under Session, Consistent prefix or Eventual consistency. Strong and Bounded staleness reads cost twice as much, about 2 RU for that item size."
      ],
      "origin": "original",
      "legacyIds": [
        20
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Read and query costs",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Qualified the 1-RU claim: strong and bounded-staleness reads have double the RU cost. Removed the unrelated, indexing-dependent write estimate.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Changed “throughput consumed” to an operation’s RU cost; throughput is a rate, while this question asks about one read."
      }
    },
    {
      "id": "m-20-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "Within what range does Cosmos DB autoscale adjust provisioned RU/s?",
      "answers": [
        "From 10% to 100% of the configured maximum RU/s. For example, a maximum of 10,000 RU/s gives an autoscale range of 1,000–10,000 RU/s."
      ],
      "origin": "original",
      "legacyIds": [
        20
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB autoscale",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/autoscale-faq",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/autoscale-faq"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-20-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "How does the Cosmos DB SDK handle throughput throttling?",
      "answers": [
        "It receives HTTP 429 and normally waits for the delay in x-ms-retry-after-ms before retrying. The header is measured in milliseconds. Automatic retries have configured limits, so an exhausted retry policy can still return the error to your application."
      ],
      "origin": "original",
      "legacyIds": [
        20
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 20",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Handle Cosmos DB throttling",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/troubleshoot-request-rate-too-large",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/troubleshoot-request-rate-too-large"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-20-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos RU and throttling",
      "question": "Where is Cosmos DB shared throughput configured?",
      "answers": [
        "At database level. Participating containers share that database’s RU/s budget, so a busy container can consume capacity the others also need. Dedicated throughput gives a container its own budget."
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
        },
        {
          "label": "Microsoft Learn · Provision throughput",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/set-throughput",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/set-throughput"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-21-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "What does Cosmos DB latest-version change feed omit?",
      "answers": [
        "Deletes and potentially intermediate updates. If an item changes several times before the reader catches up, it may receive only the latest version. The latest-version feed is therefore useful for reacting to current changes, but not as a complete audit log."
      ],
      "origin": "original",
      "legacyIds": [
        21
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed modes",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Clarified that latest-version retention does not provide an unlimited history: intermediate versions and deleted items are not retained as change events.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-21-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "What does Cosmos DB all-versions-and-deletes change feed require?",
      "answers": [
        "Continuous backup on an Azure Cosmos DB for NoSQL account. The mode exposes intermediate versions and delete records within the continuous-backup retention window."
      ],
      "origin": "original",
      "legacyIds": [
        21
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed modes",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-21-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "What state does a Cosmos DB lease container store?",
      "answers": [
        "Ownership of feed ranges and checkpoints recording processing progress. Worker instances use these leases to divide work and resume after scaling or failure."
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
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-21-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos change feed",
      "question": "Which partition key is used for a partitioned Cosmos DB lease container?",
      "answers": [
        "Use /id. Each lease document’s id is also its partition-key value. This is a requirement for a partitioned lease container used by the change feed processor; the monitored data container can use a different partition key."
      ],
      "origin": "original",
      "legacyIds": [
        21
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 21",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-22-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "Which Cosmos DB indexing modes are available in the policy?",
      "answers": [
        "consistent and none. consistent updates the index with each write and is the default. none disables indexing. These names describe index maintenance, which is separate from the read-consistency level."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-22-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "What does the default Cosmos DB included path /* mean?",
      "answers": [
        "Index every property path, including nested properties, unless a more specific exclusion applies. The default policy separately excludes _etag."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-22-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "Which Cosmos DB indexing path wins when inclusion and exclusion overlap?",
      "answers": [
        "The more specific path. For example, including /* but excluding /largeText/? indexes other properties while omitting largeText. A deeper property path is more specific, and /? is more specific than /* at the same path. Avoid contradictory entries for an identical path."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-22-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos indexing policy",
      "question": "How can indexing fewer Cosmos DB properties reduce write RU cost?",
      "answers": [
        "Each write updates fewer index entries, reducing the indexing work it consumes. Exclude fields the app does not need for indexed filters or sorting. For example, excluding /largeText/? avoids indexing that text while /* can keep other fields indexed."
      ],
      "origin": "original",
      "legacyIds": [
        22
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 22",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-23-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "How do you create a Cosmos DB client in Python?",
      "answers": [
        "Use the account endpoint and a credential:\nfrom azure.cosmos import CosmosClient\nfrom azure.identity import DefaultAzureCredential\nclient = CosmosClient(endpoint, credential=DefaultAzureCredential())\nHere endpoint is the Cosmos DB account URL. Grant the identity the required Cosmos DB data role and reuse the client across requests."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python CosmosClient",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed the false SDK-wide lazy-connection guarantee; the Python client can fetch account information during initialization.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Specified the SDK and showed working construction instead of mixing credential options, lifecycle advice and lazy-connection exceptions."
      }
    },
    {
      "id": "m-23-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "Which Cosmos DB SDK object performs item CRUD and queries?",
      "answers": [
        "The container client, called ContainerProxy in Python. For example, database.get_container_client(\"items\") returns the client used for create_item, read_item, upsert_item, delete_item and query_items. These are item-level operations: create, read, update, delete and query."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python CosmosClient",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python ContainerProxy",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-23-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "What is the Python SDK sequence for querying an existing Cosmos DB container?",
      "answers": [
        "Assuming the database and container already exist, and endpoint is the account URL:\nfrom azure.cosmos import CosmosClient\nfrom azure.identity import DefaultAzureCredential\nclient = CosmosClient(endpoint, credential=DefaultAzureCredential())\ndatabase = client.get_database_client(\"catalog\")\ncontainer = database.get_container_client(\"items\")\nfor item in container.query_items(query=\"SELECT * FROM c\", enable_cross_partition_query=True):\n    print(item)\nReplace catalog and items with your names. The signed-in identity needs a Cosmos DB data-plane role. Getting these clients selects existing resources; it does not create a database or container."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python CosmosClient",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python ContainerProxy",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-23-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos SDK object model",
      "question": "Should Python Cosmos DB code construct DatabaseProxy and ContainerProxy directly?",
      "answers": [
        "No. Obtain them from their parent clients:\ndatabase = client.get_database_client(\"catalog\")\ncontainer = database.get_container_client(\"items\")\nThe parent supplies the connection and configuration those proxy objects need."
      ],
      "origin": "original",
      "legacyIds": [
        23
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 23",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python CosmosClient",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python ContainerProxy",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.cosmosclient?view=azure-python",
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-24-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "How should a Cosmos DB document represent an embedding?",
      "answers": [
        "As a JSON array of numbers, for example \"embedding\": [0.12, -0.34, 0.56]. The container’s vector embedding policy identifies that property path and sets the numeric data type, dimension count and distance function. Each stored embedding and query vector must match that configuration."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-24-2-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "Does a Cosmos DB composite index accelerate VectorDistance queries?",
      "answers": [
        "No. Use a vector index, such as flat, quantizedFlat or DiskANN, for vector-distance search. A composite index combines ordinary property paths for filters/sorting; it does not perform nearest-neighbor vector search."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-24-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "Why exclude an embedding array from ordinary Cosmos DB property indexing?",
      "answers": [
        "An embedding array can contain thousands of values. Indexing each value as an ordinary property adds write work and index storage without providing vector similarity search. Exclude /embedding/* from ordinary indexing and configure the separate vector index on /embedding."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-24-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "What is the storage trade-off of float16 rather than float32 embeddings in Cosmos DB?",
      "answers": [
        "Each float16 component uses 16 bits instead of float32’s 32 bits, reducing raw vector size at the cost of numerical precision. Total document/index storage is not necessarily halved because it also includes other data and overhead."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Restricted the 50% claim to raw float components; total document storage and billing are not guaranteed to fall by 50%.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-24-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "What Cosmos DB SQL pattern returns the nearest five embeddings?",
      "answers": [
        "Use a query like:\nSELECT TOP 5 c.id, VectorDistance(c.embedding, @q) AS score\nFROM c\nORDER BY VectorDistance(c.embedding, @q)\nBind @q to the query’s numeric embedding array using the SDK’s query parameters. TOP 5 limits the result count; ORDER BY places the nearest distances first. The container needs the matching vector policy and an appropriate vector index."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python ContainerProxy",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-24-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Cosmos vector search",
      "question": "Where is a Cosmos DB vector embedding policy defined?",
      "answers": [
        "In the container configuration at creation time. It specifies the vector property path, data type, dimensions and distance function. Queries then provide a query vector and call VectorDistance to search that configured data."
      ],
      "origin": "original",
      "legacyIds": [
        24
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 24",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Vector storage and search",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/vector-search"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-25-1-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "What are the four parts of a Cosmos DB change feed processor?",
      "answers": [
        "The monitored container holds changing items; the lease container stores ownership and progress; a compute instance runs the processor; and your callback handles each delivered batch."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-25-3-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "How do several Cosmos DB change feed processor instances divide work?",
      "answers": [
        "They share the same processor name and lease container, with a unique name for each instance. The processor assigns feed-range leases among instances and reassigns them as workers join or leave."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-25-4-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "Which Cosmos DB change-feed model invokes your handler with batches of changes?",
      "answers": [
        "The push model, through the change feed processor or a Functions Cosmos DB trigger. It reads incremental changes and calls your handler with batches. Your application does not repeatedly query every item in the container."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Cosmos DB Functions trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-25-5-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed scale-out",
      "question": "How can Python consume Cosmos DB change feed without a native change feed processor client?",
      "answers": [
        "Use query_items_change_feed and save its continuation token to resume later. Alternatively, use a Python Azure Functions Cosmos DB trigger, letting the Functions host manage progress and invoke the Python handler. The native change feed processor clients are for .NET and Java."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python ContainerProxy",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Cosmos DB Functions trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "https://learn.microsoft.com/en-us/python/api/azure-cosmos/azure.cosmos.containerproxy?view=azure-python",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-25-6-1",
      "domain": 2,
      "category": "cosmos",
      "title": "Change feed retries",
      "question": "Why must a Cosmos DB change-feed handler tolerate duplicate processing?",
      "answers": [
        "Because processing is at least once. A worker can finish its business action and fail before saving the checkpoint, causing that batch to be read again. Make the handler safe to repeat, for example by checking a stable operation ID before applying the same change twice."
      ],
      "origin": "original",
      "legacyIds": [
        25
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 25",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Change feed processor",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-processor"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced an artificial comparison with stronger consistency by a practical failure scenario that explains why checkpointed processing needs idempotency."
      }
    },
    {
      "id": "m-26-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which pgvector operator and index operator class implement Euclidean distance?",
      "answers": [
        "Use the <-> operator for Euclidean, also called L2, distance. A pgvector index for this operator uses vector_l2_ops. For example, ORDER BY embedding <-> query_vector LIMIT 5 asks for the five smallest L2 distances."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-26-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which pgvector operator and index operator class implement cosine distance?",
      "answers": [
        "Use <=> for cosine distance and vector_cosine_ops for the matching pgvector index. Cosine distance compares vector direction; smaller distance means more similar directions. A nearest-neighbor query orders this distance ascending and applies LIMIT."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-26-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Which pgvector operator and index operator class implement negative inner product?",
      "answers": [
        "Use <#> for negative inner product and vector_ip_ops for the matching index. PostgreSQL’s index ordering uses ascending distance, so pgvector negates the inner product: the largest original inner products become the smallest returned values."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-26-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "Why must a pgvector query operator match its index operator class?",
      "answers": [
        "The index only supports the distance measure it was built for. For example, a cosine index using vector_cosine_ops cannot provide the L2 ordering requested by <->. Matching them lets PostgreSQL consider that index; EXPLAIN shows whether it actually uses it."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Matching the operator class is necessary but does not guarantee that the query planner will choose the index.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-26-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "What is the indexed-dimension limit for pgvector's vector type in HNSW and IVFFlat?",
      "answers": [
        "2,000 dimensions when indexing the vector type. Other types have different limits, such as 4,000 indexed dimensions for halfvec. Distinguish the type’s storage limit from the lower limit supported by its vector indexes."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-26-6-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "What extension name must be allow-listed for pgvector on Azure PostgreSQL?",
      "answers": [
        "Use vector in the azure.extensions allowlist. Then enable it in the target database with CREATE EXTENSION vector;. The project is called pgvector, but its PostgreSQL extension name is vector."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · pgvector on Azure",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-26-7-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector operators and indexes",
      "question": "How do index choices differ for embeddings and ordinary filter columns in PostgreSQL?",
      "answers": [
        "The embedding column needs a suitable vector index, such as HNSW or IVFFlat, for similarity search. Ordinary filter columns, such as department or created_at, may use B-tree indexes for equality/range conditions. Choose each index from the queries using that column."
      ],
      "origin": "original",
      "legacyIds": [
        26
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 26",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-27-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "Which port connects through built-in PgBouncer on Azure PostgreSQL?",
      "answers": [
        "6432, using the server’s usual hostname. Built-in PgBouncer must be enabled. Port 5432 connects directly to PostgreSQL instead of going through that pooler."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-27-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "How is built-in PgBouncer enabled on Azure PostgreSQL?",
      "answers": [
        "Set pgbouncer.enabled to true under the server’s Server parameters and save it. Then connect through port 6432. Enabling this setting does not require a PostgreSQL server restart."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-27-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "What is the default pool mode of Azure's built-in PgBouncer?",
      "answers": [
        "Transaction pooling. A client borrows a server connection for a transaction, and PgBouncer can return that connection to the pool when the transaction ends. The next transaction can use a different server connection."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-27-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "What are common built-in PgBouncer pool and timeout defaults?",
      "answers": [
        "The documented Azure built-in defaults include:\n• default_pool_size=50: up to 50 server connections per user/database pair.\n• max_client_conn=5000: up to 5,000 client connections to the pooler.\n• server_idle_timeout=600: close an unused server connection after 600 seconds.\nThese are different limits, and the running server’s configured values may differ."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-27-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "Which Azure PostgreSQL compute tiers support built-in PgBouncer?",
      "answers": [
        "General Purpose and Memory Optimized. The Burstable tier does not support Azure’s built-in PgBouncer feature."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-27-6-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PgBouncer on Azure PostgreSQL",
      "question": "Why is increasing max_connections different from adding a connection pool?",
      "answers": [
        "max_connections raises the number of database connections that may exist. A connection pool reuses established connections, reducing repeated setup and authentication work. A higher connection limit alone does not provide that reuse."
      ],
      "origin": "original",
      "legacyIds": [
        27
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 27",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        },
        {
          "label": "Psycopg · Connection pools",
          "url": "https://www.psycopg.org/psycopg3/docs/advanced/pool.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "https://www.psycopg.org/psycopg3/docs/advanced/pool.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-28-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How can an application authenticate to Azure PostgreSQL with managed identity?",
      "answers": [
        "Enable Microsoft Entra authentication, create the managed identity’s database principal and grant the needed database privileges. The app then obtains an Azure PostgreSQL access token and supplies it as the connection password. New connections need a valid token."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · PostgreSQL managed identity",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-connect-with-managed-identity",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/security/security-connect-with-managed-identity"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-28-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How does a client-side PostgreSQL connection pool reduce overhead?",
      "answers": [
        "It lends requests already-open database connections. That avoids repeating network setup, TLS negotiation and authentication for every query. Return the connection to the pool after use so another request can reuse it."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Psycopg · Connection pools",
          "url": "https://www.psycopg.org/psycopg3/docs/advanced/pool.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed an unsupported universal 50–200 ms connection-setup estimate.",
        "sources": [
          "https://www.psycopg.org/psycopg3/docs/advanced/pool.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-28-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How should a PostgreSQL connection pool be bounded across app instances?",
      "answers": [
        "Budget connections across the maximum number of app instances, including scale-out, and reserve capacity for administration and other clients. For example, an app budget of 500 connections across 10 instances allows at most 50 per instance. A per-instance pool size of 500 would instead permit 5,000 combined connections."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Psycopg · Connection pools",
          "url": "https://www.psycopg.org/psycopg3/docs/advanced/pool.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.psycopg.org/psycopg3/docs/advanced/pool.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-28-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How should user input be passed to a PostgreSQL query?",
      "answers": [
        "Pass data values separately from SQL. With Psycopg:\ncur.execute(\"SELECT content FROM documents WHERE id = %s\", (document_id,))\nThe driver binds document_id as a value; it is not concatenated into the SQL syntax. Do not put quotes around %s or use Python string interpolation to insert user values."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Psycopg · Query parameters",
          "url": "https://www.psycopg.org/psycopg3/docs/basic/params.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.psycopg.org/psycopg3/docs/basic/params.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-28-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL app connections",
      "question": "How can Psycopg return a borrowed PostgreSQL connection to its pool automatically?",
      "answers": [
        "Use the pool’s connection context manager:\nwith pool.connection() as conn:\n    with conn.cursor() as cur:\n        cur.execute(\"SELECT 1\")\nHere pool is an existing Psycopg ConnectionPool. Leaving the block returns the connection to the pool, allowing another request to reuse it."
      ],
      "origin": "original",
      "legacyIds": [
        28
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 28",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Built-in PgBouncer",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "kind": "primary"
        },
        {
          "label": "Psycopg · Connection pools",
          "url": "https://www.psycopg.org/psycopg3/docs/advanced/pool.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/connectivity/concepts-pgbouncer",
          "https://www.psycopg.org/psycopg3/docs/advanced/pool.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced a negative list of unrelated tuning changes with the concrete connection-reuse action the learner should perform."
      }
    },
    {
      "id": "m-29-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "Which PostgreSQL type stores an embedding with a fixed dimension count?",
      "answers": [
        "vector(n), provided by pgvector, where n is the number of components. For example, vector(1536) stores a 1,536-dimensional embedding. Stored embeddings and query vectors must use compatible dimensions."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        },
        {
          "label": "PostgreSQL · Date/time types",
          "url": "https://www.postgresql.org/docs/current/datatype-datetime.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Distinguished calendar dates from timestamps with time zone; timestamptz is not the only suitable date/time type.",
        "sources": [
          "https://github.com/pgvector/pgvector",
          "https://www.postgresql.org/docs/current/datatype-datetime.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "The previous question combined embedding storage with unrelated calendar/timestamp choices. It now asks one storage-type question."
      }
    },
    {
      "id": "m-29-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "In what order should you load data and build indexes for PostgreSQL vector search?",
      "answers": [
        "Create the table, load representative data, build the indexes, run ANALYZE, then test the queries. Loading first avoids updating indexes for each inserted row. It also gives IVFFlat representative vectors for training its clusters."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-29-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "What SQL retrieves the five closest Finance documents by cosine distance?",
      "answers": [
        "Assuming documents has id, department and embedding columns:\nSELECT id FROM documents WHERE department = 'Finance' ORDER BY embedding <=> $1::vector LIMIT 5;\nBind $1 to the query embedding through the database client. The equality condition selects Finance documents; <=> orders by cosine distance, and LIMIT 5 returns at most five results. Some drivers use a different parameter placeholder, such as %s in Psycopg."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        },
        {
          "label": "Psycopg · Query parameters",
          "url": "https://www.psycopg.org/psycopg3/docs/basic/params.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector",
          "https://www.psycopg.org/psycopg3/docs/basic/params.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-29-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "How can a B-tree index help a metadata-filtered PostgreSQL vector query?",
      "answers": [
        "It can find rows matching the ordinary filter, such as department = 'Finance', before calculating vector distances for those candidates. It does not calculate similarity itself. The planner may choose a different order, so inspect EXPLAIN to see whether filtering or vector retrieval happens first."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-29-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "pgvector filtered retrieval",
      "question": "Which index belongs on a PostgreSQL embedding column?",
      "answers": [
        "For pgvector, HNSW or IVFFlat with the operator class matching the query’s distance measure. For cosine distance, that is vector_cosine_ops. Choose and benchmark the algorithm against the dataset size, required recall and latency target."
      ],
      "origin": "original",
      "legacyIds": [
        29
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 29",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · pgvector on Azure",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Separated pgvector indexes from the separate pg_diskann extension and removed the unconditional latency-improvement claim.",
        "sources": [
          "https://github.com/pgvector/pgvector",
          "https://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-30-1-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Why might adding PostgreSQL vCores fail to speed up one slow vector query?",
      "answers": [
        "The query may not be able to use the extra cores, or may still calculate distances for too many rows. Inspect its plan and index usage first. More vCores help only when additional CPU capacity or parallel work addresses the measured bottleneck."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Investigate PostgreSQL CPU",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/troubleshoot/how-to-high-cpu-utilization",
          "kind": "primary"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed the arbitrary 70% threshold and the implication that adding vCores necessarily speeds up one query.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/troubleshoot/how-to-high-cpu-utilization",
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-30-2-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Which resource can help when a vector-index working set no longer fits in memory?",
      "answers": [
        "More memory. It can keep frequently used table and index pages cached, reducing disk reads. Check memory pressure and disk I/O, then compare the same workload before and after scaling."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · PostgreSQL compute tiers",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Investigate PostgreSQL CPU",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/troubleshoot/how-to-high-cpu-utilization",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed a universal 99% cache-hit threshold; memory sizing depends on measured workload behavior.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute",
          "https://learn.microsoft.com/en-us/azure/postgresql/troubleshoot/how-to-high-cpu-utilization"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-30-3-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "How do typical Azure PostgreSQL tiers differ in memory per vCore?",
      "answers": [
        "Memory Optimized provides more memory per vCore than General Purpose. General Purpose commonly provides 4 GiB per vCore; Memory Optimized ratios depend on VM series, currently about 6.75–9.5 GiB. Burstable ratios also vary by size, so use the chosen SKU’s table for exact sizing."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · PostgreSQL compute tiers",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Corrected fixed memory ratios: Burstable is variable and Memory Optimized is not universally 8 GB per vCore.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-30-4-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "Which Azure PostgreSQL feature handles growing storage needs?",
      "answers": [
        "Storage autogrow. In supported storage configurations, it expands allocated storage when free space runs low. This helps avoid filling the database disk; check the chosen storage type’s size and growth limits."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Storage autogrow",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-auto-grow-storage",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/how-to-auto-grow-storage"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-30-5-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "How should a PostgreSQL memory scale-up be validated?",
      "answers": [
        "Run the same representative workload before and after the change. Compare query latency, especially slower requests such as P95, together with memory pressure and disk reads. Keep the dataset and concurrency consistent so the comparison shows the effect of the memory change."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "PostgreSQL · Execution plans",
          "url": "https://www.postgresql.org/docs/current/using-explain.html",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · PostgreSQL compute tiers",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.postgresql.org/docs/current/using-explain.html",
          "https://learn.microsoft.com/en-us/azure/postgresql/compute-storage/concepts-compute"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-30-6-1",
      "domain": 2,
      "category": "postgresql",
      "title": "PostgreSQL vector resources",
      "question": "How can you distinguish PostgreSQL connection-setup overhead from slow SQL execution?",
      "answers": [
        "Time opening a connection and executing the SQL separately. If opening connections is slow but the query is fast, connection reuse through a pool can help. If SQL execution is slow, inspect its plan and CPU or disk activity before choosing an index or compute change."
      ],
      "origin": "original",
      "legacyIds": [
        30
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 30",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Investigate PostgreSQL CPU",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/troubleshoot/how-to-high-cpu-utilization",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · PostgreSQL read replicas",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-read-replicas",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Qualified the blanket dismissal of read replicas: they can relieve contention, although they do not reduce a query’s intrinsic CPU work.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/troubleshoot/how-to-high-cpu-utilization",
          "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-read-replicas"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced an artificial comparison with unrelated backup settings by a concrete way to distinguish connection overhead from query work."
      }
    },
    {
      "id": "m-31-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "Which Redis eviction-policy family considers only keys with an expiry?",
      "answers": [
        "The volatile-* family, such as volatile-lru, volatile-lfu, volatile-random and volatile-ttl. Only keys with an expiry are eligible; keys without a TTL are excluded from these policies."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-31-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "Which Redis eviction-policy family can select keys with or without an expiry?",
      "answers": [
        "The allkeys-* family, such as allkeys-lru, allkeys-lfu and allkeys-random. These policies can choose keys regardless of whether they have an expiry."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-31-3-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "What does Redis noeviction do when memory is exhausted?",
      "answers": [
        "It keeps existing keys instead of evicting them to make room. Operations that need more memory can fail with an out-of-memory error. Reads and operations that free memory can still work; ordinary time-based expiry still applies."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        },
        {
          "label": "Redis · EXPIRE",
          "url": "https://redis.io/docs/latest/commands/expire/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Qualified the blanket “writes fail” statement: memory-increasing commands can fail, while reads and memory-releasing operations remain possible.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/",
          "https://redis.io/docs/latest/commands/expire/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-31-4-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "What happens to a volatile Redis policy when no keys have an expiry?",
      "answers": [
        "No keys are eligible for eviction. Under memory pressure, operations needing more memory can fail, as with noeviction. A volatile policy needs expiring keys to have candidates it can remove."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-31-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "Which Redis setting selects the eviction policy?",
      "answers": [
        "maxmemory-policy. It selects whether Redis evicts keys and which strategy it uses. For an Azure-managed instance, inspect the configured Eviction Policy in the resource settings instead of assuming a default from another tier or service."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Managed Redis module requirements",
          "url": "https://learn.microsoft.com/en-us/azure/redis/plan-redis-modules",
          "kind": "primary"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/redis/plan-redis-modules",
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced a circular question about which policy to check with the actual setting name and where to inspect it."
      }
    },
    {
      "id": "m-31-6-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis eviction policies",
      "question": "How do Redis LRU and LFU rank keys for eviction?",
      "answers": [
        "LRU, least recently used, favors removing keys that have not been accessed recently. LFU, least frequently used, favors keys accessed infrequently. Redis approximates these rankings, and LFU’s frequency counter decays over time."
      ],
      "origin": "original",
      "legacyIds": [
        31
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 31",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-32-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Expiration vs eviction",
      "question": "What triggers Redis key expiration?",
      "answers": [
        "A key’s expiry deadline. For example, SET greeting hello EX 60 stores hello under greeting for 60 seconds. Redis removes expired data through its expiration mechanisms without needing memory pressure. The lifetime starts when the expiry is set, unless you explicitly change it later."
      ],
      "origin": "original",
      "legacyIds": [
        32
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 32",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · SET options",
          "url": "https://redis.io/docs/latest/commands/set/",
          "kind": "primary"
        },
        {
          "label": "Redis · EXPIRE",
          "url": "https://redis.io/docs/latest/commands/expire/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/set/",
          "https://redis.io/docs/latest/commands/expire/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-32-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Expiration vs eviction",
      "question": "What triggers Redis key eviction?",
      "answers": [
        "Redis needs to free memory when its configured maxmemory limit is exceeded. maxmemory-policy decides whether keys may be removed and which ones are eligible. This is separate from expiration: a key can be evicted before its expiry, or never have an expiry under an allkeys policy."
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
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-33-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis ports by tier",
      "question": "Which Azure Redis services use port 10000?",
      "answers": [
        "Azure Managed Redis and the legacy Azure Cache for Redis Enterprise/Enterprise Flash endpoints. Configure TLS explicitly in the client: port 10000 can be used with either TLS or permitted non-TLS access."
      ],
      "origin": "original",
      "legacyIds": [
        33
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 33",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Managed Redis TLS and ports",
          "url": "https://learn.microsoft.com/en-us/azure/redis/tls-configuration",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Legacy Azure Redis configuration",
          "url": "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/redis/tls-configuration",
          "https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-configure"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-34-1-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Which RediSearch schema field type supports KNN vector search?",
      "answers": [
        "VECTOR. It describes the embedding field’s numeric type, dimension count and distance metric so the index can perform nearest-neighbor search."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Create a search index",
          "url": "https://redis.io/docs/latest/commands/ft.create/",
          "kind": "primary"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/ft.create/",
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-34-2-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "How do Redis FLAT and HNSW vector indexes differ?",
      "answers": [
        "FLAT compares every candidate vector and returns exact nearest neighbors. HNSW uses a graph to search promising candidates approximately, often making large searches faster but requiring more index memory and potentially missing some exact matches."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-34-3-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Which vector distance metrics does RediSearch support?",
      "answers": [
        "COSINE, L2 and IP. They compare vector direction, Euclidean distance and inner product respectively. Set DISTANCE_METRIC when creating the index, then rank the returned distance scores with smaller values first."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-34-4-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "When must RediSearch be enabled on an Azure Managed Redis instance?",
      "answers": [
        "Enable RediSearch when creating the Azure Managed Redis instance. You cannot add modules to an existing instance; adding one requires a new instance and migration. RediSearch is supported on Memory Optimized, Balanced and Compute Optimized tiers, but not Flash Optimized."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Managed Redis module requirements",
          "url": "https://learn.microsoft.com/en-us/azure/redis/plan-redis-modules",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/redis/plan-redis-modules"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-34-5-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Which clustering and eviction policies does RediSearch require on Azure Managed Redis?",
      "answers": [
        "Enterprise clustering and NoEviction. These are the required policies for RediSearch on Azure Managed Redis. Plan memory for both stored data and search indexes, since keys will not be automatically evicted to free space."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Managed Redis module requirements",
          "url": "https://learn.microsoft.com/en-us/azure/redis/plan-redis-modules",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/redis/plan-redis-modules"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-34-6-1",
      "domain": 2,
      "category": "redis",
      "title": "RediSearch vector search",
      "question": "Does FT.CREATE index existing matching Redis keys?",
      "answers": [
        "Yes. By default, creating the search index scans existing keys and indexes those matching its prefix and schema. SKIPINITIALSCAN skips that initial backfill. Indexing is not necessarily finished when FT.CREATE returns; check FT.INFO before assuming all pre-existing documents are searchable."
      ],
      "origin": "original",
      "legacyIds": [
        34
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 34",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Create a search index",
          "url": "https://redis.io/docs/latest/commands/ft.create/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/ft.create/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-35-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "How does the cache-aside pattern work?",
      "answers": [
        "Read the cache first. On a miss, read the source database, cache the result with an appropriate lifetime and return it. Later hits can use the cached copy. When the source changes, invalidate or update that cached copy so it does not stay stale."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-35-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "How can a Redis cache entry be given a fixed lifetime?",
      "answers": [
        "For a string, SET greeting hello EX 600 stores hello for 600 seconds, or ten minutes. For an existing hash, EXPIRE doc:1 600 gives the whole hash a ten-minute lifetime. TTL means time to live. Set the expiry again only when you intend to reset that lifetime."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · SET options",
          "url": "https://redis.io/docs/latest/commands/set/",
          "kind": "primary"
        },
        {
          "label": "Redis · EXPIRE",
          "url": "https://redis.io/docs/latest/commands/expire/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/set/",
          "https://redis.io/docs/latest/commands/expire/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-35-3-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "How should cached data be invalidated after its source changes?",
      "answers": [
        "After updating the source successfully, delete or replace its related cache entry. For example, DEL customer:42 causes the next request to reload that customer. Prefer known cache keys; if discovery is necessary, SCAN iterates keys incrementally without a blocking KEYS scan."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        },
        {
          "label": "Redis · Iterate keys",
          "url": "https://redis.io/docs/latest/commands/scan/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "https://redis.io/docs/latest/commands/scan/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-35-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis cache freshness",
      "question": "Why can a Redis cache stay stale even when persistence is enabled?",
      "answers": [
        "Persistence saves Redis data for recovery; it does not detect changes in the external source database. The application must update/invalidate the cached value, use an expiry policy, or process source-change events."
      ],
      "origin": "original",
      "legacyIds": [
        35
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 35",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        },
        {
          "label": "Redis · Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "https://redis.io/docs/latest/develop/reference/eviction/",
          "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-36-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "How can a Redis string’s expiry be refreshed whenever it is read?",
      "answers": [
        "For a string key, GETEX can read the value and reset its expiry in one operation:\nGETEX session:42 EX 600\nEach successful read gives the key another ten minutes. If it is not read again, it expires. This is sliding expiration."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · EXPIRE",
          "url": "https://redis.io/docs/latest/commands/expire/",
          "kind": "primary"
        },
        {
          "label": "Redis · GETEX",
          "url": "https://redis.io/docs/latest/commands/getex/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Verified the atomic GETEX read-and-expiry operation against the Redis command reference.",
        "sources": [
          "https://redis.io/docs/latest/commands/expire/",
          "https://redis.io/docs/latest/commands/getex/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Used a single atomic read-and-refresh command rather than a two-command recipe with a separate race-condition warning."
      }
    },
    {
      "id": "m-36-4-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "How does Redis volatile-ttl choose an eviction candidate?",
      "answers": [
        "It favors expiring keys with the shortest remaining TTL. The policy uses that lifetime to choose a key to remove under memory pressure; it does not refresh or extend the lifetime."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-36-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "What does Redis PERSIST do?",
      "answers": [
        "PERSIST key removes that key’s expiry. The key remains stored until explicitly deleted or removed through another mechanism such as an eligible allkeys eviction policy. It does not make the key durable on disk; Redis persistence is a separate feature."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Remove expiration",
          "url": "https://redis.io/docs/latest/commands/persist/",
          "kind": "primary"
        },
        {
          "label": "Redis · Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/persist/",
          "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-36-6-1",
      "domain": 2,
      "category": "redis",
      "title": "Keeping hot keys in Redis",
      "question": "What do Redis TTL return values -1 and -2 mean?",
      "answers": [
        "TTL returns the remaining lifetime in seconds. -1 means the key exists but has no expiry; -2 means the key does not exist. For example, TTL session:42 returning 120 means it is scheduled to expire in about two minutes."
      ],
      "origin": "original",
      "legacyIds": [
        36
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 36",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · TTL",
          "url": "https://redis.io/docs/latest/commands/ttl/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/ttl/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-37-1-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "How can an embedding and its metadata be stored in one Redis hash?",
      "answers": [
        "For a FLOAT32 hash vector field, serialize the embedding as 32-bit floating-point bytes:\nimport numpy as np\nblob = np.asarray(embedding, dtype=np.float32).tobytes()\nr.hset(\"doc:1\", mapping={\"embedding\": blob, \"title\": \"Example\"})\nHere r is a connected redis-py client and embedding is the numeric vector. The embedding field and title metadata are stored in the same hash. Its vector length and encoding must match the search index."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-37-2-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "How do you create a Redis vector index for embeddings stored in hashes?",
      "answers": [
        "Create a search index with a VECTOR field matching the stored data. For 1,536-component FLOAT32 embeddings in hashes named doc:...:\nFT.CREATE documents ON HASH PREFIX 1 doc: SCHEMA embedding VECTOR HNSW 6 TYPE FLOAT32 DIM 1536 DISTANCE_METRIC COSINE\nRun this through redis-cli or a Redis command interface. documents is the index name; doc: selects matching keys; embedding is the hash field. The six following arguments describe the vector type, dimension count and distance metric. HSET alone does not create this index."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Create a search index",
          "url": "https://redis.io/docs/latest/commands/ft.create/",
          "kind": "primary"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/ft.create/",
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "The answer is a complete index-creation example, so the question now asks directly for that operation."
      }
    },
    {
      "id": "m-37-4-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "How do you query Redis for the five closest embedding vectors?",
      "answers": [
        "With an existing index named documents, a connected redis-py client r and correctly encoded query_blob:\nfrom redis.commands.search.query import Query\nq = Query(\"*=>[KNN 5 @embedding $query_vec AS score]\").sort_by(\"score\").return_fields(\"score\").dialect(2)\nresults = r.ft(\"documents\").search(q, query_params={\"query_vec\": query_blob})\nKNN 5 requests five neighbors, @embedding names the vector field, and query_vec supplies the query bytes. Sort by score to place the nearest distances first. The bytes must match the index’s numeric type and dimension count."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced the vague phrase “query shape” with the concrete operation demonstrated by the answer."
      }
    },
    {
      "id": "m-37-5-1",
      "domain": 2,
      "category": "redis",
      "title": "Redis vector storage basics",
      "question": "How is TLS enabled when connecting redis-py to Azure Managed Redis?",
      "answers": [
        "Set ssl=True on the redis-py client:\nimport redis\nr = redis.Redis(host=host, port=10000, password=access_key, ssl=True)\nr.ping()\nHere host is the instance’s hostname and access_key is obtained securely. ssl=True enables TLS and normal certificate validation; port 10000 alone does not enable encryption."
      ],
      "origin": "original",
      "legacyIds": [
        37
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 37",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Redis · Python connections",
          "url": "https://redis.io/docs/latest/develop/clients/redis-py/connect/",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Managed Redis TLS and ports",
          "url": "https://learn.microsoft.com/en-us/azure/redis/tls-configuration",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/clients/redis-py/connect/",
          "https://learn.microsoft.com/en-us/azure/redis/tls-configuration"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-cosmos-002",
      "domain": 2,
      "title": "Cosmos multi-region writes",
      "category": "cosmos",
      "question": "Which Cosmos DB capability allows an account to accept writes in several regions?",
      "answers": [
        "Multi-region writes. It lets clients write in several Azure regions. Configure conflict resolution for concurrent changes to the same item; this account configuration cannot use Strong consistency."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-002",
          "url": "https://ai200prep.com/questions/cosmos-002/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB consistency",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/consistency-levels"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-cosmos-004",
      "domain": 2,
      "title": "Cosmos capacity model",
      "category": "cosmos",
      "question": "How do Cosmos DB provisioned throughput and serverless differ?",
      "answers": [
        "Provisioned throughput reserves a capacity budget in RU/s, either fixed or autoscaled. Serverless charges for the request units actually consumed rather than continuously reserving that capacity. Both also charge for storage."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-004",
          "url": "https://ai200prep.com/questions/cosmos-004/"
        },
        {
          "label": "Microsoft Learn · Provision throughput",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/set-throughput",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Serverless Cosmos DB",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/serverless",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/set-throughput",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/serverless"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-cosmos-006",
      "domain": 2,
      "title": "Logical partitioning",
      "category": "cosmos",
      "question": "What two goals should a Cosmos DB partition key balance?",
      "answers": [
        "Even distribution and efficient access. A good key spreads writes/storage across many values while letting common reads target a known partition. For example, customerId can work well when traffic is spread across customers; a single popular value can create a hot partition."
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
        },
        {
          "label": "Microsoft Learn · Partitioning",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-cosmos-008",
      "domain": 2,
      "title": "Cross-partition query",
      "category": "cosmos",
      "question": "What happens when a Cosmos DB query cannot be routed to one partition?",
      "answers": [
        "The query can fan out to multiple physical partitions and combine their results. That adds coordination and often consumes more request units than a query routed to one partition. Filtering on a known partition-key value helps routing; the exact cost still depends on indexes, data and the query."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · cosmos-008",
          "url": "https://ai200prep.com/questions/cosmos-008/"
        },
        {
          "label": "Microsoft Learn · Partitioning",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Read and query costs",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/optimize-cost-queries"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-cosmos-013",
      "domain": 2,
      "title": "Cosmos document expiry",
      "category": "cosmos",
      "question": "Which Cosmos DB feature automatically expires items after a configured lifetime?",
      "answers": [
        "Time to Live (TTL). Enable it on the container and set a default lifetime or an item-level ttl value. The lifetime runs from the item’s last modification, so an update restarts its clock."
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
        },
        {
          "label": "Microsoft Learn · Expire Cosmos DB items",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/time-to-live",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/time-to-live"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-cos-010",
      "domain": 2,
      "title": "Composite ordering",
      "category": "cosmos",
      "question": "Which Cosmos DB index supports ORDER BY across more than one property?",
      "answers": [
        "A composite index covering the ORDER BY property sequence and compatible sort directions. For example, ORDER BY c.lastName ASC, c.firstName ASC needs a composite index for those paths together. Separate single-property indexes do not replace the required composite index for this ordering."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-cos-010",
          "url": "https://ai200prep.com/questions/p-cos-010/"
        },
        {
          "label": "Microsoft Learn · Indexing policies",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-pg-003",
      "domain": 2,
      "title": "HNSW versus IVFFlat",
      "category": "postgresql",
      "question": "How does HNSW generally trade index build cost for query quality compared with IVFFlat?",
      "answers": [
        "HNSW generally takes more memory and time to build, but can give a better query-speed/recall trade-off. IVFFlat usually builds more cheaply and needs representative data to train its clusters. Benchmark both against the required accuracy and query latency."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-003",
          "url": "https://ai200prep.com/questions/pg-003/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-pg-003",
      "domain": 2,
      "title": "HNSW construction",
      "category": "postgresql",
      "question": "Which pgvector HNSW parameters control graph construction?",
      "answers": [
        "m controls the maximum graph connections per layer, and ef_construction controls how many candidates are considered while building the graph. Increasing them can improve the index’s search quality, but uses more memory and/or build work. Query-time search effort is configured separately."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-003",
          "url": "https://ai200prep.com/questions/p-pg-003/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-pg-004",
      "domain": 2,
      "title": "HNSW query effort",
      "category": "postgresql",
      "question": "Which pgvector setting adjusts HNSW candidate search effort at query time?",
      "answers": [
        "hnsw.ef_search. For example, SET hnsw.ef_search = 100; makes a query consider a larger candidate set than the usual default of 40. More search effort generally improves recall but can increase latency. Measure the trade-off rather than always choosing the largest value."
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
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-pg-016",
      "domain": 2,
      "title": "IVFFlat construction",
      "category": "postgresql",
      "question": "What does pgvector's IVFFlat lists parameter configure?",
      "answers": [
        "It sets the number of clusters, called inverted lists, created when the IVFFlat index is built. Vectors are grouped into these lists. At query time, probes determines how many lists to search; lists is not itself the per-query search count."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-016",
          "url": "https://ai200prep.com/questions/pg-016/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-pg-034",
      "domain": 2,
      "title": "IVFFlat query effort",
      "category": "postgresql",
      "question": "Which pgvector setting selects how many IVFFlat lists are searched?",
      "answers": [
        "ivfflat.probes. For example, SET ivfflat.probes = 10; searches ten inverted lists for the query. Searching more lists generally improves recall but performs more work. The right value depends on how many lists the index has and the desired speed/recall trade-off."
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
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-pg-005",
      "domain": 2,
      "title": "IVFFlat training data",
      "category": "postgresql",
      "question": "Why should an IVFFlat index be built with representative data already present?",
      "answers": [
        "IVFFlat chooses cluster centers from vectors already in the table. If those vectors are absent or unrepresentative, the resulting clusters may be poor for later data. Load a representative dataset before building this index; HNSW does not require this clustering training step."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-005",
          "url": "https://ai200prep.com/questions/p-pg-005/"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-pg-010",
      "domain": 2,
      "title": "PostgreSQL hybrid search",
      "category": "postgresql",
      "question": "How can PostgreSQL combine keyword search with vector similarity search?",
      "answers": [
        "Run full-text search for keyword matches and pgvector search for semantic matches, then merge their ranked results. Reciprocal rank fusion is one method: it rewards documents ranked highly in either list without assuming the two search scores use the same numeric scale."
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
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-pg-012",
      "domain": 2,
      "title": "Actual query execution",
      "category": "postgresql",
      "question": "What does EXPLAIN ANALYZE measure that EXPLAIN alone does not?",
      "answers": [
        "EXPLAIN estimates an execution plan without running the statement. EXPLAIN ANALYZE actually executes it and reports observed times and row counts. For a statement that modifies data, those modifications really occur unless you deliberately contain them in a transaction that is rolled back."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-012",
          "url": "https://ai200prep.com/questions/p-pg-012/"
        },
        {
          "label": "PostgreSQL · Execution plans",
          "url": "https://www.postgresql.org/docs/current/using-explain.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.postgresql.org/docs/current/using-explain.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-pg-013",
      "domain": 2,
      "title": "Vacuum maintenance",
      "category": "postgresql",
      "question": "What does ordinary PostgreSQL VACUUM do with dead row versions?",
      "answers": [
        "It makes space from obsolete row versions available for reuse, such as versions left by updates or deletes. It normally does not shrink the table file on disk. VACUUM FULL is a separate operation that rewrites the table and can reclaim disk space."
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
        },
        {
          "label": "PostgreSQL · VACUUM",
          "url": "https://www.postgresql.org/docs/current/sql-vacuum.html",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.postgresql.org/docs/current/sql-vacuum.html"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-pg-016",
      "domain": 2,
      "title": "JSONB indexing",
      "category": "postgresql",
      "question": "Which PostgreSQL index supports JSONB containment queries such as @>?",
      "answers": [
        "A GIN index with a suitable JSONB operator class. It indexes values inside the document so supported containment conditions such as @> can find matching rows efficiently."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-016",
          "url": "https://ai200prep.com/questions/p-pg-016/"
        },
        {
          "label": "PostgreSQL · JSONB indexing",
          "url": "https://www.postgresql.org/docs/current/datatype-json.html#JSON-INDEXING",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.postgresql.org/docs/current/datatype-json.html#JSON-INDEXING"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-pg-023",
      "domain": 2,
      "title": "Minimum TLS version",
      "category": "postgresql",
      "question": "Which Azure PostgreSQL server parameter sets the minimum TLS protocol version?",
      "answers": [
        "ssl_min_protocol_version. It sets the oldest TLS protocol version the server will accept, for example TLSv1.3 where configured and supported. This is separate from require_secure_transport, which controls whether encrypted transport is required at all."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · pg-023",
          "url": "https://ai200prep.com/questions/pg-023/"
        },
        {
          "label": "Microsoft Learn · PostgreSQL TLS",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-tls",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/security/security-tls"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-pg-017",
      "domain": 2,
      "title": "Index build memory",
      "category": "postgresql",
      "question": "Which PostgreSQL setting provides memory for maintenance work such as an HNSW index build?",
      "answers": [
        "maintenance_work_mem sets the memory budget for maintenance operations such as an HNSW index build. More build memory can help when the graph no longer fits, but the total budget must account for server RAM and concurrent maintenance work."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-017",
          "url": "https://ai200prep.com/questions/p-pg-017/"
        },
        {
          "label": "PostgreSQL · Memory configuration",
          "url": "https://www.postgresql.org/docs/current/runtime-config-resource.html",
          "kind": "primary"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.postgresql.org/docs/current/runtime-config-resource.html",
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-pg-029",
      "domain": 2,
      "title": "Half-precision embeddings",
      "category": "postgresql",
      "question": "What does pgvector halfvec change compared with vector?",
      "answers": [
        "halfvec stores each vector component as a 16-bit floating-point value instead of vector’s 32-bit value. That reduces component storage and memory use, at the cost of numerical precision. The overall size is not exactly halved because types and indexes also have overhead."
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
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-pg-020",
      "domain": 2,
      "title": "Persistent query statistics",
      "category": "postgresql",
      "question": "What does Azure PostgreSQL Query Store retain for performance analysis?",
      "answers": [
        "Query history and aggregated execution statistics. They help you investigate recurring slow queries or performance regressions after the original execution has finished. Capture must be enabled before the period you want to analyze."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-020",
          "url": "https://ai200prep.com/questions/p-pg-020/"
        },
        {
          "label": "Microsoft Learn · Query Store",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/monitor/concepts-query-store",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/monitor/concepts-query-store"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-pg-023",
      "domain": 2,
      "title": "Required encrypted transport",
      "category": "postgresql",
      "question": "Which Azure PostgreSQL server setting requires secure client transport?",
      "answers": [
        "Set require_secure_transport to on. The server then rejects connections that do not use the required secure transport. Configure the client to use TLS and verify the server certificate and hostname as well; transport encryption and server-identity verification are separate checks."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-023",
          "url": "https://ai200prep.com/questions/p-pg-023/"
        },
        {
          "label": "Microsoft Learn · PostgreSQL TLS",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-tls",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/postgresql/security/security-tls"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-pg-025",
      "domain": 2,
      "title": "Bulk embedding ingestion",
      "category": "postgresql",
      "question": "Which PostgreSQL operation efficiently loads large batches of embedding rows?",
      "answers": [
        "Use PostgreSQL COPY for a bulk load, with a supported text, CSV or binary format. It avoids much of the overhead of issuing a separate INSERT for every row. Where the ingestion plan allows it, load first, build secondary indexes afterward and run ANALYZE."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-pg-025",
          "url": "https://ai200prep.com/questions/p-pg-025/"
        },
        {
          "label": "PostgreSQL · Bulk COPY",
          "url": "https://www.postgresql.org/docs/current/sql-copy.html",
          "kind": "primary"
        },
        {
          "label": "pgvector · Operators and vector indexes",
          "url": "https://github.com/pgvector/pgvector",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.postgresql.org/docs/current/sql-copy.html",
          "https://github.com/pgvector/pgvector"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-redis-002",
      "domain": 2,
      "title": "Redis persistence",
      "category": "redis",
      "question": "How do Redis RDB and AOF persistence differ?",
      "answers": [
        "RDB saves point-in-time snapshots. AOF, append-only file, records writes that can be replayed during recovery. RDB can lose changes since the last snapshot; AOF’s loss window depends on how frequently its writes are flushed to disk."
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
        },
        {
          "label": "Redis · Persistence",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-red-003",
      "domain": 2,
      "title": "Semantic cache",
      "category": "redis",
      "question": "How does a semantic cache reuse an answer for a paraphrased prompt?",
      "answers": [
        "Convert the new prompt into an embedding and search stored prompt embeddings for a sufficiently close match. Reuse the saved answer only if a tested similarity threshold and required context checks pass, such as the same user permissions and relevant model/data version. Similar wording alone does not guarantee the cached answer is suitable."
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
        },
        {
          "label": "Redis · Vector search",
          "url": "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/ai/search-and-query/vectors/",
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-red-004",
      "domain": 2,
      "title": "Fixed-window limiting",
      "category": "redis",
      "question": "How can Redis count requests in a fixed one-minute rate-limit window?",
      "answers": [
        "Use one counter key per caller and minute, then increment it with INCR. Compare the count with the request limit. Set a cleanup expiry when creating the counter, coordinated atomically so a crash cannot leave a permanent key. A script can combine incrementing and first-use expiry."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-004",
          "url": "https://ai200prep.com/questions/p-red-004/"
        },
        {
          "label": "Redis · Atomic counters",
          "url": "https://redis.io/docs/latest/commands/incr/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/incr/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-redis-022",
      "domain": 2,
      "title": "Sliding-window limiting",
      "category": "redis",
      "question": "How can a Redis sorted set implement a sliding-window rate counter?",
      "answers": [
        "Store each request as a unique sorted-set member with its timestamp as the score. Atomically remove entries older than the time window, count the remaining entries, and add the new request only if the limit allows it. Use a script or equivalent coordination so concurrent requests cannot all pass a separate count check."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-022",
          "url": "https://ai200prep.com/questions/redis-022/"
        },
        {
          "label": "Redis · Sorted sets",
          "url": "https://redis.io/docs/latest/develop/data-types/sorted-sets/",
          "kind": "primary"
        },
        {
          "label": "Redis · Atomic counters",
          "url": "https://redis.io/docs/latest/commands/incr/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/data-types/sorted-sets/",
          "https://redis.io/docs/latest/commands/incr/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-red-010",
      "domain": 2,
      "title": "Conditional set with expiry",
      "category": "redis",
      "question": "Which Redis SET options create an expiring key only when it does not exist?",
      "answers": [
        "NX and EX, or NX and PX for a lifetime in milliseconds. For example:\nSET greeting hello NX EX 30\nThis stores hello only if greeting does not exist and expires it after 30 seconds. An existing key is left unchanged."
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
        },
        {
          "label": "Redis · SET options",
          "url": "https://redis.io/docs/latest/commands/set/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/set/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-redis-008",
      "domain": 2,
      "title": "Redis sharding",
      "category": "redis",
      "question": "What does Redis clustering distribute across shards?",
      "answers": [
        "The keyspace. Each key maps to a hash slot, and different shards own different slot ranges. This distributes data and work across servers. Multi-key operations may require their keys to share a slot."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-008",
          "url": "https://ai200prep.com/questions/redis-008/"
        },
        {
          "label": "Redis · Cluster hash slots",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-redis-016",
      "domain": 2,
      "title": "Read multiple keys",
      "category": "redis",
      "question": "Which redis-py operation retrieves several keys in one command?",
      "answers": [
        "r.mget([\"key1\", \"key2\"]) on a connected redis-py client r retrieves multiple string values in one command. Missing keys return None in their positions. In Redis Cluster, check multi-key restrictions: keys may need the same hash slot, or the client/service may split supported cross-slot operations."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · redis-016",
          "url": "https://ai200prep.com/questions/redis-016/"
        },
        {
          "label": "Redis · Read multiple string keys",
          "url": "https://redis.io/docs/latest/commands/mget/",
          "kind": "primary"
        },
        {
          "label": "Redis · Cluster hash slots",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/commands/mget/",
          "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-red-018",
      "domain": 2,
      "title": "Command pipelining",
      "category": "redis",
      "question": "What does Redis pipelining reduce?",
      "answers": [
        "It sends several commands without waiting for each reply before sending the next. This reduces network round trips and waiting, improving throughput for batches. Pipelining by itself does not make the commands an atomic transaction."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-018",
          "url": "https://ai200prep.com/questions/p-red-018/"
        },
        {
          "label": "Redis · Pipelining",
          "url": "https://redis.io/docs/latest/develop/using-commands/pipelining/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/using-commands/pipelining/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-red-020",
      "domain": 2,
      "title": "Cluster hash tags",
      "category": "redis",
      "question": "How can related Redis Cluster keys be placed in the same hash slot?",
      "answers": [
        "Put the same non-empty substring inside braces in each key, for example order:{42}:items and order:{42}:status. Redis hashes 42 rather than each full key, placing both in the same slot. This permits supported multi-key operations while retaining descriptive key names."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-020",
          "url": "https://ai200prep.com/questions/p-red-020/"
        },
        {
          "label": "Redis · Cluster hash slots",
          "url": "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-red-016",
      "domain": 2,
      "title": "Cache capacity symptoms",
      "category": "redis",
      "question": "What combination suggests a Redis cache may be undersized?",
      "answers": [
        "Frequent evictions together with a falling hit ratio and sustained memory pressure can suggest insufficient capacity. Also check key sizes, expiry choices and whether the access pattern has changed. A high miss rate alone does not prove undersizing; the application may be caching data that is rarely reused."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-red-016",
          "url": "https://ai200prep.com/questions/p-red-016/"
        },
        {
          "label": "Redis · Memory eviction policies",
          "url": "https://redis.io/docs/latest/develop/reference/eviction/",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://redis.io/docs/latest/develop/reference/eviction/",
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-red-011",
      "domain": 2,
      "title": "Cache stampede",
      "category": "redis",
      "question": "How can an application reduce a cache stampede when a popular key expires?",
      "answers": [
        "Let one worker rebuild the missing value while other callers wait or use an acceptable stale copy. A short-lived lock can coordinate that work. Also randomize expiry times slightly so many popular keys do not expire together."
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
        },
        {
          "label": "Microsoft Learn · Cache-aside pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "kind": "primary"
        },
        {
          "label": "Redis · SET options",
          "url": "https://redis.io/docs/latest/commands/set/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside",
          "https://redis.io/docs/latest/commands/set/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-api",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "API",
      "title": "API",
      "question": "What does API stand for?",
      "answers": [
        "Application Programming Interface: a defined way for one program to use another component. For example, an orders web API can let a client submit an order or retrieve its status using HTTP requests."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · HTTP concepts",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-endpoint",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Endpoint",
      "title": "Endpoint",
      "question": "What is a service endpoint?",
      "answers": [
        "An address where a service can be contacted, often including a hostname, port or URL path. For example, https://example.com/orders can be an HTTP endpoint. Knowing the address tells a client where to connect; authentication and authorization still determine whether its request is allowed."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · HTTP concepts",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-http",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "HTTP",
      "title": "HTTP",
      "question": "What does HTTP stand for?",
      "answers": [
        "Hypertext Transfer Protocol. It defines how a client sends requests and a server returns responses on the web. Requests use methods such as GET and POST; responses include status codes such as 200 for success or 404 for not found."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · HTTP concepts",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · HTTP trigger and authorization",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-https",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "HTTPS",
      "title": "HTTPS",
      "question": "What is HTTPS?",
      "answers": [
        "HTTP carried over Transport Layer Security (TLS). It encrypts the connection and, with normal certificate validation, verifies the server hostname. HTTPS protects transport; the application still needs appropriate user authentication and authorization."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · HTTP concepts",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-function",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Azure Function",
      "title": "Azure Function",
      "question": "What is an Azure Function?",
      "answers": [
        "A piece of application code invoked by a configured trigger, such as an HTTP request or a queue message. Azure Functions runs it on a supported hosting plan. One function has one trigger; a function app can host several functions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure Functions",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-function-app",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Function app",
      "title": "Function app",
      "question": "What is an Azure function app?",
      "answers": [
        "The Azure resource that hosts one or more functions. It provides their shared app-level settings and hosting configuration. You deploy function code into a function app; each individual function has its own handler and trigger."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure Functions",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · host.json",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-serverless",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Serverless",
      "title": "Serverless",
      "question": "What does serverless mean?",
      "answers": [
        "A hosting model where you deploy application code while the platform manages the underlying servers. Servers still run the code, but you do not maintain them yourself. Automatic scaling, idle costs and execution limits depend on the chosen service and plan."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-cold-start",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Cold start",
      "title": "Cold start",
      "question": "What is a cold start in serverless hosting?",
      "answers": [
        "The startup delay when the platform must initialize a new application instance before handling work. It can include starting the host, loading the language runtime and importing code. Keeping supported capacity warm can reduce this delay, usually with a capacity cost."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-trigger",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Function trigger",
      "title": "Function trigger",
      "question": "What is a trigger in Azure Functions?",
      "answers": [
        "The configured event source that starts a function invocation. For example, an HTTP trigger starts it for a request, a queue trigger for a message, and a Timer trigger on a schedule. Each function has exactly one trigger."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-input-binding",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Input binding",
      "title": "Input binding",
      "question": "What is an input binding in Azure Functions?",
      "answers": [
        "A declarative connection that supplies data from a supported service to a function. For example, a Blob input binding can supply a blob’s contents without the handler creating its own Storage client. It still needs the correct path, connection and access permissions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-service-bus",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Service Bus",
      "title": "Service Bus",
      "question": "What is Azure Service Bus?",
      "answers": [
        "A managed message broker with queues and topic subscriptions. One application sends a message; another receives and processes it, even if they are not running at the same time. Service Bus offers controls such as locks, completion, retries and dead-lettering."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-blob",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Blob",
      "title": "Blob",
      "question": "What is a blob in Azure Storage?",
      "answers": [
        "An individually stored object, such as an image, PDF or data file. Each blob has its own name and address and belongs to a Blob Storage container in a storage account. Here a container is a group of stored objects."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Blob Storage events",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-message-broker",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Message broker",
      "title": "Message broker",
      "question": "What is a message broker?",
      "answers": [
        "A service that accepts messages from senders and makes them available to receivers, decoupling the two applications. A broker can hold messages while a consumer is unavailable and provide features such as routing or acknowledgments. Azure Service Bus is an example."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-queue",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Message queue",
      "title": "Message queue",
      "question": "What is a message queue?",
      "answers": [
        "A store of messages waiting for consumers to process them. Competing consumers share the work: a queue message is not automatically copied to every consumer. Queues let the sender hand off background work without keeping a synchronous request open until it finishes."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-topic",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Service Bus topic",
      "title": "Service Bus topic",
      "question": "What is a topic in Azure Service Bus?",
      "answers": [
        "A publishing destination whose subscriptions can each receive matching messages. For example, one order event can reach billing and shipping through their separate subscriptions. The topic provides fan-out through subscriptions; consumers receive from the subscriptions rather than directly from the topic."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-subscription",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Topic subscription",
      "title": "Topic subscription",
      "question": "What is a subscription to a Service Bus topic?",
      "answers": [
        "A queue-like endpoint under a topic that keeps its own copy of matching messages. Billing and shipping can each have a subscription and process the same order independently. This is different from an Azure billing subscription."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Subscription filter examples",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-event",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Event notification",
      "title": "Event notification",
      "question": "What is an event notification?",
      "answers": [
        "A message describing something that happened, such as a blob being created or an order being accepted. Subscribers decide what to do with that information. It often contains identifiers and metadata rather than the complete underlying file or business object."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Event Grid capabilities",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Blob Storage events",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/overview",
          "https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-webhook",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Webhook",
      "title": "Webhook",
      "question": "What is a webhook?",
      "answers": [
        "An HTTP endpoint that another service calls to notify your application when something happens. For example, Event Grid can send a POST request to your webhook when a blob is created."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Event Grid schema validation",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-event-grid",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Event Grid",
      "title": "Event Grid",
      "question": "What is Azure Event Grid?",
      "answers": [
        "An Azure service that routes event notifications from sources to interested subscribers. For example, it can notify a function when a Storage blob is created. Its namespace features also support pull delivery and MQTT messaging."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Event Grid capabilities",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-idempotency",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Idempotency",
      "title": "Idempotency",
      "question": "What does idempotent processing mean?",
      "answers": [
        "Processing the same operation again has the same intended effect as processing it once. For example, receiving the same payment message twice should not charge the customer twice. Stable operation IDs and coordinated duplicate checks can help make retries safe."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Idempotent processing",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-idempotent",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Duplicate detection",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-idempotent",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-at-least-once",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "At-least-once delivery",
      "title": "At-least-once delivery",
      "question": "What does at-least-once delivery mean?",
      "answers": [
        "Messages can be delivered more than once. For example, a handler may finish its work but lose the acknowledgment, causing delivery to be retried. Consumers must tolerate duplicates. The service's retry and retention limits still apply; delivery does not guarantee that the business operation eventually succeeds."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-settlement",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Message settlement",
      "title": "Message settlement",
      "question": "What is message settlement in Service Bus?",
      "answers": [
        "Telling the broker the outcome of receiving/processing a message. Complete removes successfully processed work; abandon releases it for another attempt; defer sets it aside; dead-letter moves it out of normal delivery. Receiving a PeekLock message alone does not report successful completion."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-dlq",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Dead-letter queue (DLQ)",
      "title": "Dead-letter queue (DLQ)",
      "question": "What is a dead-letter queue?",
      "answers": [
        "A place for messages that could not be delivered or processed under the service’s rules. DLQ stands for dead-letter queue. In Service Bus it is a subqueue of a queue or subscription. Inspecting or replaying its messages requires an explicit recovery process."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d3-session",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "Service Bus session",
      "title": "Service Bus session",
      "question": "What is a session in Azure Service Bus?",
      "answers": [
        "A group of related messages with the same SessionId. One receiver holds the session lock at a time, so it can process that group in order while other receivers handle other sessions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Ordered processing with sessions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d3-amqp",
      "domain": 3,
      "category": "terms-3",
      "kind": "term",
      "term": "AMQP",
      "title": "AMQP",
      "question": "What does AMQP stand for?",
      "answers": [
        "Advanced Message Queuing Protocol. It defines how clients and message brokers exchange messages and delivery outcomes over a network. Azure Service Bus uses it in its current supported SDKs."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-44-5-1",
      "domain": 3,
      "category": "terms-3",
      "title": "Service Bus queues vs topics",
      "question": "What does Service Bus auto-forwarding do?",
      "answers": [
        "It transfers messages from one queue or subscription into one configured queue/topic in the same namespace. Messages are removed from the source as they are forwarded, rather than copied to multiple destinations. Use topic subscriptions for fan-out; auto-forwarding is a routing chain."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Automatic forwarding",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-auto-forwarding",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-auto-forwarding"
        ]
      },
      "coverageCategory": "service-bus",
      "kind": "term",
      "term": "Service Bus auto-forwarding",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-49-3-1",
      "domain": 3,
      "category": "terms-3",
      "title": "Triggers and bindings",
      "question": "What does an Azure Functions output binding do?",
      "answers": [
        "It sends or writes a function's output to a configured service. For example, the handler can provide an output value that the binding writes as a queue message or blob. The binding needs the destination settings and permission to write there."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "coverageCategory": "functions",
      "kind": "term",
      "term": "Output binding",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-50-2-1",
      "domain": 3,
      "category": "terms-3",
      "title": "Function app configuration",
      "question": "What is local.settings.json used for?",
      "answers": [
        "It stores local Functions settings, including values used as environment variables while running locally. Deployed Azure apps use their configured app settings instead of reading this file. The standard .gitignore excludes it because it may contain secrets, but verify your repository rules; naming a file local.settings.json does not automatically keep it out of Git."
      ],
      "origin": "original",
      "legacyIds": [
        50
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 50",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Local function settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local"
        ]
      },
      "coverageCategory": "functions",
      "kind": "term",
      "term": "local.settings.json",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-func-010",
      "domain": 3,
      "title": "Functions host settings",
      "category": "terms-3",
      "question": "What is host.json used for in Azure Functions?",
      "answers": [
        "It contains configuration for the Functions host across the function app, such as logging, functionTimeout and extension-specific trigger/concurrency settings. It is deployed with the code. Per-environment secrets and connection values normally belong in app settings, not in host.json."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-010",
          "url": "https://ai200prep.com/questions/func-010/"
        },
        {
          "label": "Microsoft Learn · host.json",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json"
        ]
      },
      "coverageCategory": "functions",
      "kind": "term",
      "term": "host.json",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-38-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid retry schedule",
      "question": "What is the Event Grid push-delivery retry schedule?",
      "answers": [
        "For classic push delivery, the documented backoff steps are 10 seconds, 30 seconds, 1 minute, 5 minutes, 10 minutes, 30 minutes, 1 hour, 3 hours and 6 hours, then every 12 hours within the retention limit. Timing includes randomization and is best effort. Endpoint errors, health and configured retry limits affect which retries actually occur."
      ],
      "origin": "original",
      "legacyIds": [
        38
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 38",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-38-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid retry schedule",
      "question": "How long does Event Grid wait for a push endpoint response?",
      "answers": [
        "30 seconds. If the endpoint has not responded, Event Grid queues a retry. A late successful response does not guarantee that a retry has been canceled, so duplicate deliveries remain possible. Accept the event quickly after safely handing off any longer work."
      ],
      "origin": "original",
      "legacyIds": [
        38
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 38",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-38-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid retry schedule",
      "question": "Which HTTP success codes acknowledge Event Grid push delivery?",
      "answers": [
        "HTTP 200, 201, 202, 203 and 204. Event Grid treats those responses as successful delivery; other status codes are failures handled according to the retry/dead-letter rules. Return success only after you have safely accepted the event, since Event Grid then considers its delivery complete."
      ],
      "origin": "original",
      "legacyIds": [
        38
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 38",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-39-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Which Azure-resource endpoint failures are not retried by Event Grid push delivery?",
      "answers": [
        "For Azure-resource destinations, HTTP 400 Bad Request, 403 Forbidden and 413 Payload Too Large are not retried. Event Grid dead-letters those events if configured, otherwise drops them. Fix the invalid request, permissions or event size; waiting for normal retries will not repair these failures."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-39-2-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Which webhook failures are not retried by Event Grid push delivery?",
      "answers": [
        "For webhook destinations, HTTP 400 Bad Request, 401 Unauthorized, 403 Forbidden and 413 Payload Too Large are not retried. With dead-lettering configured they can be preserved; otherwise they are dropped. The webhook list includes 401, which differs from the Azure-resource destination list."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-39-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Is an HTTP 404 response retried by Event Grid push delivery?",
      "answers": [
        "Yes. HTTP 404 Not Found is retryable under Event Grid push-delivery rules. For Azure-resource endpoints, the documented retry delay is at least five minutes. A retryable status does not mean retries continue forever: the event lifetime and maximum-attempt policy still apply."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-39-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "Which limits bound Event Grid delivery retries?",
      "answers": [
        "Maximum delivery attempts and event time to live (TTL). Attempts can be set from 1 to 30, default 30. TTL can be set from 1 to 1,440 minutes, default 1,440 minutes or 24 hours. Delivery stops when either limit is reached; configure dead-letter storage to preserve eligible undelivered events."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-39-5-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid permanent failures",
      "question": "What happens to failed Event Grid events when dead-lettering is disabled?",
      "answers": [
        "They are dropped when delivery stops, either after a non-retryable error or after the retry/time limits are reached. Dead-lettering is disabled by default. Enable it and give Event Grid access to the destination storage if those events must be recoverable."
      ],
      "origin": "original",
      "legacyIds": [
        39
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 39",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-40-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "How does Event Grid filter by event type?",
      "answers": [
        "Set includedEventTypes to the complete event-type names you want, such as Microsoft.Storage.BlobCreated. Only matching event types are delivered to that subscription. This filter matches the full type name rather than a substring."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid filters",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-40-2-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "What can an Event Grid subject filter match?",
      "answers": [
        "A prefix using subjectBeginsWith, a suffix using subjectEndsWith, or both. For example, select blob subjects under a particular container and ending in .jpg. These fields inspect the event's subject, not the blob's contents."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid filters",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-40-3-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "Which Event Grid filter can inspect fields inside event data?",
      "answers": [
        "An advanced filter. Supply the field path, an operator and the comparison value(s). For example, key data.order.total with operatorType NumberGreaterThan and value 100 selects events whose order total exceeds 100. Dot notation navigates properties inside the event’s data object."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid filters",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-40-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "How do you choose an Event Grid advanced-filter operator?",
      "answers": [
        "Match the operator to the field's data type. Examples include NumberGreaterThan for numeric comparisons, BoolEquals for booleans, StringIn or StringContains for strings, and IsNullOrUndefined for missing/null values. Some operators also have negative forms."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid filters",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-40-5-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid filtering",
      "question": "What must be enabled to use Event Grid advanced filters on arrays?",
      "answers": [
        "Set enableAdvancedFilteringOnArrays to true on the subscription filter. Then a supported advanced filter can test values inside an array-valued event field."
      ],
      "origin": "original",
      "legacyIds": [
        40
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 40",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid filters",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-41-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "What does completing a Service Bus message do?",
      "answers": [
        "It tells Service Bus that processing succeeded and removes the message from the queue or subscription. In PeekLock mode, receiving only locks the message; Complete removes it. Complete it after the business work succeeds, and make that work safe to repeat if the acknowledgment fails."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-41-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "What does abandoning a Service Bus message do?",
      "answers": [
        "It releases the processing lock and makes the message eligible for redelivery, with its delivery count increased. Use it when this attempt cannot finish but another attempt may succeed. It does not delete the message or guarantee a retry delay; the next receiver may get it immediately."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-41-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "How does Service Bus message deferral work?",
      "answers": [
        "Deferral leaves the message in the entity but sets it aside from normal receives. Save its SequenceNumber and later retrieve it through the deferred-message API. Deferring is not the same as abandoning and does not itself increase the delivery count. Your application is responsible for remembering and revisiting deferred work."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Defer a message",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-deferral",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-deferral"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-41-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "What does dead-lettering a Service Bus message do?",
      "answers": [
        "It moves the message into the queue or subscription's dead-letter subqueue, where normal consumers no longer receive it. Record a reason so someone can diagnose the failure. An application or operator must later inspect, fix, resubmit or remove it."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-41-5-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus settlement",
      "question": "When does a failed Service Bus PeekLock attempt increase DeliveryCount?",
      "answers": [
        "Abandoning a message or letting its lock expire normally increases DeliveryCount and allows redelivery. Some infrastructure-related lock losses do not increase it. The MessageLockLost exception alone does not tell you which case occurred."
      ],
      "origin": "original",
      "legacyIds": [
        41
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 41",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed the claim that every MessageLockLost exception leaves delivery count unchanged; ordinary lock expiry can produce that error and increase the count.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Clarified that normal expiry and infrastructure-related loss can both produce a lock-loss error, with different effects on the count."
      }
    },
    {
      "id": "m-42-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "What are Service Bus PeekLock's default and maximum lock durations?",
      "answers": [
        "The default entity lock duration is one minute, and a single lock period can be configured up to five minutes. A receiver can renew the lock to continue processing beyond that period. Renewal is not guaranteed forever: handle failures and make the work safe to repeat if the message is redelivered."
      ],
      "origin": "original",
      "legacyIds": [
        42
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-42-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "When does Service Bus automatically dead-letter a repeatedly delivered message?",
      "answers": [
        "When its delivery count exceeds the entity’s MaxDeliveryCount setting, which defaults to 10. Failed PeekLock deliveries followed by abandonment or lock expiry increase that count. Service Bus moves the message to the dead-letter queue with reason MaxDeliveryCountExceeded so it stops cycling through normal consumers."
      ],
      "origin": "original",
      "legacyIds": [
        42
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-42-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "How does Service Bus duplicate detection identify a duplicate message?",
      "answers": [
        "With duplicate detection enabled, Service Bus remembers MessageId values within a configured window and discards repeat sends with the same identity. The window defaults to ten minutes and supports 20 seconds to seven days. On partitioned entities, MessageId plus PartitionKey defines uniqueness. Enable the feature when creating the queue/topic; it does not prevent redelivery of an already accepted message after a consumer failure."
      ],
      "origin": "original",
      "legacyIds": [
        42
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 42",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Duplicate detection",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Added partition-key participation in duplicate identity and distinguished duplicate sends from consumer redelivery.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-42-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus numbers",
      "question": "How can Service Bus group related messages for ordered processing?",
      "answers": [
        "Enable sessions and put the same SessionId on related messages. One session receiver owns that group at a time and can process its messages in first-in, first-out order. Different sessions can run in parallel. The handler must preserve the order too, including during retries."
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
        },
        {
          "label": "Microsoft Learn · Ordered processing with sessions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Removed an absolute processing guarantee that also depends on the consumer preserving order."
      }
    },
    {
      "id": "m-43-1-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "Which Azure CLI commands create a custom Event Grid topic and its event subscription?",
      "answers": [
        "Assuming you are signed in with Azure CLI and resource group study exists, run in PowerShell:\naz provider register --namespace Microsoft.EventGrid\naz eventgrid topic create --name myuniquetopic --resource-group study --location norwayeast\n$topicId = az eventgrid topic show --name myuniquetopic --resource-group study --query id -o tsv\naz eventgrid event-subscription create --name handle-events --source-resource-id $topicId --endpoint https://example.com/events\nReplace the names and URL. The topic receives your app’s events; the subscription routes them to a real handler that must pass endpoint validation. Publishing also needs the topic endpoint and an authorized credential."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Create a custom topic",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Event Grid schema validation",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart",
          "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "The commands create routing resources; the original question misleadingly implied that they also publish an event."
      }
    },
    {
      "id": "m-43-2-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "How do Event Grid custom, system and partner topics differ?",
      "answers": [
        "A custom topic receives events from your application. A system topic represents events from an Azure resource, such as a Storage account. A partner topic receives events from an integrated partner service. In each case, an event subscription controls which events go to which destination."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid capabilities",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-43-4-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "What does Event Grid webhook subscription validation prove?",
      "answers": [
        "It proves the endpoint agrees to receive Event Grid notifications. With Event Grid schema, the endpoint returns the supplied validation code or completes the supported validation-URL flow within ten minutes. CloudEvents uses an HTTP OPTIONS handshake instead. The Functions Event Grid trigger handles the handshake, but validation does not replace authentication for later event deliveries."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid schema validation",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · CloudEvents webhook validation",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-cloud-events-schema",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Distinguished the Event Grid schema validation-code flow from the CloudEvents OPTIONS handshake; the original implied one flow applied universally.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema",
          "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-cloud-events-schema"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-43-5-1",
      "domain": 3,
      "category": "event-grid",
      "title": "Event Grid topics and setup",
      "question": "How do Event Grid delivery retries and dead-lettering differ?",
      "answers": [
        "Retrying means attempting delivery to the subscriber again while the retry policy allows it. Dead-lettering means saving an undeliverable event to Blob Storage after delivery is abandoned. Dead-lettering must be configured and the storage must be writable; your own recovery process then handles those saved events."
      ],
      "origin": "original",
      "legacyIds": [
        43
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 43",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Event Grid schema validation",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-event-grid-events-schema"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Replaced an artificial comparison between validation and recovery with a useful distinction between retrying delivery and preserving failed events."
      }
    },
    {
      "id": "m-44-1-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "How are messages shared among consumers of a Service Bus queue?",
      "answers": [
        "They compete for the queue's messages. Each locked message is assigned to one receiver at a time, sharing the workload among consumers. A failed message can be delivered again. Use sessions if related messages must be processed in order."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Ordered processing with sessions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Removed the unconditional FIFO claim for a plain queue with competing consumers.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-44-2-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "Which Service Bus entities give independent consumers their own copies?",
      "answers": [
        "A topic with a separate subscription for each independent consumer. For example, billing and shipping subscriptions each receive a copy of matching order messages. Several workers reading the same subscription compete for its messages, just as workers on one queue do."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Subscription filter examples",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-44-3-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "What do Service Bus subscription rules filter?",
      "answers": [
        "They select which messages enter a topic subscription by inspecting supported message properties. A SQL filter evaluates an expression; a correlation filter matches property values; a true filter accepts everything. They do not execute arbitrary code over the body. Remove the default accept-all rule when adding a restrictive rule that should actually limit delivery."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Subscription filter examples",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-44-4-1",
      "domain": 3,
      "category": "service-bus",
      "title": "Service Bus queues vs topics",
      "question": "Where are Service Bus dead-letter queues created?",
      "answers": [
        "Each queue and topic subscription has an automatically provided dead-letter subqueue. You do not create it as a separate top-level queue. Receive from that subqueue to inspect failed messages, then deliberately complete, repair or resubmit them. There is no automatic cleanup just because their original lifetime expires."
      ],
      "origin": "original",
      "legacyIds": [
        44
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 44",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-46-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "What happens after Queue Storage-triggered processing repeatedly fails?",
      "answers": [
        "By default, Functions attempts a Queue Storage message five times in total, including the initial attempt. If processing keeps failing, it copies the message to a queue named <original-queue-name>-poison. Configure maxDequeueCount in host.json to change that limit, and monitor the poison queue so failed work is not forgotten."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Queue Storage trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Queue binding settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-46-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "What schedule format does an Azure Functions Timer trigger use?",
      "answers": [
        "An NCRONTAB expression, normally with six fields: second, minute, hour, day, month and day of week. For example, 0 */5 * * * * runs at second zero every five minutes. Schedules use UTC by default; supported time-zone settings can change that."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Timer trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-46-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "How do polling and Event Grid-based Blob triggers differ?",
      "answers": [
        "The polling Blob trigger periodically checks storage for changes, so discovery can be delayed. The Event Grid-based Blob trigger is notified when a blob changes and usually starts sooner. Both can deliver work more than once, so the handler should be safe to repeat."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Blob trigger modes",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-46-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Functions triggers and retries",
      "question": "What does an Azure Functions Cosmos DB trigger use to track progress?",
      "answers": [
        "A lease container. It stores which worker owns each part of the change feed and how far processing has progressed. The Functions host uses those records to share the work among instances and resume after a restart."
      ],
      "origin": "original",
      "legacyIds": [
        46
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 46",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB Functions trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Change feed modes",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-47-1-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "How do Anonymous, Function and Admin HTTP authorization levels differ?",
      "answers": [
        "Anonymous requires no Functions access key. Function accepts a key for that function or a host key. Admin requires the host's master key. Supply a required key in the x-functions-key header or code query parameter. These are shared keys, so they do not identify the individual person calling the endpoint."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · HTTP trigger and authorization",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-47-3-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "Are Function keys enforced by the local Functions host?",
      "answers": [
        "Normally, no: a function run directly through local Core Tools does not enforce the trigger’s authLevel. Azure enforces it after deployment. There is an exception for running locally in a container, where keys are still required. A successful keyless local test therefore does not prove that the deployed endpoint allows anonymous access."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · HTTP trigger and authorization",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Added the documented local-container exception to the blanket claim that local authorization is never enforced.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-47-4-1",
      "domain": 3,
      "category": "functions",
      "title": "HttpTrigger attribute",
      "question": "How does an HTTP trigger's methods list restrict accepted requests?",
      "answers": [
        "It lists the HTTP methods allowed to invoke the function. For example, methods=[\"POST\"] accepts POST requests but rejects GET requests for that route. If the list is omitted, all supported methods are allowed. Callers still need to satisfy the function's separate authorization rules."
      ],
      "origin": "original",
      "legacyIds": [
        47
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 47",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · HTTP trigger and authorization",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-48-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger supports a synchronous client response?",
      "answers": [
        "An HTTP trigger. It receives an HTTP request and can return the result in the response to that same request, as a normal web API does. Keep the work short enough to finish within the request and function time limits."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · HTTP trigger and authorization",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-48-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger handles background Storage queue messages?",
      "answers": [
        "A Queue Storage trigger. It invokes the function when a message is available in the configured Azure Storage queue and supplies the message to the handler. Successful processing removes the message; failures can cause retries. Design the handler so receiving the same message again does not duplicate business actions."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Queue Storage trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-48-2-2",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger runs on a fixed schedule?",
      "answers": [
        "A Timer trigger. Configure its schedule, for example 0 0 * * * * to run at the start of each hour. The Functions runtime starts the handler according to that schedule; a caller does not need to send an HTTP request each time."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Timer trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-48-2-3",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger reacts to Cosmos DB document changes?",
      "answers": [
        "A Cosmos DB trigger. It reads the configured container’s change feed and passes a batch of changed documents to the function. A lease container tracks progress. In the usual latest-version mode, it handles item creations and updates, without delivering delete records."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB Functions trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Change feed modes",
          "url": "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "https://learn.microsoft.com/en-us/azure/cosmos-db/change-feed-modes"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-48-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "Which Functions trigger reacts to pushed BlobCreated events without polling?",
      "answers": [
        "An Event Grid trigger can receive Microsoft.Storage.BlobCreated notifications and start the function when a blob is created. The notification describes the event; use the event’s blob URL or an appropriate binding/client to read its contents. An Event Grid-based Blob trigger is another option when the handler should receive the blob itself."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Blob trigger modes",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-48-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "What limits the synchronous response time of an HTTP-triggered function?",
      "answers": [
        "Azure documents a 230-second maximum for returning an HTTP response through the platform load balancer, regardless of a longer functionTimeout. An earlier function timeout or another proxy/client timeout can stop the request sooner. Use background work or Durable Functions for operations that may take longer; increasing functionTimeout alone does not solve the HTTP limit."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-48-5-1",
      "domain": 3,
      "category": "functions",
      "title": "Choosing a Functions trigger",
      "question": "How should slow HTTP-request work be moved into background processing?",
      "answers": [
        "Have the HTTP function save a job or queue message, then return HTTP 202 Accepted with a job ID or status URL. A background worker performs the slow work and records the result. The caller checks that status separately instead of keeping the original request open."
      ],
      "origin": "original",
      "legacyIds": [
        48
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 48",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · HTTP trigger and authorization",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Queue Storage trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-49-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "How many triggers can an Azure Function have?",
      "answers": [
        "Exactly one trigger. It defines what starts that individual function, such as an HTTP request, a queue message or a timer. A function app can contain many functions, each with its own trigger. Additional input and output bindings do not count as additional triggers."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-49-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "Which Azure Functions binding reads a blob into the handler without Storage SDK code?",
      "answers": [
        "A Blob input binding. It reads the configured blob and supplies its contents to the function handler. The handler does not need to create a Storage SDK client, but the binding still needs a blob path and a connection or identity with read permission."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Blob trigger modes",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-49-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "Can an Azure Function have multiple optional bindings?",
      "answers": [
        "Yes. A function has exactly one trigger and may also have several input and output bindings. For example, an HTTP-triggered function could read a blob through an input binding and write a queue message through an output binding."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-49-5-1",
      "domain": 3,
      "category": "functions",
      "title": "Triggers and bindings",
      "question": "Which trigger/input/output binding combinations are supported by common Functions services?",
      "answers": [
        "Common combinations are:\nTimer: trigger only.\nQueue Storage: trigger and output.\nHTTP: trigger and response output.\nBlob Storage and Cosmos DB: trigger, input and output.\nThe exact types available also depend on the language and installed binding extension."
      ],
      "origin": "original",
      "legacyIds": [
        49
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 49",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Triggers and bindings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-51-1-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "In what order can you deploy a Function App that uses Key Vault references?",
      "answers": [
        "One workable order is: create the function app and its host storage; enable its managed identity; give that identity permission to read the required Key Vault secrets; add app settings containing Key Vault references; then deploy and test the code. The identity, permissions and network access must be ready before secret resolution succeeds."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Function host storage",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/storage-considerations",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/storage-considerations",
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-51-2-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "What role does AzureWebJobsStorage play in a Function App?",
      "answers": [
        "It tells the Functions host how to access its own Azure Storage account. The runtime uses that storage for coordination, including locks and checkpoints. It can be configured with a connection string or supported identity-based settings. It is separate from the business database your function code may use."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Function host storage",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/storage-considerations",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/storage-considerations"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-51-3-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "Why must identity permissions be configured before Key Vault references can resolve?",
      "answers": [
        "A Key Vault reference tells the platform which secret to retrieve; it does not grant permission to retrieve it. The selected managed identity must already have secret-read access, and the vault must be reachable. Without those, the setting cannot resolve to the secret value even if the reference syntax is correct."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-51-4-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "How can GitHub Actions deploy both Bicep infrastructure and Function code?",
      "answers": [
        "Put both deployment steps in a workflow under .github/workflows/. First use azure/login with OpenID Connect to authenticate to Azure. Run Azure/bicep-deploy to create or update the infrastructure, then Azure/functions-action to deploy the built function package to the resulting app. Only run the code deployment after the infrastructure step succeeds."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Deploy Functions with GitHub Actions",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions",
          "kind": "primary"
        },
        {
          "label": "Azure · Bicep deployment action",
          "url": "https://github.com/Azure/bicep-deploy",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions",
          "https://github.com/Azure/bicep-deploy"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-51-5-1",
      "domain": 3,
      "category": "functions",
      "title": "Secure function deployment",
      "question": "Why does Core Tools publishing not replace infrastructure-as-code deployment?",
      "answers": [
        "Core Tools publishing deploys code to a function app. Infrastructure as code, such as Bicep, also describes the resources the app needs: storage, identities, permissions, networking and app settings. Use infrastructure deployment to prepare a consistent environment, then publish the code into it."
      ],
      "origin": "original",
      "legacyIds": [
        51
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 51",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Deploy Functions with GitHub Actions",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Local function settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-sb-002",
      "domain": 3,
      "title": "Receive modes",
      "category": "service-bus",
      "question": "How does Service Bus PeekLock differ from ReceiveAndDelete?",
      "answers": [
        "PeekLock temporarily locks the message but keeps it in Service Bus until you complete or otherwise settle it. A failed attempt can be redelivered. ReceiveAndDelete removes it as part of receipt, so a crash before processing finishes can lose the work. Choose based on whether retries and explicit acknowledgment are required."
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
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-sb-007",
      "domain": 3,
      "title": "Scheduled message",
      "category": "service-bus",
      "question": "How is a Service Bus message scheduled for future availability?",
      "answers": [
        "Ask the Service Bus SDK to schedule the message for a future UTC time. The broker keeps it unavailable until that time, then makes it available to consumers. Scheduling does not guarantee that processing begins at that exact moment."
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
        },
        {
          "label": "Microsoft Learn · Scheduled messages",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sequencing",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-29",
        "status": "clarified",
        "note": "Kept the relevant messaging concept and removed unnecessary .NET-only names from the explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sequencing"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-sb-005",
      "domain": 3,
      "title": "Topics service tier",
      "category": "service-bus",
      "question": "Which Service Bus tiers support topics and subscriptions?",
      "answers": [
        "Standard and Premium. Basic supports queues but does not support topics and subscriptions."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-005",
          "url": "https://ai200prep.com/questions/p-sb-005/"
        },
        {
          "label": "Microsoft Learn · Queues, topics and subscriptions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-sb-006",
      "domain": 3,
      "title": "Transactional outbox",
      "category": "service-bus",
      "question": "How does a transactional outbox coordinate a database update with message publication?",
      "answers": [
        "Write the business change and an “event to publish” record in the same database transaction. A separate relay reads that outbox and sends the event to Service Bus, retrying as needed. This avoids committing the business change while forgetting its event. The relay may send twice, so use stable IDs and duplicate-safe consumers; it is not one transaction across the database and broker."
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
        },
        {
          "label": "Microsoft Learn · Transactional outbox",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/databases/guide/transactional-out-box-cosmos",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/databases/guide/transactional-out-box-cosmos"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-sb-010",
      "domain": 3,
      "title": "Inspect without consuming",
      "category": "service-bus",
      "question": "Which Service Bus operation inspects a message without receiving and settling it?",
      "answers": [
        "Peek. It inspects stored messages without locking or removing them. It is useful for diagnostics but does not reserve a message for your worker; another receiver may process it. Use a normal receive operation when you need to own and settle work."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-010",
          "url": "https://ai200prep.com/questions/sb-010/"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-sb-009",
      "domain": 3,
      "title": "Message receiver permission",
      "category": "service-bus",
      "question": "Which Service Bus data role permits receiving and settling but not sending?",
      "answers": [
        "Azure Service Bus Data Receiver. Assign it at the narrowest appropriate namespace/entity scope to let an identity receive and settle messages. It does not grant send permission. Authenticate with Microsoft Entra ID, then let the data role determine the permitted operations."
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
        },
        {
          "label": "Microsoft Learn · Service Bus identity and permissions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-authentication-and-authorization",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-authentication-and-authorization"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-rbac-024",
      "domain": 3,
      "title": "Message sender permission",
      "category": "service-bus",
      "question": "Which Service Bus data role permits sending without receiving?",
      "answers": [
        "Azure Service Bus Data Sender. It permits publishing messages at the assigned scope without granting receive permission. Use a managed identity or another Microsoft Entra principal and assign the role to the queue/topic or suitable parent scope."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-024",
          "url": "https://ai200prep.com/questions/p-rbac-024/"
        },
        {
          "label": "Microsoft Learn · Service Bus identity and permissions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-authentication-and-authorization",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-authentication-and-authorization"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-sb-017",
      "domain": 3,
      "title": "Message payload",
      "category": "service-bus",
      "question": "Where is a binary Service Bus payload stored?",
      "answers": [
        "In the message body. Serialize the payload into a format both sender and receiver understand, such as JSON encoded as bytes. Keep routing and other metadata in application properties. Service Bus does not interpret your application’s body format."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-017",
          "url": "https://ai200prep.com/questions/sb-017/"
        },
        {
          "label": "Microsoft Learn · Message bodies and properties",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messages-payloads",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-29",
        "status": "clarified",
        "note": "Kept the relevant messaging concept and removed unnecessary .NET-only names from the explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messages-payloads"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-sb-018",
      "domain": 3,
      "title": "Message expiration",
      "category": "service-bus",
      "question": "What happens when a Service Bus message expires with dead-lettering on expiration enabled?",
      "answers": [
        "For ordinary active messages, Service Bus moves the expired message to the dead-letter queue with reason TTLExpiredException. It cannot be processed through normal delivery afterward. Deferred messages are an exception: expiration does not automatically sweep them into the dead-letter queue. Monitor the dead-letter queue and handle deferred work explicitly."
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
        },
        {
          "label": "Microsoft Learn · Service Bus dead-letter queues",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dead-letter-queues"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-sb-014",
      "domain": 3,
      "title": "Long-running message",
      "category": "service-bus",
      "question": "How can a Service Bus handler keep a PeekLock during long processing?",
      "answers": [
        "Renew the lock before it expires. You can renew it explicitly or configure the processor's automatic lock renewal for the expected processing time. Renewals can fail, so handle lost locks and make repeated processing safe."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-014",
          "url": "https://ai200prep.com/questions/p-sb-014/"
        },
        {
          "label": "Microsoft Learn · Service Bus locks and settlement",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · .NET ServiceBusProcessor",
          "url": "https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor?view=azure-dotnet",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement",
          "https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebusprocessor?view=azure-dotnet"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-sb-017",
      "domain": 3,
      "title": "Functions broker identity",
      "category": "service-bus",
      "question": "How can a Service Bus Functions binding connect without a shared-access connection string?",
      "answers": [
        "Use the binding’s identity-based connection settings, including <connectionName>__fullyQualifiedNamespace with a value such as mynamespace.servicebus.windows.net. Give the function app’s managed identity the required Service Bus data role, commonly Data Receiver for a trigger. The binding obtains tokens instead of reading a shared-access connection string."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-017",
          "url": "https://ai200prep.com/questions/p-sb-017/"
        },
        {
          "label": "Microsoft Learn · Service Bus binding settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Service Bus identity and permissions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-authentication-and-authorization",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-authentication-and-authorization"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-sb-018",
      "domain": 3,
      "title": "Large message payload",
      "category": "service-bus",
      "question": "What does the claim-check messaging pattern put in the broker message?",
      "answers": [
        "A reference to the payload. Store the large content in durable storage, such as Blob Storage, and send its identifier or URL in the message. The receiver fetches the content using that reference. Keep it accessible until the message no longer needs it."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-018",
          "url": "https://ai200prep.com/questions/p-sb-018/"
        },
        {
          "label": "Microsoft Learn · Claim-check pattern",
          "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-sb-019",
      "domain": 3,
      "title": "Consumer backlog",
      "category": "service-bus",
      "question": "Which Service Bus metric helps identify a growing backlog of unprocessed work?",
      "answers": [
        "ActiveMessages, often called active queue depth. If it keeps rising, pending work is accumulating faster than consumers clear it. Compare it with message rates, processing time and errors to understand why."
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
        },
        {
          "label": "Microsoft Learn · Service Bus monitoring",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/monitor-service-bus-reference",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/monitor-service-bus-reference"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-sb-020",
      "domain": 3,
      "title": "Correlation filter",
      "category": "service-bus",
      "question": "How does a Service Bus correlation filter differ from a SQL subscription filter?",
      "answers": [
        "A correlation filter directly matches specified property values, such as CorrelationId or an application property. A SQL filter evaluates an expression, such as priority > 5 AND region = 'NO'. Correlation filters suit simple exact matches and generally cost less broker processing. Neither parses arbitrary message-body content."
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
        },
        {
          "label": "Microsoft Learn · Subscription filter examples",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-sb-021",
      "domain": 3,
      "title": "Idle entity cleanup",
      "category": "service-bus",
      "question": "What does Service Bus AutoDeleteOnIdle configure?",
      "answers": [
        "Automatic deletion of a supported queue, topic or subscription after its configured period of inactivity. The minimum interval is five minutes. Service Bus defines activity differently for different entity types, so do not assume it means only time since the last send. It is useful for deliberately temporary messaging entities."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-021",
          "url": "https://ai200prep.com/questions/p-sb-021/"
        },
        {
          "label": "Microsoft Learn · .NET AutoDeleteOnIdle",
          "url": "https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.administration.createqueueoptions.autodeleteonidle?view=azure-dotnet",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.administration.createqueueoptions.autodeleteonidle?view=azure-dotnet"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-sb-030",
      "domain": 3,
      "title": "Subscription rule action",
      "category": "service-bus",
      "question": "What can a Service Bus subscription rule action modify?",
      "answers": [
        "A SQL rule action can set, remove or change supported message properties on the copy delivered through that rule. It cannot run arbitrary application code or rewrite the binary body. Filters choose matching messages; actions adjust their properties for that subscription."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · sb-030",
          "url": "https://ai200prep.com/questions/sb-030/"
        },
        {
          "label": "Microsoft Learn · Subscription filter examples",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-filter-examples"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-sb-028",
      "domain": 3,
      "title": "Broker request/reply",
      "category": "service-bus",
      "question": "Which Service Bus properties coordinate a request/reply exchange?",
      "answers": [
        "ReplyTo tells the recipient which queue/topic should receive the reply. CorrelationId lets the requester associate the response with its original request, commonly by copying the request’s MessageId into the reply’s CorrelationId. These properties are conventions the applications must honor; setting them does not automatically generate or route an application reply."
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
        },
        {
          "label": "Microsoft Learn · Message bodies and properties",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messages-payloads",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Ordered processing with sessions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messages-payloads",
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sessions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-sb-025",
      "domain": 3,
      "title": "Broker transaction scope",
      "category": "service-bus",
      "question": "What can a Service Bus broker transaction combine?",
      "answers": [
        "Supported sends and message-settlement operations within Service Bus. For example, completing an input message and sending a follow-up can commit together: both happen or neither does. The tier, SDK and cross-entity settings must support the combination. Updating an external database requires a separate coordination pattern, such as a transactional outbox."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-sb-025",
          "url": "https://ai200prep.com/questions/p-sb-025/"
        },
        {
          "label": "Microsoft Learn · Service Bus transactions",
          "url": "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-transactions",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-transactions"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-eg-001",
      "domain": 3,
      "title": "Event notifications",
      "category": "event-grid",
      "question": "What distinguishes Event Grid's event-routing role from a work queue?",
      "answers": [
        "Event Grid notifies subscribers that something happened, such as a blob being created. A work queue such as Service Bus holds work for consumers and offers controls such as message locks and explicit completion. Use the required processing behavior to choose between event notification and queued work."
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
        },
        {
          "label": "Microsoft Learn · Event Grid capabilities",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-eg-004",
      "domain": 3,
      "title": "Event delivery semantics",
      "category": "event-grid",
      "question": "Why must Event Grid push handlers tolerate duplicate deliveries?",
      "answers": [
        "Event Grid can retry when it does not receive a successful response, even if the handler already processed the event. Make processing idempotent: repeating the event must not repeat its business effect. For example, use a durable event or operation ID to recognize work already completed."
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
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-eg-006",
      "domain": 3,
      "title": "Dead-letter storage",
      "category": "event-grid",
      "question": "What is needed to preserve undeliverable Event Grid push events in Blob Storage?",
      "answers": [
        "Set a Blob Storage container as the event subscription's dead-letter destination. Grant the configured delivery identity or service permission to write there, and allow the connection through network rules. Then monitor those blobs and reprocess failed events after fixing the cause."
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
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-eg-010",
      "domain": 3,
      "title": "Interoperable event schema",
      "category": "event-grid",
      "question": "Which interoperable event schema is supported by Event Grid?",
      "answers": [
        "CloudEvents 1.0. It defines common event metadata, including id, source, type and time, so different systems can exchange events consistently. Event Grid also supports its own schema; configure the publisher and handler to use a compatible schema."
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
        },
        {
          "label": "Microsoft Learn · CloudEvents schema",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/cloud-event-schema",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · CloudEvents webhook validation",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-cloud-events-schema",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/cloud-event-schema",
          "https://learn.microsoft.com/en-us/azure/event-grid/end-point-validation-cloud-events-schema"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-eg-011",
      "domain": 3,
      "title": "Event publisher permission",
      "category": "event-grid",
      "question": "Which identity-based role allows an application to publish Event Grid events?",
      "answers": [
        "EventGrid Data Sender. Assign it to the publishing identity at the topic or another appropriate scope, then publish using a Microsoft Entra token. A management role that creates resources is not automatically the same as permission to send event data."
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
        },
        {
          "label": "Microsoft Learn · Publish using Microsoft Entra ID",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/authenticate-with-microsoft-entra-id",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/authenticate-with-microsoft-entra-id"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-eg-013",
      "domain": 3,
      "title": "Blob creation event",
      "category": "event-grid",
      "question": "Which Azure Storage event type represents creation of a blob?",
      "answers": [
        "Microsoft.Storage.BlobCreated. It reports an applicable blob creation or replacement. The event includes the blob's URL and metadata, so the handler can locate it; it does not include the complete blob contents."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · eg-013",
          "url": "https://ai200prep.com/questions/eg-013/"
        },
        {
          "label": "Microsoft Learn · Blob Storage events",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-eg-014",
      "domain": 3,
      "title": "Event deduplication key",
      "category": "event-grid",
      "question": "Which Event Grid event field is commonly used as a deduplication identifier?",
      "answers": [
        "The event's id, scoped to its source or topic. Store processed IDs durably, and coordinate recording the ID with the business action so concurrent retries cannot both apply it. A stable business-operation ID can be better if several events represent the same action."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-014",
          "url": "https://ai200prep.com/questions/p-eg-014/"
        },
        {
          "label": "Microsoft Learn · CloudEvents schema",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/cloud-event-schema",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/cloud-event-schema",
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-eg-016",
      "domain": 3,
      "title": "Batched event delivery",
      "category": "event-grid",
      "question": "What changes when batched Event Grid push delivery is enabled?",
      "answers": [
        "One delivery request can contain several events instead of the usual one-event array. The handler must process the whole batch. Its successful HTTP response acknowledges the request as a whole; it cannot acknowledge individual events separately within that response."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-016",
          "url": "https://ai200prep.com/questions/p-eg-016/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-eg-024",
      "domain": 3,
      "title": "Event ordering",
      "category": "event-grid",
      "question": "Does Event Grid push delivery guarantee event order?",
      "answers": [
        "No. A retry can make an older event arrive after a newer one. If order matters, include source versions or sequence information and check it before updating state, so an old event cannot overwrite a newer result."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-eg-024",
          "url": "https://ai200prep.com/questions/p-eg-024/"
        },
        {
          "label": "Microsoft Learn · Event Grid delivery and retries",
          "url": "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/event-grid/delivery-and-retry"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-func-001",
      "domain": 3,
      "title": "Classic Consumption",
      "category": "functions",
      "question": "How is classic Azure Functions Consumption compute charged for an idle application?",
      "answers": [
        "Classic Consumption can scale to zero instances when idle, so there is no continuously reserved app-compute charge. Compute is billed for executions and resource use under the plan's rules. Supporting resources, such as storage, can still cost money while no function is running."
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
        },
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-fn-002",
      "domain": 3,
      "title": "Warm Functions instances",
      "category": "functions",
      "question": "What does Functions Elastic Premium provide for cold-start-sensitive workloads?",
      "answers": [
        "Always-ready and prewarmed instances, so requests are less likely to wait for a new instance to start. Elastic Premium also supports virtual network integration. You pay for a minimum amount of provisioned capacity, even during idle periods."
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
        },
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-func-003",
      "domain": 3,
      "title": "Classic Consumption timeout",
      "category": "functions",
      "question": "What is the default and maximum functionTimeout on classic Functions Consumption?",
      "answers": [
        "On classic Consumption, functionTimeout defaults to five minutes and can be increased to ten minutes. Set it in host.json. These are execution limits for that plan; HTTP responses also face the separate 230-second platform limit. Flex Consumption, Premium and Dedicated have different timeout rules."
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
        },
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · host.json",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-host-json"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-func-007",
      "domain": 3,
      "title": "Cosmos trigger batches",
      "category": "functions",
      "question": "Does a Cosmos DB-triggered function normally run once per document or once per delivered batch?",
      "answers": [
        "Once per batch delivered by the trigger, which may contain one or many changed documents. The handler must iterate through the documents or otherwise process the whole batch. Batch size and retry/checkpoint behavior depend on the extension configuration; do not assume one invocation corresponds to exactly one source write."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · func-007",
          "url": "https://ai200prep.com/questions/func-007/"
        },
        {
          "label": "Microsoft Learn · Cosmos DB Functions trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-fn-011",
      "domain": 3,
      "title": "Functions message concurrency",
      "category": "functions",
      "question": "Where is Service Bus trigger callback concurrency configured for a Functions host?",
      "answers": [
        "In host.json, under extensions.serviceBus. For example, maxConcurrentCalls controls concurrent single-message callbacks when fixed concurrency is used for a non-session trigger. Choose the setting for your extension and trigger type: sessions, batches and dynamic concurrency use different rules. Extra cores and scaled-out host instances can increase the total concurrency."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-011",
          "url": "https://ai200prep.com/questions/p-fn-011/"
        },
        {
          "label": "Microsoft Learn · Service Bus binding settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-fn-021",
      "domain": 3,
      "title": "Timer coordination",
      "category": "functions",
      "question": "How does a scaled-out Functions app coordinate a Timer trigger so only one instance runs a scheduled occurrence?",
      "answers": [
        "It uses a lock in the app's host storage. Only the instance holding that lock runs the timer occurrence, even when the function app has several instances. The app therefore needs working host-storage configuration. Another scheduled occurrence normally waits if the previous timer invocation is still running."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-021",
          "url": "https://ai200prep.com/questions/p-fn-021/"
        },
        {
          "label": "Microsoft Learn · Timer trigger",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Function host storage",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/storage-considerations",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer",
          "https://learn.microsoft.com/en-us/azure/azure-functions/storage-considerations"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-fn-022",
      "domain": 3,
      "title": "Package deployment",
      "category": "functions",
      "question": "How does run-from-package deployment keep a Function App release consistent?",
      "answers": [
        "It makes the app execute one deployed package containing the release. The app therefore does not see a mixture of old and new files while a deployment updates them individually. The mounted wwwroot directory is normally read-only, so write runtime data elsewhere."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-022",
          "url": "https://ai200prep.com/questions/p-fn-022/"
        },
        {
          "label": "Microsoft Learn · Run from package",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/deployment-zip-push",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/deployment-zip-push"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-fn-025",
      "domain": 3,
      "title": "Flex Consumption",
      "category": "functions",
      "question": "What does Flex Consumption add while retaining a consumption-based scaling model?",
      "answers": [
        "Virtual network integration, a choice of instance memory sizes, improved event-driven scaling and optional always-ready instances. The app still scales with demand. Choosing always-ready capacity adds an idle baseline cost in exchange for reduced startup delay."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-fn-025",
          "url": "https://ai200prep.com/questions/p-fn-025/"
        },
        {
          "label": "Microsoft Learn · Hosting and execution limits",
          "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-entra",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Microsoft Entra ID",
      "title": "Microsoft Entra ID",
      "question": "What is Microsoft Entra ID?",
      "answers": [
        "Microsoft's cloud identity service. It manages users and application identities, authenticates sign-ins and issues access tokens for protected services. It was formerly called Azure Active Directory. The signed-in identity still needs permission to use the target resource."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Microsoft Entra ID",
          "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-tenant",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Tenant",
      "title": "Tenant",
      "question": "What is a Microsoft Entra tenant?",
      "answers": [
        "An organization’s identity directory and administrative boundary in Microsoft Entra ID. It contains users, groups and application identities. One tenant can be associated with multiple Azure subscriptions; a tenant is not the same as a billing subscription or resource group."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Microsoft Entra ID",
          "url": "https://learn.microsoft.com/en-us/entra/fundamentals/whatis",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/fundamentals/whatis"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-identity",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Security identity",
      "title": "Security identity",
      "question": "What is an identity in Azure security?",
      "answers": [
        "An object representing who gets access, such as a user, group or application. For example, a function app can use its managed identity when requesting a Key Vault secret. Roles and policies determine what that identity is allowed to do."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Managed identity lifecycle",
          "url": "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-authentication",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Authentication",
      "title": "Authentication",
      "question": "What does authentication mean?",
      "answers": [
        "Verifying who or what is making a request, such as validating a user’s sign-in or an application’s token. It establishes identity. It does not by itself grant permission to read a secret, send a message or change a resource."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Authentication and authorization",
          "url": "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-authorization",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Authorization",
      "title": "Authorization",
      "question": "What does authorization mean?",
      "answers": [
        "Deciding whether an identified caller may perform the requested action on a resource. For example, a managed identity can authenticate successfully but be denied a secret read because it lacks Secrets User permission. Authentication establishes identity; authorization checks allowed actions."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Authentication and authorization",
          "url": "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization",
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-managed-identity",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Managed identity",
      "title": "Managed identity",
      "question": "What is a managed identity in Azure?",
      "answers": [
        "An application identity with credentials managed by Azure. A supported app uses it to obtain Microsoft Entra tokens without keeping a client password in its code or settings. Give the identity the permissions required by the services it calls."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Managed identity lifecycle",
          "url": "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-rbac",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "RBAC",
      "title": "RBAC",
      "question": "What does RBAC stand for?",
      "answers": [
        "Role-Based Access Control. Permissions are grouped into roles, and a role is assigned to an identity at a scope. For example, assigning Key Vault Secrets User on one vault allows the supported secret reads there without granting the same access across the subscription."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-abac",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "ABAC",
      "title": "ABAC",
      "question": "What does ABAC stand for?",
      "answers": [
        "Attribute-Based Access Control. Access can be restricted using attributes of the caller, resource or request. In supported Azure role assignments, a condition narrows the permission already granted by the role and scope, such as allowing access only to matching tagged blobs."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Attribute conditions",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-scope",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "RBAC scope",
      "title": "RBAC scope",
      "question": "What is the scope of an Azure role assignment?",
      "answers": [
        "The boundary where the assigned permissions apply, such as one resource, a resource group or a subscription. Broader scopes can cover child resources. Giving an app access to one vault is narrower than granting the same role across the whole subscription."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-role-assignment",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Role assignment",
      "title": "Role assignment",
      "question": "What is an Azure role assignment?",
      "answers": [
        "A link giving an identity a role at a particular scope. For example, assign the orders app identity the Key Vault Secrets User role on the production vault. The assignment connects who gets access, what they can do and where it applies."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-oidc",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "OIDC",
      "title": "OIDC",
      "question": "What does OIDC stand for?",
      "answers": [
        "OpenID Connect. An identity layer built on OAuth 2.0 that lets an application use sign-in information from a trusted identity provider. For example, a web app can sign users in through Microsoft Entra ID instead of managing its own user passwords."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Workload identity federation",
          "url": "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Workload identity",
          "url": "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation",
          "https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-key-vault",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Key Vault",
      "title": "Key Vault",
      "question": "What is Azure Key Vault?",
      "answers": [
        "A managed service for storing and controlling access to secrets, cryptographic keys and certificates. For example, an application can read its API credential from Key Vault instead of including it in source code or a container image."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-secret",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Key Vault secret",
      "title": "Key Vault secret",
      "question": "What is a secret in Key Vault?",
      "answers": [
        "A sensitive value, such as a password, API token or connection credential, stored for authorized applications to retrieve. Key Vault keeps versions of the value. An API key is usually stored as a secret; a Key Vault key is for cryptographic operations."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-certificate",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Digital certificate",
      "title": "Digital certificate",
      "question": "What is a digital certificate?",
      "answers": [
        "A signed record connecting a public key to an identity, such as a server hostname. During HTTPS, the client checks that the certificate is valid for the server and comes from a trusted issuer. This helps it verify which server it reached."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Certificate objects",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/certificates/about-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/certificates/about-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-tls",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "TLS",
      "title": "TLS",
      "question": "What does TLS stand for?",
      "answers": [
        "Transport Layer Security. It encrypts network communication and checks that data has not been altered in transit. Certificate validation can also verify the server's identity. HTTPS is HTTP protected by TLS."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Managed Redis TLS and ports",
          "url": "https://learn.microsoft.com/en-us/azure/redis/tls-configuration",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · PostgreSQL TLS",
          "url": "https://learn.microsoft.com/en-us/azure/postgresql/security/security-tls",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/redis/tls-configuration",
          "https://learn.microsoft.com/en-us/azure/postgresql/security/security-tls"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-key-vault-reference",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Key Vault reference",
      "title": "Key Vault reference",
      "question": "What is a Key Vault reference?",
      "answers": [
        "A pointer identifying a secret in Key Vault instead of copying its sensitive value into ordinary configuration. A supported platform or application provider resolves it using an authorized identity. Different reference mechanisms have different syntax and refresh behavior."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Resolve Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-rotation",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Credential rotation",
      "title": "Credential rotation",
      "question": "What does rotating a credential mean?",
      "answers": [
        "Replacing a password, token or key with a new usable credential and updating its consumers. The target service and clients must agree on the replacement. Creating a new value only in Key Vault does not change the external service’s password or refresh values already cached by running clients."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Automate secret rotation",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Dual-credential rotation",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation",
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-app-configuration",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "App Configuration",
      "title": "App Configuration",
      "question": "What is Azure App Configuration?",
      "answers": [
        "A managed store for application settings and feature flags. Applications load values such as service URLs or feature choices without rebuilding the code. Sensitive credentials normally belong in Key Vault and can be connected through references rather than stored as ordinary setting values."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · App Configuration",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Resolve Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-feature-flag",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Feature flag",
      "title": "Feature flag",
      "question": "What is a feature flag?",
      "answers": [
        "A setting the application checks to decide whether a feature is enabled for a request, user or environment. For example, enable a new checkout for a small group before a wider rollout. The same deployed code can behave differently according to the flag."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Feature flags",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-vnet",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "VNet",
      "title": "VNet",
      "question": "What does VNet stand for in Azure?",
      "answers": [
        "Virtual Network. An Azure network where resources use configured private addresses, subnets and routes to communicate. You control how its resources connect to each other, other networks and the internet. Adding a VNet alone does not disable a service's public access."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Virtual networks",
          "url": "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-private-endpoint",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Private endpoint",
      "title": "Private endpoint",
      "question": "What is a private endpoint in Azure?",
      "answers": [
        "A network interface with a private IP address in your virtual network that connects to a supported service, such as Key Vault. Clients use private networking and correctly configured DNS to reach the service through it. Service permissions still apply."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Private registry access",
          "url": "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-endpoints",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-private-endpoints"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-azure-monitor",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Azure Monitor",
      "title": "Azure Monitor",
      "question": "What is Azure Monitor?",
      "answers": [
        "Azure's platform for collecting, analyzing and acting on monitoring data, including metrics and logs. Use it to investigate application behavior, visualize performance and trigger alerts when configured conditions are met."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Metrics and logs",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/data-platform",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/data-platform"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-application-insights",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Application Insights",
      "title": "Application Insights",
      "question": "What is Application Insights?",
      "answers": [
        "An Azure Monitor capability for observing application performance and behavior. It links request timings, dependency calls, failures and other telemetry so you can investigate problems. Application instrumentation supplies the data it analyzes."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Application Insights table mapping",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-log-analytics",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Log Analytics",
      "title": "Log Analytics",
      "question": "What is Log Analytics in Azure Monitor?",
      "answers": [
        "The interactive tool for exploring and querying Azure Monitor Logs, commonly using Kusto Query Language (KQL). A Log Analytics workspace is the resource that stores the logs. The query tool and workspace are related, but are not the same object."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Log Analytics investigations",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-csi",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "CSI",
      "title": "CSI",
      "question": "What does CSI stand for in Kubernetes storage?",
      "answers": [
        "Container Storage Interface. A standard interface that lets Kubernetes use different storage providers through drivers. For example, the Secrets Store CSI Driver can mount Key Vault objects into a pod as files, using an identity authorized to retrieve them."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Mount Key Vault in AKS",
          "url": "https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-telemetry",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Telemetry",
      "title": "Telemetry",
      "question": "What is application telemetry?",
      "answers": [
        "Data an application emits about its behavior, such as request timings, errors, log messages and measurements. Monitoring tools collect and analyze it to help explain health and performance."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/concepts/observability-primer/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-log",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Log record",
      "title": "Log record",
      "question": "What is a log record?",
      "answers": [
        "A timestamped record of something that happened, often including severity and contextual fields. For example, a log entry might say that order 42 failed validation and record the reason."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Application Insights table mapping",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/concepts/observability-primer/",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-metric",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Metric",
      "title": "Metric",
      "question": "What is a metric in observability?",
      "answers": [
        "A numeric measurement recorded over time, such as request count, CPU use or a latency distribution. Metrics help show trends and drive alerts. They summarize behavior; detailed log or trace records may be needed to explain a particular slow request."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/concepts/observability-primer/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-trace",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Distributed trace",
      "title": "Distributed trace",
      "question": "What is a distributed trace?",
      "answers": [
        "A linked record of an operation as it travels through components, such as an API calling another service and then a database. The trace groups timed spans through shared context so you can see where time and failures occurred."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        },
        {
          "label": "W3C · Trace Context",
          "url": "https://www.w3.org/TR/trace-context/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/concepts/observability-primer/",
          "https://www.w3.org/TR/trace-context/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-span",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Trace span",
      "title": "Trace span",
      "question": "What is a span in distributed tracing?",
      "answers": [
        "One timed unit of work within a trace, such as handling an HTTP request or making a database call. It has a start, an end and contextual attributes, and can have parent/child relationships. A complete distributed operation normally contains several spans."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/concepts/observability-primer/",
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-otel",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "OpenTelemetry (OTel)",
      "title": "OpenTelemetry (OTel)",
      "question": "What is OpenTelemetry?",
      "answers": [
        "An open set of APIs, libraries and conventions for producing and moving telemetry such as traces, metrics and logs. OTel is its common abbreviation. It instruments and exports data; a backend such as Azure Monitor stores and analyzes it."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Enable OpenTelemetry export",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/concepts/observability-primer/",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-instrumentation",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Instrumentation",
      "title": "Instrumentation",
      "question": "What does instrumentation mean for an application?",
      "answers": [
        "Adding the code or library hooks that produce telemetry about what the application does. For example, HTTP instrumentation can create a span for each request. An exporter can send existing telemetry, but cannot describe uninstrumented application work by itself."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-exporter",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Telemetry exporter",
      "title": "Telemetry exporter",
      "question": "What is an exporter in OpenTelemetry?",
      "answers": [
        "A component that sends telemetry to a destination such as Azure Monitor. For example, a trace exporter sends completed spans. Instrumentation creates the telemetry; the exporter delivers it to the system that stores or analyzes it."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Enable OpenTelemetry export",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-sampling",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Trace sampling",
      "title": "Trace sampling",
      "question": "What is trace sampling?",
      "answers": [
        "Selecting which traces or spans to record/export so telemetry volume stays manageable. For example, a sampler may retain roughly 10% of trace IDs. Dropped traces reduce diagnostic detail, so configure a suitable strategy and do not assume every failed request will be retained."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Application Insights sampling",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-sampling",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-sampling"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-kql",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "KQL",
      "title": "KQL",
      "question": "What does KQL stand for?",
      "answers": [
        "Kusto Query Language. A language for searching, filtering, joining and summarizing tabular data in services such as Azure Monitor Logs. Its pipe character passes one operation's result into the next operation."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Filter rows",
          "url": "https://learn.microsoft.com/en-us/kusto/query/where-operator",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Aggregate rows",
          "url": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/where-operator",
          "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "term-d4-latency",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "Latency",
      "title": "Latency",
      "question": "What does request latency mean?",
      "answers": [
        "The time an operation takes from the chosen start to its completion, such as a client sending a request and receiving its response. Always identify the measurement boundary: client-perceived time can include network delay that server-side processing time excludes."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · AppRequests columns",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Observability concepts",
          "url": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests",
          "https://opentelemetry.io/docs/concepts/observability-primer/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "term-d4-p95",
      "domain": 4,
      "category": "terms-4",
      "kind": "term",
      "term": "P95 latency",
      "title": "P95 latency",
      "question": "What does P95 latency mean?",
      "answers": [
        "The 95th percentile of measured durations: approximately 95% of the measured requests took no longer than that value, while about 5% took longer. It highlights slower requests better than an average alone. It does not mean 95% of requests succeeded."
      ],
      "origin": "terms",
      "legacyIds": [],
      "references": [
        {
          "label": "Microsoft Learn · Percentiles",
          "url": "https://learn.microsoft.com/en-us/kusto/query/percentiles-aggregation-function",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "confirmed",
        "note": "Plain-language definition checked against the linked primary documentation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/percentiles-aggregation-function"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-55-3-1",
      "domain": 4,
      "category": "terms-4",
      "title": "App Configuration",
      "question": "What is an App Configuration sentinel key used for?",
      "answers": [
        "It is a key you update after finishing a related set of configuration edits. Register it for refresh with refreshAll: true; when the provider detects its change, it reloads the selected configuration. This reduces clients seeing an update halfway through multiple edits. It is a reload signal, not a transaction that makes all store writes atomic."
      ],
      "origin": "original",
      "legacyIds": [
        55
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · .NET configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider"
        ]
      },
      "coverageCategory": "app-configuration",
      "kind": "term",
      "term": "Sentinel key",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-64-1-1",
      "domain": 4,
      "category": "terms-4",
      "title": "OpenTelemetry pipeline",
      "question": "What does an OpenTelemetry TracerProvider own?",
      "answers": [
        "It creates tracers and holds their shared tracing setup: service metadata, the sampler and span processors. Tracers create spans; processors and exporters handle sending completed spans to a destination such as Azure Monitor."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "coverageCategory": "opentelemetry",
      "kind": "term",
      "term": "TracerProvider",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-rbac-015",
      "domain": 4,
      "title": "Service principal",
      "category": "terms-4",
      "question": "What is a service principal in an Entra tenant?",
      "answers": [
        "It is an application identity’s local representation in a particular Microsoft Entra tenant. The application registration describes the application; the service principal is the tenant object to which permissions and access policies apply. A multitenant application can therefore have a service principal in each tenant that uses it."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-015",
          "url": "https://ai200prep.com/questions/rbac-015/"
        },
        {
          "label": "Microsoft Learn · Applications and service principals",
          "url": "https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/identity-platform/app-objects-and-service-principals"
        ]
      },
      "coverageCategory": "identity-rbac",
      "kind": "term",
      "term": "Service principal",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-rbac-028",
      "domain": 4,
      "title": "Subnet traffic filtering",
      "category": "terms-4",
      "question": "What does an Azure Network Security Group filter?",
      "answers": [
        "A Network Security Group (NSG) allows or denies network flows using rules based on source/destination addresses, ports and protocol. It can protect supported subnets or network interfaces. Passing an NSG rule only establishes network reachability; the application/service must still authenticate and authorize the caller."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-028",
          "url": "https://ai200prep.com/questions/rbac-028/"
        },
        {
          "label": "Microsoft Learn · Network security groups",
          "url": "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview"
        ]
      },
      "coverageCategory": "identity-rbac",
      "kind": "term",
      "term": "NSG · Network Security Group",
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-05-2-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "App Service pull from ACR",
      "question": "How do system-assigned and user-assigned identities differ in lifecycle?",
      "answers": [
        "A system-assigned managed identity belongs to one resource and is deleted with it. A user-assigned identity is a separate Azure resource that can outlive an app and be attached to several supported resources. You can therefore create and authorize a user-assigned identity before the app exists."
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
        },
        {
          "label": "Microsoft Learn · Managed identity lifecycle",
          "url": "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-07-5-1",
      "domain": 4,
      "category": "key-vault",
      "title": "App Service Key Vault refs",
      "question": "Where should non-secret configuration and credentials be stored?",
      "answers": [
        "Use app settings or Azure App Configuration for ordinary values such as feature options and service URLs. Store passwords, API tokens and similar credentials in Key Vault. The app retrieves secrets through an authorized SDK call or a supported Key Vault reference, keeping the actual credential out of source code and ordinary configuration files."
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
        },
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Resolve Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-14-6-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Container Apps secrets",
      "question": "Which Key Vault object type should hold an API credential?",
      "answers": [
        "A secret. In Key Vault terminology, an API key is an opaque credential value, like a password. A Key Vault key is a cryptographic key used for operations such as signing or encryption. The word “key” in an API credential’s name does not make it a cryptographic-key object."
      ],
      "origin": "original",
      "legacyIds": [
        14
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 14",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-52-1-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Can Key Vault Reader read secret values?",
      "answers": [
        "No. Key Vault Reader can read metadata, such as object names and properties, but not secret values or private key material. Reading an actual secret requires a role such as Key Vault Secrets User on a vault using the Azure RBAC permission model."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-52-2-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Which Key Vault RBAC role reads secret values?",
      "answers": [
        "Key Vault Secrets User. It lets an identity read secret values without managing or deleting the secrets. The vault must use the Azure role-based access control (RBAC) permission model, and the app must also be able to reach the vault."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-52-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Which Key Vault RBAC role manages secret versions and deletion?",
      "answers": [
        "Key Vault Secrets Officer. It can perform secret operations such as setting new versions, reading, deleting and recovering secrets, subject to vault protections. It does not grant permission to manage role assignments. Use Secrets User instead when an application only needs to read a credential."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-52-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "What data-plane permissions does Key Vault Administrator grant?",
      "answers": [
        "All Key Vault data-plane operations on keys, secrets and certificates in its assigned scope. “Data plane” means working with the stored objects themselves. It does not manage the vault resource or role assignments, and it does not bypass protections such as purge protection."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Soft delete and purge protection",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-52-6-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Does Key Vault Contributor grant access to secret contents?",
      "answers": [
        "No direct secret-read permission. Key Vault Contributor manages the vault resource on the control plane; it is not Key Vault Secrets User. With the legacy access-policy model, a sufficiently privileged contributor may change policies to grant data access, which is a reason to tightly control that management permission."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-52-7-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault data-plane roles",
      "question": "Which vault permission model makes Key Vault data-plane role assignments effective?",
      "answers": [
        "The Azure role-based access control (RBAC) permission model. On a vault using legacy access policies, those policies control data access instead. Assigning Key Vault Secrets User will not grant a secret read until the vault is using the RBAC model."
      ],
      "origin": "original",
      "legacyIds": [
        52
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 52",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-53-1-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "How does a versionless Key Vault SDK read behave after rotation?",
      "answers": [
        "A fresh get_secret(\"name\") call requests the latest version, so it can retrieve the rotated value without changing the name. A value already held in memory does not update itself; the app must read again and update anything using the old credential."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Read secrets with Python",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-53-2-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "How does a version-pinned Key Vault SDK read behave after rotation?",
      "answers": [
        "It keeps requesting the specified version. For example, get_secret(\"name\", version=\"version-id\") continues reading that version after rotation. Change the configured version, or use a versionless read to follow the latest version. The pinned version must still be enabled and available."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Read secrets with Python",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-53-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "How can Event Grid and Functions automate rotation of a Key Vault secret?",
      "answers": [
        "Set the secret’s expiry. Key Vault emits SecretNearExpiry, normally 30 days before expiration; route that event through Event Grid to a rotation function. The function must change the credential in the actual target service and store the corresponding new secret version with a new expiry. Writing a random new value only to Key Vault would leave the service and clients disagreeing."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Automate secret rotation",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Added the essential target-service credential change; creating a new Key Vault version alone does not rotate the credential used by the service.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-53-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault versions and rotation",
      "question": "Do Key Vault secrets have the same built-in rotation policies as cryptographic keys?",
      "answers": [
        "No. Cryptographic keys support Key Vault rotation policies. A password or API secret also belongs to an external service, so a workflow must update that service’s credential and store its matching value in Key Vault. An expiry notification can start that workflow, but does not itself generate and apply a working replacement credential."
      ],
      "origin": "original",
      "legacyIds": [
        53
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 53",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Automate secret rotation",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation",
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-54-1-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "In what order does Python DefaultAzureCredential try credential types?",
      "answers": [
        "The documented Python sequence is:\n1. Environment-configured application credentials.\n2. Workload Identity using a federated token.\n3. Managed Identity on an Azure host.\n4. Shared Token Cache on Windows.\n5. Visual Studio Code sign-in.\n6. Azure CLI sign-in.\n7. Azure PowerShell sign-in.\n8. Azure Developer CLI sign-in.\n9. Interactive browser, disabled by default.\n10. Broker authentication where supported.\nUnavailable/excluded mechanisms are skipped. Developer tools require a signed-in account; VS Code/broker support also depends on the broker package/platform. SDK version and options can change the effective chain."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python credential chains",
          "url": "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-54-2-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "How can the same DefaultAzureCredential code run locally and on Azure?",
      "answers": [
        "It can obtain a token using your signed-in developer tools locally and the app's managed identity in Azure. The service client uses the same credential interface in both places. Give each identity the required permissions. Not every authentication error causes fallback: a configured deployed credential that fails can stop the chain."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python credential chains",
          "url": "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains",
          "kind": "primary"
        },
        {
          "label": "Azure SDK · Python Identity continuation policy",
          "url": "https://github.com/Azure/azure-sdk-for-python/tree/main/sdk/identity/azure-identity",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Replaced “every link is silently skipped” with the actual distinction between an unavailable credential and a configured deployed credential that fails authentication.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains",
          "https://github.com/Azure/azure-sdk-for-python/tree/main/sdk/identity/azure-identity"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-54-3-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "What does AZURE_TOKEN_CREDENTIALS control in Python DefaultAzureCredential?",
      "answers": [
        "It restricts which credentials Python DefaultAzureCredential includes. prod keeps deployed-service credentials; dev keeps developer-tool credentials. In supported versions, a name such as AzureCliCredential selects just that mechanism. prod/dev require azure-identity 1.23.0 or later; individual names require 1.24.0 or later. It selects how to authenticate, not what resource permissions the resulting identity receives."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python credential chains",
          "url": "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Named the language-specific credential chain so the setting is not mistaken for a universal Azure option."
      }
    },
    {
      "id": "m-54-4-1",
      "domain": 4,
      "category": "identity-rbac",
      "title": "DefaultAzureCredential chain",
      "question": "Why is ManagedIdentityCredential normally unavailable on a developer laptop?",
      "answers": [
        "ManagedIdentityCredential asks the Azure host's managed-identity endpoint for a token. An ordinary developer laptop has no such endpoint. Use a developer credential locally, such as AzureCliCredential after signing in with az login."
      ],
      "origin": "original",
      "legacyIds": [
        54
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 54",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python credential chains",
          "url": "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Managed identity lifecycle",
          "url": "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication/credential-chains",
          "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-55-1-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration",
      "question": "What uniquely identifies an App Configuration key-value?",
      "answers": [
        "The key and label together. For example, Api:Timeout with label Production can be 30, while the same key with label Development is 10. An entry with no label is a separate entry too. The application selects the key and label it wants."
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
        },
        {
          "label": "Microsoft Learn · Keys and labels",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-55-4-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration",
      "question": "How do App Configuration Data Reader and Data Owner differ?",
      "answers": [
        "App Configuration Data Reader can read key-values. App Configuration Data Owner can also write and delete them. Use Reader for an app that only consumes settings. These roles control store data, rather than general management of the Azure resource."
      ],
      "origin": "original",
      "legacyIds": [
        55
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 55",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · App Configuration data roles",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-56-1-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "What is the setup order for reading Key Vault with an app identity?",
      "answers": [
        "Enable a managed identity for the app, grant it Key Vault Secrets User on the appropriate RBAC-enabled vault, and ensure network access. Then create a SecretClient with the vault URL and a token credential, and call get_secret. For local development, the signed-in developer identity needs its own access; enabling the deployed app’s identity does not grant the developer permission."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Read secrets with Python",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-56-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "What scope should be preferred for an application's Key Vault permissions?",
      "answers": [
        "Microsoft recommends a separate vault per application per environment, with suitable roles at the vault scope. This gives the app access to its own secrets without broad subscription-wide authority. Individual-secret scopes are supported for special cases, but are not the usual default design. Give a read-only app Secrets User rather than Administrator."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-56-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "What happens to access policies when a vault switches to Azure RBAC?",
      "answers": [
        "They no longer authorize operations on keys, secrets and certificates. Equivalent Azure role assignments must be configured separately; existing policies are not converted automatically. Prepare the role assignments before the switch and verify application access afterward."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault roles and scopes",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-56-6-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Key Vault access for an app",
      "question": "Why does copying a secret into app settings at deployment not implement rotation?",
      "answers": [
        "The app setting contains a copy of the old value. A new Key Vault version does not rewrite that copy or update a running client. Use a supported Key Vault reference with refresh, or code that rereads the secret and updates the clients that use it."
      ],
      "origin": "original",
      "legacyIds": [
        56
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 56",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Read secrets with Python",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references",
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-57-2-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Where secrets belong",
      "question": "Which secret lifecycle features does Key Vault provide?",
      "answers": [
        "Secret versions, expiration metadata, access auditing, recovery through soft delete, and protection against early permanent deletion through purge protection. These help manage a secret's lifecycle. Replacing a credential in the external service still requires a rotation workflow."
      ],
      "origin": "original",
      "legacyIds": [
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Keys, secrets and certificates",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Soft delete and purge protection",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Key Vault audit logs",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/logging",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Automate secret rotation",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates",
          "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview",
          "https://learn.microsoft.com/en-us/azure/key-vault/general/logging",
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-57-3-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Where secrets belong",
      "question": "Who resolves a Key Vault reference stored in App Configuration?",
      "answers": [
        "The application's App Configuration provider or resolver. It reads the secret URI from App Configuration, then uses the app's authorized identity to retrieve the value from Key Vault. The app needs access to both services; App Configuration does not fetch the secret on its behalf."
      ],
      "origin": "original",
      "legacyIds": [
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Resolve Key Vault references",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/use-key-vault-references-dotnet-core"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-57-4-1",
      "domain": 4,
      "category": "key-vault",
      "title": "Where secrets belong",
      "question": "How can AKS mount Key Vault secrets as files without creating Kubernetes Secret objects?",
      "answers": [
        "Use the Azure Key Vault provider for the Secrets Store CSI Driver. CSI means Container Storage Interface. A SecretProviderClass selects the vault objects, and the driver mounts their contents as files using an authorized identity. Creating Kubernetes Secret objects is optional. If rotation updates the files, the application must reread them."
      ],
      "origin": "original",
      "legacyIds": [
        57
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 57",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Mount Key Vault in AKS",
          "url": "https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Distinguished Kubernetes Secret objects from source-control commits, and put the driver name before its expanded acronym."
      }
    },
    {
      "id": "m-58-1-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration Python SDK",
      "question": "How is a Python AzureAppConfigurationClient authenticated?",
      "answers": [
        "Use a token credential and the store endpoint:\nfrom azure.appconfiguration import AzureAppConfigurationClient\nfrom azure.identity import DefaultAzureCredential\nclient = AzureAppConfigurationClient(\"https://mystore.azconfig.io\", credential=DefaultAzureCredential())\nReplace mystore with the actual store name. Locally the credential can use your developer sign-in; in Azure it can use a configured managed identity. Assign that identity an appropriate App Configuration data role, such as Data Reader."
      ],
      "origin": "original",
      "legacyIds": [
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python App Configuration client",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-appconfiguration/azure.appconfiguration.azureappconfigurationclient?view=azure-python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · App Configuration data roles",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-appconfiguration/azure.appconfiguration.azureappconfigurationclient?view=azure-python",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-58-2-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration Python SDK",
      "question": "Which Python App Configuration call reads a single key and label?",
      "answers": [
        "On an existing AzureAppConfigurationClient:\nsetting = client.get_configuration_setting(key=\"Api:Timeout\", label=\"Production\")\nvalue = setting.value\nThe first line retrieves that exact key/label pair; the second reads its stored string value."
      ],
      "origin": "original",
      "legacyIds": [
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python App Configuration client",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-appconfiguration/azure.appconfiguration.azureappconfigurationclient?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-appconfiguration/azure.appconfiguration.azureappconfigurationclient?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-58-3-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "App Configuration Python SDK",
      "question": "Which Python App Configuration calls enumerate settings or labels?",
      "answers": [
        "Use client.list_configuration_settings(key_filter=\"Api:*\", label_filter=\"Production\") to iterate matching settings and their values. Use client.list_labels() to iterate label information. These are methods on an existing AzureAppConfigurationClient."
      ],
      "origin": "original",
      "legacyIds": [
        58
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 58",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python App Configuration client",
          "url": "https://learn.microsoft.com/en-us/python/api/azure-appconfiguration/azure.appconfiguration.azureappconfigurationclient?view=azure-python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/azure-appconfiguration/azure.appconfiguration.azureappconfigurationclient?view=azure-python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-59-1-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "How can a long-lived app refresh configuration without a remote call per request?",
      "answers": [
        "Keep configuration in memory through a provider that supports refresh. Requests read the cached values; middleware or application code asks the provider to refresh, and the refresh interval limits how often it checks the remote store. Configure both the watched settings and the code that triggers the check."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · .NET configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-python-provider",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-python-provider"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-59-2-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "How does Python App Configuration refresh use a watch key and interval?",
      "answers": [
        "For the Python provider:\nfrom azure.appconfiguration.provider import load, WatchKey\nfrom azure.identity import DefaultAzureCredential\nconfig = load(endpoint=endpoint, credential=DefaultAzureCredential(), refresh_on=[WatchKey(\"sentinel\")], refresh_interval=10)\nconfig.refresh()\nHere endpoint is the store URL. The initial load caches settings; later refresh() calls check the watched sentinel only after the interval allows it and reload on a detected change. Call refresh from the app’s request/background flow; creating the provider alone does not schedule continuous polling."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Python configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-python-provider",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-python-provider"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-59-4-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "What should an app do when a configuration refresh fails?",
      "answers": [
        "After a successful initial load, keep using the last cached values and record the refresh failure. Try again on a later eligible refresh. Startup is different: if nothing has loaded yet, the app needs an explicit choice between failing startup and using safe local defaults."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · .NET configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Python configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-python-provider",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-python-provider"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-59-5-1",
      "domain": 4,
      "category": "app-configuration",
      "title": "Dynamic configuration refresh",
      "question": "Why are environment variables unsuitable for in-process dynamic refresh?",
      "answers": [
        "A running process does not automatically receive externally changed environment variables. Azure App Service applies changed app settings through an app restart, while Container Apps environment-variable changes create a new revision. For settings that must update inside an existing process, use a configuration provider with refresh and make the application reread the refreshed values."
      ],
      "origin": "original",
      "legacyIds": [
        59
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 59",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · App settings",
          "url": "https://learn.microsoft.com/en-us/azure/app-service/configure-common",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Revisions",
          "url": "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · .NET configuration provider",
          "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/app-service/configure-common",
          "https://learn.microsoft.com/en-us/azure/container-apps/revisions",
          "https://learn.microsoft.com/en-us/azure/azure-app-configuration/reference-dotnet-provider"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-60-1-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL where do to its input rows?",
      "answers": [
        "It keeps rows whose condition is true. For example:\nAppRequests | where Success == false\nThis returns failed request records and leaves their columns available. The | pipe passes the table result into the next operation. KQL means Kusto Query Language; filter is an equivalent operator name."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Filter rows",
          "url": "https://learn.microsoft.com/en-us/kusto/query/where-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/where-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-60-2-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What rows does KQL summarize return?",
      "answers": [
        "It combines input rows into one summary row per group in the by clause. For example:\nAppRequests | summarize Requests=count() by AppRoleName\nThis counts requests for each service name. Without a by clause, it produces one summary row for the entire input."
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
        },
        {
          "label": "Microsoft Learn · Aggregate rows",
          "url": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-60-3-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL project do to columns?",
      "answers": [
        "It chooses the output columns and can rename or calculate them; unlisted columns are dropped. For example:\nAppRequests | project Service=AppRoleName, DurationSeconds=DurationMs / 1000.0\nThe result has Service and DurationSeconds only. Use extend instead when you want to retain other columns while calculating a value."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Select columns",
          "url": "https://learn.microsoft.com/en-us/kusto/query/project-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/project-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-60-4-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL extend do to columns?",
      "answers": [
        "It adds a calculated column, or replaces an existing column with that name, while retaining the other columns and individual rows. For example:\nAppRequests | extend DurationSeconds=DurationMs / 1000.0\nThis calculates seconds for each request. It does not group rows; use summarize for grouped aggregates such as an average per service."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Calculate columns",
          "url": "https://learn.microsoft.com/en-us/kusto/query/extend-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Clarified that extend can replace an existing column as well as append a new one.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/extend-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-60-5-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL distinct return?",
      "answers": [
        "It returns unique combinations of the selected column values. For example:\nAppRequests | distinct AppRoleName, ResultCode\nEach service/result-code pair appears once, even if thousands of requests share it. It does not calculate a count; use summarize count() by those columns when counts are also needed."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Distinct values",
          "url": "https://learn.microsoft.com/en-us/kusto/query/distinct-operator",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Aggregate rows",
          "url": "https://learn.microsoft.com/en-us/kusto/query/summarize-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/distinct-operator",
          "https://learn.microsoft.com/en-us/kusto/query/summarize-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-60-5-2",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL join do?",
      "answers": [
        "It combines rows from two tables when their key values match. For example:\nAppRequests | join kind=inner (AppDependencies) on OperationId\nThis matches requests with dependency records from the same operation. kind=inner keeps matched rows only. Several matches for one key produce several output rows, so choose the key and join kind carefully."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Join tables",
          "url": "https://learn.microsoft.com/en-us/kusto/query/join-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/join-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-60-5-3",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "What does KQL render do?",
      "answers": [
        "It asks the query client to visualize the tabular result. For example:\nAppRequests | summarize Requests=count() by bin(TimeGenerated, 5m) | render timechart\nThe query first produces a count per five-minute time bucket; render then requests a time chart. Rendering does not itself group data or change the underlying stored records."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Visualize query results",
          "url": "https://learn.microsoft.com/en-us/kusto/query/render-operator",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Time buckets",
          "url": "https://learn.microsoft.com/en-us/kusto/query/bin-function",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/render-operator",
          "https://learn.microsoft.com/en-us/kusto/query/bin-function"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-60-6-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL operator shapes",
      "question": "In what order should time filters, joins and aggregation usually run in a KQL query?",
      "answers": [
        "Start with the relevant tables and apply selective time and other filters early, including on both sides of a join when appropriate. Join only the needed rows/columns, then aggregate at the level required by the answer. Sometimes pre-aggregating before a join is better; the key principle is reducing processed data without changing the intended result."
      ],
      "origin": "original",
      "legacyIds": [
        60
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 60",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Query performance",
          "url": "https://learn.microsoft.com/en-us/kusto/query/best-practices",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/best-practices"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-61-1-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "Which table and column names are used in the Application Insights query schema?",
      "answers": [
        "In Application Insights resource queries, common tables are requests, dependencies, traces and exceptions. Fields include timestamp, duration, success, operation_Id, operation_Name and cloud_RoleName. Names are case-sensitive. Despite its name, traces stores application log records; distributed-trace spans are normally in requests and dependencies."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Application Insights table mapping",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Application Insights log queries",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/analytics",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/analytics"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-61-2-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "Which table and column names are used in the workspace-based query schema?",
      "answers": [
        "In workspace queries, use AppRequests, AppDependencies, AppTraces and AppExceptions. Common fields include TimeGenerated, DurationMs, Success, OperationId, OperationName and AppRoleName. These correspond to the Application Insights resource-query names. Choose the schema for the scope you opened instead of mixing timestamp with AppRequests or TimeGenerated with requests."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Application Insights table mapping",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · AppRequests columns",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-61-3-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "What unit is used for request duration in Application Insights queries?",
      "answers": [
        "Milliseconds. In the Application Insights query schema, requests.duration > 2000 means longer than two seconds:\nrequests | where duration > 2000\nThe workspace-schema equivalent is:\nAppRequests | where DurationMs > 2000"
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Application Insights log queries",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/analytics",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · AppRequests columns",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/analytics",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-61-4-1",
      "domain": 4,
      "category": "kql",
      "title": "The two telemetry schemas",
      "question": "Which telemetry field identifies the emitting service?",
      "answers": [
        "cloud_RoleName in the Application Insights query schema, or AppRoleName in workspace tables. It identifies the logical emitting service, such as orders-api. The role-instance field identifies a particular running instance. Give services distinct, stable role names so queries and Application Map can separate them."
      ],
      "origin": "original",
      "legacyIds": [
        61
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 61",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Application Insights table mapping",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · AppRequests columns",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apprequests"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-62-1-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL time windows and grouping",
      "question": "How does KQL express the last 30 minutes?",
      "answers": [
        "Use ago(30m), meaning the current UTC time minus thirty minutes. A workspace query is:\nAppRequests | where TimeGenerated > ago(30m)\nIn Application Insights resource queries, use timestamp instead. The m is a timespan unit, not a variable; other examples include 10s, 1h and 2d."
      ],
      "origin": "original",
      "legacyIds": [
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Relative time filters",
          "url": "https://learn.microsoft.com/en-us/kusto/query/ago-function",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/ago-function"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-62-3-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL time windows and grouping",
      "question": "How does KQL bin assign timestamps to time buckets?",
      "answers": [
        "bin rounds each timestamp down to the start of a fixed interval. For example:\nAppRequests | summarize Requests=count() by bin(TimeGenerated, 5m) | render timechart\nRequests from 10:00 through just before 10:05 share the 10:00 bucket. The chart uses the datetime bucket as its time axis. Empty intervals need explicit padding if they should appear as zero."
      ],
      "origin": "original",
      "legacyIds": [
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Time buckets",
          "url": "https://learn.microsoft.com/en-us/kusto/query/bin-function",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Visualize query results",
          "url": "https://learn.microsoft.com/en-us/kusto/query/render-operator",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/bin-function",
          "https://learn.microsoft.com/en-us/kusto/query/render-operator"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made clear that bin calculates a bucket value; summarize performs the actual grouping."
      }
    },
    {
      "id": "m-62-4-1",
      "domain": 4,
      "category": "kql",
      "title": "KQL time windows and grouping",
      "question": "Which KQL join kind is used when no kind is specified?",
      "answers": [
        "innerunique. It deduplicates the left input by the join key before matching, so repeated left-side keys do not behave like an ordinary inner join. Specify kind=inner when you need every matching pair. For performance, often put the smaller suitable input on the left, but do not swap inputs without considering how that changes the join’s meaning."
      ],
      "origin": "original",
      "legacyIds": [
        62
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 62",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Default innerunique join",
          "url": "https://learn.microsoft.com/en-us/kusto/query/join-innerunique",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Query performance",
          "url": "https://learn.microsoft.com/en-us/kusto/query/best-practices",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/join-innerunique",
          "https://learn.microsoft.com/en-us/kusto/query/best-practices"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-63-1-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "Which tool supports an ad hoc investigation of Azure application logs?",
      "answers": [
        "Log Analytics in the Azure portal. Open the relevant workspace/resource scope and run a Kusto Query Language (KQL) query, such as:\nAppRequests | where TimeGenerated > ago(30m) | take 20\nAdjust the table and time window for the logs actually collected. This provides an interactive investigation without first building a reusable dashboard or alert."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Log Analytics investigations",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-63-2-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "What type of operations does the Azure Activity Log record?",
      "answers": [
        "Management operations on Azure resources, such as creating a virtual machine, changing a vault's configuration or deploying infrastructure. These are control-plane events. Use application telemetry to investigate what the running app did with a user request."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Azure Activity Log",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/activity-log",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/activity-log"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-63-4-1",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "Why start a KQL query with the relevant table?",
      "answers": [
        "It selects the input data for the query. For example, AppRequests starts with request records, while AzureActivity starts with resource-management events. Choosing the relevant table avoids searching unrelated logs and makes later filters/aggregates meaningful. Time and other filters should normally narrow that input early."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Log Analytics investigations",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Query performance",
          "url": "https://learn.microsoft.com/en-us/kusto/query/best-practices",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
          "https://learn.microsoft.com/en-us/kusto/query/best-practices"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-63-4-2",
      "domain": 4,
      "category": "monitor",
      "title": "Azure Monitor query tools",
      "question": "How do KQL == and =~ differ?",
      "answers": [
        "For string equality, == is case-sensitive and =~ is case-insensitive. For example, \"Prod\" == \"prod\" is false, while \"Prod\" =~ \"prod\" is true. Prefer == when the intended comparison is case-sensitive; using =~ does not make table or column identifiers case-insensitive."
      ],
      "origin": "original",
      "legacyIds": [
        63
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 63",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · String comparison operators",
          "url": "https://learn.microsoft.com/en-us/kusto/query/datatypes-string-operators",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/kusto/query/datatypes-string-operators"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-64-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "What sends OpenTelemetry spans to Azure Monitor?",
      "answers": [
        "An Azure Monitor trace exporter, such as Python AzureMonitorTraceExporter. It sends completed spans to the configured Application Insights destination. A span processor connects it to the tracer provider; a supported Azure Monitor distro can set up that pipeline for you."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Enable OpenTelemetry export",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Azure Monitor Python distro",
          "url": "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable",
          "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-64-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "How do BatchSpanProcessor and SimpleSpanProcessor export spans?",
      "answers": [
        "SimpleSpanProcessor exports a completed sampled span synchronously, so export can delay the ending thread. BatchSpanProcessor queues sampled spans and normally exports them in background batches, reducing per-span overhead. Configure shutdown/flush for short-lived processes so queued telemetry has a chance to leave before the process exits."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-64-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry pipeline",
      "question": "Which Python OpenTelemetry call starts an active span?",
      "answers": [
        "Use a context manager with a configured tracing provider:\nfrom opentelemetry import trace\ntracer = trace.get_tracer(__name__)\nwith tracer.start_as_current_span(\"check-cache\") as span:\n    span.set_attribute(\"cache.hit\", True)\nThe with block makes this span current for nested operations and ends it when the block exits. Put the actual timed work inside that block. Starting a span without a configured recording/export pipeline does not make it appear in Azure Monitor."
      ],
      "origin": "original",
      "legacyIds": [
        64
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 64",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-65-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "What must an application do to produce visible OpenTelemetry traces?",
      "answers": [
        "Configure a tracing provider and exporter, then create spans through library instrumentation or tracing code. Deploy the required packages and destination settings, restart the service, and run the code you want to trace. If traces are missing, check sampling, export failures and ingestion delay."
      ],
      "origin": "original",
      "legacyIds": [
        65
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Enable OpenTelemetry export",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-enable",
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-65-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "What does configure_azure_monitor configure automatically?",
      "answers": [
        "For the Azure Monitor Python distro, configure_azure_monitor sets up supported trace, metric and logging providers, Azure exporters and supported library instrumentation. Supply the destination through the supported connection-string configuration and initialize it once. Avoid also manually instrumenting the same library, which can create duplicate spans. Available instrumentation depends on the installed distro version and packages."
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
        },
        {
          "label": "Microsoft Learn · Azure Monitor Python distro",
          "url": "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-65-5-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Tracing setup traps",
      "question": "How does the Azure Monitor Python exporter map span kinds to telemetry tables?",
      "answers": [
        "SERVER and CONSUMER spans become request telemetry: requests or AppRequests. CLIENT, PRODUCER and INTERNAL spans become dependency telemetry: dependencies or AppDependencies. The table names depend on query scope. INTERNAL usually represents work inside the process. Choose the span kind for the operation it describes."
      ],
      "origin": "original",
      "legacyIds": [
        65
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 65",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Azure SDK · Python span mapping",
          "url": "https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/monitor/azure-monitor-opentelemetry-exporter/azure/monitor/opentelemetry/exporter/export/trace/_exporter.py",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Custom spans and events",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-add-modify",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://github.com/Azure/azure-sdk-for-python/blob/main/sdk/monitor/azure-monitor-opentelemetry-exporter/azure/monitor/opentelemetry/exporter/export/trace/_exporter.py",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-add-modify"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-66-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "What are the Python names of common OpenTelemetry samplers?",
      "answers": [
        "Python provides ALWAYS_ON and ALWAYS_OFF instances, TraceIdRatioBased(rate), and ParentBased(root=...). For example, TraceIdRatioBased(0.1) selects roughly 10% of trace IDs. These Python identifiers differ from specification names and environment-variable values; use the spelling required by the API you configure."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Standard sampler configuration",
          "url": "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-66-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "Which standard OTEL_TRACES_SAMPLER values select ratio sampling?",
      "answers": [
        "traceidratio and parentbased_traceidratio for OTEL_TRACES_SAMPLER. Set OTEL_TRACES_SAMPLER_ARG to a ratio such as 0.1 for about 10%. The parent-based form uses that ratio for root traces while respecting the configured parent rules. Vendor distros may support additional aliases, so distinguish standard names from vendor-specific options."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Standard sampler configuration",
          "url": "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-66-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "Which Azure Monitor-specific sampler environment settings are available?",
      "answers": [
        "Supported Azure Monitor configurations use OTEL_TRACES_SAMPLER=microsoft.fixed_percentage with OTEL_TRACES_SAMPLER_ARG set to a fraction such as 0.1, or microsoft.rate_limited with the argument set to an approximate traces-per-second target such as 5.0. Set them before initializing telemetry. The two arguments have different units: 0.1 is a ratio, while 5.0 is a rate."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · OpenTelemetry configuration",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration?tabs=python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Azure Monitor Python distro",
          "url": "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration?tabs=python",
          "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-66-5-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "Which OpenTelemetry sampler honors a parent's sampling decision?",
      "answers": [
        "ParentBased. It uses the parent’s sampled/not-sampled state according to its configured local/remote parent rules. Its root sampler makes the decision when no parent exists. For example, ParentBased(root=TraceIdRatioBased(0.1)) starts about 10% of new root traces and normally follows parent decisions for their children."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-66-5-2",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "How does TraceIdRatioBased choose which traces to retain?",
      "answers": [
        "It makes a deterministic comparison based on the trace ID and the configured probability. With a ratio of 0.1, about 10% of suitable randomly generated trace IDs are retained over time. It does not simply keep every tenth request or guarantee exactly 10% of a small batch."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-66-6-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "OpenTelemetry samplers",
      "question": "What rate-limited sampling default is used by recent Azure Monitor Python distros?",
      "answers": [
        "For azure-monitor-opentelemetry starting at version 1.8.6, configure_azure_monitor defaults to rate-limited sampling targeting approximately five traces per second when no sampler options override it. This is a version-specific default and an approximate local rate, not five spans total across a distributed application. Check the installed distro and any environment-variable overrides."
      ],
      "origin": "original",
      "legacyIds": [
        66
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 66",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · OpenTelemetry configuration",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration?tabs=python",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Azure Monitor Python distro",
          "url": "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration?tabs=python",
          "https://learn.microsoft.com/en-us/python/api/overview/azure/monitor-opentelemetry-readme"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-67-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Which Python OpenTelemetry sampler records all spans during local testing?",
      "answers": [
        "ALWAYS_ON, from opentelemetry.sdk.trace.sampling. Assign it as the TracerProvider's sampler to record and sample each span it evaluates. This is useful when debugging locally. You still need an exporter to send those spans to a viewer; it cannot restore spans dropped in another service."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-67-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Which OpenTelemetry sampler keeps approximately 10% of traces?",
      "answers": [
        "TraceIdRatioBased(0.1) selects approximately 10% of trace IDs. For a distributed trace, ParentBased(root=TraceIdRatioBased(0.1)) is often used so root traces make the ratio decision and child spans follow their parent. This is probabilistic selection over traffic, not an exact count per minute."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Standard sampler configuration",
          "url": "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-67-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Where is an OpenTelemetry sampler configured?",
      "answers": [
        "On the TracerProvider. For example, after importing the SDK classes:\nTracerProvider(sampler=TraceIdRatioBased(0.1))\nThe provider asks the sampler whether to record/sample each new span. Processors handle completed spans, and exporters send them to a destination."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Trace SDK",
          "url": "https://opentelemetry.io/docs/specs/otel/trace/sdk/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "https://opentelemetry.io/docs/specs/otel/trace/sdk/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-67-4-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "How does Azure Monitor fixed-percentage sampling help coordinate trace selection across services?",
      "answers": [
        "It bases selection on the trace ID. Services using compatible logic, the same percentage and the same propagated trace context can therefore keep or drop the same trace. In the Azure Monitor Python distro, sampling_ratio=0.1 requests about 10%. Mixing incompatible sampling strategies can leave incomplete distributed traces."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Application Insights sampling",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-sampling",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · OpenTelemetry configuration",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration?tabs=python",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "corrected",
        "note": "Separated fixed-percentage trace selection from approximate rate-limited sampling, and removed the unqualified SDK-wide claim about ignoring upstream decisions.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-sampling",
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration?tabs=python"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-67-5-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Picking a trace sampler",
      "question": "Are metrics reduced by trace sampling?",
      "answers": [
        "No. Trace sampling chooses which spans or traces to retain. Metric measurements are collected and aggregated independently, so a request can count in a request-rate metric even when its trace is not retained."
      ],
      "origin": "original",
      "legacyIds": [
        67
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 67",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "Microsoft Learn · Application Insights sampling",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-sampling",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-sampling"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-68-1-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Trace context propagation",
      "question": "Which W3C header carries trace context between HTTP services?",
      "answers": [
        "traceparent, defined by the World Wide Web Consortium (W3C) Trace Context standard. It carries the trace ID, sending span ID and trace flags so the receiving service can continue the same distributed trace. Instrumentation libraries normally inject and read this header."
      ],
      "origin": "original",
      "legacyIds": [
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "W3C · Trace Context",
          "url": "https://www.w3.org/TR/trace-context/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://www.w3.org/TR/trace-context/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "m-68-2-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Trace context propagation",
      "question": "Does creating a span automatically propagate context to another process?",
      "answers": [
        "No. The current span/context exists inside the process. A caller must inject its context into outgoing headers or message metadata, and the receiver must extract it before starting the child operation. Supported HTTP or messaging instrumentation often does this automatically. Without propagation, each service may create an unrelated trace."
      ],
      "origin": "original",
      "legacyIds": [
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Python context propagation",
          "url": "https://opentelemetry.io/docs/languages/python/propagation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/propagation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "m-68-3-1",
      "domain": 4,
      "category": "opentelemetry",
      "title": "Trace context propagation",
      "question": "How is OpenTelemetry context propagated through an outbound Python HTTP call?",
      "answers": [
        "With tracing configured, enable the requests library's OpenTelemetry instrumentation before making calls:\nimport requests\nfrom opentelemetry.instrumentation.requests import RequestsInstrumentor\nRequestsInstrumentor().instrument()\nrequests.get(\"https://example.com/api\", timeout=10)\nThe instrumentation creates a client span and injects trace headers into the request. The receiving service must extract them, usually through its own instrumentation, to continue the same trace."
      ],
      "origin": "original",
      "legacyIds": [
        68
      ],
      "references": [
        {
          "label": "MightyBS · originalkort 68",
          "url": "https://www.mightybs.com/certifications/ai-200/flashcards/"
        },
        {
          "label": "OpenTelemetry · Python context propagation",
          "url": "https://opentelemetry.io/docs/languages/python/propagation/",
          "kind": "primary"
        },
        {
          "label": "OpenTelemetry · Python instrumentation",
          "url": "https://opentelemetry.io/docs/languages/python/instrumentation/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://opentelemetry.io/docs/languages/python/propagation/",
          "https://opentelemetry.io/docs/languages/python/instrumentation/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Showed a complete outbound request instead of leaving the learner to infer how to attach a manually created headers dictionary."
      }
    },
    {
      "id": "prep-kv-002",
      "domain": 4,
      "title": "Recover a secret",
      "category": "key-vault",
      "question": "Which Key Vault capability retains deleted objects for possible recovery?",
      "answers": [
        "Soft delete. Deleted vaults and objects remain recoverable for the configured retention period, from 7 to 90 days with a default of 90. Recovery requires permission. After permanent purge or the recovery period ends, soft delete cannot restore the object."
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
        },
        {
          "label": "Microsoft Learn · Soft delete and purge protection",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-kv-009",
      "domain": 4,
      "title": "Prevent early purge",
      "category": "key-vault",
      "question": "What does Key Vault purge protection prevent?",
      "answers": [
        "It prevents permanently purging a protected soft-deleted vault or object until its retention period has elapsed, including attempts by administrators. Soft delete makes recovery possible; purge protection prevents an early permanent deletion from removing that recovery option. Enabling purge protection cannot later be undone to bypass the waiting period."
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
        },
        {
          "label": "Microsoft Learn · Soft delete and purge protection",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-kv-013",
      "domain": 4,
      "title": "Audit secret access",
      "category": "key-vault",
      "question": "Which Key Vault diagnostic category records data-plane access such as secret reads?",
      "answers": [
        "AuditEvent. Enable a diagnostic setting that routes these Key Vault logs to a destination such as Log Analytics or Storage. They record operations such as secret reads and their outcomes, rather than the secret value itself. Logs are not collected in your chosen destination merely because the vault exists."
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
        },
        {
          "label": "Microsoft Learn · Key Vault audit logs",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/logging",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/general/logging"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-kv-023",
      "domain": 4,
      "title": "Build secrets",
      "category": "key-vault",
      "question": "How should a private package-feed token be supplied during a container build?",
      "answers": [
        "Use a build-time secret mount, such as Docker BuildKit secrets. If FEED_TOKEN is securely set in the environment:\ndocker build --secret id=feed_token,env=FEED_TOKEN -t myapp:v1 .\nA Dockerfile RUN step using --mount=type=secret,id=feed_token can read /run/secrets/feed_token for that step. Configure the package client to consume it without printing or copying it into the image. ARG, ENV and ordinary COPY can expose credentials in image/configuration history or layers."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-kv-023",
          "url": "https://ai200prep.com/questions/p-kv-023/"
        },
        {
          "label": "Docker · Build secrets",
          "url": "https://docs.docker.com/build/building/secrets/",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://docs.docker.com/build/building/secrets/"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-c-tw-003",
      "domain": 4,
      "title": "Rotation overlap",
      "category": "key-vault",
      "question": "How can a credential rotation avoid immediately breaking clients that still hold the old value?",
      "answers": [
        "Where the service supports two valid credentials, introduce or regenerate the unused one, store it in Key Vault and refresh clients to use it. Keep the old credential valid during that transition, then retire it after confirming adoption. Refresh cached values and connection pools as needed. A new Key Vault version alone does not update every running client."
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
        },
        {
          "label": "Microsoft Learn · Dual-credential rotation",
          "url": "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-rbac-001",
      "domain": 4,
      "title": "Owner and Contributor",
      "category": "identity-rbac",
      "question": "How do Azure Owner and Contributor differ in access management?",
      "answers": [
        "Both can manage resources at their assigned scope. Owner can also create and remove role assignments, controlling who gets access. Contributor does not include that role-assignment permission."
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
        },
        {
          "label": "Microsoft Learn · Privileged built-in roles",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/privileged",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/privileged"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-rbac-003",
      "domain": 4,
      "title": "RBAC scope hierarchy",
      "category": "identity-rbac",
      "question": "What is the Azure RBAC scope hierarchy from broadest to narrowest?",
      "answers": [
        "Management group → subscription → resource group → resource. Permissions assigned at a parent scope normally apply to its children. For example, a role on a resource group applies to resources in that group, so granting it on one resource is narrower than granting it on the entire subscription."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-003",
          "url": "https://ai200prep.com/questions/rbac-003/"
        },
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-rbac-003",
      "domain": 4,
      "title": "Inherited permissions",
      "category": "identity-rbac",
      "question": "How do Azure RBAC allow assignments combine across scopes?",
      "answers": [
        "Allowed permissions add together across the roles and inherited scopes that apply to the identity. A narrowly scoped role does not remove permission granted by a broader role. Applicable role conditions and deny assignments can still restrict access, so evaluate the full set rather than looking only at one assignment."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-003",
          "url": "https://ai200prep.com/questions/p-rbac-003/"
        },
        {
          "label": "Microsoft Learn · Azure RBAC",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "kind": "primary"
        },
        {
          "label": "Microsoft Learn · Deny assignments",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/deny-assignments",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview",
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/deny-assignments"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-rbac-007",
      "domain": 4,
      "title": "Blob read permission",
      "category": "identity-rbac",
      "question": "Which Azure data-plane role permits an app identity to read Blob content?",
      "answers": [
        "Storage Blob Data Reader. Assign it at the container, storage account or another appropriate scope to let an identity read blob data through Microsoft Entra authentication. A general resource Reader role views management information but does not itself grant Blob content access."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-007",
          "url": "https://ai200prep.com/questions/p-rbac-007/"
        },
        {
          "label": "Microsoft Learn · Blob data access roles",
          "url": "https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/storage/blobs/assign-azure-role-data-access"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-rbac-023",
      "domain": 4,
      "title": "Federated CI identity",
      "category": "identity-rbac",
      "question": "How can a CI pipeline authenticate to Azure without storing a long-lived client secret?",
      "answers": [
        "Use workload identity federation. Microsoft Entra trusts a token from the pipeline provider for a specific repository or environment, and exchanges it for an Azure access token. Assign the resulting identity the deployment roles it needs. No long-lived client secret has to be stored in the pipeline."
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
        },
        {
          "label": "Microsoft Learn · Workload identity federation",
          "url": "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-rbac-020",
      "domain": 4,
      "title": "Role conditions",
      "category": "identity-rbac",
      "question": "What can an Azure ABAC condition add to a supported role assignment?",
      "answers": [
        "Attribute-based access control (ABAC) conditions narrow the permission granted by a supported role assignment. For example, a Blob data role can be restricted to objects with particular tags. Conditions can use supported resource, request, identity or environment attributes; they do not grant access on their own."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-rbac-020",
          "url": "https://ai200prep.com/questions/p-rbac-020/"
        },
        {
          "label": "Microsoft Learn · Attribute conditions",
          "url": "https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-overview",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-overview"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-rbac-027",
      "domain": 4,
      "title": "Sign-in evidence",
      "category": "identity-rbac",
      "question": "What does an Entra sign-in log reveal about an authentication attempt?",
      "answers": [
        "It records the identity/application involved, time, source IP, success/failure and available authentication or Conditional Access details. Use it to investigate why a sign-in succeeded or failed. It describes authentication-related activity; use the target service’s logs as well to investigate later data-access authorization or application failures."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · rbac-027",
          "url": "https://ai200prep.com/questions/rbac-027/"
        },
        {
          "label": "Microsoft Learn · Entra sign-in logs",
          "url": "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-mon-003",
      "domain": 4,
      "title": "Metrics and logs",
      "category": "monitor",
      "question": "How do Azure Monitor metrics differ from logs?",
      "answers": [
        "Metrics are numeric time series, such as CPU percentage or request counts over time, suitable for trend charts and threshold alerts. Logs are timestamped records with fields that can be searched, joined and aggregated using KQL. An application can emit both: a metric for the failure rate and log records explaining individual failures."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-003",
          "url": "https://ai200prep.com/questions/mon-003/"
        },
        {
          "label": "Microsoft Learn · Metrics and logs",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/data-platform",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/data-platform"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-mon-009",
      "domain": 4,
      "title": "Route resource logs",
      "category": "monitor",
      "question": "What routes supported Azure resource platform logs to Log Analytics, Storage or Event Hubs?",
      "answers": [
        "A diagnostic setting on the Azure resource. Select the supported log categories/category groups and destinations, such as a Log Analytics workspace, Storage account or Event Hub. It routes the resource’s platform logs; it does not automatically add application-level tracing or collect every possible category without configuration."
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
        },
        {
          "label": "Microsoft Learn · Diagnostic settings",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/diagnostic-settings",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/data-collection/diagnostic-settings"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-mon-019",
      "domain": 4,
      "title": "Control-plane log table",
      "category": "monitor",
      "question": "Which Log Analytics table contains Azure Activity Log records when collected?",
      "answers": [
        "AzureActivity, after the Activity Log has been routed to that Log Analytics workspace. For example:\nAzureActivity | where TimeGenerated > ago(1h)\nThe Activity Log exists at the Azure subscription level by default, but its records are not automatically present in every workspace you open."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-019",
          "url": "https://ai200prep.com/questions/mon-019/"
        },
        {
          "label": "Microsoft Learn · Azure Activity Log",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/activity-log",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/activity-log"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-p-mon-017",
      "domain": 4,
      "title": "Telemetry daily cap",
      "category": "monitor",
      "question": "Why can a telemetry ingestion daily cap hide later incidents?",
      "answers": [
        "When the cap is reached, eligible log ingestion can stop until the collection period resets, creating gaps that hide later failures. Some data may be exempt and enforcement can overshoot, so the cap is not a precise spending limit. Use volume alerts and collection/sampling controls as well, rather than relying on a cap as the normal cost-management method."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-017",
          "url": "https://ai200prep.com/questions/p-mon-017/"
        },
        {
          "label": "Microsoft Learn · Daily ingestion caps",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/daily-cap",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/daily-cap"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-mon-021",
      "domain": 4,
      "title": "Cross-workspace KQL",
      "category": "monitor",
      "question": "Which KQL function references another Log Analytics workspace?",
      "answers": [
        "workspace(...). For example:\nworkspace(\"workspace-resource-id\").AppRequests | where TimeGenerated > ago(1h)\nReplace the string with a supported identifier for the other workspace. You need access to that workspace and must follow cross-resource query limits. The function selects remote log data; it does not copy it into the current workspace."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · mon-021",
          "url": "https://ai200prep.com/questions/mon-021/"
        },
        {
          "label": "Microsoft Learn · Cross-workspace queries",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cross-workspace-query",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cross-workspace-query"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    },
    {
      "id": "prep-mon-028",
      "domain": 4,
      "title": "Application topology",
      "category": "monitor",
      "question": "What does Application Insights Application Map visualize?",
      "answers": [
        "Application components and the calls between them, with available latency and failure information. Instrumentation, service names and propagated trace context help connect the components. Uninstrumented or unsampled calls may be missing from the map."
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
        },
        {
          "label": "Microsoft Learn · Application Map",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-map",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-map"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "rewritten",
        "note": "Made the answer direct and removed distracting detail."
      }
    },
    {
      "id": "prep-p-mon-013",
      "domain": 4,
      "title": "Custom metric table",
      "category": "monitor",
      "question": "Which Application Insights query table stores custom metric telemetry?",
      "answers": [
        "customMetrics in the Application Insights resource-query schema, or AppMetrics in workspace queries. This is standalone custom metric telemetry, such as an application-defined queue-length measurement. Numeric measurements attached to individual requests/events can instead live in those records’ measurement fields, so not every custom numeric property belongs in customMetrics."
      ],
      "origin": "prep",
      "legacyIds": [],
      "references": [
        {
          "label": "AI-200 Prep · p-mon-013",
          "url": "https://ai200prep.com/questions/p-mon-013/"
        },
        {
          "label": "Microsoft Learn · Application Insights table mapping",
          "url": "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete",
          "kind": "primary"
        }
      ],
      "review": {
        "date": "2026-10-28",
        "status": "clarified",
        "note": "Rewritten for a direct, self-contained explanation.",
        "sources": [
          "https://learn.microsoft.com/en-us/azure/azure-monitor/app/data-model-complete"
        ]
      },
      "clarityReview": {
        "date": "2026-10-28",
        "status": "retained",
        "note": "Question is specific; the answer directly explains it in accessible language."
      }
    }
  ]
};
