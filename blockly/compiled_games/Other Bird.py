from numbers import Number

is_alive = None
score = None
you_ded = None
flappy_bird = None
pipe = None

# Describe this function...
def start_game():
  global is_alive, score, you_ded, flappy_bird, pipe
  is_alive = True
  score = 0
  flappy_bird = create_actor(("borbgromtz"), 100, 100, 40, 40)
  pipe = create_actor(("lwwhtsvaeiblyeh"), 300, 400, 50, 100)
  you_ded = create_actor(("xprhsxhogqgv"), (-300), (-300), 30, 30)

# Describe this function...
def die():
  global is_alive, score, you_ded, flappy_bird, pipe
  is_alive = False
  you_ded.rect.x = 300
  you_ded.rect.y = 400
  pygame.display.quit()
  pygame.quit()
  exit()




# BLASTPAD PRODUCTIONS
# 'Other Bird'
# By 'BlastPad Team'
# 'This is an example project.'


import pygame
import time
from pygame import mask
clock = pygame.time.Clock()
pygame.init()
pygame.display.init()
import os
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)
import sys

def is_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def collide_pixels(actor1, actor2):
  return pygame.sprite.collide_mask(actor1, actor2)

actors = [];

class Actor(pygame.sprite.Sprite):
  def __init__(self, imageName, x, y, width, height):
      self.image = pygame.image.load("./images/"+imageName+".png")
      self.image = pygame.transform.scale(self.image, (width, height))
      self.rect = self.image.get_rect(center = (x, y))

  def draw(self, screen):
      screen.blit(self.image, (self.rect.x, self.rect.y))

  def moveHorizontal(self, pixels):
    self.rect.x += pixels

  def moveVertical(self, pixels):
    self.rect.y += pixels

  # add change image func

def create_actor(image_name, x, y, width, height):
  actor = Actor(image_name, x, y, width, height)
  actors.append(actor)
  return actor

font = pygame.font.Font('freesansbold.ttf', 32)
pygame.display.set_caption("'Other Bird'")

screen = None

if sys.argv[1] == "headless":
  screen = pygame.display.set_mode((1, 1), pygame.NOFRAME)

else:
  screen = pygame.display.set_mode((800, 480), pygame.FULLSCREEN)





start_game()

while True:
  screen.fill((0, 0, 0))
  for x in actors:
    x.draw(screen)
  flappy_bird.moveHorizontal(0)
  flappy_bird.moveVertical(4)
  if is_alive == True:
    pipe.moveHorizontal((-3))
    pipe.moveVertical(0)
  if (flappy_bird.rect.y) >= 500:
    die()
  if (flappy_bird.rect.y) < -20:
    die()
  text = font.render(('your score: ' + str(score)), True, (255, 255, 0))
  textRect = text.get_rect()
  textRect.topleft = (0, 0)
  screen.blit(text, textRect)
  if(is_key_pressed()):
    if is_alive == True:
      flappy_bird.moveHorizontal(0)
      flappy_bird.moveVertical((-60))

  if (pipe.rect.x) < -10:
    pipe.rect.x = 550
    pipe.rect.y = 100
    score = (score if isinstance(score, Number) else 0) + 1
  if collide_pixels(flappy_bird, pipe):
    die()


  pygame.display.flip()
  clock.tick(30)
