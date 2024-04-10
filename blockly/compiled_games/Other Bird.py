from numbers import Number
import random

actor = None
property2 = None
value = None
pipe_to_move = None
pipe = None
x = None
is_alive = None
i = None
pipe_one = None
flappy_bird = None
you_ded = None
pipe_speed = None
pipe_two = None
score = None

# Describe this function...
def move_pipe(pipe_to_move):
  global actor, property2, value, pipe, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  for i in pipe_to_move:
    increment(i, 'x', pipe_speed)
    if (getattr(i, 'x')) <= -20:
      vary_pipe_height(pipe_to_move)
      set_pipe_x(pipe_to_move, 600)
      pipe_speed = (pipe_speed if isinstance(pipe_speed, Number) else 0) + -0.7
      score = (score if isinstance(score, Number) else 0) + 1
      if True:
        return
    if collide_pixels(flappy_bird, i):
        die()


# Describe this function...
def start_game():
  global actor, property2, value, pipe_to_move, pipe, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  make_a_pipe()
  is_alive = True
  pipe_speed = -2
  score = 0
  flappy_bird = Actor(("borbgromtz"), (20, 50))
  set_pipe_x(pipe_one, 500)
  set_pipe_x(pipe_two, 800)
  vary_pipe_height(pipe_one)
  vary_pipe_height(pipe_two)

# Describe this function...
def make_a_pipe():
  global actor, property2, value, pipe_to_move, pipe, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  pipe_one = [Actor(("kvqijmrufil"), (20, 50)), Actor(("filciadtm"), (20, 50))]
  setattr((pipe_one[0]), 'y', 300)
  setattr((pipe_one[1]), 'y', 400)
  pipe_two = [Actor(("fjcarbrfpewp"), (20, 50)), Actor(("nqubilxygnckp"), (20, 50))]
  setattr((pipe_two[0]), 'y', 300)
  setattr((pipe_two[1]), 'y', 400)

# Describe this function...
def die():
  global actor, property2, value, pipe_to_move, pipe, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  is_alive = False
  setattr(flappy_bird, 'image', ("gqzlmykingcgt"))
  you_ded = Actor(("xprhsxhogqgv"), (20, 50))
  setattr(you_ded, 'x', 250)
  setattr(you_ded, 'y', 250)
  pygame.display.quit()
  pygame.quit()
  exit()

# Describe this function...
def vary_pipe_height(pipe):
  global actor, property2, value, pipe_to_move, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  setattr((pipe[0]), 'y', (random.randint(0, 190)))
  setattr((pipe[1]), 'y', (random.randint(400, 500)))

# Describe this function...
def set_pipe_x(pipe, x):
  global actor, property2, value, pipe_to_move, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  for i in pipe:
    setattr(i, 'x', x)

# Describe this function...
def increment(actor, property2, value):
  global pipe_to_move, pipe, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  setattr(actor, property2, ((getattr(actor, property2)) + value))

# Describe this function...
def draw_pipe(pipe):
  global actor, property2, value, pipe_to_move, x, is_alive, i, pipe_one, flappy_bird, you_ded, pipe_speed, pipe_two, score
  for i in pipe:
    i.draw(screen)




# BLASTPAD PRODUCTIONS
# 'Other Bird'
# By 'BlastPad Team'
# 'This is an example project.'


import pygame
import time
from pygame import mask
clock = pygame.time.Clock()
pygame.init()

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
pygame.display.set_caption("'Other Bird'")
# screen = pygame.display.set_mode([800, 480], pygame.FULLSCREEN)
screen = pygame.display.set_mode([800, 480])





start_game()

def is_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def on_key_down():
  if is_alive == True:
    increment(flappy_bird, 'y', -70)

setattr(flappy_bird, 'y', 250)
setattr(flappy_bird, 'x', 60)

while True:
  screen.fill((0, 0, 0))
  if is_key_pressed():
    on_key_down()
  if is_alive == True:
    move_pipe(pipe_two)
    move_pipe(pipe_one)
  increment(flappy_bird, 'y', 2.5)
  if (getattr(flappy_bird, 'y')) >= 500:
    die()
  if (getattr(flappy_bird, 'y')) < 40:
    die()
  flappy_bird.draw(screen)
  draw_pipe(pipe_one)
  draw_pipe(pipe_two)
  text = font.render(('your score: ' + str(score)), True, (255, 255, 0))
  textRect = text.get_rect()
  textRect.topleft = (0, 0)
  screen.blit(text, textRect)
  if is_alive == False:
    you_ded.draw(screen)

  pygame.display.flip()
  clock.tick(30)
