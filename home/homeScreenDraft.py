import tkinter as tk
import webbrowser
from tkinter import messagebox

class GUIApplication:
    """
    A simple GUI application using tkinter.

    Attributes:
        root (tk.Tk): The main window of the application.

    Methods:
        openGoogle: Opens Google.com in a new browser tab.
        clearWidgets: Clears all widgets from the root window.
        showHomePage: Displays the home page with a button and label.
        showNewPage: Displays the new page with a 'Back' button and label.
        displayGui: Sets up the GUI window and displays the home page.
    """

    def __init__(self):
        self.root = tk.Tk()

    def openGoogle(self):
        """
        Opens Google.com in a new browser tab.
        """
        webbrowser.open('http://www.google.com')

    def clearWidgets(self):
        """
        Clears all widgets from the root window.
        """
        for widget in self.root.winfo_children():
            widget.destroy()

    def showHomePage(self):
        """
        Displays the home page with a button and label.
        """
        self.clearWidgets()

        # Use a frame as a container for the top row buttons
        topFrame = tk.Frame(self.root)
        topFrame.pack(side=tk.TOP, anchor=tk.NW)  # This frame is at the top-left

        # Create and place the 'Code Editor' button in the frame
        codeEditorButton = tk.Button(topFrame, text="Code Editor", command=self.openGoogle, bg="red", fg="white")
        codeEditorButton.pack(side=tk.LEFT)  # Pack it to the left side of the frame

        # Create and place the 'New Page' button to the right of the "Code Editor" button
        newPageButton = tk.Button(topFrame, text="New Page", command=self.showNewPage, bg="yellow", fg="black")
        newPageButton.pack(side=tk.LEFT)  # Pack it to the left side of the frame, next to the Code Editor button

        # Display a label in the center of the home page
        homePageLabel = tk.Label(self.root, text="Home page is shown", font=("Arial", 14))
        homePageLabel.pack(expand=True)

    def showNewPage(self):
        """
        Displays the new page with a 'Back' button and label.
        """
        self.clearWidgets()
        # Create and place the 'Back' button at the top-left
        backButton = tk.Button(self.root, text="Back", command=self.showHomePage, bg="blue", fg="white")
        backButton.pack(side=tk.TOP, anchor=tk.W)

        # Display a label in the center of the new page
        newPageLabel = tk.Label(self.root, text="New Page is shown", font=("Arial", 14))
        newPageLabel.pack(expand=True)

    def displayGui(self):
        """
        Sets up the GUI window and displays the home page.
        """
        self.root.geometry("1500x1000")  # Define window size
        self.showHomePage()  # Initialize the GUI with the home page
        self.root.mainloop()  # Start the event loop to keep the window responsive


