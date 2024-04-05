from time import strftime
import webbrowser
from PIL import Image, ImageTk
import tkinter as tk
import requests
import datetime

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

def login_to_server(username, password):
    try:
        # Prepare login data
        login_data = {'username': username, 'password': password}

        # Send POST request to server
        response = requests.post('http://localhost:5000/login', json=login_data)

        # Check response status code
        if response.status_code == 200:
            print("Login successful!")
        elif response.status_code == 401:
            print("Invalid username or password")
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

    return response.status_code

def get_last_successful_username():
    last_successful_username = None
    with open("login_log.txt", "r") as log_file:
        lines = log_file.readlines()
        for line in reversed(lines):
            if "Success" in line:
                last_successful_username = line.split("Username: ")[1].split(",")[0]
                break
    return last_successful_username

def check_login_requirement():
    try:
        with open("login_log.txt", "r") as log_file:
            log_entries = log_file.readlines()
    except FileNotFoundError:
        # If the file doesn't exist, assume the user needs to log in
        return True

    # Get the last log entry
    last_entry = log_entries[-1].strip() if log_entries else None

    if last_entry:
        parts = last_entry.split(" - ")
        if len(parts) >= 2:
            timestamp_str = parts[0]
            status_str = parts[1]
            try:
                timestamp = datetime.datetime.strptime(timestamp_str, "%Y-%m-%d %H:%M:%S")
                status = status_str.split(": ")[1]
                if status == "Fail":
                    return True  # Need to log in due to previous failure
                elif (datetime.datetime.now() - timestamp).days > 7:
                    return True  # Need to re-log after 7 days
                else:
                    return False  # No need to re-log
            except ValueError:
                # If there's any issue parsing the timestamp or status, assume the user needs to log in
                return True

    # If no valid log entry is found, assume the user needs to log in
    return True

# Example usage
# login_to_server('user', 'password')
