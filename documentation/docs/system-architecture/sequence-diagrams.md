---
sidebar_position: 2
---

# Sequence Diagrams

## Use Case 1 – Playing a Game
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


## Use Case 2 - Develop a Game using the BlastPad
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


## Use Case 3 - Develop game using laptop
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




## Use Case 4 - Debugging your game
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


## Use Case 5 - Joining a Classroom
A user would like to join a classroom from the BlastPad.

1. The user turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad
3. Then clicks on the Settings Page and clicks on the "Classroom" option on the sidebar .
4. Then selects the “Join” option on the displayed "Classroom" page.
5. Then the user types in the invite code given to them by their instructor and hits enter.
6. The user will be shown a successful "Joined" message and be returned to the "Classroom" page.


```mermaid
---
title: "Sequence Diagram 5: Joining a Classroom"
---
sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
Gallery->>-Blastpad: Retrieve games stored on disk
Blastpad-->>+Gallery: Return games stored on disk
deactivate Blastpad	
Gallery-->>-User: Display Home Screen


User->>+Gallery: Press "Settings" Button
Gallery-->>-User: Display Settings Sidebar Menu
User->>+Gallery: Select "Classroom" button.
Gallery-->>User: Display "Join" and "Create" Classroom options
User->>Gallery: Select "Join" button, enter invite code.

Gallery->>+Classroom: POST Invite Code
Classroom->>Classroom: Verify Share Link
Classroom->>Classroom: Add user to specified classroom
Classroom-->>-Gallery: Acknowledge Sucessful Join
Gallery-->>-User: Display Successful Join Message

```


## Use Case 6 - Viewing and playing a published game
A user would like to view their classmate's games and play one.

1. The user turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad.
3. Then selects the “Classroom” option on the main menu of the home screen.
6. The user scrolls through the list of published games in the Classroom and selects one for download.
7. The user plays the downloaded game on their BlastPad.

```mermaid
---
title: "Sequence Diagram 6 - Viewing and playing a published game"
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

User->>+Gallery: Press "Classroom" Button
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

## Use Case 7 - Uploading a game to a Classroom
A user would like to upload a game to a Classroom

1. The user turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad.
3. Then selects the menu to publish a game file.
4. Then the user selects the "Upload to Classroom" button.
5. The user receives a confirmation message that the game was uploaded to the Classroom.

```mermaid
---
title: "Sequence Diagram 7 - Uploading a game to a Classroom"
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
Classrooms-->>-Gallery: Respond with User's Classroom
Gallery->>+Classrooms: POST Game to classroom
Classrooms->>+Classrooms Database: Save game, flag as pending approval
Classrooms Database-->>-Classrooms: Acknowledge successful save
Classrooms-->>-Gallery: Acknowledge successful POST
Gallery-->>-User: Display successful upload

```


## Use Case 8 - Creating a Classroom
A user/teacher would like to a create a classroom to host BlastPad projects for students

1. The instructor turns on the BlastPad.
2. Then connects a keyboard and mouse to the BlastPad
3. Then clicks on the Settings Page and clicks on the "Classroom" option on the sidebar .
4. Then selects the “Create” option on the displayed "Classroom" page.
5. Then the instructor types in a classroom name, description, their own name, and an invite code.
6. Then hits the “Create Classroom” button
7. The instructor will be shown a successful "Created" message and be returned to the "Classroom" page automatically joined in the created Classroom.



```mermaid
---
title: "Sequence Diagram 8 - Creating a Classroom"
---

sequenceDiagram
actor User
User->>+Blastpad: Power On
Blastpad->>+Gallery: Start Home Screen/Gallery
deactivate Blastpad	
Gallery-->>-User: Display Home Screen

User->>+Blastpad: Attach Keyboard & Mouse
Blastpad-->>-User: Acknowledge new input device


User->>+Gallery: Press "Settings" Button
Gallery-->>-User: Display Settings Sidebar Menu
User->>+Gallery: Select "Classroom" button.
Gallery-->>User: Display "Join" and "Create" Classroom options
User->>Gallery: Select "Create" button, enter title, description, name, and invite code.

Gallery->>+Classroom: POST Classroom information
Classroom->>Classroom: Create Classroom
Classroom->>Classroom: Add user to specified classroom
Classroom-->>-Gallery: Acknowledge Sucessful Creation
Gallery-->>-User: Display Successful Create Message, show user joined to Classroom


```


## Use Case 9 - Configuring the WiFi
A user would like to configure the WiFi for the BlastPad.

1. The user turns on the BlastPad (likely for the first time).
2. Then connects a keyboard and mouse to the BlastPad.
3. Then selects the “Setting” icon on the main menu of the home screen.
4. Then selects the "WiFi" icon on the sidebar menu of the "Settings" page
4. Then selects the network they want to connect to from the scrollable list of available networks in the displayed "WiFi" page.
5. Then the user types in the Network key and hits enter.
6. The user is successfully connected and returned to the "WiFi" page displaying their connection status.

```mermaid
---
title: "Sequence Diagram 9 - Configuring the WiFi"
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



User->>+Gallery: Press "Settings" Button
Gallery-->>User: Display "Settings" Page sidebar menu
User->>Gallery: Select "WiFi" button
Gallery->>+Blastpad: Retrieve local access points
Blastpad-->>-Gallery: Return list of available access points
Gallery-->>-User: Display list of available networks
User->>+Gallery: Select Network, enter password

Gallery->>+Blastpad: Attempt connection
Blastpad-->>-Gallery: Acknowledge successful connection to access point
Gallery-->>-User: Display successful connection

```