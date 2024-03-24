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
WIDTH = 400
HEIGHT = 708




pipes = Actor(("i4(!hk@pw3k^ha~^p]u*"), (75, 200))
flappy_bird = Actor(("*6,bo,~rb3gr{]omt:z@"), (75, 200))


def on_key_down():
    increment(flappy_bird, 'y', 1)


def update():
  screen.clear()
  increment(flappy_bird, 'x', -1)
  flappy_bird.draw()




pgzrun.go()