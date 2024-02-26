import subprocess
import re

# The following packages will be needed to be downloaded and enabled on Arch Linux in order for this file to work.
# sudo pacman -S iw
# sudo pacman -S networkmanager
# sudo systemctl enable NetworkManager
# sudo systemctl start NetworkManager
# iw dev (This command on linux will show you available network interfaces may need to change 'wlan0' to whichever exists on Rasberry Pi)

class wirelessManager:
    def __init__(self):
        pass
    # This function scans different wifi networks on the 'wlan0' network interface
    def scan_wifi_networks(self):
        result = subprocess.run(
            ['iw', 'dev', 'wlan0', 'scan'], capture_output=True, text=True)
        return result.stdout
    # This function returns the different SSID of networks as a list of objects
    def list_wifi_networks(self):
        scan_result = self.scan_wifi_networks()
        networks = re.findall(r'SSID: (.+)', scan_result)
        return networks
    # This function attempts to allow connection to the wifi if a password does/does not exist
    def connect_to_wifi(self, ssid, password=None):
        if password:
            subprocess.run(['nmcli', 'dev', 'wifi', 'connect',
                           ssid, 'password', password])
        else:
            subprocess.run(['nmcli', 'dev', 'wifi', 'connect', ssid])
    # This function attempts to disconnect from the wifi.
    def disconnect_wifi(self):
        subprocess.run(['nmcli', 'dev', 'disconnect'])
    # This function shows the type of wifi security on a network. Useful for determining if a password is needed.
    def show_wifi_security(self, ssid):
        result = subprocess.run(
            ['iw', 'dev', 'wlp1s0', 'scan', 'essid', ssid], capture_output=True, text=True)
        security_info = re.search(r'WPA2?-(?:PSK|EAP)', result.stdout)
        if security_info:
            return security_info.group()
        else:
            return "Security information not available."


if __name__ == "__main__":
    wifi_manager = wirelessManager()

    # Scan and list available Wi-Fi networks
    print("Available Wi-Fi Networks:")
    available_networks = wifi_manager.list_wifi_networks()
    for network in available_networks:
        print(network)

    # Connect to a Wi-Fi network (replace 'YourNetwork' and 'YourPassword' with actual values)
    network_to_connect = 'YourNetwork'
    wifi_manager.connect_to_wifi(network_to_connect, password='YourPassword')

    # Show security information for the connected Wi-Fi network
    print("Security Information:")
    security_info = wifi_manager.show_wifi_security(network_to_connect)
    print(security_info)

    # Disconnect from the Wi-Fi network
    wifi_manager.disconnect_wifi()
