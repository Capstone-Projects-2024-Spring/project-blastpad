class Configuration:
    connectionStatus = False
    listOfAvailNetworks = []
    SSID = ""
    securityKey = ""

    def connect(SSID: str, securityKey: str):
        """
        Connect to given network using SSID and network key 
        """
    def listNetworks() -> str:
        """
        List available networks and return as string
        """
        return ''
    def scan() -> list[str]:
        """
        Scan for new networks
        """
        return Configuration.listOfAvailNetworks
    def close():
        """
        Disconnect from current network
        """