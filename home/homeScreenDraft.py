import tkinter as tk
import webbrowser
from tkinter import messagebox

# Opens Google.com in a new browser tab
def openGoogle():
    webbrowser.open('http://www.google.com')

# Clears all widgets from the root window
def clearWidgets():
    for widget in root.winfo_children():
        widget.destroy()

# Function to display the home page with a button and label
def showHomePage():
    clearWidgets()

    # Use a frame as a container for the top row buttons
    topFrame = tk.Frame(root)
    topFrame.pack(side=tk.TOP, anchor=tk.NW)  # This frame is at the top-left

    # Create and place the 'Code Editor' button in the frame
    codeEditorButton = tk.Button(topFrame, text="Code Editor", command=openGoogle, bg="red", fg="white")
    codeEditorButton.pack(side=tk.LEFT)  # Pack it to the left side of the frame

    # Create and place the 'New Page' button to the right of the "Code Editor" button
    newPageButton = tk.Button(topFrame, text="New Page", command=showNewPage, bg="yellow", fg="black")
    newPageButton.pack(side=tk.LEFT)  # Pack it to the left side of the frame, next to the Code Editor button

    # Display a label in the center of the home page
    homePageLabel = tk.Label(root, text="Home page is shown", font=("Arial", 14))
    homePageLabel.pack(expand=True)



# Function to display the new page with a 'Back' button and label
def showNewPage():
    clearWidgets()
    # Create and place the 'Back' button at the top-left
    backButton = tk.Button(root, text="Back", command=showHomePage, bg="blue", fg="white")
    backButton.pack(side=tk.TOP, anchor=tk.W)
    
    # Display a label in the center of the new page
    newPageLabel = tk.Label(root, text="New Page is shown", font=("Arial", 14))
    newPageLabel.pack(expand=True)

# Set up the GUI window and display the home page
def displayGui():
    global root  # Declare 'root' as global for access within other functions
    root = tk.Tk()
    root.geometry("1500x1000")  # Define window size
    showHomePage()  # Initialize the GUI with the home page
    root.mainloop()  # Start the event loop to keep the window responsive

displayGui()  # Run the function to display the GUI




