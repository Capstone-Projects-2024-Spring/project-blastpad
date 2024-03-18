# import the threading module
import threading 

import tkinter as tk
from gpiozero import Button

# Create example window
root = tk.Tk()
root.title("Example")

# Set width
window_width = 250
window_height = 250

# Set up directional GUI buttons to correspond with physical GPIO buttons
up_gui_button = tk.Button(root, text=f"Up", relief=tk.FLAT, bg="gray", fg="white", width=5)
up_gui_button.place(x=50, y=25)

down_gui_button = tk.Button(root, text=f"Down", relief=tk.FLAT, bg="gray", fg="white", width=5)
down_gui_button.place(x=50, y=125)

left_gui_button = tk.Button(root, text=f"Left", relief=tk.FLAT, bg="gray", fg="white", width=5)
left_gui_button.place(x=0, y=75)

right_gui_button = tk.Button(root, text=f"Right", relief=tk.FLAT, bg="gray", fg="white", width=5)
right_gui_button.place(x=100, y=75)

# Set the window size
root.geometry("250x250")
 
# Class for separate thread to monitor physical GPIO inputs
class GPIO_Thread(threading.Thread): 
    def __init__(self, thread_name, thread_ID): 
        threading.Thread.__init__(self) 
        self.thread_name = thread_name 
        self.thread_ID = thread_ID 
 
        # helper function to execute the threads
    def run(self): 
        from gpiozero import Button

        # Initialize the physical GPIO inputs
        left_button = Button(5)
        down_button = Button(6) 
        up_button = Button(13)
        right_button = Button(19)

        # Run continous loop checking state of inputs
        while True:
          # If input pressed, give the corresponding GUI button a red background
          if left_button.is_pressed:
            left_gui_button.config(bg="red")
          # If input not pressed, give the corresponding GUI button gray background
          else:
            left_gui_button.config(bg="gray")

          if right_button.is_pressed:
            right_gui_button.config(bg="red")
          else:
            right_gui_button.config(bg="gray")

          if up_button.is_pressed:
            up_gui_button.config(bg="red")
          else:
            up_gui_button.config(bg="gray")

          if down_button.is_pressed:
            down_gui_button.config(bg="red")
          else:
            down_gui_button.config(bg="gray")

# Instantiate and start a GPIO monitoring thread
gpio_thread= GPIO_Thread("GPIO Thread", 1000) 
gpio_thread.start()

# Run the main Tkinter loop
root.mainloop()