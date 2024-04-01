umbrella = None
alien = None
bubble = None




# BLASTPAD PRODUCTIONS
# 'Multiplayer Tetris'
# By 'BlastPad Team'
# 'This is an example project'


import pgzrun
import pygame
from pygame import mask

def collide_pixels(actor1, actor2):

  # Get masks for pixel perfect collision detection:
  for a in [actor1, actor2]:
    if not hasattr(a, 'mask'):
      a.mask = mask.from_surface(images.load(a.image))

    # Check rectangles first, this is faster
    if not actor1.colliderect(actor2):
      return None

    # Offsets based on current positions of actors
    xoffset = int(actor2.left - actor1.left)
    yoffset = int(actor2.top - actor1.top)

  # Check for overlap => a collision
  return actor1.mask.overlap(actor2.mask, (xoffset, yoffset))

TITLE = "'Multiplayer Tetris'"
WIDTH  = 500
HEIGHT = 500

# pygame.display.set_mode((WIDTH, HEIGHT), pygame.FULLSCREEN)





umbrella = "juimuemqyzv"
alien = "blfpjxwwbxriafpb"
bubble = "htphtlzmi"

"wccxfwxfhmj"




pgzrun.go()