import subprocess
import re

class WirelessManager:
    """
    WirelessManager Class
    ---------------------

    This class provides methods for scanning, listing, connecting, and disconnecting Wi-Fi networks.
    Requires iw and networkmanager packages on arch.

    Methods:
        - scan_wifi_networks: Scan for available Wi-Fi networks.
        - list_wifi_networks: List the names of available Wi-Fi networks.
        - connect_to_wifi: Connect to a specified Wi-Fi network.
        - disconnect_wifi: Disconnect from the currently connected Wi-Fi network.
    """

    def __init__(self):
        pass

    def scan_wifi_networks(self):
        """
        Scan for available Wi-Fi networks.

        Returns:
            str: The output of the Wi-Fi scanning command.
        """
        result = subprocess.run(['iw', 'dev', 'wlp1s0', 'scan'], capture_output=True, text=True)
        return result.stdout

    def list_wifi_networks(self):
        """
        List the names of available Wi-Fi networks.

        Returns:
            list: A list of available Wi-Fi network names.
        """
        scan_result = self.scan_wifi_networks()
        networks = re.findall(r'SSID: (.+)', scan_result)
        return networks

    def connect_to_wifi(self, ssid, password=None):
        """
        Connect to a specified Wi-Fi network.

        Args:
            ssid (str): The SSID of the Wi-Fi network to connect to.
            password (str, optional): The password for the Wi-Fi network (if required).

        Raises:
            subprocess.CalledProcessError: If the connection attempt fails.
        """
        if password:
            subprocess.run(['nmcli', 'dev', 'wifi', 'connect', ssid, 'password', password], check=True)
        else:
            subprocess.run(['nmcli', 'dev', 'wifi', 'connect', ssid], check=True)

    def disconnect_wifi(self):
        """
        Disconnect from the currently connected Wi-Fi network.

        Raises:
            subprocess.CalledProcessError: If the disconnection attempt fails.
        """
        subprocess.run(['nmcli', 'dev', 'disconnect'], check=True)