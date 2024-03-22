from gpiozero import Button, LED


#GPIO button on button 1
button = Button(5)


#led on pin 2
led = LED(2)


#boolean statement to check if button 1 is pressed or not
def checkPressed():
   if button.is_pressed:
       print("Button on pin 5 was pressed")
   else:
       print("Button on pin 5 was not pressed")


#function that executes function when button 1 is pressed
#two examples
def actionWhenPressed():
   if button.is_pressed:
       functionToComplete() #example for print statement
       ledFunctionToComplete() #example using led light

#simple example function to print out if function works
def functionToComplete():
    print("Function executed")

#example function to complete with led
def ledFunctionToComplete():
    led.toggle()
    if led.is_lit:
        print("led 2 turned on")
    else:
        print("led 2 turned off")
