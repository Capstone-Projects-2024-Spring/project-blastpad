import customtkinter as ctk
import webbrowser

def highlight(widget):
    widget.config()

def on_enter(e, widget):
    widget.config(highlightbackground='yellow', highlightthickness=2)

def on_leave(e, widget):
    widget.config(highlightbackground='grey', highlightthickness=1)

def home_button_clicked_event(event=None):
    print("Home button clicked!")

def community_hub_clicked_event(event=None):
    print("Community Hub button clicked!")

def classroom_clicked_event(event=None):
    print("Classroom button clicked!")

def settings_clicked_event(event=None):
    print("Settings button clicked!")

#Function where it opens a new web browser tab that shows a new game page
def open_code_editor_new_game_page(event):
    print("New Game Icon button clicked!")
    link = 'http://localhost:5000/load?=filename.json'
    webbrowser.open(link)


#Opening an instance of the code editor
def open_code_editor():
    link = 'http://localhost:5000'
    webbrowser.open(link)

def render_new_game_icon(game_list_frame):
    box_width = 125 
    box_height = 125  
    
    # Create a game frame with the specified size
    new_game_frame = ctk.CTkFrame(game_list_frame, width=box_width, height=box_height, bg_color='#51535B')
    new_game_frame.pack_propagate(False)  # Prevents child widgets from altering the frame's size
    new_game_frame.pack(side=ctk.LEFT, padx=20, pady=20)
    
    # Create a label with the game name and size, and ensure it's centered
    game_label = ctk.CTkLabel(new_game_frame, text=f"+\n",
                        fg_color='#FFFFFF', bg_color='#51535B', font=('Helvetica', 20))
    game_label.pack(expand=True)  # This will center the text in the frame
    game_label.bind("<Button-1>", open_code_editor_new_game_page)


    # Bind enter and leave events to the game frame to show mous hovering effects
    new_game_frame.bind("<Enter>", lambda e, widget=new_game_frame: on_enter(e, widget))
    new_game_frame.bind("<Leave>", lambda e, widget=new_game_frame: on_leave(e, widget))

class Game_Library:
    def __init__(self, main_container, game_info_container, **kwargs):
        # Create a container frame with a border
        self.main_container = main_container
        self.game_info_container = game_info_container
        self.container = ctk.CTkFrame(main_container, border_width=2)
        self.container.pack(side=ctk.TOP, fill='both', expand=True, padx=10, pady=10)
        self.canvas = ctk.CTkCanvas(self.container, highlightthickness=0)
        # Create a frame inside the canvas for the list of games
        self.game_list_frame = ctk.CTkFrame(self.canvas)
        self.games = []
        
        # Create a frame for the scrollbar to ensure it's at the bottom of the container
        scrollbar_frame = ctk.CTkFrame(self.container)
        scrollbar_frame.pack(side=ctk.BOTTOM, fill='x', expand=False)
        
        # Create a scrollbar within the scrollbar frame
        scrollbar = ctk.CTkScrollbar(scrollbar_frame, orientation="horizontal", command=self.canvas.xview)
        scrollbar.pack(side=ctk.BOTTOM, fill='x', expand=False)
        
        # Pack the canvas after the scrollbar frame to fill the remaining space
        self.canvas.pack(side=ctk.TOP, fill='both', expand=True)
        
        # Configure the canvas
        self.canvas.configure(xscrollcommand=scrollbar.set)
        
        
        # Add the game list frame to a window in the canvas
        self.canvas.create_window((0, 0), window=self.game_list_frame, anchor='nw')
    
    # Define a function to update the canvas's scrollregion
    def on_frame_configure(self, canvas):
        canvas.configure(scrollregion=canvas.bbox('all'))
    
    def populateFrame(self):
        # Bind the Frame's configuration event to update the canvas's scrollregion
        self.game_list_frame.bind('<Configure>', lambda event, canvas=self.canvas: self.on_frame_configure(canvas))
        
        # Example list of games to populate the frame
        self.games = ["T T T", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7"]
    
    #Invoke new game button function
    def addIcons(self):
        render_new_game_icon(self.game_list_frame)

    def display_game_info(game_info_container, game_name):
    # Clear any existing widgets in the game information container
        for widget in game_info_container.winfo_children():
            widget.destroy()

        # Create a frame for the text information
        text_info_frame = ctk.CTKFrame(game_info_container)
        text_info_frame.pack(side=ctk.LEFT, fill=ctk.X, expand=True)

        # Create labels inside the text information frame
        ctk.CTkLabel(text_info_frame, text=game_name, font=("Helvetica", 16), anchor='w').pack(fill='x')
        ctk.CTkLabel(text_info_frame, text="Author: You", anchor='w').pack(fill='x')
        ctk.CTkLabel(text_info_frame, text="Last Updated: 2/13/2024", anchor='w').pack(fill='x')

        # Create a frame for the buttons
        button_frame = ctk.CTkFrame(game_info_container)
        button_frame.pack(side=ctk.RIGHT)

        
        # Create buttons inside the button frame with equal width and height
        play_button = ctk.CTkButton(button_frame, text="Play", bg="red", fg="white")
        play_button.pack(side=ctk.LEFT, padx=5, pady=5, ipadx=20, ipady=20)  # ipadx and ipady add internal padding to make the button square
        play_button.bind("<Enter>", lambda e, widget=play_button: on_enter(e, widget))
        play_button.bind("<Leave>", lambda e, widget=play_button: on_leave(e, widget))

        edit_button = ctk.CTkButton(button_frame, text="Edit", bg="blue", fg="white", command=open_code_editor) # When clicked, a new code editor istance is made in a new web browser tab.
        edit_button.pack(side=ctk.LEFT, padx=5, pady=5, ipadx=20, ipady=20)  # Same internal padding for square shape
        edit_button.bind("<Enter>", lambda e, widget=edit_button: on_enter(e, widget))
        edit_button.bind("<Leave>", lambda e, widget=edit_button: on_leave(e, widget))

        upload_button = ctk.CTkButton(button_frame, text="Upload", bg="green", fg="white")
        upload_button.pack(side=ctk.LEFT, padx=5, pady=5, ipadx=20, ipady=20)  # Same internal padding for square shape
        upload_button.bind("<Enter>", lambda e, widget=upload_button: on_enter(e, widget))
        upload_button.bind("<Leave>", lambda e, widget=upload_button: on_leave(e, widget))

    # Add games to the frame
    def addGames(self):
        for game in self.games:
            box_width = 125 
            box_height = 125  
            
            # Create a game frame with the specified size
            game_frame = ctk.CTkFrame(self.game_list_frame, width=box_width, height=box_height, bg_color='#51535B')
            game_frame.pack_propagate(False)  # Prevents child widgets from altering the frame's size
            game_frame.pack(side=ctk.LEFT, padx=20, pady=20)
            
            # Create a label with the game name and size, and ensure it's centered
            game_label = ctk.CTkLabel(game_frame, text=f"{game}\n",
                                fg_color='#FFFFFF', bg_color='#51535B', font=('Helvetica', 20))
            game_label.pack(expand=True)  # This will center the text in the frame
            game_label.bind("<Button-1>", lambda event, name=game: self.display_game_info(self.game_info_container, name))


            # Bind enter and leave events to the game frame to show mous hovering effects
            game_frame.bind("<Enter>", lambda e, widget=game_frame: on_enter(e, widget))
            game_frame.bind("<Leave>", lambda e, widget=game_frame: on_leave(e, widget))
        
        # Update the scrollregion after the UI has been drawn
        self.game_list_frame.update_idletasks()
        self.on_frame_configure(self.canvas)
        
        # Bind mousewheel scrolling to the canvas
        def on_mousewheel(event):
            self.canvas.xview_scroll(int(-1*(event.delta/120)), "units")
        self.canvas.bind_all("<MouseWheel>", on_mousewheel)
    
    def start(self):
        self.populateFrame()
        self.addIcons()
        self.addGames()

class Navbar(ctk.CTkFrame):
    def __init__(self, top_frame, **kwargs):
        self.top_frame = top_frame
        self.top_frame.pack(side=ctk.TOP, anchor=ctk.NW)

    # Add home button
    def home_button(self):
        home_canvas = ctk.CTkCanvas(self.top_frame, width=100, height=100)
        home_canvas.pack(side=ctk.LEFT, padx=10, pady=10)
        home_canvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
        home_canvas.create_text(50, 50, text="Home", fill="#FFFFFF")
        home_canvas.bind("<Button-1>", home_button_clicked_event)
        home_canvas.bind("<Enter>", lambda e, widget=home_canvas: on_enter(e, widget))
        home_canvas.bind("<Leave>", lambda e, widget=home_canvas: on_leave(e, widget))


    # Add Community Hub button
    def community_button(self):
        community_canvas = ctk.CTkCanvas(self.top_frame, width=100, height=100)
        community_canvas.pack(side=ctk.LEFT, padx=10, pady=10)
        community_canvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
        community_canvas.create_text(50, 50, text="CH", fill="#FFFFFF")
        community_canvas.bind("<Button-1>", community_hub_clicked_event)
        community_canvas.bind("<Enter>", lambda e, widget=community_canvas: on_enter(e, widget))
        community_canvas.bind("<Leave>", lambda e, widget=community_canvas: on_leave(e, widget))


    # Add Classroom button
    def classroom_button(self):
        classroom_canvas = ctk.CTkCanvas(self.top_frame, width=100, height=100)
        classroom_canvas.pack(side=ctk.LEFT, padx=10, pady=10)
        classroom_canvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
        classroom_canvas.create_text(50, 50, text="Classroom", fill="#FFFFFF")
        classroom_canvas.bind("<Button-1>", classroom_clicked_event)
        classroom_canvas.bind("<Enter>", lambda e, widget=classroom_canvas: on_enter(e, widget))
        classroom_canvas.bind("<Leave>", lambda e, widget=classroom_canvas: on_leave(e, widget))


    # Add Settings Button
    def settings_button(self):
        settings_canvas = ctk.CTkCanvas(self.top_frame, width=100, height=100)
        settings_canvas.pack(side=ctk.LEFT, padx=10, pady=10)
        settings_canvas.create_rectangle(0, 0, 100, 100, fill="#51535B")
        settings_canvas.create_text(50, 50, text="Settings", fill="#FFFFFF")
        settings_canvas.bind("<Button-1>", settings_clicked_event)
        settings_canvas.bind("<Enter>", lambda e, widget=settings_canvas: on_enter(e, widget))
        settings_canvas.bind("<Leave>", lambda e, widget=settings_canvas: on_leave(e, widget))
    def navbar_create(self):
        self.home_button()
        self.classroom_button()
        self.community_button()
        self.settings_button()

class HomePage(ctk.CTkFrame):
    def __init__(self, master, **kwargs):
        super().__init__(master, **kwargs)

        n = Navbar(self)
        n.navbar_create()

        main_container = ctk.CTkFrame(self)
        main_container.pack(side=ctk.TOP, fill='both', expand=True)

        # Create the game information container and pack it at the bottom of the main container
        game_info_container = ctk.CTkFrame(main_container, border_width=2)
        game_info_container.pack(side=ctk.BOTTOM, fill='x', padx=10, pady=10)

        Game_Library(main_container, game_info_container).start()


class Screen(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("800x450")

        self.my_frame = HomePage(master=self)

app = Screen()
app.mainloop()