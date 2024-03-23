import tkinter as tk
import customtkinter as ctk
import os
from PIL import Image, ImageTk
from helpers import create_button, on_enter, on_leave, render_new_game_icon

class CommunityHub(tk.Frame):
    def __init__(self, parent):
        # Main container frame for both the games list and game information
        self.main_container = ctk.CTkFrame(master=parent, corner_radius=20, fg_color='#23252C')
        self.main_container.pack(side=tk.TOP, fill='both', expand=True, padx=20, pady=10)


        # Create the game information container and pack it at the bottom of the main container
        self.game_info_container = tk.Frame(self.main_container, bd=0, relief='groove')
        self.game_info_container.pack(side=tk.BOTTOM, fill='x', padx=20, pady=20)
        self.render_game_library()
    
    def render_game_library(self):
        # Update the container frame with a background color
        container = tk.Frame(self.main_container, bg='#23252C')
        container.pack(side=tk.TOP, fill='both', expand=True, padx=10, pady=10)

        canvas = tk.Canvas(container, bg='#23252C', highlightthickness=0)

        canvas.pack(side=tk.TOP, fill='both', expand=True)

        # Style the game list frame with a background color
        game_list_frame = tk.Frame(canvas, bg='#23252C')
        canvas.create_window((0, 0), window=game_list_frame, anchor='nw')

        def on_frame_configure(canvas):
            canvas.configure(scrollregion=canvas.bbox('all'))

        game_list_frame.bind('<Configure>', lambda event, canvas=canvas: on_frame_configure(canvas))

        # dimensions for new game icon and games in game library
        game_lib_button_width = 125
        game_lib_button_height = 125

        # Invoke new game button function
        render_new_game_icon(game_list_frame, game_lib_button_width, game_lib_button_height)

        # Example list of games to populate the frame
        games = ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5", "Game 6", "Game 7"]

        # Add games to the frame
        for game in games:
            box_width = 125
            box_height = 125

            # Create a game frame with the specified size
            game_frame = tk.Frame(game_list_frame, width=box_width, height=box_height, bg='#51535B')
            game_frame.pack_propagate(False)  # Prevents child widgets from altering the frame's size
            game_frame.pack(side=tk.LEFT, padx=10, pady=10)

            # Create a label with the game name and size, and ensure it's centered
            game_label = tk.Label(game_frame, text=f"{game}\n",
                                fg='#FFFFFF', bg='#51535B', font=('Helvetica', 20))
            game_label.pack(expand=True)  # This will center the text in the frame
            game_label.bind("<Button-1>", lambda event, name=game: self.display_game_info(self.game_info_container, name, os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")))

            # Set the highlightthickness for normal state so that the change is visible on hover
            game_frame.config(highlightbackground='grey', highlightthickness=1)

            # Bind enter and leave events to the game frame to show mouse hovering effects
            game_frame.bind("<Enter>", lambda e, widget=game_frame: on_enter(e, widget))
            game_frame.bind("<Leave>", lambda e, widget=game_frame: on_leave(e, widget))

        game_list_frame.update_idletasks()
        on_frame_configure(canvas)

        # Bind mousewheel scrolling to the canvas
        def on_mousewheel(event):
            canvas.xview_scroll(int(-1 * (event.delta/120)), "units")
        canvas.bind_all("<MouseWheel>", on_mousewheel)

    @staticmethod
    def display_game_info(game_info_container, game_name, game_json_path):
        # Clear any existing widgets in the game information container
        for widget in game_info_container.winfo_children():
            widget.destroy()

        # Style update: Game information container background color
        game_info_container.config(bg='#23252C')

        # Create a frame for the text information with padding and background color
        text_info_frame = tk.Frame(game_info_container, padx=10, pady=10, bg='#23252C')
        text_info_frame.pack(side=tk.LEFT, fill=tk.X, expand=True)

        # Add text into gme info frame
        ctk.CTkLabel(text_info_frame, text=game_name, font=("Helvetica", 40, "bold"), anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')
        ctk.CTkLabel(text_info_frame, text="Author: You", font=("Helvetica", 20, "bold") ,anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')
        ctk.CTkLabel(text_info_frame, text="Last Updated: 2/13/2024", font=("Helvetica", 20, "bold") ,anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')

        # Style update for button frame
        button_frame = tk.Frame(game_info_container, bg='#23252C')
        button_frame.pack(side=tk.RIGHT, padx=10, pady=10)
      
        play_button_img_path = 'guiImages\\playButtonIcon.png'
        edit_button_img_path = 'guiImages\\editIcon.png'
        upload_buton_img_path = 'guiImages\\uploadIcon.png'

        buttonWidth = 90
        buttonHeight = 90

        # Create buttons with new styling
        """play_button = create_button(button_frame, play_button_img_path, lambda: on_compile_click(game_json_path), buttonWidth, buttonHeight)
        edit_button = create_button(button_frame, edit_button_img_path, open_code_editor, buttonWidth, buttonHeight)
        upload_button = create_button(button_frame, upload_buton_img_path, None, buttonWidth, buttonHeight)"""