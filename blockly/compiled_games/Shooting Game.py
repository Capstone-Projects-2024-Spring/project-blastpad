Actor = None

# Describe this function...
def Start_Game():
  global Actor
  Actor = create_actor(("wqyecsigoqjevogl"), 250, 400, 20, 20)




# BLASTPAD PRODUCTIONS
# 'Shooting Game'
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

background_color = pygame.Color("#000000")

def is_key_pressed(key):
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN and event.key == key


def is_any_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def collide_pixels(actor1, actor2):
  return pygame.sprite.collide_mask(actor1, actor2)

actors = [];

class Actor_Sprite_Obj(pygame.sprite.Sprite):
  def __init__(self, imageName, x, y, width, height):
      self.width = width
      self.height = height

      self.image = pygame.image.load("./images/"+imageName+".png")
      self.image = pygame.transform.scale(self.image, (width, height))
      self.rect = self.image.get_rect(center = (x, y))

  def draw(self, screen):
      screen.blit(self.image, (self.rect.x, self.rect.y))

  def moveHorizontal(self, pixels):
    self.rect.x += pixels

  def moveVertical(self, pixels):
    self.rect.y += pixels

  def changeImage(self, imageName):
    self.image = pygame.image.load("./images/"+imageName+".png")
    self.image = pygame.transform.scale(self.image, (self.width, self.height))

  # add change image func

def create_actor(image_name, x, y, width, height):
  actor = Actor_Sprite_Obj(image_name, x, y, width, height)
  actors.append(actor)
  return actor

font = pygame.font.Font('freesansbold.ttf', 32)
pygame.display.set_caption("'Shooting Game'")

screen = None

if sys.argv[1] == "headless":
  screen = pygame.display.set_mode((1, 1), pygame.NOFRAME)

else:
  screen = pygame.display.set_mode((pygame.display.Info().current_w, pygame.display.Info().current_h), pygame.SCALED)
  # linux workaround




Start_Game()

while True:
  keyState = pygame.key.get_pressed()

  if keyState[pygame.K_ESCAPE]:
    pygame.display.quit()
    pygame.quit()
    exit()
  screen.fill(background_color)
  for x in actors:
    x.draw(screen)
  Actor.moveHorizontal(30)
  Actor.moveVertical(0)
  pygame.display.quit()
  pygame.quit()
  exit()

  pygame.display.flip()
  clock.tick(30)
  pygame.event.pump()
