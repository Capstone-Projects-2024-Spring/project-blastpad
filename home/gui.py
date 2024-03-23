import tkinter as tk
from navbar import Navbar
from homeScreen import HomeScreen

class MainApplication(tk.Frame):
    def __init__(self, parent, *args, **kwargs):
        tk.Frame.__init__(self, parent, *args, **kwargs)
        self.navbar = Navbar(parent)
        self.main = HomeScreen(parent)

if __name__ == "__main__":
    root = tk.Tk()
    root.geometry("800x450")
    root.configure(bg='#33363e')
    MainApplication(root)
    root.mainloop()