from gpiozero import Button
import pgzrun

WIDTH = 300
HEIGHT = 300

button = Button(2)

screen_text = ""

def update():
    if button.is_pressed:
        screen_text = "Pressed"
    
def draw():
    if button.is_pressed:
        screen_text = "Pressed"
    else:
        screen_text = "Not Pressed"
    screen.clear()
    screen.fill((255, 255, 255))
    screen.draw.text(screen_text, fontsize=40, center=(150, 150), color=(0,0,0))
pgzrun.go()
