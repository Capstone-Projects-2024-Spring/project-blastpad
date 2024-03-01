import tkinter as tk
from tkinter import Canvas, Frame, Scrollbar, Label

#Methods that displays border colors if the mouse hover over clickable widgets
def on_enter(e, widget):
    widget.config(highlightbackground='yellow', highlightthickness=2)

def on_leave(e, widget):
    widget.config(highlightbackground='grey', highlightthickness=1)


def displayGameInfo(root, game_name):
    # Clear any existing game information container
    for widget in root.winfo_children():
        if hasattr(widget, "game_info_tag"):  # Check if the widget has the tag attribute
            widget.destroy()

    # Create a new game information container with a unique tag
    game_info_container = tk.Frame(root, bd=2, relief='groove')
    game_info_container.pack(side=tk.TOP, fill='x', padx=10, pady=10)
    setattr(game_info_container, "game_info_tag", True)  # Mark this frame with a tag

    # Create labels and buttons for the new game information
    tk.Label(game_info_container, text=game_name, font=("Helvetica", 16)).pack()
    tk.Label(game_info_container, text="Author: You").pack()
    tk.Label(game_info_container, text="Last Updated: 2/13/2024").pack()

    # Placeholder buttons for Play, Edit, and Upload actions
    play_button = tk.Button(game_info_container, text="Play", bg="red", fg="white")
    play_button.pack(side=tk.LEFT, padx=5, pady=5)

    edit_button = tk.Button(game_info_container, text="Edit", bg="blue", fg="white")
    edit_button.pack(side=tk.LEFT, padx=5, pady=5)

    upload_button = tk.Button(game_info_container, text="Upload", bg="green", fg="white")
    upload_button.pack(side=tk.LEFT, padx=5, pady=5)


def renderGameLibrary(root):
    # Create a container frame with a border
    container = tk.Frame(root, bd=2, relief='groove')
    container.pack(side=tk.TOP, fill='both', expand=True, padx=10, pady=10)
    
    # Create a canvas within the container
    canvas = tk.Canvas(container, highlightthickness=0)
    
    # Create a frame for the scrollbar to ensure it's at the bottom of the container
    scrollbar_frame = tk.Frame(container)
    scrollbar_frame.pack(side=tk.BOTTOM, fill='x', expand=False)
    
    # Create a scrollbar within the scrollbar frame
    scrollbar = tk.Scrollbar(scrollbar_frame, orient="horizontal", command=canvas.xview)
    scrollbar.pack(side=tk.BOTTOM, fill='x', expand=False)
    
    # Pack the canvas after the scrollbar frame to fill the remaining space
    canvas.pack(side=tk.TOP, fill='both', expand=True)
    
    # Configure the canvas
    canvas.configure(xscrollcommand=scrollbar.set)
    
    # Create a frame inside the canvas for the list of games
    game_list_frame = tk.Frame(canvas)
    
    # Add the game list frame to a window in the canvas
    canvas.create_window((0, 0), window=game_list_frame, anchor='nw')
    
    # Define a function to update the canvas's scrollregion
    def onFrameConfigure(canvas):
        canvas.configure(scrollregion=canvas.bbox('all'))
    
    # Bind the Frame's configuration event to update the canvas's scrollregion
    game_list_frame.bind('<Configure>', lambda event, canvas=canvas: onFrameConfigure(canvas))
    
    # Example list of games to populate the frame
    games = ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7"]
    

    # Add games to the frame
    # Add games to the frame with a loop
    for game in games:
        # Modify the size of each game box here if needed
        box_width = 150  # or some dynamic value based on game
        box_height = 150  # or some dynamic value based on game
        
        # Create a game frame with the specified size
        game_frame = tk.Frame(game_list_frame, width=box_width, height=box_height, bg='#51535B')
        game_frame.pack_propagate(False)  # Prevents child widgets from altering the frame's size
        game_frame.pack(side=tk.LEFT, padx=20, pady=20)
        
        # Create a label with the game name and size, and ensure it's centered
        game_label = tk.Label(game_frame, text=f"{game}\n",
                            fg='#FFFFFF', bg='#51535B', font=('Helvetica', 20))
        game_label.pack(expand=True)  # This will center the text in the frame
        game_label.bind("<Button-1>", lambda event, name=game: displayGameInfo(root, name))

        # Set the highlightthickness for normal state so that the change is visible on hover
        game_frame.config(highlightbackground='grey', highlightthickness=1)

        # Bind enter and leave events to the game frame to show mous hovering effects
        game_frame.bind("<Enter>", lambda e, widget=game_frame: on_enter(e, widget))
        game_frame.bind("<Leave>", lambda e, widget=game_frame: on_leave(e, widget))
    
    # Update the scrollregion after the UI has been drawn
    game_list_frame.update_idletasks()
    onFrameConfigure(canvas)
    
    # Bind mousewheel scrolling to the canvas
    def _on_mousewheel(event):
        canvas.xview_scroll(int(-1*(event.delta/120)), "units")
    canvas.bind_all("<MouseWheel>", _on_mousewheel)


def homeButtonClickedEvent(event=None):
    print("Home button clicked!")

def communityHubClickedEvent(event=None):
    print("Community Hub button clicked!")

def classroomClickedEvent(event=None):
    print("Classroom button clicked!")

def settingsClickedEvent(event=None):
    print("Settings button clicked!")

def renderTopFrame(root):
    topFrame = tk.Frame(root)
    topFrame.pack(side=tk.TOP, anchor=tk.NW)

    # Add home button
    homeCanvas = tk.Canvas(topFrame, width=100, height=100)
    homeCanvas.pack(side=tk.LEFT, padx=10, pady=10)
    homeCanvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
    homeCanvas.create_text(50, 50, text="Home", fill="#FFFFFF")
    homeCanvas.bind("<Button-1>", homeButtonClickedEvent)
    homeCanvas.bind("<Enter>", lambda e, widget=homeCanvas: on_enter(e, widget))
    homeCanvas.bind("<Leave>", lambda e, widget=homeCanvas: on_leave(e, widget))


    # Add Community Hub button
    communityCanvas = tk.Canvas(topFrame, width=100, height=100)
    communityCanvas.pack(side=tk.LEFT, padx=10, pady=10)
    communityCanvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
    communityCanvas.create_text(50, 50, text="CH", fill="#FFFFFF")
    communityCanvas.bind("<Button-1>", communityHubClickedEvent)
    communityCanvas.bind("<Enter>", lambda e, widget=communityCanvas: on_enter(e, widget))
    communityCanvas.bind("<Leave>", lambda e, widget=communityCanvas: on_leave(e, widget))


    # Add Classroom button
    classroomCanvas = tk.Canvas(topFrame, width=100, height=100)
    classroomCanvas.pack(side=tk.LEFT, padx=10, pady=10)
    classroomCanvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
    classroomCanvas.create_text(50, 50, text="Classroom", fill="#FFFFFF")
    classroomCanvas.bind("<Button-1>", classroomClickedEvent)
    classroomCanvas.bind("<Enter>", lambda e, widget=classroomCanvas: on_enter(e, widget))
    classroomCanvas.bind("<Leave>", lambda e, widget=classroomCanvas: on_leave(e, widget))


    # Add Settings Button
    settingsCanvas = tk.Canvas(topFrame, width=100, height=100)
    settingsCanvas.pack(side=tk.LEFT, padx=10, pady=10)
    settingsCanvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
    settingsCanvas.create_text(50, 50, text="Settings", fill="#FFFFFF")
    settingsCanvas.bind("<Button-1>", settingsClickedEvent)
    settingsCanvas.bind("<Enter>", lambda e, widget=settingsCanvas: on_enter(e, widget))
    settingsCanvas.bind("<Leave>", lambda e, widget=settingsCanvas: on_leave(e, widget))



def initialRender(root):
    renderTopFrame(root)
    renderGameLibrary(root)

def displayHomeScreen():
    root = tk.Tk()
    root.geometry("800x450")
    initialRender(root)
    root.mainloop()

displayHomeScreen()









