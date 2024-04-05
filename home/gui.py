import tkinter as tk  
from PIL import Image, ImageTk
import customtkinter as ctk
import os, json
import subprocess
from helpers import *
from wifiMenu import WifiMenu

games = []
wifi_menu_window = None

def wifi_clicked_event(root):
    global wifi_menu_window
    if wifi_menu_window is None or not wifi_menu_window.winfo_exists():
        wifi_menu_window = tk.Toplevel(root)
        wifi_menu = WifiMenu(wifi_menu_window)

def battery_clicked_event(event=None):
    print("Battery button clicked!")


class Game:
    def __init__(self, name, description, author, path, filename):
        self.name = name
        self.description = description
        self.author = author
        self.path = path
        self.filename = filename

class BlastPad(tk.Tk):  
  
    def __init__(self, *args, **kwargs):  
          
        tk.Tk.__init__(self, *args, **kwargs)  
        container = tk.Frame(self)  
  
        container.pack(side="top", fill="both", expand = True)  
  
        container.grid_rowconfigure(0, weight=1)  
        container.grid_columnconfigure(0, weight=1)  
  
        self.frames = {}  
  
        for F in (HomePage, CommunityHub, Classroom, Settings):  
  
            frame = F(container, self)  
  
            self.frames[F] = frame  
  
            frame.grid(row=0, column=0, sticky="nsew")  
  
        self.show_frame(HomePage)  
  
    def show_frame(self, cont):  
  
        frame = self.frames[cont]  
        frame.tkraise()  
  
          
class HomePage(tk.Frame):  
  
    def __init__(self, parent, controller):  
        tk.Frame.__init__(self,parent)   
        self.config(bg='#33363E')
        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'home/guiImages/homeIconPressed.png'
        community_img_path = 'home/guiImages/communityHubIcon.png'
        classroom_img_path = 'home/guiImages/classroomIcon.png'
        settings_img_path = 'home/guiImages/settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(HomePage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(CommunityHub), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(Classroom), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, lambda: controller.show_frame(Settings), button_width, button_height)

        battery_img_path = 'home/guiImages/batteryIcon.png'
        wifi_img_path = 'home/guiImages/wifiIcon.png'

        battery_icon = add_icon(navbar, battery_img_path, 75, 75, battery_clicked_event)
        wifi_icon = add_icon(navbar, wifi_img_path, 75, 75, wifi_clicked_event, navbar)

        time_label = tk.Label(navbar, font=('calibri', 40, 'bold'), background='#33363E', foreground='white')       
        time_label.pack(side=tk.LEFT, padx=10, pady=10)

        # Call the update_time function to start updating the time
        update_time(time_label)

        main_container = ctk.CTkFrame(master=self, corner_radius=20, fg_color='#23252C')
        main_container.pack(side=tk.TOP, fill='both', expand=True, padx=20, pady=10)

        # Create the game information container and pack it at the bottom of the main container
        game_info_container = tk.Frame(main_container, bd=0, relief='groove')
        game_info_container.pack(side=tk.BOTTOM, fill='x', padx=20, pady=20)

        container = tk.Frame(main_container, bg='#23252C')
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

        def render_new_game_icon(game_list_frame, button_width, button_height):
            # Open the image file with PIL and resize it
            pil_img = Image.open('home/guiImages/newGameIcon.png')
            pil_img = pil_img.resize((button_width, button_height), Image.LANCZOS)

            # Create a PhotoImage object from the resized PIL image
            photo = ImageTk.PhotoImage(pil_img)

            # Create a Tkinter button with this image
            img_button = tk.Button(game_list_frame, image=photo, command=open_code_editor_new_game_page, borderwidth=0, highlightthickness=0)
            img_button.image = photo  # Keep a reference to the image
            img_button.pack(side=tk.LEFT, padx=10, pady=10)

            img_button.bind("<Enter>", lambda e, widget=img_button: on_enter(e, widget))
            img_button.bind("<Leave>", lambda e, widget=img_button: on_leave(e, widget))

        render_new_game_icon(game_list_frame, game_lib_button_width, game_lib_button_height)

        for x in os.listdir("./flask/saved/"):
            if x.endswith(".json"):
                # Prints only text file present in My Folder

                path = "./flask/saved/"+x
                f = open(path)
                data = json.load(f)
                filename = x
                gamename = ""
                description = ""
                author = ""

                for x in data["blocks"]["blocks"]:
                    if(x["type"]=="metadata"):
                        gamename = x["inputs"]["game name"]["block"]["fields"]["TEXT"]
                        description = x["inputs"]["description"]["block"]["fields"]["TEXT"]
                        author = x["inputs"]["author name"]["block"]["fields"]["TEXT"]
                        break
                f.close()  


            games.append(Game(gamename, description, author, path, filename))
            print(games[0].name)

        # Add games to the frame
        for game in games:
            box_width = 125
            box_height = 125

            # Create a game frame with the specified size
            game_frame = tk.Frame(game_list_frame, width=box_width, height=box_height, bg='#51535B')
            game_frame.pack_propagate(False)  # Prevents child widgets from altering the frame's size
            game_frame.pack(side=tk.LEFT, padx=10, pady=10)

            # Create a label with the game name and size, and ensure it's centered
            game_label = tk.Label(game_frame, text=f"{game.name}\n",
                              fg='#FFFFFF', bg='#51535B', font=('Helvetica', 13))
            game_label.pack(expand=True)  # This will center the text in the frame
            game_label.bind("<Button-1>", lambda event, boundGame=game: display_game_info(game_info_container, boundGame))
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

        def display_game_info(game_info_container, game):
            # Clear any existing widgets in the game information container
            for widget in game_info_container.winfo_children():
                widget.destroy()

            # Style update: Game information container background color
            game_info_container.config(bg='#23252C')

            # Create a frame for the text information with padding and background color
            text_info_frame = tk.Frame(game_info_container, padx=10, pady=10, bg='#23252C')
            text_info_frame.pack(side=tk.LEFT, fill=tk.X, expand=True)

            # Add text into gme info frame
            ctk.CTkLabel(text_info_frame, text=game.name, font=("Helvetica", 40, "bold"), anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')
            ctk.CTkLabel(text_info_frame, text="Author: "+game.author, font=("Helvetica", 20, "bold") ,anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')
            ctk.CTkLabel(text_info_frame, text="Last Updated: 2/13/2024", font=("Helvetica", 20, "bold") ,anchor='w', text_color='#FFFFFF', fg_color='#23252C').pack(fill='x')

            # Style update for button frame
            button_frame = tk.Frame(game_info_container, bg='#23252C')
            button_frame.pack(side=tk.RIGHT, padx=10, pady=10)

            def compile_game(json_file_path):
                # Path to the compiler script
                compiler_script_path = os.path.join(".", "blockly", "compile.js")

                # Check if the JSON file exists
                if not os.path.exists(json_file_path):
                    print(f"Error: JSON file '{json_file_path}' not found.")
                    return
                
                # Construct the command to run, enclosing json_file_path in quotes
                command = f"node {compiler_script_path} \"{json_file_path}\""

                # Call the compiler script using os.system()
                return_code = os.system(command)
                
                if return_code == 0:
                    # Compilation succeeded
                    print("Game compiled successfully!")
                    run_game(game)
                else:
                    # Compilation failed
                    print("Compilation failed.")

            def on_compile_click(game_json_path):
                # Set the path to the game JSON file
                # json_file_path = os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")
                compile_game(game.path)
            def run_game(game):
                game_file = "./blockly/compiled_games/" + game.name + ".py"
                subprocess.run(['python', game_file])

            play_button_img_path = 'home/guiImages/playButtonIcon.png'
            edit_button_img_path = 'home/guiImages/editIcon.png'
            upload_buton_img_path = 'home/guiImages/uploadIcon.png'

            buttonWidth = 90
            buttonHeight = 90

            # Create buttons with new styling
            play_button = create_button(button_frame, play_button_img_path, lambda: on_compile_click(game.path), buttonWidth, buttonHeight)
            edit_button = create_button(button_frame, edit_button_img_path, lambda: open_code_editor(game.filename), buttonWidth, buttonHeight)
            upload_button = create_button(button_frame, upload_buton_img_path, None, buttonWidth, buttonHeight)

  
class CommunityHub(tk.Frame):  
  
    def __init__(self, parent, controller):  
        tk.Frame.__init__(self, parent)  
        self.config(bg='#33363E')
        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'home/guiImages/homeIcon.png'
        community_img_path = 'home/guiImages/communityHubIconPressed.png'
        classroom_img_path = 'home/guiImages/classroomIcon.png'
        settings_img_path = 'home/guiImages/settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(HomePage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(CommunityHub), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(Classroom), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, lambda: controller.show_frame(Settings), button_width, button_height)

        battery_img_path = 'home/guiImages/batteryIcon.png'
        wifi_img_path = 'home/guiImages/wifiIcon.png'

        battery_icon = add_icon(navbar, battery_img_path, 75, 75, battery_clicked_event)
        wifi_icon = add_icon(navbar, wifi_img_path, 75, 75, wifi_clicked_event)
        
        time_label = tk.Label(navbar, font=('calibri', 40, 'bold'), background='#33363E', foreground='white')       
        time_label.pack(side=tk.LEFT, padx=10, pady=10)

        # Call the update_time function to start updating the time
        update_time(time_label)

        main_container = ctk.CTkFrame(master=self, corner_radius=20, fg_color='#23252C')
        main_container.pack(side=tk.TOP, fill='both', expand=True, padx=20, pady=10)

        # Create the game information container and pack it at the bottom of the main container
        game_info_container = tk.Frame(main_container, bd=0, relief='groove')
        game_info_container.pack(side=tk.BOTTOM, fill='x', padx=20, pady=20)

        container = tk.Frame(main_container, bg='#23252C')
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

        def render_new_game_icon(game_list_frame, button_width, button_height):
            # Open the image file with PIL and resize it
            pil_img = Image.open('home/guiImages/searchIcon.png')
            pil_img = pil_img.resize((button_width, button_height), Image.LANCZOS)

            # Create a PhotoImage object from the resized PIL image
            photo = ImageTk.PhotoImage(pil_img)

            # Create a Tkinter button with this image
            img_button = tk.Button(game_list_frame, image=photo, command=open_code_editor_new_game_page, borderwidth=0, highlightthickness=0)
            img_button.image = photo  # Keep a reference to the image
            img_button.pack(side=tk.LEFT, padx=10, pady=10)

            img_button.bind("<Enter>", lambda e, widget=img_button: on_enter(e, widget))
            img_button.bind("<Leave>", lambda e, widget=img_button: on_leave(e, widget))

        render_new_game_icon(game_list_frame, game_lib_button_width, game_lib_button_height)

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
            game_label.bind("<Button-1>", lambda event, name=game: display_game_info(game_info_container, name, os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")))

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

            def compile_game(json_file_path):
                # Path to the compiler script
                compiler_script_path = os.path.join(".", "blockly", "compile.js")

                # Check if the JSON file exists
                if not os.path.exists(json_file_path):
                    print(f"Error: JSON file '{json_file_path}' not found.")
                    return
                
                # Construct the command to run, enclosing json_file_path in quotes
                command = f"node {compiler_script_path} \"{json_file_path}\""

                # Call the compiler script using os.system()
                return_code = os.system(command)
                
                if return_code == 0:
                    # Compilation succeeded
                    print("Game compiled successfully!")
                else:
                    # Compilation failed
                    print("Compilation failed.")

            def on_compile_click(game_json_path):
                # Set the path to the game JSON file
                # json_file_path = os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")
                compile_game(game_json_path)

            play_button_img_path = 'home/guiImages/playButtonIcon.png'
            like_button_img_path = 'home/guiImages/likeIcon.png'

            buttonWidth = 90
            buttonHeight = 90

            # Create buttons with new styling
            play_button = create_button(button_frame, play_button_img_path, lambda: on_compile_click(game_json_path), buttonWidth, buttonHeight)
            edit_button = create_button(button_frame, like_button_img_path, on_like_clicked, buttonWidth, buttonHeight)
  
  
class Classroom(tk.Frame):  
  
    def __init__(self, parent, controller):    
        tk.Frame.__init__(self, parent)  
        self.config(bg='#33363E')

        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='x', expand=False, padx=4, pady=4)  # Change fill to 'x' and expand to False

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'home/guiImages/homeIcon.png'
        community_img_path = 'home/guiImages/communityHubIcon.png'
        classroom_img_path = 'home/guiImages/classroomIconPressed.png'
        settings_img_path = 'home/guiImages/settingsIcon.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(HomePage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(CommunityHub), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(Classroom), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, lambda: controller.show_frame(Settings), button_width, button_height)

        battery_img_path = 'home/guiImages/batteryIcon.png'
        wifi_img_path = 'home/guiImages/wifiIcon.png'

        battery_icon = add_icon(navbar, battery_img_path, 75, 75, battery_clicked_event)
        wifi_icon = add_icon(navbar, wifi_img_path, 75, 75, wifi_clicked_event)

        time_label = tk.Label(navbar, font=('calibri', 40, 'bold'), background='#33363E', foreground='white')       
        time_label.pack(side=tk.LEFT, padx=10, pady=10)

        # Call the update_time function to start updating the time
        update_time(time_label)


        # Creates a frame for listing classrooms, placed on the left side of the window.
        classroom_list_frame = tk.Frame(master=self, bg='gray')
        # Displays the frame, sticking to the left side and filling the vertical space.
        classroom_list_frame.pack(side=tk.LEFT, fill="y")

        # Creates a button labeled 'Join Class' within the classroom list frame.
        join_class_button = tk.Button(classroom_list_frame, text="Join Class", 
                                    command=lambda: join_class())
        # Positions the button with padding, filling the horizontal space.
        join_class_button.pack(padx=10, pady=5, fill="x")

        # A dictionary mapping classroom names to their descriptions.
        classrooms = {
            "Robotics Class": "Description for Robotics Class",
            "Mr. Riley 4th Grade Tech": "Description for Mr. Riley's Class",
            "Mrs. Susans": "Description for Mrs. Susan's Class",
        }

        # Frame for classroom buttons, allowing for scrolling if needed.
        buttons_frame = tk.Frame(classroom_list_frame, bg='gray')
        buttons_frame.pack(fill="both", expand=False)

        # # Scrollbar for the buttons frame (optional, remove if not needed)
        # scrollbar = tk.Scrollbar(buttons_frame, orient="vertical")
        # scrollbar.pack(side="right", fill="y")

        # Creates a frame that will display the content for the selected classroom.
        content_frame = tk.Frame(master=self, bg='white')
        # Displays the frame, placed on the right, filling both vertical and horizontal space, and allowing expansion.
        content_frame.pack(side="right", fill="both", expand=True)

        # Iterates through the classrooms dictionary to create a button for each classroom.
        for classroom_name, desc in classrooms.items():
            # Each button is labeled with the classroom name and calls show_classroom_content when clicked.
            btn = tk.Button(classroom_list_frame, text=classroom_name,
                            command=lambda c=classroom_name: show_classroom_content(content_frame, classrooms, c))
            # Positions each button with padding, filling the horizontal space.
            btn.pack(padx=10, pady=5, fill="x")


class Settings(tk.Frame):  
  
    def __init__(self, parent, controller):  
        tk.Frame.__init__(self, parent)  
        self.config(bg='#33363E')
        navbar_container = tk.Frame(self,bg='#424347')
        navbar_container.pack(side=tk.TOP, fill='both', expand=True, padx=4, pady=4)

        navbar = tk.Frame(navbar_container, bg='#33363E')
        navbar.pack(side=tk.TOP, fill='x', anchor='n')

        home_img_path = 'home/guiImages/homeIcon.png'
        community_img_path = 'home/guiImages/communityHubIcon.png'
        classroom_img_path = 'home/guiImages/classroomIcon.png'
        settings_img_path = 'home/guiImages/settingsIconPressed.png'

        # Create buttons with images
        button_width = 75
        button_height = 75
        home_button = create_top_button(navbar, home_img_path, lambda: controller.show_frame(HomePage), button_width, button_height)
        community_button = create_top_button(navbar, community_img_path, lambda: controller.show_frame(CommunityHub), button_width, button_height)
        classroom_button = create_top_button(navbar, classroom_img_path, lambda: controller.show_frame(Classroom), button_width, button_height)
        settings_button = create_top_button(navbar, settings_img_path, lambda: controller.show_frame(Settings), button_width, button_height)

        battery_img_path = 'home/guiImages/batteryIcon.png'
        wifi_img_path = 'home/guiImages/wifiIcon.png'

        battery_icon = add_icon(navbar, battery_img_path, 75, 75, battery_clicked_event)
        wifi_icon = add_icon(navbar, wifi_img_path, 75, 75, wifi_clicked_event)

        time_label = tk.Label(navbar, font=('calibri', 40, 'bold'), background='#33363E', foreground='white')       
        time_label.pack(side=tk.LEFT, padx=10, pady=10)

        # Call the update_time function to start updating the time
        update_time(time_label)

        main_container = ctk.CTkFrame(master=self, corner_radius=20, fg_color='#23252C')
        main_container.pack(side=tk.TOP, fill='both', expand=True, padx=20, pady=10)

        # Create the game information container and pack it at the bottom of the main container
        class_info_container = tk.Frame(main_container, bd=0, relief='groove')
        class_info_container.pack(side=tk.BOTTOM, fill='x', padx=20, pady=20)

        container = tk.Frame(main_container, bg='#23252C')
        container.pack(side=tk.TOP, fill='both', expand=True, padx=10, pady=10)

        canvas = tk.Canvas(container, bg='#23252C', highlightthickness=0)

        canvas.pack(side=tk.TOP, fill='both', expand=True)

        # Style the game list frame with a background color
        class_list_frame = tk.Frame(canvas, bg='#23252C')
        canvas.create_window((0, 0), window=class_list_frame, anchor='nw')


        message = ctk.CTkLabel(class_list_frame, text="The Settings page is under contruction", text_color='white', 
                               font=('Helvetica', 30, 'bold'),bg_color='#23252C').pack(side=tk.TOP, fill='both', pady=0)

          
app = BlastPad()  
app.geometry("800x450")
app.mainloop()