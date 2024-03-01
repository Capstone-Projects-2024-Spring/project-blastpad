class Sensor:
    
    """
    Sensor Class
    ---------------------
    This class provides methods for scanning, listing, connecting, and disconnecting Wi-Fi networks.
    Requires iw and networkmanager packages on arch.

    Methods:
        - getSensorType: Get the sensor type. \n
        - getSensorOutput: With specified sensor, get its output.\n
        - recalibrateSensor: Recalibrate on-board sensor. \n
    """
    def getSensorType() -> str:
        """
        Get the sensor type
        """
        return ''
    def getSensorOutput(type: str) -> int:
        """
        With specified sensor, get its output
        """
        return 0
    def recalibrateSensor(type: str):
        """
        Recalibrate on-board sensor
        """