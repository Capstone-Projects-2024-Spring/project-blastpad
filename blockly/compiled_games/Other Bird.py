actor = None
property2 = None
value = None
pipes = None
flappy_bird = None

# Describe this function...
def increment(actor, property2, value):
  global pipes, flappy_bird
  setattr(actor, property2, ((getattr(actor, property2)) + value))




# BLASTPAD PRODUCTIONS
# 'Other Bird'
# By 'BlastPad Team'
# 'This is an example project.'


# from gpiozero import Button, LED
import pgzrun
# from pgzhelper import *
# button = Button(5)

TITLE = "'Other Bird'"
WIDTH = 40
HEIGHT = 100




pipes = Actor(("ihkpwkhapu"), (20, 50))
flappy_bird = Actor(("borbgromtz"), (20, 50))


def on_key_down():
    increment(flappy_bird, 'y', -40)


def update():
  screen.clear()
  increment(pipes, 'x', -1)
  increment(flappy_bird, 'y', 0.3)
  if (getattr(pipes, 'x')) <= 0:
    setattr(pipes, 'x', 40)
  flappy_bird.draw()
  pipes.draw()




pgzrun.go()