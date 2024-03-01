"""tests for configuration.py"""

from classroom import Games

# --------------------------------------------------
def test_get_game_name():
    """test for close method"""
    game = Games('test', 0, 'author', '3/1/2024', 'json_file', 'image_icon')
    game_name = game.get_game_name()

    assert game_name == game.game_name

def test_set_game_name():
    """test for listNetworks method"""
    game = Games('test', 0, 'author', '3/1/2024', 'json_file', 'image_icon')
    game.set_game_name('test2')

    assert game.game_name == 'test2'