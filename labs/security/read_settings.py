"""Optional Azure exercise: read a demo secret and ordinary configuration via Entra ID."""

import argparse
import os

from azure.appconfiguration import AzureAppConfigurationClient
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["secret", "config"])
    args = parser.parse_args()
    with DefaultAzureCredential() as credential:
        if args.mode == "secret":
            with SecretClient(vault_url=os.environ["KEY_VAULT_URL"], credential=credential) as vault:
                secret = vault.get_secret("demo-secret")
                print("Secret read successfully:", bool(secret.value))
                print("Secret version:", secret.properties.version)
            return
        with AzureAppConfigurationClient(
            base_url=os.environ["APP_CONFIG_ENDPOINT"], credential=credential
        ) as config:
            setting = config.get_configuration_setting(key="Workshop:Mode", label="lab")
            print("Workshop mode:", setting.value)


if __name__ == "__main__":
    main()
