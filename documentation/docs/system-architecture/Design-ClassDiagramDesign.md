---
sidebar_position: 7
---

# Class Diagram Design?

## Teacher Class

Represents a teacher.

### Attributes

- `teacher_id` (int): The unique identifier for the teacher.
- `first_name` (string): The first name of the teacher.
- `last_name` (string): The last name of the teacher.
- `username` (string): The username of the teacher.
- `password` (string): The password of the teacher.

### Methods

#### `get_teacher_id()`

Get the teacher's ID.

##### Usage:

`teacher.get_teacher_id()`

##### Returns:

`teacher.teacher_id`

#### `set_teacher_id(teacher_id)`

Set the teacher's ID.

##### Usage:

`teacher.set_teacher_id(42069)`

## Classroom Class

Represents a classroom.

### Attributes

- `room_number` (int): The unique identifier for the classroom.
- `teacher_id` (int): The foreign key referencing the teacher of the classroom.

### Methods

#### `get_room_number()`

Get the room number.

##### Usage:

`classroom.get_room_number()`

##### Returns:

`classroom.room_number`

#### `set_room_number(room_number)`

Set the room number.

##### Usage:

`classroom.set_room_number(69420)`

## Student Class

Represents a student.

### Attributes

- `student_id` (int): The unique identifier for the student.
- `first_name` (string): The first name of the student.
- `last_name` (string): The last name of the student.
- `username` (string): The username of the student.
- `room_number` (int): The foreign key referencing the classroom of the student.
- `password` (string): The password of the student.
- `games` (string): The games associated with the student.

### Methods

#### `get_student_id()`

Get the student's ID.

##### Usage:

`student.get_student_id()`

##### Returns:

`student.student_id`

#### `set_student_id(student_id)`

Set the student's ID.

##### Usage:

`student.set_student_id(420)`

## Game Class

Represents a game on the BlastPad owned by a student.

### Attributes

- `game_name` (string): The name of the game.
- `game_id` (int): The unique identifier for the game.
- `name` (string): The general name of the game.
- `last_edited_date` (date): The last edited date of the game.
- `json_file` (bytes): The JSON file associated with the game.
- `image_icon` (bytes): The image icon associated with the game.

### Methods

#### `get_game_name()`

Get the name of the game.

##### Usage:

`game.get_game_name()`

##### Returns:

`game.game_name`

#### `set_game_name(game_name)`

Set the name of the game.

##### Usage:

`game.set_game_name("New Game")`