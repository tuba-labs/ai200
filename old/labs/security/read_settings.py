"""Optional Azure exercise: read a demo secret and ordinary configuration via Entra ID."""

# Velg Key Vault-hemmelighet eller vanlig appkonfigurasjon.
import argparse
# Les tjenestenes endpoint fra miljøet.
import os

# Les nøkkel-/etikettverdier fra App Configuration.
from azure.appconfiguration import AzureAppConfigurationClient
# Bruk Entra-identitet, for eksempel Azure CLI-innlogging på egen maskin.
from azure.identity import DefaultAzureCredential
# Les hemmeligheter gjennom Key Vaults data-API.
from azure.keyvault.secrets import SecretClient

# Kjør ett oppslag mot den valgte tjenesten.
def main():
    # Opprett kommandolinjeparseren.
    parser = argparse.ArgumentParser()
    # Tillat bare de to oppslagstypene.
    parser.add_argument("mode", choices=["secret", "config"])
    # Les valgt oppslagstype.
    args = parser.parse_args()
    # Gjenbruk samme identitetsoppsett for begge tjenester.
    with DefaultAzureCredential() as credential:
        # Key Vault-operasjonen krever tilgang til hemmelighetens verdi.
        if args.mode == "secret":
            # Åpne klienten for ditt labhvelv.
            with SecretClient(vault_url=os.environ["KEY_VAULT_URL"], credential=credential) as vault:
                # Les gjeldende versjon av demo-secret.
                secret = vault.get_secret("demo-secret")
                # Vis bare at verdien ble lest, aldri selve hemmeligheten.
                print("Secret read successfully:", bool(secret.value))
                # Bruk versjons-ID til å observere rotasjon.
                print("Secret version:", secret.properties.version)
            # Avslutt etter Key Vault-oppslaget.
            return
        # Åpne klienten for vanlig konfigurasjon.
        with AzureAppConfigurationClient(
            # Bruk App Configuration-endpoint og den samme Entra-identiteten.
            base_url=os.environ["APP_CONFIG_ENDPOINT"], credential=credential
        # Lukk konfigurasjonsklienten etter bruk.
        ) as config:
            # Les akkurat nøkkelen og miljøetiketten som ble opprettet i portalen.
            setting = config.get_configuration_setting(key="Workshop:Mode", label="lab")
            # Vis den vanlige konfigurasjonsverdien i terminalen.
            print("Workshop mode:", setting.value)


# Start bare når filen kjøres direkte.
if __name__ == "__main__":
    # Kjør valgt konfigurasjonsoppslag.
    main()
