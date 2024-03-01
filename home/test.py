"""tests for configuration.py"""

from classroom import Games

# --------------------------------------------------
def test_get_game_Name():
    """test for close method"""
    game = Games()
    game_name = game.get_game_name()

    assert game_name == game.game_name

def test_listNetworks():
    """test for listNetworks method"""
    config = Configuration()
    networks = config.listNetworks()

    assert len(networks) == 0