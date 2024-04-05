---
sidebar_position: 1
---

# BlastPad

(generated using [Sphinx](../../../build/html/index.html))

# API Documentation

## Wireless Manager API

### `scan_wifi_networks()`

Scans for available Wi-Fi networks on the 'wlan0' network interface.

#### Usage:

`result = subprocess.run(
    ['iw', 'dev', 'wlan0', 'scan'], capture_output=True, text=True)`

#### Returns:

Command-Line response
`result.stdout`

### `list_wifi_networks()`

Lists the SSIDs of available Wi-Fi networks.

#### Usage:

`scan_result = wirelessManager.scan_wifi_networks()
networks = re.findall(r'SSID: (.+)', scan_result)`

#### Returns:

list of available networks

### `connect_to_wifi(ssid, password=None)`

Connects to a Wi-Fi network with the specified SSID and optional password.

#### Usage:

`wirelessManager.connect_to_wifi('SSID', 'password')`

### `disconnect_wifi()`

Disconnects from the currently connected Wi-Fi network.

#### Usage:

`wirelessManager.disconnect_wifi()`

### `show_wifi_security(ssid)`

Shows the type of Wi-Fi security on a network.

#### Usage:

`result = subprocess.run(
    ['iw', 'dev', 'wlan0', 'scan', 'essid', 'SSID'], capture_output=True, text=True)
security_info = re.search(r'WPA2?-(?:PSK|EAP)', result.stdout)`

#### Returns:

`Security Info Type or "Security information not available."`