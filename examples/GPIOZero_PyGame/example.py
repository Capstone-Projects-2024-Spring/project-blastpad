from gpiozero import Button
import pygame

from Player import Player

pygame.init()

screen = pygame.display.set_mode([500, 500])

left_button = Button(5)
down_button = Button(6) 
up_button = Button(13)
right_button = Button(19)

player = Player()

while True:
   if left_button.is_pressed:
      player.move_left(2)
   elif down_button.is_pressed:
      player.move_down(2)
   elif right_button.is_pressed:
      player.move_right(2)
   elif up_button.is_pressed:
      player.move_up(2)
   
   screen.fill((0, 0, 0))

   screen.blit(player.surf, player.rect)
   
   # Flip the display
   pygame.display.flip()