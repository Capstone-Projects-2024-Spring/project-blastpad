import subprocess
class Configuration:
    connectionStatus = False
    listOfAvailNetworks = []
    SSID = ""
    securityKey = ""

    def connect(self, SSID: str, securityKey: str):
        """
        Connect to given network using SSID and network key 
        """
        p = subprocess.run(f'nmcli device wifi connect {SSID} password {securityKey}'.split(), capture_output=True, text=True).stdout
        self.connectionStatus = True
    def listNetworks() -> str:
        """
        List available networks and return as string
        """
        return ''
    def scan(self) -> list[str]:
        """
        Scan for new networks
        """
        Configuration.listOfAvailNetworks = subprocess.run('nmcli device wifi list'.split(), capture_output=True, text=True).stdout
        return self.listOfAvailNetworks
    def close(self):
        """
        Disconnect from current network
        """
        #p = subprocess.run('nmcli d disconnect wlan0'.split(), capture_output=True, text=True).stdout
        self.connectionStatus = False
        #return True
        return self.connectionStatus