---
sidebar_position: 5
---

# Use-case descriptions


### Use Case 1 – Playing a Game
A user would like to play a game on their BlastPad.

1. The user turns on the BlastPad, and is presented with the Home Screen.
2. The user selects a game from their downloaded games, and is presented with the Play, Edit, and Upload buttons.
3. The user presses the Play button. BlastPad compiles the game and launches it.
4. The user plays the game!

```mermaid
---
title: Use Case 1 – Playing a Game
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
title: "Use Case 2 - Develop a Game using the BlastPad"
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
title: "Use Case 3 - Develop game using laptop"
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
title: "Use Case 4 - Debugging your game"
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



### Use Case 5 - Creating an Account
A user would like to create an account at home for their BlastPad.

1. The user turns on the BlastPad and attaches their keyboard and mouse.
2. The user selects the "Settings" button on the main menu of the home screen.
3. The user selects the "Account" category in the settings screen.
4. The BlastPad prompts the user to either Login or Sign Up.
5. The user selects “Sign Up” and is prompted to enter a username and password.
6. After entering the username and password, the user confirms their password by re-entering it.
7. The user clicks a button to submit the signup form.
8. The BlastPad displays a success message.

```mermaid
---
title: "Use Case 5: Creating an Account"
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
	Gallery-->>-User: Render Settings Screen

	User->>+Gallery: Press "Account" Button
	Gallery-->>-User: Render Account Screen

	User->>+Gallery: Press "Create Account" Button
	Gallery-->>-User: Render Account Creation Screen


	User->>+Gallery: Enter username, password, confirmed password
	User->>Gallery: Submit sign up form
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
5. Then the user types in the class code given to them by their instructor and hits enter.
6. The BlastPad displays a success message and the chosen classroom screen.


```mermaid
---
title: "Use Case 6: Joining a Classroom"
---
sequenceDiagram
	actor Teacher
	actor Student
	Student->>+Blastpad: Power On
	Blastpad->>+Gallery: Start Home Screen/Gallery
	deactivate Blastpad	
	Gallery-->>-Student: Display Home Screen


	Student->>+Gallery: Press "Classroom" Button
	Gallery-->>-Student: Display "View Classrooms"/"Join Classroom" Dropdown
	Teacher->>Student: Share class code
	Student->>+Gallery: Select "Join Classroom", enter class code.
	Gallery->>+Classroom: POST class code & student's User information
	Classroom->>Classroom: Verify class code
	Classroom->>Classroom: Add student's User to specified classroom
	Classroom-->>-Gallery: Acknowledge Sucessful Join
	Gallery-->>-Student: Display Successful Join Message
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
title: "Use Case 7 - Viewing and playing a published game"
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
title: "Use Case 8 - Uploading a game to a Classroom"
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
5. The classroom site generates a special class code for students to join from their BlastPad



```mermaid
---
title: "Use Case 9 - Creating a Classroom"
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
Classrooms Site->>Classrooms Site: Generate Class Code
Classrooms Site-->>-User: Display Generated Class Code

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
title: "Use Case 12 - Approving an uploaded game for public visibility in a Classroom"
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
title: "Use Case 11 - Configuring the WiFi"
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


