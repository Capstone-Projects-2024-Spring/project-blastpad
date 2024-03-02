---
sidebar_position: 3
---

# BlastPad

(generated using [Sphinx](../../../build/html/index.html))

# API Documentation

## Wireless Manager API

### `scan_wifi_networks()`

Scans for available Wi-Fi networks on the 'wlan0' network interface.

#### Usage:

`result = subprocess.run(
    ['iw', 'dev', 'wlan0', 'scan'], capture_output=True, text=True)`

#### Returns:

Command-Line response
`result.stdout`

### `list_wifi_networks()`

Lists the SSIDs of available Wi-Fi networks.

#### Usage:

`scan_result = wirelessManager.scan_wifi_networks()
networks = re.findall(r'SSID: (.+)', scan_result)`

#### Returns:

list of available networks

### `connect_to_wifi(ssid, password=None)`

Connects to a Wi-Fi network with the specified SSID and optional password.

#### Usage:

`wirelessManager.connect_to_wifi('SSID', 'password')`

### `disconnect_wifi()`

Disconnects from the currently connected Wi-Fi network.

#### Usage:

`wirelessManager.disconnect_wifi()`

### `show_wifi_security(ssid)`

Shows the type of Wi-Fi security on a network.

#### Usage:

`result = subprocess.run(
    ['iw', 'dev', 'wlan0', 'scan', 'essid', 'SSID'], capture_output=True, text=True)
security_info = re.search(r'WPA2?-(?:PSK|EAP)', result.stdout)`

#### Returns:

`Security Info Type or "Security information not available."`

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

# Database Schema

The following is our database schema. A visual version of the schema exists in the Design Document in the form of an Entity-Relationship diagram. Our API will be responsible for CRUD, creating, reading, updating and deleting records into the database. Children's information will be especially restricted with COPPA (Children's Online Privacy Protection Act in mind.

| Table      | Fields           | Type         | Constraints                 |
| ---------- | ---------------- | ------------ | --------------------------- |
| Teachers   | teacher_id       | INT          | PK                          |
|            | first_name       | VARCHAR(255) |                             |
|            | last_name        | VARCHAR(255) |                             |
|            | username         | VARCHAR(255) |                             |
|            | password         | VARCHAR(255) |                             |
| Classrooms | room_number      | INT          | PK                          |
|            | teacher_id       | INT          | FK (Teachers.teacher_id)    |
| Students   | student_id       | INT          | PK                          |
|            | first_name       | VARCHAR(255) |                             |
|            | last_name        | VARCHAR(255) |                             |
|            | username         | VARCHAR(255) |                             |
|            | room_number      | INT          | FK (Classrooms.room_number) |
|            | password         | VARCHAR(255) |                             |
|            | games            | VARCHAR(255) |                             |
| Games      | game_id          | INT          | PK                          |
|            | game_name        | VARCHAR(255) |                             |
|            | name             | VARCHAR(255) |                             |
|            | last_edited_date | DATE         |                             |
|            | json_file        | BLOB         |                             |
|            | image_icon       | BLOB         |                             |
