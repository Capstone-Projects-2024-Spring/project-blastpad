import tkinter as tk
from tkinter import messagebox

# Clears all widgets from the root window
def clearWidgets():
    for widget in root.winfo_children():
        widget.destroy()

# Function to display the home page with a button and label
def showHomePage():
    clearWidgets()
    # Create and place the 'Code Editor' button at the top-left
    homeButton = tk.Button(root, text="Code Editor", command=showNewPage, bg="red", fg="white")
    homeButton.pack(side=tk.TOP, anchor=tk.W)
    
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
    newPageLabel = tk.Label(root, text="Pseudo Code Editor is shown", font=("Arial", 14))
    newPageLabel.pack(expand=True)

# Set up the GUI window and display the home page
def displayGui():
    global root  # Declare 'root' as global for access within other functions
    root = tk.Tk()
    root.geometry("1500x1000")  # Define window size
    showHomePage()  # Initialize the GUI with the home page
    root.mainloop()  # Start the event loop to keep the window responsive

displayGui()  # Run the function to display the GUI




