"""Refresh ordinary configuration in one long-lived Python process."""
# Les butikkens endpoint fra terminalen.
import os
# Vent mellom eksplisitte refresh-forsøk.
import time


# Kjør en kort, avgrenset observasjonsøkt.
def main():
    # Bruk den offisielle provideren med sentinel og intervallet i øvelsen.
    from azure.appconfiguration.provider import load, SettingSelector, WatchKey
    # Del samme identitet mellom provider og underliggende klienter.
    from azure.identity import DefaultAzureCredential
    # Lukk credential og provider når observasjonen er ferdig.
    with DefaultAzureCredential() as credential, load(
        # Velg ressursen deltakeren har opprettet.
        endpoint=os.environ["APP_CONFIG_ENDPOINT"], credential=credential,
        # Last bare verdiene som den kjørende appen trenger.
        selects=[SettingSelector(key_filter="Workshop:*", label_filter="lab"), SettingSelector(key_filter="sentinel")],
        # Sentinel uten label utløser ny lasting av de valgte verdiene.
        refresh_on=[WatchKey("sentinel")], refresh_interval=5
    ) as config:
        # Kjør i omtrent ett minutt, nok til en manuell endring.
        for _ in range(30):
            # Kall refresh eksplisitt; provider respekterer intervallet.
            config.refresh()
            # Vis bare vanlig konfigurasjon, ikke secrets.
            print("Workshop:Mode =", config["Workshop:Mode"], flush=True)
            # La deltakeren endre labverdien og sentinel underveis.
            time.sleep(2)


# Unngå nettverkskall ved import.
if __name__ == "__main__":
    # Start observasjonsløkken.
    main()
