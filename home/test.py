"""tests for configuration.py"""

from configuration import Configuration

# --------------------------------------------------
def test_close():
    """test for close method"""
    config = Configuration()
    connectionStatus = config.close()

    assert connectionStatus == False

def test_listNetworks():
    """test for listNetworks method"""
    config = Configuration()
    networks = config.listNetworks()

    assert len(networks) == 0