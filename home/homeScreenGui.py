import tkinter as tk
from tkinter import Canvas, Frame, Scrollbar, Label, ttk, filedialog
import customtkinter as ctk 
import webbrowser
from PIL import Image, ImageTk
import os
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


def on_enter(e, widget):
    widget.config(highlightbackground='yellow', highlightthickness=2)

def on_leave(e, widget):
    widget.config(highlightbackground='grey', highlightthickness=1)

def render_top_frame(root):
    top_frame = tk.Frame(root, bg='#33363E')
    top_frame.pack(side=tk.TOP, fill='x', anchor='n')

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

    home_img_path = 'guiImages\\homeIconPressed.png'
    community_img_path = 'guiImages\\communityHubIcon.png'
    classroom_img_path = 'guiImages\\classroomIcon.png'
    settings_img_path = 'guiImages\\settingsIcon.png'

    # Create buttons with images
    button_width = 75
    button_height = 75
    home_button = create_top_button(top_frame, home_img_path, home_button_clicked_event, button_width, button_height)
    community_button = create_top_button(top_frame, community_img_path, community_hub_clicked_event, button_width, button_height)
    classroom_button = create_top_button(top_frame, classroom_img_path, classroom_clicked_event, button_width, button_height)
    settings_button = create_top_button(top_frame, settings_img_path, settings_clicked_event, button_width, button_height)

    # Add battery and wifi icons
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

    
    battery_img_path = 'guiImages\\batteryIcon.png'
    wifi_img_path = 'guiImages\\wifiIcon.png'

    battery_icon = add_icon(top_frame, battery_img_path, 75, 75)
    wifi_icon = add_icon(top_frame, wifi_img_path, 75, 75)

    time_label = tk.Label(top_frame, font=('calibri', 40, 'bold'), background='#33363E', foreground='white')       
    time_label.pack(side=tk.LEFT, padx=10, pady=10)


    # Call the update_time function to start updating the time
    update_time(time_label)


def render_new_game_icon(game_list_frame, button_width, button_height):
    # Open the image file with PIL and resize it
    pil_img = Image.open('guiImages\\newGameIcon.png')
    pil_img = pil_img.resize((button_width, button_height), Image.LANCZOS)

    # Create a PhotoImage object from the resized PIL image
    photo = ImageTk.PhotoImage(pil_img)

    # Create a Tkinter button with this image
    img_button = tk.Button(game_list_frame, image=photo, command=open_code_editor_new_game_page, borderwidth=0, highlightthickness=0)
    img_button.image = photo  # Keep a reference to the image
    img_button.pack(side=tk.LEFT, padx=10, pady=10)

    img_button.bind("<Enter>", lambda e, widget=img_button: on_enter(e, widget))
    img_button.bind("<Leave>", lambda e, widget=img_button: on_leave(e, widget))


# Function where it opens a new web browser tab that shows a new game page
def open_code_editor_new_game_page():
    print("New Game Icon button clicked!")
    link = 'http://localhost:5000/?load=filename.json'
    webbrowser.open(link)


# Opening an instance of the code editor
def open_code_editor():
    link = 'http://localhost:5000'
    webbrowser.open(link)


# Methods that displays border colors if the mouse hover over clickable widgets
def on_enter(e, widget):
    widget.config(highlightbackground='yellow', highlightthickness=2)

def on_leave(e, widget):
    widget.config(highlightbackground='grey', highlightthickness=1)


def display_game_info(game_info_container, game_name, game_json_path):
    # Clear any existing widgets in the game information container
    for widget in game_info_container.winfo_children():
        widget.destroy()

    # Style update: Game information container background color
    game_info_container.config(bg='#23252C')

    # Create a frame for the text information with padding and background color
    text_info_frame = tk.Frame(game_info_container, padx=10, pady=10, bg='#23252C')
    text_info_frame.pack(side=tk.LEFT, fill=tk.X, expand=True)

    # Add text into gme info frame
    ctk.CTkLabel(text_info_frame, text=game_name, font=("Helvetica", 40, "bold"), anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')
    ctk.CTkLabel(text_info_frame, text="Author: You", font=("Helvetica", 20, "bold") ,anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')
    ctk.CTkLabel(text_info_frame, text="Last Updated: 2/13/2024", font=("Helvetica", 20, "bold") ,anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')

    # Style update for button frame
    button_frame = tk.Frame(game_info_container, bg='#23252C')
    button_frame.pack(side=tk.RIGHT, padx=10, pady=10)

    def compile_game(json_file_path):
        # Path to the compiler script
        compiler_script_path = os.path.join(".", "blockly", "compile.js")

        # Check if the JSON file exists
        if not os.path.exists(json_file_path):
            print(f"Error: JSON file '{json_file_path}' not found.")
            return
        
        # Construct the command to run, enclosing json_file_path in quotes
        command = f"node {compiler_script_path} \"{json_file_path}\""

        # Call the compiler script using os.system()
        return_code = os.system(command)
        
        if return_code == 0:
            # Compilation succeeded
            print("Game compiled successfully!")
        else:
            # Compilation failed
            print("Compilation failed.")

    def on_compile_click(game_json_path):
        # Set the path to the game JSON file
        # json_file_path = os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")
        compile_game(game_json_path)


    def create_button(frame, image_path, command, desired_width, desired_height):
        # Open the image file with PIL
        pil_img = Image.open(image_path)
        # Resize the image to the desired dimensions
        pil_img = pil_img.resize((desired_width, desired_height), Image.LANCZOS)

        # Create a PhotoImage object from the resized PIL image
        img = ImageTk.PhotoImage(pil_img)

        # Create a Tkinter button with this image
        button = tk.Button(frame, image=img, command=command, bd= 0, highlightthickness=0)
        button.image = img  # Keep a reference to the image
        button.pack(side=tk.LEFT, padx=5, pady=5)
        return button
    
    play_button_img_path = 'guiImages\\playButtonIcon.png'
    edit_button_img_path = 'guiImages\\editIcon.png'
    upload_buton_img_path = 'guiImages\\uploadIcon.png'

    buttonWidth = 90
    buttonHeight = 90

    # Create buttons with new styling
    play_button = create_button(button_frame, play_button_img_path, lambda: on_compile_click(game_json_path), buttonWidth, buttonHeight)
    edit_button = create_button(button_frame, edit_button_img_path, open_code_editor, buttonWidth, buttonHeight)
    upload_button = create_button(button_frame, upload_buton_img_path, None, buttonWidth, buttonHeight)


def render_game_library(main_container, game_info_container):
    # Update the container frame with a background color
    container = tk.Frame(main_container, bg='#23252C')
    container.pack(side=tk.TOP, fill='both', expand=True, padx=10, pady=10)

    canvas = tk.Canvas(container, bg='#23252C', highlightthickness=0)

    canvas.pack(side=tk.TOP, fill='both', expand=True)

    # Style the game list frame with a background color
    game_list_frame = tk.Frame(canvas, bg='#23252C')
    canvas.create_window((0, 0), window=game_list_frame, anchor='nw')

    def on_frame_configure(canvas):
        canvas.configure(scrollregion=canvas.bbox('all'))

    game_list_frame.bind('<Configure>', lambda event, canvas=canvas: on_frame_configure(canvas))

    # dimensions for new game icon and games in game library
    game_lib_button_width = 125
    game_lib_button_height = 125

    # Invoke new game button function
    render_new_game_icon(game_list_frame, game_lib_button_width, game_lib_button_height)

    # Example list of games to populate the frame
    games = ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7"]

    # Add games to the frame
    for game in games:
        box_width = 125
        box_height = 125

        # Create a game frame with the specified size
        game_frame = tk.Frame(game_list_frame, width=box_width, height=box_height, bg='#51535B')
        game_frame.pack_propagate(False)  # Prevents child widgets from altering the frame's size
        game_frame.pack(side=tk.LEFT, padx=10, pady=10)

        # Create a label with the game name and size, and ensure it's centered
        game_label = tk.Label(game_frame, text=f"{game}\n",
                              fg='#FFFFFF', bg='#51535B', font=('Helvetica', 20))
        game_label.pack(expand=True)  # This will center the text in the frame
        game_label.bind("<Button-1>", lambda event, name=game: display_game_info(game_info_container, name, os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")))

        # Set the highlightthickness for normal state so that the change is visible on hover
        game_frame.config(highlightbackground='grey', highlightthickness=1)

        # Bind enter and leave events to the game frame to show mouse hovering effects
        game_frame.bind("<Enter>", lambda e, widget=game_frame: on_enter(e, widget))
        game_frame.bind("<Leave>", lambda e, widget=game_frame: on_leave(e, widget))

    game_list_frame.update_idletasks()
    on_frame_configure(canvas)

    # Bind mousewheel scrolling to the canvas
    def on_mousewheel(event):
        canvas.xview_scroll(int(-1 * (event.delta/120)), "units")
    canvas.bind_all("<MouseWheel>", on_mousewheel)


def initial_render(root):
    top_container = tk.Frame(root, bg='#424347')
    top_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)
    render_top_frame(top_container)
    
    # Main container frame for both the games list and game information
    main_container = ctk.CTkFrame(master=root, corner_radius=20, fg_color='#23252C')
    main_container.pack(side=tk.TOP, fill='both', expand=True, padx=20, pady=10)


    # Create the game information container and pack it at the bottom of the main container
    game_info_container = tk.Frame(main_container, bd=0, relief='groove')
    game_info_container.pack(side=tk.BOTTOM, fill='x', padx=20, pady=20)
    
    render_game_library(main_container, game_info_container)

def display_home_screen():
    root = tk.Tk()
    root.geometry("800x450")
    root.configure(bg='#33363e')
    initial_render(root)
    root.mainloop()


display_home_screen()


