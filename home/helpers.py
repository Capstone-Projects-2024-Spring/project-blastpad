from PIL import Image, ImageTk
import tkinter as tk
import webbrowser, os

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