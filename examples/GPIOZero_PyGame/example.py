from gpiozero import Button
import pygame
from Player import Player

# Initialize pygame
pygame.init()

# Create screen of 500x500 pixels
screen = pygame.display.set_mode([500, 500])

# Initialize the physical GPIO inputs
left_button = Button(5)
down_button = Button(6) 
up_button = Button(13)
right_button = Button(19)

# Initialize Player sprite class
player = Player()


# Run continous game loop
while True:
   # Check state of physical inputs
   if left_button.is_pressed:
      player.move_left(2)
   if down_button.is_pressed:
      player.move_down(2)
   if right_button.is_pressed:
      player.move_right(2)
   if up_button.is_pressed:
      player.move_up(2)
   
   # Fill screen with black background
   screen.fill((0, 0, 0))

   # Place the player on the screen
   screen.blit(player.surf, player.rect)
   
   # Flip the display
   pygame.display.flip()