from PIL import Image, ImageTk
import tkinter as tk
import webbrowser

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