targetScope = 'resourceGroup'
param location string
@minLength(9)
@maxLength(14)
param stem string
param aksVmSize string
param aksNodes int = 1

resource network 'Microsoft.Network/virtualNetworks@2024-05-01' existing = { name: '${stem}-vnet' }
resource clusterIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' existing = { name: '${stem}-cluster' }
resource embedderIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' existing = { name: '${stem}-embedder' }
resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' existing = { name: '${stem}st' }
resource config 'Microsoft.AppConfiguration/configurationStores@2024-05-01' existing = { name: '${stem}-cfg' }
resource insights 'Microsoft.Insights/components@2020-02-02' existing = { name: '${stem}-insights' }

resource aks 'Microsoft.ContainerService/managedClusters@2025-01-01' = {
  name: '${stem}-aks'
  location: location
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: { '${clusterIdentity.id}': {} }
  }
  sku: { name: 'Base', tier: 'Free' }
  properties: {
    dnsPrefix: stem
    enableRBAC: true
    oidcIssuerProfile: { enabled: true }
    securityProfile: { workloadIdentity: { enabled: true } }
    workloadAutoScalerProfile: { keda: { enabled: true } }
    autoUpgradeProfile: { upgradeChannel: 'patch', nodeOSUpgradeChannel: 'NodeImage' }
    agentPoolProfiles: [{
      name: 'system'
      count: aksNodes
      vmSize: aksVmSize
      osType: 'Linux'
      osSKU: 'Ubuntu'
      osDiskSizeGB: 64
      type: 'VirtualMachineScaleSets'
      mode: 'System'
      maxPods: 40
      vnetSubnetID: '${network.id}/subnets/aks'
      enableAutoScaling: false
    }]
    networkProfile: {
      networkPlugin: 'azure'
      networkPluginMode: 'overlay'
      podCidr: '10.244.0.0/16'
      serviceCidr: '10.240.0.0/16'
      dnsServiceIP: '10.240.0.10'
      outboundType: 'userAssignedNATGateway'
      loadBalancerSku: 'standard'
    }
  }
}
resource plan 'Microsoft.Web/serverfarms@2024-04-01' = {
  name: '${stem}-flex'
  location: location
  kind: 'functionapp'
  sku: { tier: 'FlexConsumption', name: 'FC1' }
  properties: { reserved: true }
}
resource function 'Microsoft.Web/sites@2024-04-01' = {
  name: '${stem}-embedder'
  location: location
  kind: 'functionapp,linux'
  identity: { type: 'UserAssigned', userAssignedIdentities: { '${embedderIdentity.id}': {} } }
  properties: {
    serverFarmId: plan.id
    httpsOnly: true
    virtualNetworkSubnetId: '${network.id}/subnets/functions'
    functionAppConfig: {
      runtime: { name: 'python', version: '3.12' }
      scaleAndConcurrency: { maximumInstanceCount: 40, instanceMemoryMB: 2048 }
      deployment: {
        storage: {
          type: 'blobContainer'
          value: '${storage.properties.primaryEndpoints.blob}deployments'
          authentication: { type: 'UserAssignedIdentity', userAssignedIdentityResourceId: embedderIdentity.id }
        }
      }
    }
    siteConfig: {
      minTlsVersion: '1.2'
      appSettings: [
        { name: 'AzureWebJobsStorage__accountName', value: storage.name }
        { name: 'AzureWebJobsStorage__credential', value: 'managedidentity' }
        { name: 'AzureWebJobsStorage__clientId', value: embedderIdentity.properties.clientId }
        { name: 'ManualStorage__blobServiceUri', value: storage.properties.primaryEndpoints.blob }
        { name: 'ManualStorage__queueServiceUri', value: storage.properties.primaryEndpoints.queue }
        { name: 'ManualStorage__credential', value: 'managedidentity' }
        { name: 'ManualStorage__clientId', value: embedderIdentity.properties.clientId }
        { name: 'AZURE_CLIENT_ID', value: embedderIdentity.properties.clientId }
        { name: 'APP_CONFIG_ENDPOINT', value: config.properties.endpoint }
        { name: 'APP_CONFIG_LABEL', value: 'workshop' }
        { name: 'APPLICATIONINSIGHTS_CONNECTION_STRING', value: insights.properties.ConnectionString }
        { name: 'APPLICATIONINSIGHTS_AUTHENTICATION_STRING', value: 'ClientId=${embedderIdentity.properties.clientId};Authorization=AAD' }
      ]
    }
  }
}
output issuer string = aks.properties.oidcIssuerProfile.issuerURL
output kubeletObjectId string = aks.properties.identityProfile.kubeletidentity.objectId
output functionHost string = function.properties.defaultHostName
