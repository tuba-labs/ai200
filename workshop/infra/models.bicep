targetScope = 'resourceGroup'
param location string
param name string
param chatModel string
param chatVersion string
param chatCapacity int
param embeddingModel string
param embeddingVersion string
param embeddingCapacity int
param modelSku string
param operatorId string

resource models 'Microsoft.CognitiveServices/accounts@2024-10-01' = {
  name: name
  location: location
  kind: 'OpenAI'
  sku: { name: 'S0' }
  properties: {
    customSubDomainName: name
    disableLocalAuth: true
    publicNetworkAccess: 'Enabled'
  }
}
resource chat 'Microsoft.CognitiveServices/accounts/deployments@2024-10-01' = {
  parent: models
  name: 'chat'
  sku: { name: modelSku, capacity: chatCapacity }
  properties: {
    model: { format: 'OpenAI', name: chatModel, version: chatVersion }
    versionUpgradeOption: 'NoAutoUpgrade'
  }
}
resource embedding 'Microsoft.CognitiveServices/accounts/deployments@2024-10-01' = {
  parent: models
  name: 'embedding'
  sku: { name: modelSku, capacity: embeddingCapacity }
  properties: {
    model: { format: 'OpenAI', name: embeddingModel, version: embeddingVersion }
    versionUpgradeOption: 'NoAutoUpgrade'
  }
  // Serialize model changes on the same account to avoid concurrent-operation conflicts.
  dependsOn: [chat]
}
resource access 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(models.id, operatorId, 'model-tester')
  scope: models
  properties: {
    principalId: operatorId
    roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '5e0bd9bd-7b93-4f28-af87-19fc36ad61bd')
  }
}
output endpoint string = models.properties.endpoint
output resourceId string = models.id
