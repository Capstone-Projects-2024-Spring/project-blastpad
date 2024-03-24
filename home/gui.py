import tkinter as tk  
from PIL import Image, ImageTk
  
LARGE_FONT= ("Verdana", 12)

# Methods to test if cliking widgets are responsive
def home_button_clicked_event(event=None):
    print("Home button clicked!")

def community_hub_clicked_event(event=None):
    print("Community Hub button clicked!")

def classroom_clicked_event(event=None):
    print("Classroom button clicked!")

def settings_clicked_event(event=None):
    print("Settings button clicked!")

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
  
  
class BlastPad(tk.Tk):  
  
    def __init__(self, *args, **kwargs):  
          
        tk.Tk.__init__(self, *args, **kwargs)  
        container = tk.Frame(self)  
  
        container.pack(side="top", fill="both", expand = True)  
  
        container.grid_rowconfigure(0, weight=1)  
        container.grid_columnconfigure(0, weight=1)  
  
        self.frames = {}  
  
        for F in (StartPage, PageOne, PageTwo):  
  
            frame = F(container, self)  
  
            self.frames[F] = frame  
  
            frame.grid(row=0, column=0, sticky="nsew")  
  
        self.show_frame(StartPage)  
  
    def show_frame(self, cont):  
  
        frame = self.frames[cont]  
        frame.tkraise()  
  
          
class StartPage(tk.Frame):  
  
    def __init__(self, parent, controller):  
        tk.Frame.__init__(self,parent)   

        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'guiImages\\homeIconPressed.png'
        community_img_path = 'guiImages\\communityHubIcon.png'
        classroom_img_path = 'guiImages\\classroomIcon.png'
        settings_img_path = 'guiImages\\settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(StartPage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(PageOne), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(PageTwo), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, settings_clicked_event, button_width, button_height)
  
  
class PageOne(tk.Frame):  
  
    def __init__(self, parent, controller):  
        tk.Frame.__init__(self, parent)  
        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'guiImages\\homeIcon.png'
        community_img_path = 'guiImages\\communityHubIconPressed.png'
        classroom_img_path = 'guiImages\\classroomIcon.png'
        settings_img_path = 'guiImages\\settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(StartPage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(PageOne), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(PageTwo), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, settings_clicked_event, button_width, button_height)

  
  
class PageTwo(tk.Frame):  
  
    def __init__(self, parent, controller):  
        tk.Frame.__init__(self, parent)  
        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'guiImages\\homeIcon.png'
        community_img_path = 'guiImages\\communityHubIconPressed.png'
        classroom_img_path = 'guiImages\\classroomIcon.png'
        settings_img_path = 'guiImages\\settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(StartPage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(PageOne), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(PageTwo), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, settings_clicked_event, button_width, button_height)

          
app = BlastPad()  
app.geometry("800x450")
app.configure(bg='#33363e')
app.mainloop()