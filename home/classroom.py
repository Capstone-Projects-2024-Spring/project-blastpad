class Classrooms:
    """
    Represents a classroom.

    Attributes:
    - room_number (int): The unique identifier for the classroom. \n
    - teacher_id (int): The foreign key referencing the teacher of the classroom.\n
    """

    def __init__(self, room_number, teacher_id):
        self.room_number = room_number
        self.teacher_id = teacher_id

    def get_room_number(self):
        """
        Get the room number.\n
        
        Returns:
        int: The room number.
        """
        return self.room_number

    def set_room_number(self, room_number):
        """
        Set the room number.\n
        
        Parameters:
        - room_number (int): The new room number.
        """
        self.room_number = room_number

class Students:
    """
    Represents a student.

    Attributes:
    - student_id (int): The unique identifier for the student.\n
    - first_name (str): The first name of the student.\n
    - last_name (str): The last name of the student.\n
    - username (str): The username of the student.\n
    - room_number (int): The foreign key referencing the classroom of the student.\n
    - password (str): The password of the student.\n
    - games (str): The games associated with the student.\n
    """

    def __init__(self, student_id, first_name, last_name, username, room_number, password, games):
        self.student_id = student_id
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.room_number = room_number
        self.password = password
        self.games = games

    def get_student_id(self):
        """
        Get the student's ID.\n
        
        Returns:
        int: The student's ID.
        """
        return self.student_id

    def set_student_id(self, student_id):
        """
        Set the student's ID.\n
        
        Parameters:
        - student_id (int): The new student's ID.
        """
        self.student_id = student_id

class Games:
    """
    Represents a game.\n
    
    Attributes:
    - game_name (str): The name of the game.\n
    - game_id (int): The unique identifier for the game.\n
    - name (str): The general name of the game.\n
    - last_edited_date (date): The last edited date of the game.\n
    - json_file (bytes): The JSON file associated with the game.\n
    - image_icon (bytes): The image icon associated with the game.\n
    """

    def __init__(self, game_name, game_id, name, last_edited_date, json_file, image_icon):
        self.game_name = game_name
        self.game_id = game_id
        self.name = name
        self.last_edited_date = last_edited_date
        self.json_file = json_file
        self.image_icon = image_icon

    def get_game_name(self):
        """
        Get the name of the game.\n
        
        Returns:
        str: The name of the game.
        """
        return self.game_name

    def set_game_name(self, game_name):
        """
        Set the name of the game.\n
        
        Parameters:
        - game_name (str): The new name of the game.
        """
        self.game_name = game_name