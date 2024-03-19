import subprocess

def get_available_networks():
    """
    Retrieves a list of available WiFi networks using nmcli command-line tool.
    
    Returns:
        List of SSIDs for available WiFi networks.
    """
    try:
        result = subprocess.run(["nmcli", "-f", "SSID", "device", "wifi", "list"], capture_output=True, text=True, check=True)
        networks = result.stdout.strip().splitlines()[1:] # Split output and remove the header
        unique_networks = set(network.strip() for network in networks if network.strip()) # Extract unique SSIDs
        return list(unique_networks)
    except FileNotFoundError:
        print("Error: nmcli command not found.")
        return []
    except subprocess.CalledProcessError as e:
        print(f"Error executing nmcli command: {e}")
        return []