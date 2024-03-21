import customtkinter as ctk

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


class Screen(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("800x450")

        self.my_frame = HomePage(master=self)

app = Screen()
app.mainloop()