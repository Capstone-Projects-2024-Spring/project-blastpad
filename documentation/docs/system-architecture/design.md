---
sidebar_position: 1
---

# Design

## Class Diagram

```mermaid
---
title: BlastPad Class Diagram
---
classDiagram
    BlocklyEditor o-- "0..*" Game
	User --o "0..*" Database
	Classroom o-- "0..*" Game
	DeviceManager <-- "1" User
	BlocklyEditor o-- "0..*" Block
	Database o-- "0..*" Classroom
	BlocklyEditor o-- "1" Documentation
	Gallery <-- "1" ClassroomManager
	Gallery <-- "1" BlocklyEditor	
	ClassroomManager *-- "0..*" Classroom
	Block <-- "0..*" Sensor
	Gallery <-- "1" Configuration	
	DeviceManager <-- "1" Gallery
	Game <-- "1" CodeCompiler
		
    class Game{
        -title: String
		-imageFile: String
        -version: String
		-author: String
		
		+startGame()
		+pauseGame()
		+quitGame()
		+uploadToClassroom(Classroom)
		+compileGame()
    }
    class BlocklyEditor{
        -workspaces: Game[]
		-availableBlocks: Block[]
		
		+saveWorkspace()
		+loadWorkspace()
    }
    class Block {
        +type: String
		+message0: String
		+message1: String
		+args0: Object[]
		+args1: Object[]
		+previousStatement: String
		+nextStatment: String
		+tooltip: String
		+helpurl: String
		+style: String
    }
    class Sensor {
		+sensorID: int
		-sensorData: int[]

		+getSensorData(): int[]
		+recalibrateSensor()
		+clearSensorData()
    }
    class Classroom {
        +classroomID: int
		+teacherID: int
		+games: Game[]

		+deleteGame(userID: int) bool
		+approveGame(userID: int) bool
		+uploadGame(game: Game)
    }
	class ClassroomManager {
		-classrooms: Classroom[]

		+joinClassroom(c: Classroom)
		+leaveClassroom(c: Classroom)
		+viewClassrooms()
	}
	class User {
    	-String: username
		-String: password
		+login(username: String, password: String)
    }
    class Configuration {
		+connectionStatus: Boolean
		+listOfAvailNetworks: String[]
		+SSID: String
		-securityKey: String
		
		+scan() String[]
		+connect(SSID: String, securityKey: String)
		+close()
    }
    class Gallery {
    	+openCodeEditor()
		+openConfiguration()
		+viewClassrooms()
		+viewGames()
			
    }
    class Documentation {
		+header: String
    	+body: String

		+loadContent(type: String) String
	}
	class DeviceManager {
		+loadGallery()
	}
	class Database {
		-users: User[]
		-classroom: Classroom[]

		+addUser()
		+removeUser()
		+addClassroom()
		+removeClassroom()
	}
	class CodeCompiler {
		+compileBlocklytoPython()
	}
```
The class diagram above demonstrates various relationships between classes within the BlastPad system. The User class is associated with the DeviceManager class, indicating that a user can interact with the device via the device manager. The DeviceManager class is also associated with the Gallery for loading it, as indicated by the loadGallery() method. Furthermore, the Gallery class is connected to the Classroom Manager, allowing users to view multiple classrooms, as shown by the viewClassrooms() method.

The ClassroomManager maintains a one-to-many relationship with the Classroom class, signifying that it can manage multiple Classrooms. Each Classroom is capable of handling multiple Game objects, as depicted by their one-to-many association. The Game class is similarly connected to the BlocklyEditor class through a one-to-many relationship, suggesting that the BlocklyEditor can manage numerous Block objects.

The Database class has a one-to-many link with both the User and Classroom classes, indicating that it stores and manages data from both Users and Classrooms.

The Block class has a one-to-many relationship with the Sensor class, illustrating that blocks can access and utilize one or many sensors. The Documentation class is standalone but associated with the BlocklyEditor to provide tutorials for different blocks in the BlocklyEditor.

Lastly, the Gallery class is linked to the Configuration class to handle WiFi connections.



## Sequence Diagrams


### Use Case 1 – Playing a Game
A user would like to play a game on their BlastPad.

1. The user turns on the BlastPad, and is presented with the Home Screen.
2. The user selects a game from their downloaded games, and is presented with the Play, Edit, and Upload buttons.
3. The user presses the Play button. BlastPad compiles the game and launches it.
4. The user plays the game!

```mermaid
---
title: Sequence Diagram 1 – Playing a Game
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen

User->>+Gallery: Select downloaded game to play
Gallery->>+Blockly Compiler: Compile selected game
Blockly Compiler-->>Blockly Compiler: Attempt Compilation
Blockly Compiler-->>-Gallery: Compilation Successful
Gallery->>+Blastpad: Attempt to start game
Blastpad-->>-Gallery: Game started
Gallery-->>-User: Close gallery and switch focus to game
User->>+Game: Play game!
```


### Use Case 2 - Develop a Game using the BlastPad
A user would like to develop a game using the BlastPad with Blockly.

1. The user turns on the BlastPad and is presented with the home screen.
2. The user selects the "New Game" icon from the home screen's game gallery and is presented with the code editor.
3. The user creates a new game in the editor.
4. The user saves their game.

```mermaid
---
title: "Sequence Diagram 2 - Develop a Game using the BlastPad"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen


User->>+Gallery: Press "Create New Game"
Gallery->>Gallery: openCodeEditor()
Gallery-->>-Blastpad: Close Gallery
activate Blastpad
Blastpad->>+BlocklyEditor: Open Code Editor
deactivate Blastpad
BlocklyEditor->>BlocklyEditor: createNewGame()
BlocklyEditor-->>-User: Render Code Editor
User->>+BlocklyEditor: Manipulate Blocks in Editor
User->>BlocklyEditor: Press "Save Game"
BlocklyEditor->>BlocklyEditor: saveGame()
BlocklyEditor->>-Blastpad: Try to save game to storage
activate Blastpad
Blastpad-->>+BlocklyEditor: Acknowledge Successful Save
deactivate Blastpad
BlocklyEditor-->>-User: Display Successful Save Message

```


### Use Case 3 - Develop game using laptop
A user would like to develop a game for the BlastPad with their laptop.
1. The user turns on the BlastPad.
2. The user connects to the BlastPad's hotspot and accesses the Block Editor from their browser.
3. The user is presented with the games on their BlastPad and the option to create a new game. The user chooses to create a new game.
4. The user creates their game and presses the save button. 

```mermaid
---
title: "Sequence Diagram 3 - Develop game using laptop"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
User->>+Laptop: Connect to BlastPad over LAN
Laptop->>Blastpad: Establish Connection
Blastpad-->>-Laptop: Connection Established
Laptop-->>-User: User is connected to their BlastPad
User->>+Laptop: Access Blockly Editor through Browser
Laptop->>+BlocklyEditor: GET Editor Page

BlocklyEditor->>+BlastPad: Retrieve Downloaded Games
BlastPad-->>-BlocklyEditor: Return Downloaded Games
BlocklyEditor->>-Laptop: Display Games and New Game Option
deactivate Laptop
User-->>+BlocklyEditor: Choose "New Game"

BlocklyEditor->>BlocklyEditor: Load Empty Workspace
BlocklyEditor-->>-User: Display Empty Workspace

User->>+BlocklyEditor: Interact with Editor and Save
BlocklyEditor->>BlocklyEditor: saveGame()
BlocklyEditor->>+Blastpad: Game is saved to disk
Blastpad-->>-BlocklyEditor: Acknowledge Successful Save
BlocklyEditor-->>-User: Display Successful Save Message

```




### Use Case 4 - Debugging your game
A user’s Blockly code fails during compilation and they would like to view the error message in order to debug their blocks.

1. The user starts the BlastPad.
2. Then chooses the saved created game from menu.
3. Then the user runs the game/hits play.
4. When the code compilation fails, the user will receive an error message stating which block failed to compile.

```mermaid
---
title: "Sequence Diagram 4 - Debugging your game"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen
		
User->>+Blastpad: Attach Keyboard & Mouse
Blastpad-->>-User: Acknowledge new input device



User->>+Gallery: Select a Game
Gallery->>+Blockly Compiler: Request to Compile and Run Saved Game
Blockly Compiler->>Blockly Compiler: Attempt Compilation
Blockly Compiler-->>-Gallery: Compilation Failed
Gallery-->>-User: Display Verbose Compilation Failure Message
```



### Use Case 5 - Creating a Classrooms Account
A user would like to create a Classrooms account for their BlastPad.

1. The user turns on the BlastPad and attaches their keyboard and mouse.
2. The user selects the “Account” button on the main menu of the home screen, which presents a choice between Login and Create Account.
3. The user selects “Create Account” and enters a username and password.
4. After entering the username and password, the user confirms their password by re-entering it.
5. The BlastPad displays a success message and returns the user to the home screen.

```mermaid
---
title: "Sequence Diagram 5: Creating a Classrooms Account"
---

sequenceDiagram
	actor User
	User->>+Blastpad: Power On
	Blastpad->>+Gallery: Start Home Screen/Gallery
	Gallery->>-Blastpad: Retrieve games stored on disk
	Blastpad-->>+Gallery: Return games stored on disk
	deactivate Blastpad	
	Gallery-->>-User: Display Home Screen
	
	User->>+Blastpad: Attach Keyboard & Mouse
	Blastpad-->>-User: Acknowledge new input device


	User->>+Gallery: Press "Account" Button
	Gallery-->>-User: Render Account Management Screen

	User->>+Gallery: Press "Create Account" Button
	Gallery-->>-User: Render Account Creation Screen


	User->>+Gallery: Enter username and password
	Gallery->>+Classrooms: POST new user w/ username and password
	Classrooms->>+Classrooms Database: Store new user in database
	Classrooms Database-->>- Classrooms: Acknowledge successful store
	Classrooms-->>-Gallery: Acknowledge successful user creation
 
	Gallery-->>-User: Display successful account creation message

```


### Use Case 6 - Joining a Classroom
A user would like to join a classroom from the BlastPad.

1. The user turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad
3. Then selects the “Classroom” option on the main menu of the home screen.
4. Then selects the “Join Classroom” button from the “Classroom” page menu.
5. Then the user types in the share link given to them by their instructor and hits enter..
6. The user will be returned to the home screen.


```mermaid
---
title: "Sequence Diagram 6: Joining a Classroom"
---
sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen


User->>+Gallery: Press "Classroom" Button
Gallery-->>-User: Display "View Classrooms"/"Join Classroom" Dropdown
User->>+Gallery: Select "Join Classroom", enter share link.
Gallery->>+Classroom: POST Share Link & User Information
Classroom->>Classroom: Verify Share Link
Classroom->>Classroom: Add user to specified classroom
Classroom-->>-Gallery: Acknowledge Sucessful Join
Gallery-->>-User: Display Successful Join Message

```


### Use Case 7 - Viewing and playing a published game
A user would like to view their classmate's games and play one.

1. The user turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad.
3. Then selects the “Classroom” option on the main menu of the home screen.
4. Then selects the “View Classroom(s)” button from the “Classroom” page menu.
5. Then the user scrolls through the list of Classrooms they have joined and selects one.
6. The user scrolls through the list of published games in the Classroom and selects one for download.
7. The user plays the downloaded game on their BlastPad.

```mermaid
---
title: "Sequence Diagram 7 - Viewing and playing a published game"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen

User->>+Blastpad: Attach Keyboard & Mouse
Blastpad-->>-User: Acknowledge new input device

User->>+Gallery: Press "Classrooms" Button
Gallery-->>-User: Display "View Classrooms/Join Classroom" Menu
User->>+Gallery: Select "View Classrooms"
Gallery->>+Classrooms: GET User's Classrooms
Classrooms->>+Classrooms Database: Database Query for User's Classrooms
Classrooms Database-->>-Classrooms: Successful Retrieval of User's Classrooms
Classrooms-->>-Gallery: Respond with User's Classrooms
Gallery-->>-User: Display User's Classrooms as list

User->>+Gallery: Select a Classroom
Gallery->>+Classrooms: GET Classroom information & uploaded games
Classrooms->>+Classrooms Database: Database Query for Classroom & Uploaded Games
Classrooms Database-->>-Classrooms: Successful Classroom Retrieval
Classrooms-->>-Gallery: Return classroom and published games
Gallery-->>-User: Display classroom and published games

User->>+Gallery: Download a published game
Gallery->>+Classrooms: GET published game
Classrooms->>+Classrooms Database: Retrieve game file name
Classrooms Database-->>-Classrooms: Return game file name
Classrooms-->>-Gallery: Return published game file
Gallery->>+Blastpad: Save game file to disk
Blastpad-->>-Gallery: Acknowledge successful save
Gallery-->>-User: Display successful save message.


User->>+Gallery: Return to game selection screen
Gallery->>+Blastpad: Retrieve games stored on disk
Blastpad-->>-Gallery: Return games stored on disk
Gallery-->>-User: Display downloaded games

User->>+Gallery: Select downloaded game to play
Gallery->>+Blockly Compiler: Compile selected game
Blockly Compiler-->>Blockly Compiler: Attempt Compilation
Blockly Compiler-->>-Gallery: Compilation Successful
Gallery->>+Blastpad: Attempt to start game
Blastpad-->>-Gallery: Game started
Gallery-->>-User: Close gallery and switch focus to game
User->>+Game: Play game!

```

### Use Case 8 - Uploading a game to a Classroom
A user would like to upload a game to a Classroom

1. The user turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad.
3. Then selects the menu to publish a game file.
4. Then the user selects the "Upload to Classroom" button and selects the specific Classroom for upload.
5. The user receives a confirmation message that the game was uploaded to the Classroom pending approval if that was set.

```mermaid
---
title: "Sequence Diagram 8 - Uploading a game to a Classroom"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen

User->>+Blastpad: Attach Keyboard & Mouse
Blastpad-->>-User: Acknowledge new input device


User->>+Gallery: Scroll through games, select one and press "Upload to Classroom"

Gallery->>+Classrooms: GET User's Classrooms
Classrooms->>+Classrooms Database: Database Query for User's Classrooms
Classrooms Database-->>-Classrooms: Successful Retrieval of User's Classrooms
Classrooms-->>-Gallery: Respond with User's Classrooms
Gallery-->>-User: Display User's Classrooms as list
User->>+Gallery: Select a classroom
Gallery->>+Classrooms: POST Game to classroom
Classrooms->>+Classrooms Database: Save game, flag as pending approval
Classrooms Database-->>-Classrooms: Acknowledge successful save
Classrooms-->>-Gallery: Acknowledge successful POST
Gallery-->>-User: Display successful upload

```


### Use Case 9 - Creating a Classroom
A user/teacher would like to a create a classroom to host BlastPad projects for students

1. The user visits the BlastPad™ website.
2. Then logs in/creates an account as an educator (verified by email domain)
3. Then selects the “Create Classroom” option from the educator dashboard.
4. Then the user configures the Classroom’s permissions
5. The user creates a special share link for students to join from their BlastPad



```mermaid
---
title: "Sequence Diagram 9 - Creating a Classroom"
---

sequenceDiagram
actor User
User->>+Classrooms Site: User Visits Classrooms Site
Classrooms Site-->>-User: Render Landing Page
User->>+Classrooms Site: Log in as Educator
Classrooms Site->>+Classrooms Database: POST User Information
Classrooms Database-->>-Classrooms Site: User is verified as Educator
Classrooms Site->>+Classrooms Database: GET User's Owned Classrooms
Classrooms Database-->>-Classrooms Site: Return User's Owned Classrooms
Classrooms Site-->>-User: Render Educator Portal and Owned Classrooms


User->>+Classrooms Site: Select Create Classroom
Classrooms Site->>+Classrooms Database: POST Create Classroom
Classrooms Database-->>-Classrooms Site: Classroom Created
Classrooms Site->>-User: Render Classroom Settings
User-->>+Classrooms Site: Configure Classroom Settings
Classrooms Site->>+Classrooms Database: POST New Classroom Settings
Classrooms Database-->>-Classrooms Site: Acknowledge New Settings
Classrooms Site-->>-User: Render New Classroom Settings
User->>+Classrooms Site: Select "Generate Share Link"
Classrooms Site->>Classrooms Site: Generate Share Link
Classrooms Site-->>-User: Display Generated Share Link

```




### Use Case 10 - Approving an uploaded game for public visibility in a Classroom
A user/teacher would like to approve an uploaded game to be visible in the Classroom

1. The user visits the BlastPad™ website.
2. Then logs in as an educator.
3. Then receives a notification on the educator dashboard that a game has been uploaded.
4. Then the user connects a BlastPad to their computer to view the game code in the editor or play it.
5. The user approves the game on the dashboard making the game visible within the Classroom.

```mermaid
---
title: "Sequence Diagram 10 - Approving an uploaded game for public visibility in a Classroom"
---

sequenceDiagram
actor User
User->>+Classrooms Site: User Visits Classrooms Site
Classrooms Site-->>-User: Render Landing Page
User->>+Classrooms Site: Log in as Educator
Classrooms Site->>+Classrooms Database: POST User Information
Classrooms Database-->>-Classrooms Site: User is verified as Educator
Classrooms Site->>+Classrooms Database: GET User's Owned Classrooms
Classrooms Database-->>-Classrooms Site: Return User's Owned Classrooms
Classrooms Site-->>-User: Render Educator Portal and Owned Classrooms



User->>+Classrooms Site: Select a Classroom
Classrooms Site->>+Classrooms Database: GET Classroom Information
Classrooms Database-->>-Classrooms Site: Return Classroom Information
Classrooms Site-->>-User: Render Classroom

User->>+Classrooms Site: Browse unpublished games
Classrooms Site->>+Classrooms Database: GET Games pending approval in classroom
Classrooms Database-->>-Classrooms Site: Return Games pending approval
Classrooms Site-->>-User: Display games pending approval

User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen

User->>+Blastpad: Attach Keyboard & Mouse
Blastpad-->>-User: Acknowledge new input device

User->>+Gallery: Press "Classrooms" Button
Gallery-->>-User: Display "View Classrooms/Join Classroom" Menu
User->>+Gallery: Select "View Classrooms"
Gallery->>+Classrooms: GET User's Classrooms
Classrooms->>+Classrooms Database: Database Query for User's Classrooms
Classrooms Database-->>-Classrooms: Successful Retrieval of User's Classrooms
Classrooms-->>-Gallery: Respond with User's Classrooms
Gallery-->>-User: Display User's Classrooms as list

User->>+Gallery: Select a Classroom
Gallery->>+Classrooms: GET Classroom information & uploaded games
Classrooms->>+Classrooms Database: Database Query for Classroom & Uploaded Games
Classrooms Database-->>-Classrooms: Successful Classroom Retrieval
Classrooms-->>-Gallery: Return classroom and published games
Gallery-->>-User: Display classroom and published games

User->>+Gallery: Download a published game
Gallery->>+Classrooms: GET published game
Classrooms->>+Classrooms Database: Retrieve game file name
Classrooms Database-->>-Classrooms: Return game file name
Classrooms-->>-Gallery: Return published game file
Gallery->>+Blastpad: Save game file to disk
Blastpad-->>-Gallery: Acknowledge successful save
Gallery-->>-User: Display successful save message.


User->>+Gallery: Return to game selection screen
Gallery->>+Blastpad: Retrieve games stored on disk
Blastpad-->>-Gallery: Return games stored on disk
Gallery-->>-User: Display downloaded games

User->>+Gallery: Select downloaded game to play
Gallery->>+Blockly Compiler: Compile selected game
Blockly Compiler-->>Blockly Compiler: Attempt Compilation
Blockly Compiler-->>-Gallery: Compilation Successful
Gallery->>+Blastpad: Attempt to start game
Blastpad-->>-Gallery: Game started
Gallery-->>-User: Close gallery and switch focus to game
User->>+Game: Play game!
Game-->>-User: Game over.

User->>+Classrooms Site: Approve game
Classrooms Site->>+Classrooms Database: POST Game Approval
Classrooms Database-->>-Classrooms Site: Acknowledge Successful Approval
Classrooms Site-->>-User: Display games awaiting approval
```

### Use Case 11 - Configuring the WiFi
A user would like to configure the WiFi for the BlastPad.

1. The user turns on the BlastPad (likely for the first time).
2. Then connects a keyboard and mouse to the BlastPad.
3. Then selects the “WiFi” icon on the main menu of the home screen.
4. Then selects the network they want to connect to from the scrollable list of available networks.
5. Then the user types in the Network key and hits enter.
6. The user is successfully connected and returned to the home screen

```mermaid
---
title: "Sequence Diagram 11 - Configuring the WiFi"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen

User->>+Blastpad: Attach Keyboard & Mouse
Blastpad-->>-User: Acknowledge new input device



User->>+Gallery: Press "Wifi" Button
Gallery->>+Blastpad: Retrieve local access points
Blastpad-->>-Gallery: Return list of available access points
Gallery-->>-User: Display list of available networks
User->>+Gallery: Select Network, enter password

Gallery->>+Blastpad: Attempt connection
Blastpad-->>-Gallery: Acknowledge successful connection to access point
Gallery-->>-User: Display successful connection

```


## Entity-relation diagram.

According to the following Entity-Relationship diagram below, there are four different relationships we can observe.
1. "Teaches in" Relationship
	This is a One-to-Many (1:N) relationship between Teachers and Classrooms. Each teacher can belong to multiple classrooms but each Classroom may only have a single Teacher.
	Furthermore, a Teacher belongs to 1 or many Classrooms and a Classroom may have one and only one Teacher.
2. "Contains"
	A One-to-Many (1:N) relationship between Classrooms and Students. Each Classroom may contain multiple Students, but each Student belongs to a single Classroom.
	Furthermore, Classrooms have one or many Students and a Student may belong to one and only one Classroom.
3. "Played by"
	A Many-to-Many (N:N) relationship between Students and Games. A Student may play multiple Games and a Game may be played by multiple Students.
	Furthermore, Games may belong to one or many Students and Students may have one or many Games.
```mermaid
---
title: "E-R Diagram SQL Database"
---
erDiagram
    Teachers {
        teacher_id INT PK
        first_name VARCHAR(255)
        last_name VARCHAR(255)
        username VARCHAR(255)
		password VARCHAR(255)
    }
    Classrooms {
        room_number INT PK
        teacher_id INT FK
    }
    Students {
        student_id INT PK
        first_name VARCHAR(255)
        last_name VARCHAR(255)
		username VARCHAR(255)
        room_number INT FK
        password VARCHAR(255)
        games VARCHAR(255)
    }
    Games {
		game_name VARCHAR(255)
        game_id INT PK
        name VARCHAR(255)
        last_edited_date DATE
        json_file BLOB
        image_icon BLOB
    }
    
    Teachers ||--|{ Classrooms : "Teaches in"
    Classrooms ||--|{ Students : "Contains"
    Games |{--|{ Students : "Played by"
```

<!-- A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance. -->
