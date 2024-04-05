from time import strftime
import webbrowser
from PIL import Image, ImageTk
import tkinter as tk

def join_class():
    print("Join class functionality goes here.")

def leave_class(content_frame, classroom_name):
    print(f"Leaving {classroom_name}")
    # You might want to clear the content frame or refresh it here as well


# This function updates the displayed content for a selected classroom.
def show_classroom_content(content_frame, classrooms, classroom_name):
    # Clears all current widgets (like labels or buttons) from the content frame.
    for widget in content_frame.winfo_children():
        widget.destroy()

    # Creates a new frame within content_frame for holding the title and description at the top.
    top_frame = tk.Frame(content_frame, bg='white')
    # Makes top_frame fill the available space and expand along with the window.
    top_frame.pack(side="top", fill="both", expand=True)

    # Finds the description for the given classroom name in the classrooms dictionary.
    description = classrooms[classroom_name]
    # Creates a label in top_frame with the classroom name, sets background color, font size, and style.
    title = tk.Label(top_frame, text=classroom_name, bg='white', font=('Arial', 24))
    # Adds some space around the title label and displays it.
    title.pack(padx=10, pady=10)
    # Creates another label for the description below the title with similar styling.
    description_label = tk.Label(top_frame, text=description, bg='white', font=('Arial', 14))
    # Adds the description label with padding.
    description_label.pack(padx=10, pady=10)

    # Creates a separate frame at the bottom of content_frame for the "Leave Class" button.
    bottom_frame = tk.Frame(content_frame, bg='white')
    # Positions bottom_frame at the bottom, stretches horizontally, but does not expand vertically.
    bottom_frame.pack(side="bottom", fill="x", expand=False)

    # Adds a "Leave Class" button to bottom_frame.
    leave_button = tk.Button(bottom_frame, text="Leave Class", 
                             command=lambda: leave_class(content_frame, classroom_name))
    # Centers the leave button within bottom_frame with vertical padding, allows horizontal expansion.
    leave_button.pack(pady=20, expand=True)


def on_like_clicked():
    print("Like button clicked!")

# Function where it opens a new web browser tab that shows a new game page
def open_code_editor_new_game_page():
    print("New Game Icon button clicked!")
    link = 'http://localhost:5000/?load=filename.json'
    webbrowser.open(link)


# Opening an instance of the code editor
def open_code_editor(filename):
    print(filename)
    link = 'http://localhost:5000?load='+filename
    webbrowser.open(link)

def on_enter(e, widget):
    widget.config(highlightbackground='yellow', highlightthickness=2)

def on_leave(e, widget):
    widget.config(highlightbackground='grey', highlightthickness=1)

# Function that updates time
def update_time(label):
    current_time = strftime('%I:%M %p')  # Format the current time in 12-hour format with AM/PM
    label.config(text=current_time)  # Update the label text
    label.after(1000, lambda: update_time(label))  # Schedule update_time to be called after 1000 milliseconds (1 second)


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


# Add battery and wifi icons
def add_icon(frame, image_path, desired_width, desired_height, click_handler, root=None):
    # Open the image file with PIL
    pil_img = Image.open(image_path)
    # Resize the image to the desired dimensions
    pil_img = pil_img.resize((desired_width, desired_height), Image.LANCZOS)

    # Create a PhotoImage object from the resized PIL image
    img = ImageTk.PhotoImage(pil_img)

    # Create a label within the frame to display the image
    #image_label = tk.Label(frame, image=img, bd=0, highlightthickness=0)
    #image_label.image = img  # Keep a reference to prevent garbage collection
    image_label = tk.Label(frame, image=img, bd=0, highlightthickness=0, cursor="hand2")
    image_label.image = img
    # Bind the click event to the label
    image_label.bind("<Button-1>", lambda event: click_handler(root))
    image_label.pack(side=tk.LEFT, padx=10, pady=10)