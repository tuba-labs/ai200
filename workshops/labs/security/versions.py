"""Show secret version metadata; never print a secret value."""
# Velg versjonsløs eller versjonsfestet lesing.
import argparse
# Les endpoint og første versjons-ID fra terminalen.
import os


# Kjør ett eksplisitt oppslag.
def main():
    # Beskriv tillatte operasjoner.
    parser = argparse.ArgumentParser()
    # current velger siste versjon; pinned bruker lagret ID.
    parser.add_argument("mode", choices=["current", "pinned"])
    # Les valget før nettverk brukes.
    args = parser.parse_args()
    # Autentiser med samme identitetskjede som resten av løpet.
    from azure.identity import DefaultAzureCredential
    # Bruk Key Vaults secret-klient.
    from azure.keyvault.secrets import SecretClient
    # Velg en eksplisitt versjon bare i pinned-modus.
    version = os.environ["FIRST_SECRET_VERSION"] if args.mode == "pinned" else None
    # Lukk både credential og nettverksklient etter oppslaget.
    with DefaultAzureCredential() as credential, SecretClient(vault_url=os.environ["KEY_VAULT_URL"], credential=credential) as client:
        # Les selve verdien, men bruk bare status og metadata i utskriften.
        secret = client.get_secret("demo-secret", version=version)
        # Vis at lesingen faktisk returnerte en verdi uten å eksponere den.
        print("Read:", bool(secret.value), "Version:", secret.properties.version)


# Ingen oppslag skjer ved import.
if __name__ == "__main__":
    # Utfør det valgte oppslaget.
    main()
