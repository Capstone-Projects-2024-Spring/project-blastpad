import customtkinter as ctk

class HomePage(ctk.CTkFrame):
    def __init__(self, master, **kwargs):
        super().__init__(master, **kwargs)

        # add widgets onto the frame, for example:
        self.label = ctk.CTkLabel(self)
        self.label.grid(row=0, column=0, padx=20)


class Screen(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.geometry("800x450")

        self.my_frame = HomePage(master=self)
        self.my_frame.grid(row=0, column=0, padx=20, pady=20, sticky="nsew")

app = Screen()
app.mainloop()