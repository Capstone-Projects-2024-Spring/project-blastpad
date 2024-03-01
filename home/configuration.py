import subprocess
class Configuration:
    connectionStatus = False
    listOfAvailNetworks = []
    SSID = ""
    securityKey = ""

    def connect(SSID: str, securityKey: str):
        """
        Connect to given network using SSID and network key 
        """
        p = subprocess.run(f'nmcli device wifi connect {SSID} password {securityKey}'.split(), capture_output=True, text=True).stdout
        Configuration.connectionStatus = True
    def listNetworks() -> str:
        """
        List available networks and return as string
        """
        return ''
    def scan() -> list[str]:
        """
        Scan for new networks
        """
        Configuration.listOfAvailNetworks = subprocess.run('nmcli device wifi list'.split(), capture_output=True, text=True).stdout
        return Configuration.listOfAvailNetworks
    def close():
        """
        Disconnect from current network
        """
        p = subprocess.run('nmcli d disconnect wlan0'.split(), capture_output=True, text=True).stdout
        print(p)