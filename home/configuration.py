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

def connect_to_wifi():
    """
    Connects to WiFi network using nmcli command-line tool.
    """
    cmd = f"nmcli device wifi connect '{ssid_var.get()}' password '{password_entry.get()}'"
    execute_command(cmd, "Connected to WiFi successfully!", "Failed to connect to WiFi")

def execute_command(cmd, success_message, failure_message):
    '''
    Executes command using subprocess.run()
    '''
    try:
        subprocess.run(cmd, shell=True, check=True)
        status_label.config(text=success_message, fg="green")
    except subprocess.CalledProcessError as e:
        status_label.config(text=f"{failure_message}: {e}", fg="red")

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

# WiFi Password entry
password_label = tk.Label(root, text="Password:")
password_label.grid(row=1, column=0, padx=10, pady=5, sticky="e")
password_entry = tk.Entry(root, show="*")
password_entry.grid(row=1, column=1, padx=10, pady=5, sticky="we")

# Connect button
connect_button = tk.Button(root, text="Connect", command=connect_to_wifi)
connect_button.grid(row=2, column=0, padx=5, pady=10, sticky="e")

# Status label
status_label = tk.Label(root, text="", fg="black")
status_label.grid(row=3, column=0, columnspan=2)

# Run the Tkinter event loop
root.mainloop()
