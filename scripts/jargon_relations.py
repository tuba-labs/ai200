"""Cross-platform comparisons are relationships, never tooltip-name aliases.

These are teaching comparisons of responsibilities and abstraction levels, not
migration promises. Each row includes a primary source and its important limit.
"""

PLATFORMS = {
    'azure': 'Azure', 'aws': 'AWS', 'gcp': 'Google Cloud',
    'kubernetes': 'Kubernetes', 'apache': 'Apache',
    'rabbitmq': 'RabbitMQ', 'other': 'Andre verktøy',
}
RELATION_KINDS = {
    'standard': 'Samme teknologi eller standard',
    'similar': 'Liknende funksjon',
    'partial': 'Delvis overlapp',
    'different': 'Annen mekanisme',
}

KAFKA = 'https://kafka.apache.org/intro/'
ACTIVEMQ = 'https://activemq.apache.org/'
ARTEMIS = 'https://artemis.apache.org/'
RABBIT = 'https://www.rabbitmq.com/docs'
RABBIT_QUEUES = 'https://www.rabbitmq.com/docs/queues'
RABBIT_STREAMS = 'https://www.rabbitmq.com/docs/streams'
RABBIT_ACK = 'https://www.rabbitmq.com/docs/confirms'
SQS = 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html'
SNS = 'https://docs.aws.amazon.com/sns/latest/dg/welcome.html'
MQ = 'https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html'
MSK = 'https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html'
KINESIS = 'https://docs.aws.amazon.com/streams/latest/dev/introduction.html'
EVENTBRIDGE = 'https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html'
PUBSUB = 'https://docs.cloud.google.com/pubsub/docs/overview'
EVENTARC = 'https://docs.cloud.google.com/eventarc/docs/overview'
GCP_KAFKA = 'https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/overview'
EH_KAFKA = 'https://learn.microsoft.com/en-us/azure/event-hubs/azure-event-hubs-apache-kafka-overview'
SERVICE_BUS = 'https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview'
EVENT_GRID = 'https://learn.microsoft.com/en-us/azure/event-grid/overview'
EKS = 'https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html'
GKE = 'https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview'
AWS_ROLE = 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html'
GCP_ACCOUNT = 'https://docs.cloud.google.com/iam/docs/service-account-overview'
K8S_ACCOUNT = 'https://kubernetes.io/docs/concepts/security/service-accounts/'
K8S_SECRET = 'https://kubernetes.io/docs/concepts/configuration/secret/'
CONFIGMAP = 'https://kubernetes.io/docs/concepts/configuration/configmap/'
TERRAFORM = 'https://developer.hashicorp.com/terraform/intro'
CLOUDFORMATION = 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html'
INFRA_MANAGER = 'https://docs.cloud.google.com/infrastructure-manager/docs/overview'

# Same tuple format as jargon_catalog.EXTRA. Only genuine alternate names belong
# in the alias field; e.g. EKS must never resolve to the AKS definition.
EXTRA_TERMS = [
    ('Apache Kafka', 'Kafka',
     'An event-streaming platform that stores records in partitioned, retained logs. Consumers track their read positions; reading a record does not remove it. Records can be read again while retention keeps them available.', KAFKA),
    ('ActiveMQ Classic', 'ActiveMQ|Apache ActiveMQ|Apache ActiveMQ Classic',
     'A Java-based message broker for queues and publish/subscribe messaging, with support for JMS and several network protocols. Classic and Apache Artemis are separate broker implementations; check the required client protocol and version.', ACTIVEMQ),
    ('Apache Artemis', 'Artemis|ActiveMQ Artemis|Apache ActiveMQ Artemis',
     'A message broker formerly known as ActiveMQ Artemis. It supports queue and publish/subscribe workloads through protocols such as AMQP and MQTT, and provides Jakarta Messaging clients. It is a separate implementation from ActiveMQ Classic.', ARTEMIS),
    ('RabbitMQ', 'Rabbit MQ',
     'A message broker that can route messages to queues for consumers to process. It also supports retained, replayable streams. Queue acknowledgements and stream read positions have different meanings; choose the model as well as the product.', RABBIT),
    ('Event bus', 'Event buses|Eventbus|Event-bus|Hendelsesbuss',
     'A channel or routing layer through which producers publish events and interested consumers receive them. It can run inside one application or connect separate services. The term alone does not specify durability, ordering or replay.', EVENTBRIDGE),
    ('Publish/subscribe', 'Pub/sub|Publish-subscribe|Pubsub|Publiser/abonner',
     'A messaging pattern in which a publisher sends to a topic or channel and interested subscriptions receive their own delivery. Multiple workers sharing one subscription can still compete for its messages. Products differ in routing, retention and acknowledgement rules.', PUBSUB),
    ('JMS', 'Jakarta Messaging|Java Message Service',
     'A standard Java API for sending and receiving messages through a provider. The former name is Java Message Service; current specifications use Jakarta Messaging. It is an application API, not a network protocol; compatible API versions and provider clients still matter.',
     'https://jakarta.ee/specifications/messaging/', 'Jakarta Messaging / Java Message Service'),
    ('Message acknowledgement', 'Acknowledgement|Acknowledgment|Message acknowledgment|Consumer acknowledgement|Consumer acknowledgment',
     'A signal about a message delivery. A consumer acknowledgement tells the broker that a delivery has been handled. A publisher confirm instead reports broker acceptance of a publication; it does not prove that a consumer processed it.', RABBIT_ACK),
    ('Event replay', 'Replay|Replaying events',
     'Reading previously stored events again, for example to rebuild a projection after fixing a bug. Replay requires retained data and a way to choose an earlier read position. Repeated processing must account for duplicate side effects.', KAFKA),
    ('RabbitMQ exchange', 'RabbitMQ exchanges|AMQP exchange',
     'A routing component in the RabbitMQ AMQP 0-9-1 model. Producers publish to an exchange, and its type and bindings determine which queues receive messages. An exchange is not itself the queue that consumers read.',
     'https://www.rabbitmq.com/docs/exchanges'),
    ('Amazon SQS', 'SQS|AWS SQS|Simple Queue Service',
     'A managed message queue service. A consumer receives a message, processes it, then deletes it; a visibility timeout hides it temporarily from other consumers. Standard queues can deliver duplicates, so handlers should be idempotent.', SQS, 'Amazon Simple Queue Service'),
    ('Amazon SNS', 'SNS|AWS SNS|Simple Notification Service',
     'A managed publish/subscribe service. A topic fans publications out to its subscriptions, which can include SQS queues and supported application endpoints. It is a different responsibility from the queue in which a worker holds pending work.', SNS, 'Amazon Simple Notification Service'),
    ('Amazon EventBridge', 'EventBridge|AWS EventBridge',
     'An event-routing service. Event buses accept events and rules select targets for delivery. EventBridge also offers other facilities such as Pipes and Scheduler; a bus should not be assumed to behave like a Kafka partitioned log.', EVENTBRIDGE),
    ('Amazon Kinesis Data Streams', 'Kinesis Data Streams',
     'A managed service for ingesting and reading streams of records. Records are distributed across shards, and consumers track their positions. Its streaming role resembles Event Hubs, while its APIs and scaling units are AWS-specific.', KINESIS),
    ('Amazon MSK', 'MSK|AWS MSK',
     'An AWS managed service for Apache Kafka. It manages Kafka infrastructure while applications use Kafka clients and concepts such as topics, partitions and consumer groups. Supported versions, operations and configuration depend on the service offering.', MSK, 'Amazon Managed Streaming for Apache Kafka'),
    ('Amazon MQ', 'AWS MQ',
     'A managed broker service with ActiveMQ Classic and RabbitMQ engine choices. The engine determines client protocols and messaging behavior. It is distinct from Amazon MSK, which manages Apache Kafka.', MQ),
    ('Google Cloud Pub/Sub', 'Cloud Pub/Sub|GCP Pub/Sub|Google Pub/Sub',
     'A managed messaging service with topics and subscriptions. Each subscription has its own delivery state, and subscribers acknowledge messages. Retention and seek can support replay when configured; its API and subscription model differ from Kafka.', PUBSUB),
    ('Eventarc', 'Google Eventarc|Google Cloud Eventarc',
     'A Google Cloud service for routing events to applications. Standard uses event triggers, while Advanced provides a central bus and additional routing facilities. Its role is closer to event routing than to a worker queue or Kafka log.', EVENTARC),
    ('Amazon EKS', 'EKS|AWS EKS',
     'An AWS managed Kubernetes service. Applications still use Kubernetes objects such as Pods, Deployments and Services. AWS-specific identity, networking, compute options and add-ons surround those shared Kubernetes APIs.', EKS, 'Amazon Elastic Kubernetes Service'),
    ('GKE', 'Google Kubernetes Engine|Google GKE',
     'Google Kubernetes Engine is Google Cloud\'s managed Kubernetes service. It uses Kubernetes APIs, with Google-specific cluster operations, identity and networking. Standard and Autopilot offer different degrees of infrastructure management.', GKE, 'Google Kubernetes Engine'),
    ('Kubernetes ServiceAccount', 'ServiceAccount|Kubernetes service account|K8s ServiceAccount',
     'A namespaced Kubernetes identity that a Pod can use to authenticate to the Kubernetes API and other configured services. Kubernetes permissions come from authorization rules. Access to Azure, AWS or Google Cloud additionally requires an appropriate workload-identity integration.', K8S_ACCOUNT),
    ('ConfigMap', 'Kubernetes ConfigMap|ConfigMaps',
     'A Kubernetes object for non-confidential configuration values. Pods can consume it through environment variables, command arguments or mounted files. It is a cluster configuration object, rather than a managed feature-flag service or secret vault.', CONFIGMAP),
    ('Kubernetes Secret', 'Kubernetes Secrets|K8s Secret|K8s Secrets',
     'A Kubernetes object for small confidential values such as credentials. Base64-encoded data is still readable by anyone who can access the object. Restrict access and configure appropriate storage encryption or use an external secret store.', K8S_SECRET),
    ('AWS IAM role', 'IAM role|AWS IAM roles',
     'An AWS identity with permissions that trusted principals can assume to obtain temporary credentials. IAM means Identity and Access Management. An IAM role combines a trust relationship with permission policies; it is not the same object as an Azure RBAC role definition.', AWS_ROLE),
    ('Google IAM service account', 'Google service account|GCP service account|Google Cloud service account',
     'A Google Cloud identity used by applications and workloads. IAM permissions control what it can access. A Google service account is a cloud identity; a Kubernetes ServiceAccount is a separate cluster identity that can be connected through workload federation.', GCP_ACCOUNT),
    ('Terraform', 'HashiCorp Terraform',
     'An infrastructure-as-code tool that uses provider plugins to manage resources from configuration. It plans changes and records resource state. It can target several clouds, but resource types, permissions and configurations remain provider-specific.', TERRAFORM),
    ('AWS CloudFormation', 'CloudFormation|Amazon CloudFormation',
     'An AWS infrastructure-as-code service. A JSON or YAML template describes resources managed together as a stack. It serves a similar deployment purpose to Azure Resource Manager and Bicep, with AWS-specific templates and resource types.', CLOUDFORMATION),
]


def relation(platform, name, kind, note, url, term=None):
    value = dict(platform=platform, name=name, kind=kind, note=note, url=url)
    if term:
        value['term'] = term
    return value


RELATIONS = {
    'aks': [
        relation('aws', 'Amazon EKS', 'standard', 'Both run Kubernetes APIs. AWS identity, networking and compute choices differ from AKS.', EKS, 'amazon-eks'),
        relation('gcp', 'GKE', 'standard', 'Both run Kubernetes APIs. Cluster management, networking and workload identity are provider-specific.', GKE, 'gke'),
    ],
    'kubernetes': [
        relation('azure', 'AKS', 'standard', 'Managed Kubernetes on Azure; Kubernetes is the underlying orchestration system.', 'https://learn.microsoft.com/en-us/azure/aks/what-is-aks', 'aks'),
        relation('aws', 'Amazon EKS', 'standard', 'Managed Kubernetes on AWS. Core objects are familiar, while cloud integrations differ.', EKS, 'amazon-eks'),
        relation('gcp', 'GKE', 'standard', 'Managed Kubernetes on Google Cloud, with its own operating modes and cloud integrations.', GKE, 'gke'),
    ],
    'amazon-eks': [relation('azure', 'AKS', 'standard', 'The corresponding managed Kubernetes service on Azure; provider integrations require adaptation.', 'https://learn.microsoft.com/en-us/azure/aks/what-is-aks', 'aks')],
    'gke': [relation('azure', 'AKS', 'standard', 'The corresponding managed Kubernetes service on Azure; identity, networking and operations differ.', 'https://learn.microsoft.com/en-us/azure/aks/what-is-aks', 'aks')],
    'acr': [
        relation('aws', 'Amazon ECR (Elastic Container Registry)', 'similar', 'Stores container images for later pulls. It is a registry, rather than the service that runs the containers.', 'https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html'),
        relation('gcp', 'Artifact Registry', 'similar', 'Stores container images and other artifacts. Repository formats, permissions and build integrations differ.', 'https://docs.cloud.google.com/artifact-registry/docs/overview'),
    ],
    'container-apps': [
        relation('aws', 'Amazon ECS on AWS Fargate', 'partial', 'A way to run containers without managing worker servers. ECS orchestrates workloads; Fargate supplies compute. Their configuration model differs from Container Apps.', 'https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-container-service.html'),
        relation('gcp', 'Cloud Run', 'similar', 'Managed container execution with services and jobs. Deployment, event integration, scaling and networking features differ.', 'https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run'),
        relation('kubernetes', 'Deployment + Service + autoscaler', 'partial', 'These cover some of the underlying responsibilities. Container Apps exposes an application model rather than unrestricted access to a Kubernetes cluster.', 'https://learn.microsoft.com/en-us/azure/container-apps/compare-options'),
    ],
    'app-service': [
        relation('aws', 'AWS Elastic Beanstalk', 'partial', 'Deploys application code into a managed application environment. Infrastructure ownership and deployment features differ from App Service.', 'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html'),
        relation('gcp', 'App Engine', 'partial', 'A managed application platform. Runtime environments, scaling and deployment versions differ from App Service plans and slots.', 'https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine'),
    ],
    'virtual-machine': [
        relation('aws', 'Amazon EC2 instance', 'similar', 'A virtual server with a guest operating system. Instance families, images, disks and networking are provider-specific.', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html'),
        relation('gcp', 'Compute Engine VM instance', 'similar', 'A virtual server, with Google-specific machine types and infrastructure configuration.', 'https://docs.cloud.google.com/compute/docs/instances'),
        relation('kubernetes', 'Node', 'partial', 'A worker role that can be filled by a virtual or physical machine. A Pod is a scheduled workload on a node.', 'https://kubernetes.io/docs/concepts/architecture/nodes/', 'node'),
    ],
    'bicep': [
        relation('aws', 'AWS CloudFormation', 'similar', 'Both declare cloud resources for deployment. CloudFormation uses AWS templates and stacks; Bicep targets Azure Resource Manager.', CLOUDFORMATION, 'aws-cloudformation'),
        relation('other', 'Terraform', 'similar', 'Another declarative infrastructure tool. Terraform uses providers and its own state; Bicep uses Azure Resource Manager deployments.', TERRAFORM, 'terraform'),
        relation('gcp', 'Infrastructure Manager', 'partial', 'A managed deployment service using Terraform configurations. It is a service, rather than a language equivalent to Bicep.', INFRA_MANAGER),
    ],
    'infrastructure-as-code': [
        relation('other', 'Terraform', 'similar', 'An implementation of infrastructure as code with provider plugins, planning and state.', TERRAFORM, 'terraform'),
        relation('aws', 'AWS CloudFormation', 'similar', 'AWS templates and stacks implement infrastructure as code for AWS resources.', CLOUDFORMATION, 'aws-cloudformation'),
        relation('gcp', 'Infrastructure Manager', 'similar', 'Managed execution of Terraform configurations for Google Cloud infrastructure.', INFRA_MANAGER),
        relation('kubernetes', 'Kubernetes manifest', 'partial', 'Declares desired Kubernetes objects. Managing cluster workloads and provisioning the surrounding cloud infrastructure are different scopes.', 'https://kubernetes.io/docs/concepts/overview/working-with-objects/', 'kubernetes-manifest'),
    ],
    'terraform': [relation('azure', 'Bicep', 'similar', 'Both describe desired infrastructure. Bicep targets Azure Resource Manager; Terraform uses providers and tracks state separately.', 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview', 'bicep')],
    'aws-cloudformation': [relation('azure', 'Bicep / Azure Resource Manager', 'similar', 'A comparable deployment responsibility. Templates, resource types, identity and lifecycle rules remain cloud-specific.', 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview', 'bicep')],
    'azure-subscription': [
        relation('aws', 'AWS account', 'partial', 'A broad resource, access and billing boundary. AWS accounts and Azure subscriptions have different identity and organizational structures.', 'https://docs.aws.amazon.com/accounts/latest/reference/manage-acct.html'),
        relation('gcp', 'Google Cloud project', 'partial', 'A common resource and IAM boundary linked to billing. A project is not an exact match for an Azure subscription or resource group.', 'https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects'),
    ],
    'resource-group': [
        relation('aws', 'AWS Resource Groups', 'partial', 'Often groups resources using tags or a CloudFormation stack. Azure resource groups are an explicit resource-management scope with their own lifecycle.', 'https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html'),
        relation('gcp', 'Google Cloud project', 'partial', 'Groups resources, but also serves as a broader API, IAM and billing-related boundary.', 'https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects'),
        relation('kubernetes', 'Namespace', 'partial', 'Groups and scopes many Kubernetes objects inside a cluster. It is neither a cloud billing boundary nor a group containing all cluster-scoped objects.', 'https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/', 'kubernetes-namespace'),
    ],
    'azure-database-for-postgresql': [
        relation('aws', 'Amazon RDS for PostgreSQL', 'standard', 'A managed service for the PostgreSQL engine. Available extensions, versions, high availability and administration differ.', 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html'),
        relation('gcp', 'Cloud SQL for PostgreSQL', 'standard', 'A managed PostgreSQL offering. Check supported extensions and operational limits before reusing a design.', 'https://docs.cloud.google.com/sql/docs/postgres/introduction'),
    ],
    'cosmos-db': [
        relation('aws', 'Amazon DynamoDB', 'partial', 'Overlaps in managed NoSQL use cases. Keys, query facilities, consistency choices and capacity units do not map one-to-one.', 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html'),
        relation('gcp', 'Firestore', 'partial', 'Overlaps in managed document storage. Data hierarchy, querying, transactions and billing have different models.', 'https://docs.cloud.google.com/firestore/native/docs/overview'),
    ],
    'azure-managed-redis': [
        relation('aws', 'Amazon ElastiCache', 'partial', 'Managed caching overlaps, but engine choice, supported commands, modules and operating limits must be checked.', 'https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html'),
        relation('gcp', 'Memorystore', 'partial', 'Managed in-memory data services overlap. Engine editions and capabilities such as vector search are not automatically the same.', 'https://docs.cloud.google.com/memorystore/docs'),
    ],
    'azure-function': [
        relation('aws', 'AWS Lambda', 'similar', 'Runs functions in response to invocations or events. Triggers, packaging, bindings and execution limits differ.', 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html'),
        relation('gcp', 'Cloud Run functions', 'similar', 'Runs function code through managed HTTP or event handling. Its deployment and trigger model differs from Azure Functions.', 'https://docs.cloud.google.com/functions/docs/concepts/overview'),
    ],
    'durable-orchestration': [
        relation('aws', 'AWS Step Functions', 'similar', 'Coordinates steps in a durable workflow. Step Functions state machines and Durable Functions replay-based orchestrator code use different programming models.', 'https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html'),
        relation('gcp', 'Workflows', 'similar', 'Orchestrates service calls as a workflow. Its definition language and execution model differ from Durable Functions orchestrator code.', 'https://docs.cloud.google.com/workflows/docs/overview'),
    ],
    'managed-identity': [
        relation('aws', 'AWS IAM role', 'similar', 'Workloads can obtain temporary credentials through a trusted role. Trust configuration and permission policies are AWS-specific.', AWS_ROLE, 'aws-iam-role'),
        relation('gcp', 'Google IAM service account', 'similar', 'A workload can use an attached or federated cloud identity. Identity attachment, token exchange and IAM bindings differ.', GCP_ACCOUNT, 'google-iam-service-account'),
        relation('kubernetes', 'ServiceAccount', 'partial', 'Provides a Kubernetes workload identity. Cloud access also requires a federation or identity integration and cloud permissions.', K8S_ACCOUNT, 'kubernetes-serviceaccount'),
    ],
    'aws-iam-role': [relation('azure', 'Managed identity + role assignment', 'partial', 'Covers workload authentication and authorization through separate Azure objects. An Azure role definition alone is not an assumable identity.', 'https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview', 'managed-identity')],
    'google-iam-service-account': [relation('azure', 'Managed identity', 'similar', 'Both can identify workloads without embedding a long-lived password. Permissions and identity lifecycle follow different IAM models.', 'https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview', 'managed-identity')],
    'kubernetes-serviceaccount': [
        relation('azure', 'AKS workload identity', 'partial', 'Can federate a Kubernetes ServiceAccount with a cloud identity. The Kubernetes account alone does not grant Azure access.', 'https://learn.microsoft.com/en-us/azure/aks/workload-identity-overview'),
        relation('aws', 'EKS Pod Identity', 'partial', 'Associates eligible Kubernetes workloads with IAM roles. Kubernetes authorization and AWS permissions remain separate.', 'https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html'),
        relation('gcp', 'Workload Identity Federation for GKE', 'partial', 'Connects Kubernetes workload identities to Google Cloud authorization. A Kubernetes ServiceAccount is not a Google service account.', 'https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity'),
    ],
    'rbac': [
        relation('kubernetes', 'Role / ClusterRole and bindings', 'similar', 'Roles describe Kubernetes permissions; bindings grant them to subjects. These objects do not assign Azure resource permissions.', 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/'),
        relation('gcp', 'IAM roles and allow-policy bindings', 'similar', 'Roles collect permissions and bindings connect principals to roles. Scope and policy inheritance differ.', 'https://docs.cloud.google.com/iam/docs/overview'),
        relation('aws', 'IAM policies', 'partial', 'Policies grant or deny actions under AWS evaluation rules. An assumable IAM role is an identity as well as a policy attachment point.', 'https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html'),
    ],
    'key-vault': [
        relation('aws', 'Secrets Manager + AWS KMS', 'partial', 'Secrets Manager stores secret values; Key Management Service manages cryptographic keys. These are separate services covering parts of Key Vault.', 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html'),
        relation('gcp', 'Secret Manager + Cloud KMS', 'partial', 'Secret values and cryptographic-key operations are split between services. Their permissions and lifecycles differ.', 'https://docs.cloud.google.com/secret-manager/docs/overview'),
        relation('kubernetes', 'Kubernetes Secret', 'partial', 'A cluster object consumed by workloads. It does not by itself provide an external vault or managed cryptographic-key service.', K8S_SECRET, 'kubernetes-secret'),
    ],
    'key-vault-secret': [
        relation('aws', 'AWS Secrets Manager secret', 'similar', 'Stores a confidential value with access control and versions. Rotation configuration and retrieval APIs differ.', 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html'),
        relation('gcp', 'Secret Manager secret version', 'similar', 'Stores versions of secret payloads with IAM-based access. Naming and lifecycle rules differ.', 'https://docs.cloud.google.com/secret-manager/docs/overview'),
    ],
    'cryptographic-key': [
        relation('aws', 'AWS KMS key', 'similar', 'Managed keys support operations such as encryption and signing, depending on key type. A key is not a stored application password.', 'https://docs.aws.amazon.com/kms/latest/developerguide/overview.html'),
        relation('gcp', 'Cloud KMS key', 'similar', 'Manages cryptographic-key versions and operations. Algorithms, protection levels and access configuration differ.', 'https://docs.cloud.google.com/kms/docs/key-management-service'),
    ],
    'app-configuration': [
        relation('aws', 'AWS AppConfig', 'similar', 'Centralized application configuration and feature-flag delivery. Deployment, validation and refresh facilities differ.', 'https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html'),
        relation('kubernetes', 'ConfigMap', 'partial', 'Supplies non-secret configuration to Pods. It does not provide all the dynamic delivery and feature-management capabilities of App Configuration.', CONFIGMAP, 'configmap'),
    ],
    'configmap': [relation('azure', 'App Configuration', 'partial', 'Also provides non-secret settings, with additional managed configuration and feature-management facilities outside the cluster.', 'https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview', 'app-configuration')],
    'kubernetes-secret': [relation('azure', 'Key Vault secret', 'partial', 'A managed external secret with its own access policies and lifecycle. CSI mounting or another integration is needed to expose it to a Pod.', 'https://learn.microsoft.com/en-us/azure/key-vault/secrets/about-secrets', 'key-vault-secret')],
    'vnet': [
        relation('aws', 'Amazon VPC (Virtual Private Cloud)', 'similar', 'A regional private network with subnets and routing. Addressing and networking features use AWS-specific objects.', 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html'),
        relation('gcp', 'VPC network', 'partial', 'Google Cloud VPC networks are global and contain regional subnets. Azure VNets are regional, so the scope differs.', 'https://docs.cloud.google.com/vpc/docs/vpc'),
    ],
    'private-endpoint': [
        relation('aws', 'AWS PrivateLink interface endpoint', 'similar', 'Private network access to a supported service through endpoint interfaces. DNS, supported services and configuration differ.', 'https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html'),
        relation('gcp', 'Private Service Connect endpoint', 'similar', 'Private connectivity to supported service producers. The endpoint, service publication and DNS models are provider-specific.', 'https://docs.cloud.google.com/vpc/docs/private-service-connect'),
    ],
    'nsg': [
        relation('aws', 'Security group', 'partial', 'Filters network traffic for associated resources. Attachment scopes and rule semantics differ from Azure Network Security Groups.', 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html'),
        relation('gcp', 'VPC firewall rules', 'partial', 'Controls allowed and denied traffic in a VPC. Targets, priorities and policy features differ from NSG rules.', 'https://docs.cloud.google.com/firewall/docs/firewalls'),
        relation('kubernetes', 'NetworkPolicy', 'partial', 'Controls selected Pod traffic through a supporting network implementation. It operates at a different scope from cloud network security groups.', 'https://kubernetes.io/docs/concepts/services-networking/network-policies/', 'networkpolicy'),
    ],
    'azure-monitor': [
        relation('aws', 'Amazon CloudWatch', 'similar', 'Collects and analyzes operational metrics and logs. Data models, queries, agents and alerting configuration differ.', 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html'),
        relation('gcp', 'Cloud Monitoring + Cloud Logging', 'similar', 'Google Cloud splits monitoring and log management across connected services. Queries and instrumentation setup differ.', 'https://docs.cloud.google.com/monitoring/docs/monitoring-overview'),
    ],
    'application-insights': [
        relation('aws', 'AWS X-Ray', 'partial', 'Distributed tracing overlaps with one part of Application Insights. Application monitoring includes more than traces.', 'https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html'),
        relation('gcp', 'Cloud Trace', 'partial', 'Provides distributed trace analysis. Logs, metrics and application views use additional observability services.', 'https://docs.cloud.google.com/trace/docs/overview'),
    ],
    'event-grid': [
        relation('aws', 'Amazon EventBridge event bus', 'similar', 'Routes events from producers to selected targets. Filtering, event formats, delivery and retention features differ.', EVENTBRIDGE, 'amazon-eventbridge'),
        relation('gcp', 'Eventarc', 'similar', 'Routes events to application destinations. Trigger and bus features depend on the Eventarc offering.', EVENTARC, 'eventarc'),
        relation('other', 'Event bus', 'similar', 'The general routing concept. An event bus name alone says nothing about durable logs or replay.', EVENTBRIDGE, 'event-bus'),
    ],
    'event-bus': [
        relation('azure', 'Event Grid', 'similar', 'Provides managed event distribution. Delivery and routing capabilities depend on the selected resource and event model.', EVENT_GRID, 'event-grid'),
        relation('aws', 'Amazon EventBridge', 'similar', 'An event bus accepts events and routes matching events to configured targets.', EVENTBRIDGE, 'amazon-eventbridge'),
        relation('gcp', 'Eventarc Advanced bus', 'similar', 'Provides a central event bus with routing configuration; Eventarc Standard instead centers on triggers.', EVENTARC, 'eventarc'),
        relation('apache', 'Apache Kafka', 'different', 'A retained, partitioned log can carry events, but its consumers read positions in logs rather than bus rules directly delivering to targets.', KAFKA, 'apache-kafka'),
    ],
    'amazon-eventbridge': [relation('azure', 'Event Grid', 'similar', 'A comparable event-routing responsibility. Rules, filters, event schemas and delivery facilities differ.', EVENT_GRID, 'event-grid')],
    'eventarc': [relation('azure', 'Event Grid', 'similar', 'A comparable event-routing responsibility. Resource models, supported event sources and delivery configuration differ.', EVENT_GRID, 'event-grid')],
    'event-hubs': [
        relation('apache', 'Apache Kafka', 'partial', 'Both use partitioned retained logs. Event Hubs provides a Kafka-compatible endpoint; supported APIs and features still need checking.', EH_KAFKA, 'apache-kafka'),
        relation('aws', 'Kinesis Data Streams', 'similar', 'Also ingests and retains streams for consumers. Shards, client APIs and scaling differ from Event Hubs partitions and capacity.', KINESIS, 'amazon-kinesis-data-streams'),
        relation('aws', 'Amazon MSK', 'partial', 'Runs managed Apache Kafka. This differs from using the Kafka protocol endpoint exposed by Event Hubs.', MSK, 'amazon-msk'),
        relation('gcp', 'Managed Service for Apache Kafka', 'partial', 'Runs managed Kafka clusters. It shares Kafka concepts, with different infrastructure, operations and service limits.', GCP_KAFKA),
    ],
    'apache-kafka': [
        relation('azure', 'Event Hubs Kafka endpoint', 'partial', 'Accepts Kafka-protocol clients, with a documented feature mapping. Protocol compatibility does not make Event Hubs a Kafka broker implementation.', EH_KAFKA, 'event-hubs'),
        relation('aws', 'Amazon MSK', 'standard', 'A managed offering of Apache Kafka. Check supported Kafka versions, settings and operational features.', MSK, 'amazon-msk'),
        relation('gcp', 'Managed Service for Apache Kafka', 'standard', 'A managed offering of Apache Kafka, with Google-specific cluster operation and integration.', GCP_KAFKA),
        relation('rabbitmq', 'RabbitMQ Streams', 'partial', 'Also retains records for non-destructive reads and replay. Protocols, topology and consumer behavior differ from Kafka.', RABBIT_STREAMS, 'rabbitmq'),
    ],
    'amazon-msk': [relation('apache', 'Apache Kafka', 'standard', 'MSK manages Kafka infrastructure; Kafka remains the event-streaming technology used by clients.', KAFKA, 'apache-kafka')],
    'amazon-kinesis-data-streams': [relation('azure', 'Event Hubs', 'similar', 'Both provide managed stream ingestion with independent readers. Kinesis shards and AWS APIs differ from the Azure resource model.', 'https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about', 'event-hubs')],
    'service-bus': [
        relation('apache', 'ActiveMQ Classic', 'similar', 'Overlapping queue and publish/subscribe broker workloads. Client APIs, transactions, routing and operational configuration are product-specific.', ACTIVEMQ, 'activemq-classic'),
        relation('apache', 'Apache Artemis', 'similar', 'Another broker for queued work and publish/subscribe. Its routing, clients and transactions require a separate comparison with Service Bus.', ARTEMIS, 'apache-artemis'),
        relation('rabbitmq', 'RabbitMQ queues', 'similar', 'Workers process queued deliveries and acknowledge them. Exchange routing, acknowledgement details and protocols differ.', RABBIT_QUEUES, 'rabbitmq'),
        relation('aws', 'Amazon SQS + Amazon SNS', 'partial', 'SQS handles queued work; SNS adds fan-out. Service Bus topics and subscriptions combine responsibilities with a different feature and API model.', SQS, 'amazon-sqs'),
        relation('gcp', 'Google Cloud Pub/Sub', 'partial', 'Topics and subscriptions overlap with asynchronous messaging. Settlement, ordering and transactional features require separate comparison.', PUBSUB, 'google-cloud-pub-sub'),
    ],
    'activemq-classic': [
        relation('azure', 'Service Bus', 'similar', 'A managed alternative for many queue and topic use cases. Migrating still requires checking protocols, SDKs and messaging features.', SERVICE_BUS, 'service-bus'),
        relation('aws', 'Amazon MQ for ActiveMQ', 'standard', 'Managed hosting for the ActiveMQ Classic engine, with supported engine versions and managed-service constraints.', MQ, 'amazon-mq'),
        relation('apache', 'Apache Artemis', 'similar', 'A separate broker implementation, formerly ActiveMQ Artemis. Shared standards do not imply identical configuration or behavior.', ARTEMIS, 'apache-artemis'),
    ],
    'apache-artemis': [
        relation('azure', 'Service Bus', 'similar', 'Overlaps in queue and publish/subscribe workloads. AMQP support alone does not imply identical APIs, routing or transaction capabilities.', SERVICE_BUS, 'service-bus'),
        relation('apache', 'ActiveMQ Classic', 'similar', 'A separate implementation with its own architecture, configuration and supported clients.', ACTIVEMQ, 'activemq-classic'),
        relation('aws', 'Amazon MQ', 'partial', 'Its documented engine choices are ActiveMQ Classic and RabbitMQ. Do not assume its ActiveMQ option means Artemis.', MQ, 'amazon-mq'),
    ],
    'rabbitmq': [
        relation('azure', 'Service Bus', 'similar', 'Queues and topic subscriptions cover related broker use cases. RabbitMQ exchanges, client protocols and settlement APIs differ.', SERVICE_BUS, 'service-bus'),
        relation('aws', 'Amazon MQ for RabbitMQ', 'standard', 'Managed hosting for RabbitMQ, subject to supported versions and service configuration.', MQ, 'amazon-mq'),
        relation('apache', 'Apache Kafka', 'partial', 'RabbitMQ Streams shares retained-log ideas. Traditional RabbitMQ queues use delivery acknowledgements instead; selecting the data model matters.', RABBIT_STREAMS, 'apache-kafka'),
    ],
    'amazon-mq': [
        relation('apache', 'ActiveMQ Classic', 'standard', 'One available broker engine; it is distinct from Apache Artemis.', MQ, 'activemq-classic'),
        relation('rabbitmq', 'RabbitMQ', 'standard', 'Another engine choice, with its own protocols and configuration.', MQ, 'rabbitmq'),
        relation('azure', 'Service Bus', 'similar', 'A managed broker service with a different resource and client model, rather than hosting those same broker engines.', SERVICE_BUS, 'service-bus'),
    ],
    'message-broker': [
        relation('apache', 'ActiveMQ Classic', 'similar', 'A broker implementation that mediates messages between applications using supported protocols and routing rules.', ACTIVEMQ, 'activemq-classic'),
        relation('apache', 'Apache Artemis', 'similar', 'A separate broker implementation with protocol-independent addressing, queues and multiple supported client protocols.', ARTEMIS, 'apache-artemis'),
        relation('rabbitmq', 'RabbitMQ', 'similar', 'A broker with exchange/queue routing as well as stream facilities.', RABBIT, 'rabbitmq'),
        relation('apache', 'Kafka broker', 'partial', 'A server in a Kafka cluster stores topic partitions. The word broker does not imply traditional per-message queue settlement.', KAFKA, 'apache-kafka'),
    ],
    'message-queue': [
        relation('aws', 'Amazon SQS queue', 'similar', 'Consumers receive and delete work messages. Visibility timeout and deletion serve a role comparable to lock and completion.', SQS, 'amazon-sqs'),
        relation('rabbitmq', 'Classic / quorum queue', 'similar', 'Acknowledged deliveries can be removed. Redelivery, competing consumers and ordering depend on configuration and processing.', RABBIT_QUEUES, 'rabbitmq'),
        relation('apache', 'Kafka topic partition', 'different', 'Consumers advance offsets in a retained log. A read or offset commit does not delete that individual record.', KAFKA, 'apache-kafka'),
    ],
    'publish-subscribe': [
        relation('azure', 'Service Bus topic + subscriptions', 'similar', 'Each matching subscription receives its own copy for independent consumption.', 'https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions', 'service-bus-topic'),
        relation('aws', 'Amazon SNS topic + subscriptions', 'similar', 'Fan-out can deliver to separate SQS queues or other supported destinations.', SNS, 'amazon-sns'),
        relation('gcp', 'Pub/Sub topic + subscriptions', 'similar', 'Each subscription has separate delivery state. Workers sharing one subscription compete within that subscription.', PUBSUB, 'google-cloud-pub-sub'),
        relation('rabbitmq', 'Exchange + bound queues', 'similar', 'Bindings and exchange type determine fan-out. Separate queues provide independent deliveries; an exchange is not the storage queue.', 'https://www.rabbitmq.com/docs/exchanges', 'rabbitmq-exchange'),
    ],
    'service-bus-topic': [
        relation('aws', 'SNS topic + SQS subscriptions', 'partial', 'Splits fan-out and durable worker queues across services. Filtering and reliability facilities are not identical.', SNS, 'amazon-sns'),
        relation('rabbitmq', 'Exchange + queues', 'partial', 'Routing rules send messages into queues. Exchange types and bindings differ from Service Bus subscription filters.', 'https://www.rabbitmq.com/docs/exchanges', 'rabbitmq-exchange'),
        relation('apache', 'Kafka topic', 'different', 'A partitioned retained log, rather than a set of subscription queues. Kafka consumer groups track positions in that log.', KAFKA, 'apache-kafka'),
    ],
    'topic': [
        relation('apache', 'Kafka topic', 'partial', 'A named, partitioned retained log. Consumers read offsets; topic does not imply one queue per subscription.', KAFKA, 'apache-kafka'),
        relation('azure', 'Service Bus topic', 'partial', 'Routes publications to subscription queues. Its storage and settlement model differs from Kafka topics.', SERVICE_BUS, 'service-bus-topic'),
        relation('rabbitmq', 'Topic exchange', 'different', 'A routing component matching routing keys against bindings. It is neither a Kafka log nor the consumer queue.', 'https://www.rabbitmq.com/docs/exchanges', 'rabbitmq-exchange'),
    ],
    'amazon-sqs': [relation('azure', 'Service Bus queue', 'similar', 'Both distribute pending work to consumers. Visibility timeout/delete and PeekLock/Complete use different APIs and have different features.', SERVICE_BUS, 'service-bus')],
    'amazon-sns': [relation('azure', 'Service Bus topic', 'partial', 'Both support fan-out. With SNS, SQS can supply independent work queues; Service Bus uses its own subscription entities.', SERVICE_BUS, 'service-bus-topic')],
    'google-cloud-pub-sub': [
        relation('azure', 'Service Bus topics and subscriptions', 'partial', 'Overlapping asynchronous fan-out and subscription delivery. Ordering, acknowledgement and transaction models differ.', SERVICE_BUS, 'service-bus-topic'),
        relation('apache', 'Apache Kafka', 'partial', 'Both support multiple consumers of publications, but Kafka uses partitioned logs and offsets. Pub/Sub uses subscription delivery state, with configured retention and seek for replay.', PUBSUB, 'apache-kafka'),
    ],
    'consumer-group': [
        relation('apache', 'Kafka consumer group', 'similar', 'Provides independent consumption progress and divides partitions among group members. Rebalancing and position management use Kafka protocols.', KAFKA, 'apache-kafka'),
        relation('gcp', 'Pub/Sub subscription', 'partial', 'Provides independent delivery state for a group of subscribers. It is a subscription entity, not Kafka partition assignment.', PUBSUB, 'google-cloud-pub-sub'),
    ],
    'event-offset': [relation('apache', 'Kafka offset', 'similar', 'A record position inside one partition, not a globally unique event number or a count of successfully processed business operations.', KAFKA, 'apache-kafka')],
    'checkpoint': [relation('apache', 'Kafka committed offset', 'similar', 'Records progress for a consumer group. Saving progress must be coordinated with processing to handle failures and duplicate effects.', 'https://kafka.apache.org/41/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html', 'apache-kafka')],
    'message-settlement': [
        relation('aws', 'SQS DeleteMessage / visibility timeout', 'similar', 'Deleting acknowledges completion; allowing visibility to expire makes a message available again. These are different APIs from Service Bus settlement.', 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html', 'amazon-sqs'),
        relation('rabbitmq', 'Consumer ack / nack / reject', 'similar', 'Acknowledges or rejects a delivery. Requeueing and dead-letter routing depend on broker configuration.', RABBIT_ACK, 'message-acknowledgement'),
        relation('apache', 'Kafka offset commit', 'different', 'Saves a group position in a partition. It does not individually complete and remove a message from the retained log.', KAFKA, 'apache-kafka'),
    ],
    'message-acknowledgement': [
        relation('azure', 'Service Bus Complete', 'similar', 'Completes a locked delivery after processing. Lock expiry and redelivery must still be handled.', 'https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-transfers-locks-settlement', 'message-settlement'),
        relation('apache', 'Kafka offset commit', 'different', 'Saves consumption progress for a partition rather than deleting an acknowledged delivery. Business-side effects still need failure handling.', KAFKA, 'apache-kafka'),
    ],
    'dead-letter-queue': [
        relation('aws', 'SQS dead-letter queue', 'similar', 'A redrive policy can send repeatedly received messages to another queue. Delivery counts, retention and recovery configuration differ.', 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html'),
        relation('rabbitmq', 'Dead-letter exchange', 'partial', 'Routes dead-lettered messages to bound queues. The exchange routes; the destination queue stores the messages.', 'https://www.rabbitmq.com/docs/dlx', 'rabbitmq-exchange'),
        relation('gcp', 'Pub/Sub dead-letter topic', 'similar', 'Can forward unacknowledged messages after approximately the configured delivery-attempt threshold. A subscription is needed to consume the forwarded messages.', 'https://docs.cloud.google.com/pubsub/docs/dead-letter-topics'),
    ],
    'event-replay': [
        relation('azure', 'Event Hubs earlier offset / checkpoint', 'similar', 'Consumers can start earlier within retained data. Moving a read position does not undo previous business effects.', 'https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features', 'event-hubs'),
        relation('rabbitmq', 'RabbitMQ Streams', 'similar', 'Retained streams allow repeated reads. Ordinary acknowledged queue messages do not provide the same replay model.', RABBIT_STREAMS, 'rabbitmq'),
        relation('gcp', 'Pub/Sub seek', 'similar', 'Can move subscription state to a supported snapshot or time, subject to retention and configuration.', 'https://docs.cloud.google.com/pubsub/docs/replay-overview', 'google-cloud-pub-sub'),
    ],
    'amqp': [
        relation('rabbitmq', 'AMQP 0-9-1 and AMQP 1.0', 'different', 'These are different wire protocols despite their shared name. A client for one version cannot be assumed to work with the other.', 'https://www.rabbitmq.com/docs/protocols'),
        relation('apache', 'JMS / Jakarta Messaging', 'different', 'A Java API rather than a wire protocol. A JMS provider can use AMQP or another transport; API support and network compatibility are separate checks.', 'https://jakarta.ee/specifications/messaging/', 'jms'),
    ],
    'jms': [relation('azure', 'Service Bus JMS support', 'partial', 'Service Bus offers a documented JMS compatibility surface. Supported JMS versions, features and service tiers must be checked.', 'https://learn.microsoft.com/en-us/azure/service-bus-messaging/jms-developer-guide')],
}
