"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{25478:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var n=a(85893),l=a(11151);const t={sidebar_position:1},o="Design",r={id:"system-architecture/design",title:"Design",description:"Class Diagram",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-blastpad/docs/system-architecture/design",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"tuk05348",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-blastpad/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-blastpad/docs/system-architecture/development-environment"}},i={},d=[{value:"Class Diagram",id:"class-diagram",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Use Case 1 \u2013\xa0Playing a Game",id:"use-case-1-playing-a-game",level:3},{value:"Use Case 2 - Develop a Game using the BlastPad",id:"use-case-2---develop-a-game-using-the-blastpad",level:3},{value:"Use Case 3 - Develop game using laptop",id:"use-case-3---develop-game-using-laptop",level:3},{value:"Use Case 4 - Debugging your game",id:"use-case-4---debugging-your-game",level:3},{value:"Use Case 5 - Creating a Classrooms Account",id:"use-case-5---creating-a-classrooms-account",level:3},{value:"Use Case 6 - Joining a Classroom",id:"use-case-6---joining-a-classroom",level:3},{value:"Use Case 7 - Viewing and playing a published game",id:"use-case-7---viewing-and-playing-a-published-game",level:3},{value:"Use Case 8 - Uploading a game to a Classroom",id:"use-case-8---uploading-a-game-to-a-classroom",level:3},{value:"Use Case 9 - Creating a Classroom",id:"use-case-9---creating-a-classroom",level:3},{value:"Use Case 10 - Approving an uploaded game for public visibility in a Classroom",id:"use-case-10---approving-an-uploaded-game-for-public-visibility-in-a-classroom",level:3},{value:"Use Case 11 - Configuring the WiFi",id:"use-case-11---configuring-the-wifi",level:3},{value:"Entity-relation diagram.",id:"entity-relation-diagram",level:2}];function m(e){const s={h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"design",children:"Design"}),"\n",(0,n.jsx)(s.h2,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: BlastPad Class Diagram\n---\nclassDiagram\n    BlocklyEditor o-- "0..*" Game\n\tUserManager --o "0..*" Database\n\tClassroom o-- "0..*" Game\n\tDeviceManager <-- "1" UserManager\n\tBlocklyEditor o-- "0..*" Block\n\tDatabase o-- "0..*" Classroom\n\tBlocklyEditor o-- "1" Documentation\n\tGallery <-- "1" ClassroomManager\n\tGallery <-- "1" BlocklyEditor\t\n\tClassroomManager *-- "0..*" Classroom\n\tBlock <-- "0..*" Sensor\n\tGallery <-- "1" Configuration\t\n\tDeviceManager <-- "1" Gallery\n\tGame <-- "1" CodeCompiler\n\t\t\n    class Game{\n        -title: String\n\t\t-imageFile: String\n        -version: String\n\t\t-author: String\n\t\t\n\t\t+startGame()\n\t\t+pauseGame()\n\t\t+quitGame()\n\t\t+uploadToClassroom(Classroom)\n\t\t+compileGame() String\n    }\n    class BlocklyEditor{\n        -workspaces: Game[]\n\t\t-availableBlocks: Block[]\n\t\t\n\t\t+saveWorkspace()\n\t\t+loadWorkspace(game: Game)\n    }\n    class Block {\n        +type: String\n\t\t+message0: String\n\t\t+message1: String\n\t\t+args0: Object[]\n\t\t+args1: Object[]\n\t\t+previousStatement: String\n\t\t+nextStatment: String\n\t\t+tooltip: String\n\t\t+helpurl: String\n\t\t+style: String\n    }\n    class Sensor {\n\t\t+sensorID: int\n\t\t-sensorData: int[]\n\t\t-calibration: Boolean\n\n\t\t+getSensorData(): int[]\n\t\t+recalibrateSensor()\n\t\t+clearSensorData()\n    }\n    class Classroom {\n        +classroomID: int\n\t\t+teacherID: int\n\n\t\t+deleteGame(userID: int) bool\n\t\t+approveGame(userID: int) bool\n\t\t+uploadGame(game: Game)\n    }\n\tclass ClassroomManager {\n\t\t-classrooms: Classroom[]\n\n\t\t+joinClassroom(c: Classroom) bool\n\t\t+leaveClassroom(c: Classroom) bool\n\t\t+viewClassrooms()\n\t}\n\tclass UserManager {\n    \t-String: username\n\t\t-String: password\n\t\t+login(username: String, password: String) bool\n\t\t+createAccount(username: String, password: String) bool\n    }\n    class Configuration {\n\t\t+connectionStatus: Boolean\n\t\t+listOfAvailNetworks: String[]\n\t\t+SSID: String\n\t\t-securityKey: String\n\t\t\n\t\t+scan() String[]\n\t\t+connect(SSID: String, securityKey: String)\n\t\t+close()\n    }\n    class Gallery {\n    \t+openCodeEditor()\n\t\t+openConfiguration()\n\t\t+viewClassrooms()\n\t\t+viewGames() Games[]\n\t\t\t\n    }\n    class Documentation {\n\t\t+header: String\n    \t+body: String\n\n\t\t+loadContent(type: String) String\n\t}\n\tclass DeviceManager {\n\t\t+currentScreen: String\n\n\t\t+loadGallery()\n\t}\n\tclass Database {\n\t\t-users: User[]\n\t\t-classroom: Classroom[]\n\n\t\t+addUser()\n\t\t+removeUser()\n\t\t+addClassroom()\n\t\t+removeClassroom()\n\t}\n\tclass CodeCompiler {\n\t\t+compileBlocklytoPython()\n\t}'}),"\n",(0,n.jsx)(s.p,{children:"The class diagram above demonstrates various relationships between classes within the BlastPad system. The User class is associated with the DeviceManager class, indicating that a user can interact with the device via the device manager. The DeviceManager class is also associated with the Gallery for loading it, as indicated by the loadGallery() method. Furthermore, the Gallery class is connected to the Classroom Manager, allowing users to view multiple classrooms, as shown by the viewClassrooms() method."}),"\n",(0,n.jsx)(s.p,{children:"The ClassroomManager maintains a one-to-many relationship with the Classroom class, signifying that it can manage multiple Classrooms. Each Classroom is capable of handling multiple Game objects, as depicted by their one-to-many association. The Game class is similarly connected to the BlocklyEditor class through a one-to-many relationship, suggesting that the BlocklyEditor can manage numerous Block objects."}),"\n",(0,n.jsx)(s.p,{children:"The Database class has a one-to-many link with both the User and Classroom classes, indicating that it stores and manages data from both Users and Classrooms."}),"\n",(0,n.jsx)(s.p,{children:"The Block class has a one-to-many relationship with the Sensor class, illustrating that blocks can access and utilize one or many sensors. The Documentation class is standalone but associated with the BlocklyEditor to provide tutorials for different blocks in the BlocklyEditor."}),"\n",(0,n.jsx)(s.p,{children:"Lastly, the Gallery class is linked to the Configuration class to handle WiFi connections."}),"\n",(0,n.jsx)(s.h2,{id:"sequence-diagrams",children:"Sequence Diagrams"}),"\n",(0,n.jsx)(s.h3,{id:"use-case-1-playing-a-game",children:"Use Case 1 \u2013\xa0Playing a Game"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to play a game on their BlastPad."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad, and is presented with the Home Screen."}),"\n",(0,n.jsx)(s.li,{children:"The user selects a game from their downloaded games, and is presented with the Play, Edit, and Upload buttons."}),"\n",(0,n.jsx)(s.li,{children:"The user presses the Play button. BlastPad compiles the game and launches it."}),"\n",(0,n.jsx)(s.li,{children:"The user plays the game!"}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:"---\ntitle: Sequence Diagram 1 \u2013\xa0Playing a Game\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\nUser->>+Gallery: Select downloaded game to play\nGallery->>+Blockly Compiler: Compile selected game\nBlockly Compiler--\x3e>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Gallery: Compilation Successful\nGallery->>+Blastpad: Attempt to start game\nBlastpad--\x3e>-Gallery: Game started\nGallery--\x3e>-User: Close gallery and switch focus to game\nUser->>+Game: Play game!"}),"\n",(0,n.jsx)(s.h3,{id:"use-case-2---develop-a-game-using-the-blastpad",children:"Use Case 2 - Develop a Game using the BlastPad"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to develop a game using the BlastPad with Blockly."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad and is presented with the home screen."}),"\n",(0,n.jsx)(s.li,{children:'The user selects the "New Game" icon from the home screen\'s game gallery and is presented with the code editor.'}),"\n",(0,n.jsx)(s.li,{children:"The user creates a new game in the editor."}),"\n",(0,n.jsx)(s.li,{children:"The user saves their game."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 2 - Develop a Game using the BlastPad"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\n\nUser->>+Gallery: Press "Create New Game"\nGallery->>Gallery: openCodeEditor()\nGallery--\x3e>-Blastpad: Close Gallery\nactivate Blastpad\nBlastpad->>+BlocklyEditor: Open Code Editor\ndeactivate Blastpad\nBlocklyEditor->>BlocklyEditor: createNewGame()\nBlocklyEditor--\x3e>-User: Render Code Editor\nUser->>+BlocklyEditor: Manipulate Blocks in Editor\nUser->>BlocklyEditor: Press "Save Game"\nBlocklyEditor->>BlocklyEditor: saveGame()\nBlocklyEditor->>-Blastpad: Try to save game to storage\nactivate Blastpad\nBlastpad--\x3e>+BlocklyEditor: Acknowledge Successful Save\ndeactivate Blastpad\nBlocklyEditor--\x3e>-User: Display Successful Save Message\n'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-3---develop-game-using-laptop",children:"Use Case 3 - Develop game using laptop"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to develop a game for the BlastPad with their laptop."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"The user connects to the BlastPad's hotspot and accesses the Block Editor from their browser."}),"\n",(0,n.jsx)(s.li,{children:"The user is presented with the games on their BlastPad and the option to create a new game. The user chooses to create a new game."}),"\n",(0,n.jsx)(s.li,{children:"The user creates their game and presses the save button."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 3 - Develop game using laptop"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nUser->>+Laptop: Connect to BlastPad over LAN\nLaptop->>Blastpad: Establish Connection\nBlastpad--\x3e>-Laptop: Connection Established\nLaptop--\x3e>-User: User is connected to their BlastPad\nUser->>+Laptop: Access Blockly Editor through Browser\nLaptop->>+BlocklyEditor: GET Editor Page\n\nBlocklyEditor->>+BlastPad: Retrieve Downloaded Games\nBlastPad--\x3e>-BlocklyEditor: Return Downloaded Games\nBlocklyEditor->>-Laptop: Display Games and New Game Option\ndeactivate Laptop\nUser--\x3e>+BlocklyEditor: Choose "New Game"\n\nBlocklyEditor->>BlocklyEditor: Load Empty Workspace\nBlocklyEditor--\x3e>-User: Display Empty Workspace\n\nUser->>+BlocklyEditor: Interact with Editor and Save\nBlocklyEditor->>BlocklyEditor: saveGame()\nBlocklyEditor->>+Blastpad: Game is saved to disk\nBlastpad--\x3e>-BlocklyEditor: Acknowledge Successful Save\nBlocklyEditor--\x3e>-User: Display Successful Save Message\n'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-4---debugging-your-game",children:"Use Case 4 - Debugging your game"}),"\n",(0,n.jsx)(s.p,{children:"A user\u2019s Blockly code fails during compilation and they would like to view the error message in order to debug their blocks."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user starts the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then chooses the saved created game from menu."}),"\n",(0,n.jsx)(s.li,{children:"Then the user runs the game/hits play."}),"\n",(0,n.jsx)(s.li,{children:"When the code compilation fails, the user will receive an error message stating which block failed to compile."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 4 - Debugging your game"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\t\t\nUser->>+Blastpad: Attach Keyboard & Mouse\nBlastpad--\x3e>-User: Acknowledge new input device\n\n\n\nUser->>+Gallery: Select a Game\nGallery->>+Blockly Compiler: Request to Compile and Run Saved Game\nBlockly Compiler->>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Gallery: Compilation Failed\nGallery--\x3e>-User: Display Verbose Compilation Failure Message'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-5---creating-a-classrooms-account",children:"Use Case 5 - Creating a Classrooms Account"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to create a Classrooms account for their BlastPad."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad and attaches their keyboard and mouse."}),"\n",(0,n.jsx)(s.li,{children:"The user selects the \u201cAccount\u201d button on the main menu of the home screen, which presents a choice between Login and Create Account."}),"\n",(0,n.jsx)(s.li,{children:"The user selects \u201cCreate Account\u201d and enters a username and password."}),"\n",(0,n.jsx)(s.li,{children:"After entering the username and password, the user confirms their password by re-entering it."}),"\n",(0,n.jsx)(s.li,{children:"The BlastPad displays a success message and returns the user to the home screen."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 5: Creating a Classrooms Account"\n---\n\nsequenceDiagram\n\tactor User\n\tUser->>+Blastpad: Power On\n\tBlastpad->>+Gallery: Start Home Screen/Gallery\n\tGallery->>-Blastpad: Retrieve games stored on disk\n\tBlastpad--\x3e>+Gallery: Return games stored on disk\n\tdeactivate Blastpad\t\n\tGallery--\x3e>-User: Display Home Screen\n\t\n\tUser->>+Blastpad: Attach Keyboard & Mouse\n\tBlastpad--\x3e>-User: Acknowledge new input device\n\n\n\tUser->>+Gallery: Press "Account" Button\n\tGallery--\x3e>-User: Render Account Management Screen\n\n\tUser->>+Gallery: Press "Create Account" Button\n\tGallery--\x3e>-User: Render Account Creation Screen\n\n\n\tUser->>+Gallery: Enter username and password\n\tGallery->>+Classrooms: POST new user w/ username and password\n\tClassrooms->>+Classrooms Database: Store new user in database\n\tClassrooms Database--\x3e>- Classrooms: Acknowledge successful store\n\tClassrooms--\x3e>-Gallery: Acknowledge successful user creation\n \n\tGallery--\x3e>-User: Display successful account creation message\n'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-6---joining-a-classroom",children:"Use Case 6 - Joining a Classroom"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to join a classroom from the BlastPad."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then connects a keyboard and mouse to the BlastPad"}),"\n",(0,n.jsx)(s.li,{children:"Then selects the \u201cClassroom\u201d option on the main menu of the home screen."}),"\n",(0,n.jsx)(s.li,{children:"Then selects the \u201cJoin Classroom\u201d button from the \u201cClassroom\u201d page menu."}),"\n",(0,n.jsx)(s.li,{children:"Then the user types in the share link given to them by their instructor and hits enter.."}),"\n",(0,n.jsx)(s.li,{children:"The user will be returned to the home screen."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 6: Joining a Classroom"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\n\nUser->>+Gallery: Press "Classroom" Button\nGallery--\x3e>-User: Display "View Classrooms"/"Join Classroom" Dropdown\nUser->>+Gallery: Select "Join Classroom", enter share link.\nGallery->>+Classroom: POST Share Link & User Information\nClassroom->>Classroom: Verify Share Link\nClassroom->>Classroom: Add user to specified classroom\nClassroom--\x3e>-Gallery: Acknowledge Sucessful Join\nGallery--\x3e>-User: Display Successful Join Message\n'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-7---viewing-and-playing-a-published-game",children:"Use Case 7 - Viewing and playing a published game"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to view their classmate's games and play one."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then connects a keyboard and mouse to the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then selects the \u201cClassroom\u201d option on the main menu of the home screen."}),"\n",(0,n.jsx)(s.li,{children:"Then selects the \u201cView Classroom(s)\u201d button from the \u201cClassroom\u201d page menu."}),"\n",(0,n.jsx)(s.li,{children:"Then the user scrolls through the list of Classrooms they have joined and selects one."}),"\n",(0,n.jsx)(s.li,{children:"The user scrolls through the list of published games in the Classroom and selects one for download."}),"\n",(0,n.jsx)(s.li,{children:"The user plays the downloaded game on their BlastPad."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 7 - Viewing and playing a published game"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\nUser->>+Blastpad: Attach Keyboard & Mouse\nBlastpad--\x3e>-User: Acknowledge new input device\n\nUser->>+Gallery: Press "Classrooms" Button\nGallery--\x3e>-User: Display "View Classrooms/Join Classroom" Menu\nUser->>+Gallery: Select "View Classrooms"\nGallery->>+Classrooms: GET User\'s Classrooms\nClassrooms->>+Classrooms Database: Database Query for User\'s Classrooms\nClassrooms Database--\x3e>-Classrooms: Successful Retrieval of User\'s Classrooms\nClassrooms--\x3e>-Gallery: Respond with User\'s Classrooms\nGallery--\x3e>-User: Display User\'s Classrooms as list\n\nUser->>+Gallery: Select a Classroom\nGallery->>+Classrooms: GET Classroom information & uploaded games\nClassrooms->>+Classrooms Database: Database Query for Classroom & Uploaded Games\nClassrooms Database--\x3e>-Classrooms: Successful Classroom Retrieval\nClassrooms--\x3e>-Gallery: Return classroom and published games\nGallery--\x3e>-User: Display classroom and published games\n\nUser->>+Gallery: Download a published game\nGallery->>+Classrooms: GET published game\nClassrooms->>+Classrooms Database: Retrieve game file name\nClassrooms Database--\x3e>-Classrooms: Return game file name\nClassrooms--\x3e>-Gallery: Return published game file\nGallery->>+Blastpad: Save game file to disk\nBlastpad--\x3e>-Gallery: Acknowledge successful save\nGallery--\x3e>-User: Display successful save message.\n\n\nUser->>+Gallery: Return to game selection screen\nGallery->>+Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>-Gallery: Return games stored on disk\nGallery--\x3e>-User: Display downloaded games\n\nUser->>+Gallery: Select downloaded game to play\nGallery->>+Blockly Compiler: Compile selected game\nBlockly Compiler--\x3e>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Gallery: Compilation Successful\nGallery->>+Blastpad: Attempt to start game\nBlastpad--\x3e>-Gallery: Game started\nGallery--\x3e>-User: Close gallery and switch focus to game\nUser->>+Game: Play game!\n'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-8---uploading-a-game-to-a-classroom",children:"Use Case 8 - Uploading a game to a Classroom"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to upload a game to a Classroom"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then connects a keyboard and mouse to the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then selects the menu to publish a game file."}),"\n",(0,n.jsx)(s.li,{children:'Then the user selects the "Upload to Classroom" button and selects the specific Classroom for upload.'}),"\n",(0,n.jsx)(s.li,{children:"The user receives a confirmation message that the game was uploaded to the Classroom pending approval if that was set."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:"---\ntitle: \"Sequence Diagram 8 - Uploading a game to a Classroom\"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\nUser->>+Blastpad: Attach Keyboard & Mouse\nBlastpad--\x3e>-User: Acknowledge new input device\n\n\nUser->>+Gallery: Scroll through games, select one and press \"Upload to Classroom\"\n\nGallery->>+Classrooms: GET User's Classrooms\nClassrooms->>+Classrooms Database: Database Query for User's Classrooms\nClassrooms Database--\x3e>-Classrooms: Successful Retrieval of User's Classrooms\nClassrooms--\x3e>-Gallery: Respond with User's Classrooms\nGallery--\x3e>-User: Display User's Classrooms as list\nUser->>+Gallery: Select a classroom\nGallery->>+Classrooms: POST Game to classroom\nClassrooms->>+Classrooms Database: Save game, flag as pending approval\nClassrooms Database--\x3e>-Classrooms: Acknowledge successful save\nClassrooms--\x3e>-Gallery: Acknowledge successful POST\nGallery--\x3e>-User: Display successful upload\n"}),"\n",(0,n.jsx)(s.h3,{id:"use-case-9---creating-a-classroom",children:"Use Case 9 - Creating a Classroom"}),"\n",(0,n.jsx)(s.p,{children:"A user/teacher would like to a create a classroom to host BlastPad projects for students"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user visits the BlastPad\u2122 website."}),"\n",(0,n.jsx)(s.li,{children:"Then logs in/creates an account as an educator (verified by email domain)"}),"\n",(0,n.jsx)(s.li,{children:"Then selects the \u201cCreate Classroom\u201d option from the educator dashboard."}),"\n",(0,n.jsx)(s.li,{children:"Then the user configures the Classroom\u2019s permissions"}),"\n",(0,n.jsx)(s.li,{children:"The user creates a special share link for students to join from their BlastPad"}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 9 - Creating a Classroom"\n---\n\nsequenceDiagram\nactor User\nUser->>+Classrooms Site: User Visits Classrooms Site\nClassrooms Site--\x3e>-User: Render Landing Page\nUser->>+Classrooms Site: Log in as Educator\nClassrooms Site->>+Classrooms Database: POST User Information\nClassrooms Database--\x3e>-Classrooms Site: User is verified as Educator\nClassrooms Site->>+Classrooms Database: GET User\'s Owned Classrooms\nClassrooms Database--\x3e>-Classrooms Site: Return User\'s Owned Classrooms\nClassrooms Site--\x3e>-User: Render Educator Portal and Owned Classrooms\n\n\nUser->>+Classrooms Site: Select Create Classroom\nClassrooms Site->>+Classrooms Database: POST Create Classroom\nClassrooms Database--\x3e>-Classrooms Site: Classroom Created\nClassrooms Site->>-User: Render Classroom Settings\nUser--\x3e>+Classrooms Site: Configure Classroom Settings\nClassrooms Site->>+Classrooms Database: POST New Classroom Settings\nClassrooms Database--\x3e>-Classrooms Site: Acknowledge New Settings\nClassrooms Site--\x3e>-User: Render New Classroom Settings\nUser->>+Classrooms Site: Select "Generate Share Link"\nClassrooms Site->>Classrooms Site: Generate Share Link\nClassrooms Site--\x3e>-User: Display Generated Share Link\n'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-10---approving-an-uploaded-game-for-public-visibility-in-a-classroom",children:"Use Case 10 - Approving an uploaded game for public visibility in a Classroom"}),"\n",(0,n.jsx)(s.p,{children:"A user/teacher would like to approve an uploaded game to be visible in the Classroom"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user visits the BlastPad\u2122 website."}),"\n",(0,n.jsx)(s.li,{children:"Then logs in as an educator."}),"\n",(0,n.jsx)(s.li,{children:"Then receives a notification on the educator dashboard that a game has been uploaded."}),"\n",(0,n.jsx)(s.li,{children:"Then the user connects a BlastPad to their computer to view the game code in the editor or play it."}),"\n",(0,n.jsx)(s.li,{children:"The user approves the game on the dashboard making the game visible within the Classroom."}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 10 - Approving an uploaded game for public visibility in a Classroom"\n---\n\nsequenceDiagram\nactor User\nUser->>+Classrooms Site: User Visits Classrooms Site\nClassrooms Site--\x3e>-User: Render Landing Page\nUser->>+Classrooms Site: Log in as Educator\nClassrooms Site->>+Classrooms Database: POST User Information\nClassrooms Database--\x3e>-Classrooms Site: User is verified as Educator\nClassrooms Site->>+Classrooms Database: GET User\'s Owned Classrooms\nClassrooms Database--\x3e>-Classrooms Site: Return User\'s Owned Classrooms\nClassrooms Site--\x3e>-User: Render Educator Portal and Owned Classrooms\n\n\n\nUser->>+Classrooms Site: Select a Classroom\nClassrooms Site->>+Classrooms Database: GET Classroom Information\nClassrooms Database--\x3e>-Classrooms Site: Return Classroom Information\nClassrooms Site--\x3e>-User: Render Classroom\n\nUser->>+Classrooms Site: Browse unpublished games\nClassrooms Site->>+Classrooms Database: GET Games pending approval in classroom\nClassrooms Database--\x3e>-Classrooms Site: Return Games pending approval\nClassrooms Site--\x3e>-User: Display games pending approval\n\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\nUser->>+Blastpad: Attach Keyboard & Mouse\nBlastpad--\x3e>-User: Acknowledge new input device\n\nUser->>+Gallery: Press "Classrooms" Button\nGallery--\x3e>-User: Display "View Classrooms/Join Classroom" Menu\nUser->>+Gallery: Select "View Classrooms"\nGallery->>+Classrooms: GET User\'s Classrooms\nClassrooms->>+Classrooms Database: Database Query for User\'s Classrooms\nClassrooms Database--\x3e>-Classrooms: Successful Retrieval of User\'s Classrooms\nClassrooms--\x3e>-Gallery: Respond with User\'s Classrooms\nGallery--\x3e>-User: Display User\'s Classrooms as list\n\nUser->>+Gallery: Select a Classroom\nGallery->>+Classrooms: GET Classroom information & uploaded games\nClassrooms->>+Classrooms Database: Database Query for Classroom & Uploaded Games\nClassrooms Database--\x3e>-Classrooms: Successful Classroom Retrieval\nClassrooms--\x3e>-Gallery: Return classroom and published games\nGallery--\x3e>-User: Display classroom and published games\n\nUser->>+Gallery: Download a published game\nGallery->>+Classrooms: GET published game\nClassrooms->>+Classrooms Database: Retrieve game file name\nClassrooms Database--\x3e>-Classrooms: Return game file name\nClassrooms--\x3e>-Gallery: Return published game file\nGallery->>+Blastpad: Save game file to disk\nBlastpad--\x3e>-Gallery: Acknowledge successful save\nGallery--\x3e>-User: Display successful save message.\n\n\nUser->>+Gallery: Return to game selection screen\nGallery->>+Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>-Gallery: Return games stored on disk\nGallery--\x3e>-User: Display downloaded games\n\nUser->>+Gallery: Select downloaded game to play\nGallery->>+Blockly Compiler: Compile selected game\nBlockly Compiler--\x3e>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Gallery: Compilation Successful\nGallery->>+Blastpad: Attempt to start game\nBlastpad--\x3e>-Gallery: Game started\nGallery--\x3e>-User: Close gallery and switch focus to game\nUser->>+Game: Play game!\nGame--\x3e>-User: Game over.\n\nUser->>+Classrooms Site: Approve game\nClassrooms Site->>+Classrooms Database: POST Game Approval\nClassrooms Database--\x3e>-Classrooms Site: Acknowledge Successful Approval\nClassrooms Site--\x3e>-User: Display games awaiting approval'}),"\n",(0,n.jsx)(s.h3,{id:"use-case-11---configuring-the-wifi",children:"Use Case 11 - Configuring the WiFi"}),"\n",(0,n.jsx)(s.p,{children:"A user would like to configure the WiFi for the BlastPad."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The user turns on the BlastPad (likely for the first time)."}),"\n",(0,n.jsx)(s.li,{children:"Then connects a keyboard and mouse to the BlastPad."}),"\n",(0,n.jsx)(s.li,{children:"Then selects the \u201cWiFi\u201d icon on the main menu of the home screen."}),"\n",(0,n.jsx)(s.li,{children:"Then selects the network they want to connect to from the scrollable list of available networks."}),"\n",(0,n.jsx)(s.li,{children:"Then the user types in the Network key and hits enter."}),"\n",(0,n.jsx)(s.li,{children:"The user is successfully connected and returned to the home screen"}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "Sequence Diagram 11 - Configuring the WiFi"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Gallery: Start Home Screen/Gallery\nGallery->>-Blastpad: Retrieve games stored on disk\nBlastpad--\x3e>+Gallery: Return games stored on disk\ndeactivate Blastpad\t\nGallery--\x3e>-User: Display Home Screen\n\nUser->>+Blastpad: Attach Keyboard & Mouse\nBlastpad--\x3e>-User: Acknowledge new input device\n\n\n\nUser->>+Gallery: Press "Wifi" Button\nGallery->>+Blastpad: Retrieve local access points\nBlastpad--\x3e>-Gallery: Return list of available access points\nGallery--\x3e>-User: Display list of available networks\nUser->>+Gallery: Select Network, enter password\n\nGallery->>+Blastpad: Attempt connection\nBlastpad--\x3e>-Gallery: Acknowledge successful connection to access point\nGallery--\x3e>-User: Display successful connection\n'}),"\n",(0,n.jsx)(s.h2,{id:"entity-relation-diagram",children:"Entity-relation diagram."}),"\n",(0,n.jsx)(s.p,{children:"According to the following Entity-Relationship diagram below, there are four different relationships we can observe."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:['"Teaches in" Relationship\nThis is a One-to-Many (1',":N",") relationship between Teachers and Classrooms. Each teacher can belong to multiple classrooms but each Classroom may only have a single Teacher.\nFurthermore, a Teacher belongs to 1 or many Classrooms and a Classroom may have one and only one Teacher."]}),"\n",(0,n.jsxs)(s.li,{children:['"Contains"\nA One-to-Many (1',":N",") relationship between Classrooms and Students. Each Classroom may contain multiple Students, but each Student belongs to a single Classroom.\nFurthermore, Classrooms have one or many Students and a Student may belong to one and only one Classroom."]}),"\n",(0,n.jsxs)(s.li,{children:['"Played by"\nA Many-to-Many (N',":N",") relationship between Students and Games. A Student may play multiple Games and a Game may be played by multiple Students.\nFurthermore, Games may belong to one or many Students and Students may have one or many Games."]}),"\n"]}),"\n",(0,n.jsx)(s.mermaid,{value:'---\ntitle: "E-R Diagram SQL Database"\n---\nerDiagram\n    Teachers {\n        teacher_id INT PK\n        first_name VARCHAR(255)\n        last_name VARCHAR(255)\n        username VARCHAR(255)\n\t\tpassword VARCHAR(255)\n    }\n    Classrooms {\n        room_number INT PK\n        teacher_id INT FK\n    }\n    Students {\n        student_id INT PK\n        first_name VARCHAR(255)\n        last_name VARCHAR(255)\n\t\tusername VARCHAR(255)\n        room_number INT FK\n        password VARCHAR(255)\n        games VARCHAR(255)\n    }\n    Games {\n\t\tgame_name VARCHAR(255)\n        game_id INT PK\n        name VARCHAR(255)\n        last_edited_date DATE\n        json_file BLOB\n        image_icon BLOB\n    }\n    \n    Teachers ||--|{ Classrooms : "Teaches in"\n    Classrooms ||--|{ Students : "Contains"\n    Games |{--|{ Students : "Played by"'})]})}function c(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>o});var n=a(67294);const l={},t=n.createContext(l);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);