from numbers import Number
import random

grounded = None
AliveSkrakeImage = None
DeadSkrakeImage = None
NormalActorImage = None
PlayerPoweredUp = None
PoweredActorImage = None
Platform = None
Actor = None
AllSkrakes = None
skrakeIndex = None
DeadSkrakes = None
SkrakeCheckIndex = None
i = None

# Describe this function...
def Start_Game():
  global grounded, AliveSkrakeImage, DeadSkrakeImage, NormalActorImage, PlayerPoweredUp, PoweredActorImage, Platform, Actor, AllSkrakes, skrakeIndex, DeadSkrakes, SkrakeCheckIndex, i
  grounded = False
  AliveSkrakeImage = "wlxvxwcehlzoxr"
  DeadSkrakeImage = "guchoccylxa"
  NormalActorImage = "wqyecsigoqjevogl"
  PoweredActorImage = "hgfwensxvuquk"
  Platform = create_actor(("vcijavmbmwvt"), 400, 480, 800, 60)
  Actor = create_actor(NormalActorImage, 70, 70, 60, 60)
  AllSkrakes = [''] * 50
  skrakeIndex = 1
  DeadSkrakes = [False] * 50
  for count in range(50):
    AllSkrakes[int(skrakeIndex - 1)] = create_actor(AliveSkrakeImage, (random.randint(30, 800)), 480, 60, 60)
    skrakeIndex = (skrakeIndex if isinstance(skrakeIndex, Number) else 0) + 1




# BLASTPAD PRODUCTIONS
# 'Wildlife Odyssey'
# By 'Neil C'
# 'A game with RPG Elements...'


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
pygame.display.set_caption("'Wildlife Odyssey'")

screen = None

if sys.argv[1] == "headless":
  screen = pygame.display.set_mode((1, 1), pygame.NOFRAME)

else:
  screen = pygame.display.set_mode((pygame.display.Info().current_w, pygame.display.Info().current_h), pygame.SCALED)
  # linux workaround




Start_Game()
background_color = pygame.Color("#00cccc")

while True:
  keyState = pygame.key.get_pressed()

  if keyState[pygame.K_ESCAPE]:
    pygame.display.quit()
    pygame.quit()
    exit()
  screen.fill(background_color)
  for x in actors:
    x.draw(screen)
  if (Actor.rect.x) > 800:
    pygame.display.quit()
    pygame.quit()
    exit()
  PlayerPoweredUp = False
  grounded = False
  Actor.changeImage(NormalActorImage)
  if collide_pixels(Actor, Platform):
    grounded = True

  if grounded == False:
    Actor.moveHorizontal(0)
    Actor.moveVertical(10)
  else:
    if keyState[pygame.K_SPACE]:
      Actor.moveHorizontal(0)
      Actor.moveVertical((-80))

  if keyState[pygame.K_a]:
    Actor.moveHorizontal(30)
    Actor.moveVertical(0)
    if keyState[pygame.K_RETURN]:
      Actor.changeImage(PoweredActorImage)
      PlayerPoweredUp = True
      Actor.moveHorizontal(30)
      Actor.moveVertical(0)


  if keyState[pygame.K_b]:
    Actor.moveHorizontal((-30))
    Actor.moveVertical(0)

  SkrakeCheckIndex = 1
  for i in AllSkrakes:
    if DeadSkrakes[int(SkrakeCheckIndex - 1)]:
      i.moveHorizontal(0)
      i.moveVertical(7)
    elif (Actor.rect.x) > (i.rect.x):
      i.moveHorizontal(2)
      i.moveVertical(0)
    elif (Actor.rect.x) < (i.rect.x):
      i.moveHorizontal((-2))
      i.moveVertical(0)
    if collide_pixels(Actor, i):
      if PlayerPoweredUp == True:
        DeadSkrakes[int(SkrakeCheckIndex - 1)] = True
        i.changeImage(DeadSkrakeImage)

    SkrakeCheckIndex = (SkrakeCheckIndex if isinstance(SkrakeCheckIndex, Number) else 0) + 1
  text = font.render('fart', True, (255, 255, 0))
  textRect = text.get_rect()
  textRect.topleft = (30, 30)
  screen.blit(text, textRect)

  pygame.display.flip()
  clock.tick(30)
  pygame.event.pump()
