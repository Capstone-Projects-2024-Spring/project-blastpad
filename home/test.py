"""tests for configuration.py"""

from configuration import Configuration

config = Configuration()

# --------------------------------------------------
def test_close():
    """test for close method"""
    connectionStatus = config.close()

    assert connectionStatus == False