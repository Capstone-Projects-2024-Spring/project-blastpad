import subprocess, getpass

def scan():
    p = subprocess.run('nmcli device wifi list'.split(), capture_output=True, text=True).stdout
    print(p)
def connect():
    SSID = input("Enter SSID:")
    networkKey = getpass.getpass("Enter network key:")
    p = subprocess.run(f'nmcli device wifi connect {SSID} password {networkKey}'.split(), capture_output=True, text=True).stdout
    print(p)
def close():
    p = subprocess.run('nmcli d disconnect wlan0'.split(), capture_output=True, text=True).stdout
    print(p)
def main():
    scan()
    connect()
    close()
if __name__ == '__main__':
    main()