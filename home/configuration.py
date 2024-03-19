import tkinter as tk
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

# Create main window
root = tk.Tk()
root.title("WiFi Connection")

# Get available WiFi networks
available_networks = get_available_networks()

# WiFi SSID selection
ssid_label = tk.Label(root, text="Select SSID:")
ssid_label.grid(row=0, column=0, padx=10, pady=5, sticky="e")
ssid_var = tk.StringVar(root)
ssid_var.set(available_networks[0] if available_networks else "")  # Set default value if available networks exist
ssid_dropdown = tk.OptionMenu(root, ssid_var, *available_networks)
ssid_dropdown.grid(row=0, column=1, padx=10, pady=5, sticky="we")