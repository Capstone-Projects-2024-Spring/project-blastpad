import tkinter as tk
from PIL import Image, ImageTk
from time import strftime

# Function that updates time
def update_time(label):
    current_time = strftime('%H:%M %p') # Format the current time
    label.config(text=current_time) # Update the label text
    label.after(1000, lambda: update_time(label)) # Schedule update_time to be called after 1000 milliseconds (1 second)

# Methods to test if cliking widgets are responsive
def home_button_clicked_event(event=None):
    print("Home button clicked!")

def community_hub_clicked_event(event=None):
    print("Community Hub button clicked!")

def classroom_clicked_event(event=None):
    print("Classroom button clicked!")

def settings_clicked_event(event=None):
    print("Settings button clicked!")

class Navbar(tk.Frame):
    def __init__(self, parent):
        self.top_container = tk.Frame(parent, bg='#424347')
        self.top_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)
        self.top_frame = tk.Frame(parent, bg='#33363E')
        self.top_frame.pack(side=tk.TOP, fill='x', anchor='n')
        self.create_buttons()
        self.status_bar()

    @staticmethod
    def create_top_button(frame, image_path, command, desired_width, desired_height):
        # Open the image file with PIL
        pil_img = Image.open(image_path)
        # Resize the image to the desired dimensions
        pil_img = pil_img.resize((desired_width, desired_height), Image.LANCZOS)

        # Create a PhotoImage object from the resized PIL image
        img = ImageTk.PhotoImage(pil_img)

        # Create a Tkinter button with this image
        button = tk.Button(frame, image=img, command=command, bd= 0, highlightthickness=0)
        button.image = img  # Keep a reference to the image
        button.pack(side=tk.LEFT, padx=10, pady=10)
        return button

    def create_buttons(self):
        home_img_path = 'guiImages\\homeIcon.png'
        community_img_path = 'guiImages\\communityHubIcon.png'
        classroom_img_path = 'guiImages\\classroomIcon.png'
        settings_img_path = 'guiImages\\settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = self.create_top_button(self.top_frame, home_img_path, home_button_clicked_event, button_width, button_height)
        community_button = self.create_top_button(self.top_frame, community_img_path, community_hub_clicked_event, button_width, button_height)
        classroom_button = self.create_top_button(self.top_frame, classroom_img_path, classroom_clicked_event, button_width, button_height)
        settings_button = self.create_top_button(self.top_frame, settings_img_path, settings_clicked_event, button_width, button_height)

    # Add battery and wifi icons
    @staticmethod
    def add_icon(frame, image_path, desired_width, desired_height):
        # Open the image file with PIL
        pil_img = Image.open(image_path)
        # Resize the image to the desired dimensions
        pil_img = pil_img.resize((desired_width, desired_height), Image.LANCZOS)

        # Create a PhotoImage object from the resized PIL image
        img = ImageTk.PhotoImage(pil_img)

        # Create a label within the frame to display the image
        image_label = tk.Label(frame, image=img, bd=0, highlightthickness=0)
        image_label.image = img  # Keep a reference to prevent garbage collection
        image_label.pack(side=tk.LEFT, padx=10, pady=10)

    def status_bar(self):    
        battery_img_path = 'guiImages\\batteryIcon.png'
        wifi_img_path = 'guiImages\\wifiIcon.png'

        battery_icon = self.add_icon(self.top_frame, battery_img_path, 75, 75)
        wifi_icon = self.add_icon(self.top_frame, wifi_img_path, 75, 75)

        time_label = tk.Label(self.top_frame, font=('calibri', 40, 'bold'), background='#33363E', foreground='white')       
        time_label.pack(side=tk.LEFT, padx=10, pady=10)

        # Call the update_time function to start updating the time
        update_time(time_label)