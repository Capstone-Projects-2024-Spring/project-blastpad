import tkinter as tk
from tkinter import simpledialog, messagebox
import subprocess
import os

class WifiMenu:
    def __init__(self, root):
        self.root = root
        self.root.title("WiFi Menu")
        self.root.configure(bg="#383838")

        self.button_frame = tk.Frame(self.root, bg="#383838")
        self.button_frame.pack(pady=10)
        self.refresh_button = tk.Button(self.button_frame, text="Refresh", font=("Helvetica", 12), command=self.refresh_network_list, bg="#7289da", fg="white", relief=tk.FLAT, highlightthickness=0)
        self.refresh_button.pack(side=tk.LEFT, padx=5)
        self.disconnect_button = tk.Button(self.button_frame, text="Disconnect", font=("Helvetica", 12), command=self.disconnect_from_network, bg="#f04747", fg="white", relief=tk.FLAT, highlightthickness=0)
        self.disconnect_button.pack(side=tk.LEFT, padx=5)

        self.connected_network = tk.StringVar()
        self.connected_network.set("Connected Network")

        self.connected_label = tk.Label(self.root, text="Connected Network:", font=("Helvetica", 12), bg="#383838", fg="white")
        self.connected_label.pack()
        self.connected_network_label = tk.Label(self.root, textvariable=self.connected_network, font=("Helvetica", 12), bg="#383838", fg="#ff6e6e")
        self.connected_network_label.pack()

        self.network_list = tk.Listbox(self.root, height=10, font=("Helvetica", 12), bg="#c4c4c4", fg="black", selectbackground="#7289da", selectforeground="black", relief=tk.FLAT, exportselection=False, highlightthickness=0)
        self.network_list.pack(pady=10)
        self.network_list.bind("<Double-Button-1>", self.connect_to_network)
        self.network_list.bind("<Motion>", self.on_hover)
        self.network_list.bind("<Leave>", self.on_leave)
        self.root.bind("<Return>", self.connect_to_network)

        self.refresh_network_list()

    # Retrieves the currently connected Wi-Fi network SSID.
    def get_connected_network(self):
        try:
            result = subprocess.run(["iwgetid", "-r"], capture_output=True, text=True, check=True)
            ssid = result.stdout.strip()
            return ssid if ssid else None
        except subprocess.CalledProcessError as e:
            return None

    # Retrieves a list of available WiFi networks (SSIDs) using nmcli command-line tool.
    def get_available_networks(self):
        try:
            connected_network = self.get_connected_network()
            result = subprocess.run(["nmcli", "-f", "SSID", "device", "wifi", "list"], capture_output=True, text=True, check=True)
            networks = result.stdout.splitlines()[1:]
            unique_networks = set(network for network in networks if network.strip() and network.strip() != "--" and network.strip() != connected_network)
            return list(unique_networks)
        except subprocess.CalledProcessError as e:
            messagebox.showerror("Error", f"Failed to get available networks: {e}")
            return []

    # Updates the list of available Wi-Fi networks displayed in the GUI.
    def refresh_network_list(self):
        current_network = self.get_connected_network()
        if current_network is None:
            self.connected_network.set("❌ " + str(current_network))
            self.connected_network_label.config(fg="#ff6e6e")
        else:
            self.connected_network.set("✔ " + str(current_network))
            self.connected_network_label.config(fg="#57ffa0")
        available_networks = self.get_available_networks()
        self.network_list.delete(0, tk.END)
        for network in available_networks:
            self.network_list.insert(tk.END, network)

    # Disconnects from the currently connected Wi-Fi network.
    def disconnect_from_network(self):
        if self.get_connected_network() is None:
            return
        try:
            subprocess.run(["nmcli", "device", "disconnect", "wlan0"], check=True)
            self.refresh_network_list()
        except subprocess.CalledProcessError as e:
            messagebox.showerror("Error", f"Failed to disconnect from network: {e}")

    # Connects to a selected Wi-Fi network.
    def connect_to_network(self, event=None):
        selected_index = self.network_list.curselection()
        if not selected_index:
            return
        
        selected_network = self.network_list.get(selected_index).strip()
        self.connect(selected_network)
        self.refresh_network_list()

    # Connects to a Wi-Fi network with or without a password (Used by connect_to_network() function)
    def connect(self, network):
        if self.found_password(network):
            try:
                subprocess.run(["nmcli", "device", "wifi", "connect", network], check=True)
                return
            except subprocess.CalledProcessError:
                pass
                
        while True:
            password = self.prompt_for_password(network)
            if password is None:
                return
            try:
                subprocess.run(["nmcli", "device", "wifi", "connect", network, "password", password], check=True)
                return
            except subprocess.CalledProcessError:
                continue

    # Checks if a password is recorded for a given WiFi network
    def found_password(self, ssid):
        connections_dir = '/etc/NetworkManager/system-connections'
        if not os.path.exists(connections_dir) or not os.path.isdir(connections_dir):
            messagebox.showerror("Error", "NetworkManager connections directory not found")
            return False

        connection_files = os.listdir(connections_dir)
        for filename in connection_files:
            if filename.startswith(ssid):
                with open(os.path.join(connections_dir, filename), 'r') as f:
                    content = f.read()
                    if 'psk=' in content:
                        return True
        return False

    # Prompts the user for a password for a Wi-Fi network.
    def prompt_for_password(self, network):
        password = simpledialog.askstring("Password", f"Enter password for {network}: ", show="*")
        return password

    def on_hover(self, event):
        # Change background color of hovered option
        widget = event.widget
        index = widget.nearest(event.y)
        if index >= 0:
            widget.selection_clear(0, tk.END)
            widget.selection_set(index)
            widget.activate(index)
            widget.itemconfig(index, {'bg': 'lightgray'})

    def on_leave(self, event):
        # Restore background color when mouse leaves option
        widget = event.widget
        index = widget.nearest(event.y)
        if index >= 0:
            widget.selection_clear(0, tk.END)
            widget.itemconfig(index, {'bg': '#c4c4c4'})
