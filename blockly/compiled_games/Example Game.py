actor = None
property2 = None
value = None
player = None

# Describe this function...
def increment(actor, property2, value):
  global player
  setattr(actor, property2, ((getattr(actor, property2)) + value))




# BLASTPAD PRODUCTIONS
# 'Example Game'
# By 'BlastPad Team'
# 'This is an example project'


import pygame
import time
from pygame import mask
clock = pygame.time.Clock()
pygame.init()

def is_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def collide_pixels(actor1, actor2):
  return False

class Actor(pygame.sprite.Sprite):
  def __init__(self, imageName, size):
      super(Actor, self).__init__()

      self.x = 0
      self.y = 0

      self.image = pygame.image.load("./images/"+imageName+".png")
      self.surf = pygame.Surface(size)
      self.mask = mask.from_surface(self.surf)
      self.rect = self.surf.get_rect()

  def draw(self, screen):
      screen.blit(self.image,(self.x, self.y))

font = pygame.font.Font('freesansbold.ttf', 32)
pygame.display.set_caption("'Example Game'")
# screen = pygame.display.set_mode([800, 480], pygame.FULLSCREEN)
screen = pygame.display.set_mode([800, 480])





player = Actor(("igcgrwvovcbmw"), (20, 50))

while True:
  screen.fill((0, 0, 0))
  increment(player, 'x', 1)
  player.draw(screen)
  if(is_key_pressed()):
    increment(player, 'y', 10)


  pygame.display.flip()
  clock.tick(30)
