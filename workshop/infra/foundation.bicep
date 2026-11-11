targetScope = 'resourceGroup'
param location string
@minLength(9)
@maxLength(14)
param stem string
param operatorId string

resource egressIp 'Microsoft.Network/publicIPAddresses@2024-05-01' = {
  name: '${stem}-egress'
  location: location
  sku: { name: 'Standard' }
  properties: { publicIPAllocationMethod: 'Static' }
}
resource nat 'Microsoft.Network/natGateways@2024-05-01' = {
  name: '${stem}-nat'
  location: location
  sku: { name: 'Standard' }
  properties: { publicIpAddresses: [{ id: egressIp.id }], idleTimeoutInMinutes: 10 }
}
resource network 'Microsoft.Network/virtualNetworks@2024-05-01' = {
  name: '${stem}-vnet'
  location: location
  properties: {
    addressSpace: { addressPrefixes: ['10.70.0.0/16'] }
    subnets: [
      { name: 'aks', properties: { addressPrefix: '10.70.0.0/22', defaultOutboundAccess: false, natGateway: { id: nat.id } } }
      {
        name: 'functions'
        properties: {
          addressPrefix: '10.70.8.0/24'
          defaultOutboundAccess: false
          natGateway: { id: nat.id }
          delegations: [{ name: 'flex', properties: { serviceName: 'Microsoft.App/environments' } }]
        }
      }
      {
        name: 'postgres'
        properties: {
          addressPrefix: '10.70.9.0/24'
          natGateway: { id: nat.id }
          delegations: [{ name: 'postgres', properties: { serviceName: 'Microsoft.DBforPostgreSQL/flexibleServers' } }]
        }
      }
    ]
  }
}
resource dns 'Microsoft.Network/privateDnsZones@2020-06-01' = {
  name: '${stem}.postgres.database.azure.com'
  location: 'global'
}
resource link 'Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01' = {
  parent: dns
  name: 'workshop'
  location: 'global'
  properties: { registrationEnabled: false, virtualNetwork: { id: network.id } }
}
resource identities 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = [for suffix in ['products', 'embedder', 'chat', 'cluster']: {
  name: '${stem}-${suffix}'
  location: location
}]
resource networkRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  // AKS must read/use both the VNet and its separate NAT/public-IP resources.
  // Keep this network-management role inside the workshop resource group.
  name: guid(resourceGroup().id, identities[3].id, 'network')
  properties: {
    principalId: identities[3].properties.principalId
    principalType: 'ServicePrincipal'
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '4d97b98b-1d4f-4787-a291-c67834d212e7')
  }
}
resource acr 'Microsoft.ContainerRegistry/registries@2023-07-01' = {
  name: '${stem}acr'
  location: location
  sku: { name: 'Basic' }
  properties: { adminUserEnabled: false }
}
resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: '${stem}st'
  location: location
  kind: 'StorageV2'
  sku: { name: 'Standard_LRS' }
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: false
    minimumTlsVersion: 'TLS1_2'
    supportsHttpsTrafficOnly: true
  }
}
resource blobService 'Microsoft.Storage/storageAccounts/blobServices@2023-05-01' = { parent: storage, name: 'default' }
resource containers 'Microsoft.Storage/storageAccounts/blobServices/containers@2023-05-01' = [for container in ['manuals', 'deployments', 'event-deadletters']: {
  parent: blobService
  name: container
  properties: { publicAccess: 'None' }
}]
resource bus 'Microsoft.ServiceBus/namespaces@2024-01-01' = {
  name: '${stem}-bus'
  location: location
  sku: { name: 'Standard', tier: 'Standard' }
  properties: { disableLocalAuth: true, minimumTlsVersion: '1.2' }
}
resource queues 'Microsoft.ServiceBus/namespaces/queues@2024-01-01' = [for queue in ['chat-requests', 'chat-replies']: {
  parent: bus
  name: queue
  properties: {
    lockDuration: 'PT1M'
    maxDeliveryCount: 5
    defaultMessageTimeToLive: 'PT8M'
    deadLetteringOnMessageExpiration: true
    enablePartitioning: false
    requiresDuplicateDetection: false
  }
}]
resource vault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: '${stem}-kv'
  location: location
  properties: {
    tenantId: tenant().tenantId
    sku: { family: 'A', name: 'standard' }
    enableRbacAuthorization: true
    enableSoftDelete: true
    softDeleteRetentionInDays: 7
    enablePurgeProtection: false
    accessPolicies: []
  }
}
resource config 'Microsoft.AppConfiguration/configurationStores@2024-05-01' = {
  name: '${stem}-cfg'
  location: location
  sku: { name: 'standard' }
  properties: { disableLocalAuth: true, softDeleteRetentionInDays: 1, enablePurgeProtection: false }
}
resource vaultOperator 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(vault.id, operatorId, 'secrets-officer')
  scope: vault
  properties: {
    principalId: operatorId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b86a8fe4-44ce-4948-aee5-eccb2c155cd7')
  }
}
resource configOperator 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(config.id, operatorId, 'config-owner')
  scope: config
  properties: {
    principalId: operatorId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '5ae67dd6-50cb-40e7-96ff-dc2bfa4b606b')
  }
}
// The host must reach its deployment and host storage before code is published.
resource functionStorageRoles 'Microsoft.Authorization/roleAssignments@2022-04-01' = [for role in [
  'b7e6dc6d-f1e8-4753-8033-0f276bb0955b' // Storage Blob Data Owner
  '974c5e8b-45b9-4653-ba55-5f855dd0fb88' // Storage Queue Data Contributor
  '17d1049b-9a84-46fb-8f53-869881c3d3ab' // Storage Account Contributor
]: {
  name: guid(storage.id, identities[1].id, role)
  scope: storage
  properties: {
    principalId: identities[1].properties.principalId
    principalType: 'ServicePrincipal'
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', role)
  }
}]
resource logs 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: '${stem}-logs'
  location: location
  properties: { sku: { name: 'PerGB2018' }, retentionInDays: 30 }
}
resource insights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${stem}-insights'
  location: location
  kind: 'web'
  properties: { Application_Type: 'web', WorkspaceResourceId: logs.id, DisableLocalAuth: true }
}
resource metricsRole 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(insights.id, identities[1].id, 'metrics')
  scope: insights
  properties: {
    principalId: identities[1].properties.principalId
    principalType: 'ServicePrincipal'
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '3913510d-42f4-4e42-8a64-420c390055eb')
  }
}
resource storageInspector 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storage.id, operatorId, 'blob-reader')
  scope: storage
  properties: {
    principalId: operatorId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '2a2b9908-6ea1-4ae2-8e65-a410df84e7d1')
  }
}
resource queueInspector 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(storage.id, operatorId, 'queue-reader')
  scope: storage
  properties: {
    principalId: operatorId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '19e7f393-937e-4f77-808e-94535e297925')
  }
}
output identities array = [for (suffix, i) in ['products', 'embedder', 'chat', 'cluster']: {
  name: suffix
  id: identities[i].id
  clientId: identities[i].properties.clientId
  principalId: identities[i].properties.principalId
}]
output networkId string = network.id
output storageId string = storage.id
output configEndpoint string = config.properties.endpoint
