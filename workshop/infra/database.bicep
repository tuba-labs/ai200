targetScope = 'resourceGroup'
param location string
@minLength(9)
@maxLength(14)
param stem string
param postgresSku string
@secure()
param pgPassword string

resource network 'Microsoft.Network/virtualNetworks@2024-05-01' existing = { name: '${stem}-vnet' }
resource dns 'Microsoft.Network/privateDnsZones@2020-06-01' existing = { name: '${stem}.postgres.database.azure.com' }
resource postgres 'Microsoft.DBforPostgreSQL/flexibleServers@2024-08-01' = {
  name: '${stem}-pg'
  location: location
  sku: { name: postgresSku, tier: 'Burstable' }
  properties: {
    version: '17'
    administratorLogin: 'workshopadmin'
    administratorLoginPassword: pgPassword
    storage: { storageSizeGB: 32, autoGrow: 'Enabled' }
    backup: { backupRetentionDays: 7, geoRedundantBackup: 'Disabled' }
    highAvailability: { mode: 'Disabled' }
    network: {
      delegatedSubnetResourceId: '${network.id}/subnets/postgres'
      privateDnsZoneArmResourceId: dns.id
    }
    authConfig: { passwordAuth: 'Enabled', activeDirectoryAuth: 'Disabled' }
  }
}
resource vector 'Microsoft.DBforPostgreSQL/flexibleServers/configurations@2024-08-01' = {
  parent: postgres
  name: 'azure.extensions'
  properties: { value: 'VECTOR', source: 'user-override' }
}
resource database 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2024-08-01' = {
  parent: postgres
  name: 'products'
  properties: { charset: 'UTF8', collation: 'en_US.utf8' }
  dependsOn: [vector]
}
output host string = postgres.properties.fullyQualifiedDomainName
