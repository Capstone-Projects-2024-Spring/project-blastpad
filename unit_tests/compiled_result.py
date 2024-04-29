
def collide_avabmjdsek(me, other_actor, other_layer):

  pass

def collide_ezjoaiwilkl(me, other_actor, other_layer):

  pass

def collide_mclvbksroztl(me, other_actor, other_layer):

  pass

def collide_coiczjbmtddiepo(me, other_actor, other_layer):

  pass

def collide_jilwxttids(me, other_actor, other_layer):

  pass

def collide_bpbaryztdx(me, other_actor, other_layer):

  pass

def collide_vqmanbgysbduyui(me, other_actor, other_layer):

  pass

def collide_cbacqvtwyhb(me, other_actor, other_layer):

  pass
from numbers import Number
import random

count = None
from_actor = None
tiles_x = None
tiles_y = None
layer = None
dir_x = None
dir_y = None
bmap = None
block_image = None
targets_in_level = None
youwin = None
block_activated_image = None
tile_size = None
completed_targets = None
levelIndex = None
steps = None
whateveractor = None
Actor = None
currenttarget = None
levels = None
whatvertarget = None
me = None
other_actor = None
other_layer = None
pixel_x = None
pixel_y = None
pixel_color = None
wallimg = None

# Describe this function...
def handle_push_logic(dir_x, dir_y):
  global count, from_actor, tiles_x, tiles_y, layer, bmap, block_image, targets_in_level, youwin, block_activated_image, tile_size, completed_targets, levelIndex, steps, whateveractor, Actor, currenttarget, levels, whatvertarget, me, other_actor, other_layer, pixel_x, pixel_y, pixel_color, wallimg
  if actor_at_position(Actor, dir_x, dir_y, 'walls') == None and actor_at_position(Actor, dir_x, dir_y, 'boxes') == None:
    if youwin == False:
      steps = (steps if isinstance(steps, Number) else 0) + 1
    Actor.move((tiles(dir_x)), (tiles(dir_y)))
  elif actor_at_position(Actor, dir_x, dir_y, 'boxes') != None and actor_at_position(Actor, dir_x * 2, dir_y * 2, 'walls') == None and actor_at_position(Actor, dir_x * 2, dir_y * 2, 'boxes') == None:
    if youwin == False:
      steps = (steps if isinstance(steps, Number) else 0) + 1
    whateveractor = actor_at_position(Actor, dir_x, dir_y, 'boxes')
    currenttarget = actor_at_position(Actor, dir_x, dir_y, 'targets')
    whatvertarget = actor_at_position(Actor, dir_x * 2, dir_y * 2, 'targets')
    whateveractor.move((tiles(dir_x)), (tiles(dir_y)))
    Actor.move((tiles(dir_x)), (tiles(dir_y)))
    if currenttarget != None:
      whateveractor.changeImage(block_image)
      completed_targets = (completed_targets if isinstance(completed_targets, Number) else 0) + -1
    if whatvertarget != None:
      completed_targets = (completed_targets if isinstance(completed_targets, Number) else 0) + 1
      whateveractor.changeImage(block_activated_image)
      if completed_targets == targets_in_level:
        next_level()

# Describe this function...
def tiles(count):
  global from_actor, tiles_x, tiles_y, layer, dir_x, dir_y, bmap, block_image, targets_in_level, youwin, block_activated_image, tile_size, completed_targets, levelIndex, steps, whateveractor, Actor, currenttarget, levels, whatvertarget, me, other_actor, other_layer, pixel_x, pixel_y, pixel_color, wallimg
  return tile_size * count

# Describe this function...
def actor_at_position(from_actor, tiles_x, tiles_y, layer):
  global count, dir_x, dir_y, bmap, block_image, targets_in_level, youwin, block_activated_image, tile_size, completed_targets, levelIndex, steps, whateveractor, Actor, currenttarget, levels, whatvertarget, me, other_actor, other_layer, pixel_x, pixel_y, pixel_color, wallimg
  return (actor_in_layer_at_position(((from_actor.rect.x) + tiles(tiles_x)), ((from_actor.rect.y) + tiles(tiles_y)), layer))

# Describe this function...
def start_level_with_bitmap(bmap):
  global count, from_actor, tiles_x, tiles_y, layer, dir_x, dir_y, block_image, targets_in_level, youwin, block_activated_image, tile_size, completed_targets, levelIndex, steps, whateveractor, Actor, currenttarget, levels, whatvertarget, me, other_actor, other_layer, pixel_x, pixel_y, pixel_color, wallimg
  targets_in_level = 0
  completed_targets = 0
  if 'boxes' in collisions.keys():
    for actor_to_remove in collisions['boxes']:
      actors.remove(actor_to_remove)
    collisions['boxes'] = []
  if 'walls' in collisions.keys():
    for actor_to_remove in collisions['walls']:
      actors.remove(actor_to_remove)
    collisions['walls'] = []
  if 'targets' in collisions.keys():
    for actor_to_remove in collisions['targets']:
      actors.remove(actor_to_remove)
    collisions['targets'] = []
  if 'background' in collisions.keys():
    for actor_to_remove in collisions['background']:
      actors.remove(actor_to_remove)
    collisions['background'] = []
  for pixel_x in range(len(bitmap_data_dict[bmap])):
    for pixel_y in range(len(bitmap_data_dict[bmap][pixel_x])):
      pixel_color = bitmap_data_dict[bmap][pixel_y][pixel_x]

      (create_actor(("gdwbiuhihvejds"), (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), 'background', collide_cbacqvtwyhb, 1))
      if pixel_color == 1:
        wallimg = "uznvwjyz"
        if random.randint(1, 8) == 1:
          wallimg = "gdynszcpfeibm"
        (create_actor(wallimg, (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), 'walls', collide_vqmanbgysbduyui, 2))
      elif pixel_color == 4:
        for layer in collisions.keys():
          if Actor in collisions[layer]:
            collisions[layer].remove(Actor)
        if Actor in actors:
          actors.remove(Actor)
        Actor = create_actor(("oezvqzyt"), (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), "default", collide_bpbaryztdx, 6)
      elif pixel_color == 2:
        (create_actor(block_image, (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), 'boxes', collide_jilwxttids, 5))
      elif pixel_color == 5:
        (create_actor(block_activated_image, (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), 'boxes', collide_coiczjbmtddiepo, 5))
        targets_in_level = (targets_in_level if isinstance(targets_in_level, Number) else 0) + 1
        completed_targets = (completed_targets if isinstance(completed_targets, Number) else 0) + 1
        (create_actor(("jhkmzqvufdzol"), (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), 'targets', collide_mclvbksroztl, 4))
      elif pixel_color == 3:
        (create_actor(("axmcgjrwuk"), (tiles(pixel_x) + tile_size), (tiles(pixel_y) + tile_size), (tiles(1)), (tiles(1)), 'targets', collide_ezjoaiwilkl, 4))
        targets_in_level = (targets_in_level if isinstance(targets_in_level, Number) else 0) + 1


# Describe this function...
def Start_Game():
  global count, from_actor, tiles_x, tiles_y, layer, dir_x, dir_y, bmap, block_image, targets_in_level, youwin, block_activated_image, tile_size, completed_targets, levelIndex, steps, whateveractor, Actor, currenttarget, levels, whatvertarget, me, other_actor, other_layer, pixel_x, pixel_y, pixel_color, wallimg
  block_image = "gilhuhkqdesbvcgsg"
  block_activated_image = "bjmttwfj"
  pygame.key.set_repeat(0)
  tile_size = 60
  Actor = create_actor(("bnpqdzttok"), (tiles(2)), (tiles(2)), (tiles(1)), (tiles(1)), "default", collide_avabmjdsek, 1)
  levels = ["lfvapqujcq", "jscriegvchdntda", "djmykgkibbuv", "ruuftauuhoahr", "lwlrlkloshs", "nevhccdcrmtxl", "spbkriiwbzkx", "hjfzcmwainoy"]
  levelIndex = 1
  start_level_with_bitmap(levels[int(levelIndex - 1)])

# Describe this function...
def next_level():
  global count, from_actor, tiles_x, tiles_y, layer, dir_x, dir_y, bmap, block_image, targets_in_level, youwin, block_activated_image, tile_size, completed_targets, levelIndex, steps, whateveractor, Actor, currenttarget, levels, whatvertarget, me, other_actor, other_layer, pixel_x, pixel_y, pixel_color, wallimg
  if levelIndex >= len(levels):
    levelIndex = 0
    youwin = True
  levelIndex = (levelIndex if isinstance(levelIndex, Number) else 0) + 1
  start_level_with_bitmap(levels[int(levelIndex - 1)])




# BLASTPAD PRODUCTIONS
# 'Testiban'
# By 'Neil C'
# 'Soko Boy in Soko World. Place boxes on all targets to complete a level. Author Par: 379 Steps'


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

bitmap_data_dict = {"tibtjckwotsevd" : [[8,8,1,1,1,1,1,19,19,19,19,1,1,18,8,18,],[8,18,1,19,1,1,19,20,20,20,20,19,1,1,18,8,],[8,8,1,1,19,19,20,20,20,20,20,20,19,1,1,18,],[8,8,8,1,1,19,19,19,19,19,20,20,20,19,1,8,],[18,8,18,8,1,1,5,5,5,5,19,20,20,19,1,8,],[8,18,8,8,1,5,5,1,5,5,5,19,20,19,1,8,],[18,8,18,8,1,5,5,1,5,5,5,19,20,19,1,8,],[8,8,8,8,1,1,5,5,5,5,19,19,19,1,1,18,],[8,8,8,18,1,1,19,20,19,19,20,19,1,1,8,8,],[8,8,18,1,1,19,20,19,19,19,19,20,19,1,1,8,],[8,8,1,1,19,20,20,19,20,20,19,20,20,19,1,1,],[8,8,1,5,5,20,20,20,20,20,20,20,20,5,5,1,],[8,8,1,5,5,20,20,20,20,20,20,20,20,5,5,1,],[18,8,1,1,1,20,20,20,18,18,20,20,1,1,1,1,],[8,18,8,8,1,1,5,5,18,1,5,5,18,1,8,18,],[18,8,18,1,1,18,18,18,1,18,18,18,1,1,18,8,],],"blockimage" : [[1,1,1,1,1,1,1,1,],[1,15,15,15,15,15,15,1,],[1,15,3,3,3,3,15,1,],[1,15,3,15,15,3,15,1,],[1,15,3,3,3,3,15,1,],[1,15,3,3,3,3,15,1,],[1,15,15,15,15,15,15,1,],[1,1,1,1,1,1,1,1,],],"gilhuhkqdesbvcgsg" : [[1,1,1,1,1,1,1,1,],[1,15,15,15,15,15,15,1,],[1,15,3,3,3,3,15,1,],[1,15,3,15,15,3,15,1,],[1,15,3,3,3,3,15,1,],[1,15,3,3,3,3,15,1,],[1,15,15,15,15,15,15,1,],[1,1,1,1,1,1,1,1,],],"blockactivatedimage" : [[1,1,1,1,1,1,1,1,],[1,13,13,13,13,13,13,1,],[1,13,12,12,12,12,13,1,],[1,13,12,13,13,12,13,1,],[1,13,12,12,12,12,13,1,],[1,13,12,12,12,12,13,1,],[1,13,13,13,13,13,13,1,],[1,1,1,1,1,1,1,1,],],"bjmttwfj" : [[1,1,1,1,1,1,1,1,],[1,13,13,13,13,13,13,1,],[1,13,12,12,12,12,13,1,],[1,13,12,13,13,12,13,1,],[1,13,12,12,12,12,13,1,],[1,13,12,12,12,12,13,1,],[1,13,13,13,13,13,13,1,],[1,1,1,1,1,1,1,1,],],"bnpqdzttok" : [[0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,],[0,0,1,19,1,1,19,20,20,20,20,19,1,0,0,0,],[0,0,0,1,19,19,20,20,20,20,20,20,19,1,0,0,],[0,0,0,0,1,19,19,19,19,19,20,20,20,19,1,0,],[0,0,0,0,0,1,5,5,5,5,19,20,20,19,1,0,],[0,0,0,0,1,5,5,1,5,5,5,19,20,19,1,0,],[0,0,0,0,1,5,5,1,5,5,5,19,20,19,1,0,],[0,0,0,0,0,1,5,5,5,5,19,19,19,1,0,0,],[0,0,0,0,0,1,19,20,19,19,20,19,1,0,0,0,],[0,0,0,0,1,19,20,18,20,20,18,20,19,1,0,0,],[0,0,0,1,19,20,20,20,20,20,20,20,20,19,1,0,],[0,0,1,5,5,20,20,20,20,20,20,20,20,5,5,1,],[0,0,1,5,5,20,14,14,20,20,14,14,20,5,5,1,],[0,0,0,1,1,20,20,20,20,19,20,20,20,1,1,0,],[0,0,0,0,0,1,20,20,19,1,20,20,20,1,0,0,],[0,0,0,0,0,0,1,1,1,19,1,1,1,0,0,0,],],"lfvapqujcq" : [[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,3,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,5,4,0,0,1,1,],[1,1,0,0,2,0,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],"jscriegvchdntda" : [[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,1,1,],[1,1,0,1,4,0,1,1,],[1,1,0,2,5,0,1,1,],[1,1,0,3,5,0,1,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],"djmykgkibbuv" : [[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,0,1,],[1,1,0,3,2,3,0,1,],[1,1,0,2,4,2,0,1,],[1,0,0,3,2,3,0,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],"ruuftauuhoahr" : [[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,0,3,5,5,2,4,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,0,0,1,],[1,1,1,1,1,1,1,1,],],"lwlrlkloshs" : [[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,0,3,2,3,0,1,1,],[1,0,2,3,2,0,1,1,],[1,0,3,2,3,0,1,1,],[1,0,2,3,2,0,1,1,],[1,0,0,4,0,0,1,1,],[1,1,1,1,1,1,1,1,],],"nevhccdcrmtxl" : [[1,1,1,1,1,1,1,1,],[1,3,0,0,1,1,1,1,],[1,4,2,2,0,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,3,1,1,1,],[1,1,1,1,1,1,1,1,],],"spbkriiwbzkx" : [[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,0,1,0,1,0,1,1,],[1,3,0,2,5,4,1,1,],[1,0,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],"hjfzcmwainoy" : [[1,1,1,1,1,1,1,1,],[1,0,4,0,1,1,1,1,],[1,3,3,3,1,1,1,1,],[1,2,2,2,1,1,1,1,],[1,0,0,0,0,1,1,1,],[1,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],"gdwbiuhihvejds" : [[20,0,20,0,20,0,20,0,],[0,20,0,20,0,20,0,20,],[20,0,20,0,20,0,20,0,],[0,20,0,20,0,20,0,20,],[20,0,20,0,20,0,20,0,],[0,20,0,20,0,20,0,20,],[20,0,20,0,20,0,20,0,],[0,20,0,20,0,20,0,20,],],"wallimg" : [[1,1,1,1,1,1,1,1,],[1,19,19,19,19,18,18,1,],[1,20,20,20,20,20,20,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,18,18,19,19,19,19,1,],[1,20,20,20,20,20,20,1,],[1,1,1,1,1,1,1,1,],],"uznvwjyz" : [[1,1,1,1,1,1,1,1,],[1,18,18,18,19,19,19,1,],[1,20,20,20,20,20,20,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,19,19,1,1,19,19,1,],[1,20,20,1,1,20,20,1,],[1,1,1,1,1,1,1,1,],],"gdynszcpfeibm" : [[1,1,1,1,1,1,1,1,],[1,19,19,19,19,18,18,1,],[1,20,20,20,20,20,20,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,18,18,19,19,19,19,1,],[1,20,20,20,20,20,20,1,],[1,1,1,1,1,1,1,1,],],"oezvqzyt" : [[0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,],[0,0,1,19,1,1,19,20,20,20,20,19,1,0,0,0,],[0,0,0,1,19,19,20,20,20,20,20,20,19,1,0,0,],[0,0,0,0,1,19,19,19,19,19,20,20,20,19,1,0,],[0,0,0,0,0,1,5,5,5,5,19,20,20,19,1,0,],[0,0,0,0,1,5,5,1,5,5,5,19,20,19,1,0,],[0,0,0,0,1,5,5,1,5,5,5,19,20,19,1,0,],[0,0,0,0,0,1,5,5,5,5,19,19,19,1,0,0,],[0,0,0,0,0,1,19,20,19,19,20,19,1,0,0,0,],[0,0,0,0,1,19,20,18,20,20,18,20,19,1,0,0,],[0,0,0,1,19,20,20,20,20,20,20,20,20,19,1,0,],[0,0,1,5,5,20,20,20,20,20,20,20,20,5,5,1,],[0,0,1,5,5,20,14,14,20,20,14,14,20,5,5,1,],[0,0,0,1,1,20,20,20,20,19,20,20,20,1,1,0,],[0,0,0,0,0,1,20,20,19,1,20,20,20,1,0,0,],[0,0,0,0,0,0,1,1,1,19,1,1,1,0,0,0,],],"jhkmzqvufdzol" : [[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,1,1,1,1,0,0,],[0,0,1,7,7,1,0,0,],[0,0,1,7,7,1,0,0,],[0,0,1,1,1,1,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],],"axmcgjrwuk" : [[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,1,1,1,1,0,0,],[0,0,1,7,7,1,0,0,],[0,0,1,7,7,1,0,0,],[0,0,1,1,1,1,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],],"fmboggyaslc" : [[0,0,0,0,0,0,0,19,19,19,19,0,0,0,0,0,],[0,0,0,19,0,0,19,20,20,20,20,19,0,0,0,0,],[0,0,0,0,19,19,20,20,20,20,20,20,19,0,0,0,],[0,0,0,0,0,19,19,19,19,19,20,20,20,19,0,0,],[0,0,0,0,0,0,5,5,5,5,19,20,20,19,0,0,],[0,0,0,0,0,5,5,1,5,5,5,19,20,19,0,0,],[0,0,0,0,0,5,5,1,5,5,5,19,20,19,0,0,],[0,0,0,0,0,0,5,5,5,5,19,19,19,0,0,0,],[0,0,0,0,0,0,19,20,19,19,20,19,0,0,0,0,],[0,0,0,0,0,19,20,19,19,19,19,20,19,0,0,0,],[0,0,0,0,19,20,20,19,20,20,19,20,20,19,0,0,],[0,0,0,5,5,20,20,20,20,20,20,20,20,5,5,0,],[0,0,0,5,5,20,20,20,20,20,20,20,20,5,5,0,],[0,0,0,0,0,20,20,20,18,18,20,20,0,0,0,0,],[0,0,0,0,0,0,5,5,18,0,5,5,18,0,0,0,],[0,0,0,0,0,18,18,18,0,18,18,18,0,0,0,0,],],}

background_color = pygame.Color("#000000")

def is_key_pressed(key):
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN and event.key == key


def is_any_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def collide_pixels(actor1, actor2):
  if(pygame.sprite.collide_rect(actor1, actor2)):
    return pygame.sprite.collide_mask(actor1, actor2)
  return False

actors = [];
collisions = {};


def actor_in_layer_at_position(x, y, layer):
  if layer not in collisions.keys():
    return None
  for actor in collisions[layer]:
    if actor.rect.collidepoint(x, y):
      return actor

  return None

class Actor_Sprite_Obj(pygame.sprite.Sprite):
  def __init__(self, imageName, x, y, width, height, collision_layer, onCollide, z):
      super(Actor_Sprite_Obj, self).__init__()
      self.width = width
      self.height = height
      self.onCollide_func = onCollide
      self.collision_layer = collision_layer
      self.collisionsDisabled = False
      self.z = z

      self.image = pygame.image.load("./images/"+imageName+".png")
      self.image = pygame.transform.scale(self.image, (width, height))
      self.rect = self.image.get_rect(center = (x, y))

  def draw(self, screen):
      screen.blit(self.image, (self.rect.x, self.rect.y))

  def move(self, x, y):
    self.rect.x += x
    self.rect.y += y


  def changeImage(self, imageName):
    self.image = pygame.image.load("./images/"+imageName+".png")
    self.image = pygame.transform.scale(self.image, (self.width, self.height))

  def onCollide(self, other, layer):
    if not self.collisionsDisabled:
      self.onCollide_func(self, other, layer)

  def disableCollisions(self):
    self.collisionsDisabled = True

  def enableCollisions(self):
    self.collisionsDisabled = False

def create_actor(image_name, x, y, width, height, collision_layer, collide_func, z):
  actor = Actor_Sprite_Obj(image_name, x, y, width, height, collision_layer, collide_func, z)
  actors.append(actor)

  if collision_layer not in collisions.keys():
    collisions[collision_layer] = []

  collisions[collision_layer].append(actor)

  return actor


pygame.key.set_repeat(1)
font = pygame.font.Font('freesansbold.ttf', 32)
pygame.display.set_caption("'Testiban'")
screen = None

if sys.argv[1] == "headless":
  screen = pygame.display.set_mode((1, 1), pygame.NOFRAME)

else:
  screen = pygame.display.set_mode((pygame.display.Info().current_w, pygame.display.Info().current_h), pygame.SCALED)
  # linux workaround




Start_Game()
youwin = False
steps = 0
background_color = pygame.Color("#000000")

while True:

  keyState = {}
  for ev in pygame.event.get():
    if ev.type == pygame.KEYDOWN:
      keyState[ev.key] = 1

  for actor1 in actors:
    for actor2 in actors:
      if actor1 != actor2 and collide_pixels(actor1, actor2):
        # Actors collided, handle collision logic here
        actor1.onCollide(actor2, actor2.collision_layer)
        actor2.onCollide(actor1, actor1.collision_layer)


  if pygame.K_ESCAPE in keyState:
    pygame.display.quit()
    pygame.quit()
    exit()
  screen.fill(background_color)
  sorted_actors = sorted(actors, key=lambda x: x.z)
  for x in sorted_actors:
    x.draw(screen)
  if pygame.K_b in keyState:
    pygame.display.quit()
    pygame.quit()
    exit()

  if pygame.K_LEFT in keyState:
    handle_push_logic(-1, 0)

  if pygame.K_RIGHT in keyState:
    handle_push_logic(1, 0)

  if pygame.K_UP in keyState:
    handle_push_logic(0, -1)

  if pygame.K_DOWN in keyState:
    handle_push_logic(0, 1)

  if pygame.K_SPACE in keyState:
    start_level_with_bitmap(levels[int(levelIndex - 1)])

  if pygame.K_a in keyState:
    start_level_with_bitmap(levels[int(levelIndex - 1)])

  if youwin == True:
    text = font.render(('You Win! Steps Taken:  ' + str(steps)), True, (255, 255, 0))
    textRect = text.get_rect()
    textRect.topleft = (100, 100)
    screen.blit(text, textRect)

  pygame.display.flip()
  clock.tick(30)
  pygame.event.pump()


"fmboggyaslc"
