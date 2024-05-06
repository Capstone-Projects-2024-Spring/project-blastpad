---
sidebar_position: 1
---

# Class Diagram

```mermaid
---
title: BlastPad Class Diagram
---
classDiagram
    BlocklyEditor o-- "0..*" Game
	ClassroomPage o-- "0..*" Game
    Flask o-- "0..*" HomePage
    Flask --> "1" CodeCompiler

	ProfileSettingsPage --o "0..*" HomePage
	BlocklyEditor o-- "0..*" Block
	ProfileSettingsPage o-- "0..*" ClassroomPage
	CommunityPage <-- "1" BlocklyEditor	
	ClassroomSettingsPage *-- "0..*" ClassroomPage
	ProfileSettingsPage <-- "1" CommunityPage
	CommunityPage --> NetworkSettings	
	Game <-- "1" CodeCompiler

	NavBar --> Icons
	HomePage --> NavBar
	ClassroomPage --> NetworkSettings
		
    class Game{
        -title: String
		-imageFile: String
        -version: String
		-author: String
		
		+startGame()
		+pauseGame()
		+quitGame()
		+uploadToClassroom(Classroom)
		+compileGame() String
    }
    class BlocklyEditor{
        -workspaces: Game[]
		-availableBlocks: Block[]
		
		+saveWorkspace()
		+loadWorkspace(game: Game)
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
    class ClassroomPage {
        -createdAt: Date
		+classroomID: int
		+invite_code: int
		+students: int
		+teacher: String
		+title: String
		+description: String
		+success: Boolean
		+gameDownloading: Boolean
		+statusMessage: String
		+selectedGameIndex: int
		+searchQuery: String
		+availableGames: Game[]
		+selectedGame: Game

		+setSuccess(Boolean)
		+setGameDownloading(Boolean)
		+setStatusMessage(String)
		+setAvailableGames(Game[])
		+selectGame(Game)
		+selectedGameIndex(int)
		+getGamesWithTerm(String)
		+setSearchQuery(String)
		+downloadFromClassroom(): Game
		+useTheme(theme)
	}
	class ProfileSettingsPage {
		-email: String
		-password: String

		+setEmail(String)
		+setPassword(String)
		-loginUser(email,password): Boolean
		-signOut(): Boolean
    }
    class NetworkSettings {
		+connectedNetWork: Network
		+wifiNetworks: Networks[]

		+setConnectedNetwork(Network)
		+setWifiNetworks(Network[]) 
		+fetchNetworks(): Network[]
		+connectNetwork(): Boolean
		+handleNetworkConnection(): Boolean
		
    }
    class CommunityPage {
    	+availableGames: Game[]
		+selectedGame: Game
		+selectedGameIndex: int
		+success: Boolean
		+gameDownloading: Boolean
		+statusMessage: String
		+searchQuery: String
		+theme: theme

		+setAvailableGames(Game[])
		+setSelectedGame(Game)
		+setSelectedGameIndex(int)
		+setSuccess(Boolean)
		+setGameDownloading(Boolean)
		+setStatusMessage(String)
		+setSearchQuery(String)
		+useTheme(theme)
		+downloadFromCommunity(Game)
		+getGamesWithTerm(String)
    }
	class ClassroomSettingsPage{
		+classroom: Classroom
		+classroomJoining: Boolean
		+statusMessage: String
		+success: Boolean
		+invite: String
		+menu: int
		+formData: formData

		+setClassroom(Classroom)
		+setClassroomJoining(Boolean)
		+setStatusMessage(String)
		+setSuccess(Boolean)
		+setInvite(String)
		+setMenu(int)
		+setFormData(Form)
		+joinClassroom(): Boolean
		+leaveClassroom(): Boolean
		+createClassroom(): Classroom
	}
	class HomePage{
		+gameList: Game[]
		+availableGames: Game[]
		+selectedGame: Game
		+selectedGameIndex: int
		+shareMenuOpen: Boolean
		+gameLoading: Boolean
		+gameSharing: Boolean
		+statusMessage: String
		+success: Boolean
		+theme: Theme

		+setAvailableGames(Games[])
		+setSelectedGame(Game)
		+setSelectedGameIndex(int)
		+setShareMenuOpen(Boolean)
		+setGameLoading(Boolean)
		+setGameSharing(Boolean)
		+setStatusMessage(String)
		+setSuccess(Boolean)
		+useTheme(theme)
		+shareToCommunity(): Boolean
		+shareToClassroom(): Boolean
		+editGame(): Void
		+newGame(): Void
	}
	class Icons{
		+HomeIcon(): svgObject
		+CommunityIcon(): svgObject
		+ClassroomIcon() svgObject
		+SettingIcon(): svgObject
		+NewGameIcon(): svgObject
		+PlayIcon(): svgObject
		+PencilIcon(): svgObject
		+UploadIcon(): svgObject
		+SearchIcon(): svgObject
		+ProfileIcon(): svgObject
		+SensorsIcon(): svgObject
		+WifiIcon(): svgObject
		+ThemeIcon(): svgObject
		+RefreshIcon(): svgObject
		+NoSignalIcon(): svgObject
		+FullBatteryFrameIcon(): svgObject
		+MediumBatteryFrameIcon(): svgObject
		+LowBatteryFrameIcon(): svgObject
		+DynamicBatteryIcon(level,theme): svgObject
	}
	class NavBar{
		+navIcons: Icons[]
		+activePage: Page
		+isConnected: Boolean
		+currentTime: dateObject
		+batteryLevel: BatteryLevel
		+theme: Theme

		+formatTime(date): date
		+updateBatteryLevel(): BatteryLevel
		+updateTime(): DateObject
	}
	class CodeCompiler {
		+hexToRgb(String): Int[]
        +bmap_representation(Int[][]): String
        +append_bitmaps_to_code(String): String
        +scaleBitmap(Int[][], Int): Int[][]
        +saveBitmap(Int[][])
        +unrollWorkspaceBlocks(json):Object[]
        +findPathToExit(json):Boolean
        +getVariableName(String, json): String
        +getBitmapSize(String, Object[]): Int[]
        +compile(String, String, String?, Boolean?)
	}

	class Flask {
        +unrollWorkspaceBlocks(json):Object[]
        +editor()
        +index()
        +send_report(String): Image
        +save(Object)
        +saveWithoutRun(Object)
        +allgames()
        +onegame()
        +compile_game(String)
        +save_game_icon(String)
        +compile_and_run(String)
        +just_compile(String)
        +run_game(String)
        +test_game(String)
        +test_run_game(String)
        +get_wifi_networks()
        +disconnect_wifi()
        +found_password(String)
        +connect_to_wifi(String, String)
        +communityhubgames(String)
        +classroomgames(String)
        +createclassroom(String)
        +sharetocommunityhub(String)
        +sharetoclassroom(String)
        +joinclassroom(String)
        +leaveclassroom(String)
        +downloadfromcommunityhub(String)
        +downloadfromclassroom(String, String)
        +running_test()
	}
```

## Class Relationships
The class diagram above demonstrates various relationships between different classes within the BlastPad system. The **ProfileSettingsPage** is responsible for the user settings which is linked to the **HomePage**. Furthermore, the **CommunityPage** is dependent on the user's **ProfileSettingsPage** to upload and share games. The **CommunityPage** and the **ClassroomPage** are both dependant on the **NetworkSettings** class to provide an internet connection in order to share and download games. The **NavBar** is responsible for allowing navigation and information about battery and wifi connection through different elements. This class depends on the **Icons** class which returns different SVG elements for buttons and icons to render. The **HomePage** also makes use of the **Icons** class in a similar fashion.


The **Game**, **CodeCompiler**, **BlocklyEditor** and the **Block** classes are all dependent on each other. This is because together, they form the most vital part of the BlastPad which is game creation and compilation. This is what makes the BlastPad such an amazing and fun learning tool.


### Flask
<details open="True">
- Describes the Flask server which is in charge of running the compiler, hosting the editor, and hosting the home screen.
</details>

### Block
<details open="True">
- Describes the properties necessary to define and create a Blockly code block
</details>

### BlocklyEditor
<details open="True">
- Allows the user to work on Blockly based projects and create/place code blocks within it
</details>

### ClassroomPage
<details open="True">
- Acts as a platform to host user-created Blockly games belonging in a classroom
</details>

### ClassroomSettingsPage
<details open="True">
- Lets the user interact with classrooms
</details>

### CodeCompiler
<details open="True">
- Converts the raw Blockly JSON definition into a runnable code Block in Python
</details>

### NetworkSettings
<details open="True">
- Manages the Blastpad's WiFi connection supporting scanning for new networks, connecting to one, and disconnecting from one
</details>

### Game
<details open="True">
- Contains the metadata of a Blockly game, allows users to play the game it defines, and upload it to a Classroom
</details>

### CommunityPage
<details open="True">
- Allows for all users to upload their games and download games without belonging to a classroom.
</details>

### ProfileSettingsPage
<details open="True">
- Allows for users to create an account.
</details>

### HomePage
<details open="True">
- The main screen for the BlastPad allowing for game edits, sharing and other features.
</details>

### Icons
<details open="True">
- A list of functions which return different SVG objects for the Navbar and other components to render.
</details>

### NavBar
<details open="True">
- The Navigation Bar of the BlastPad featuring buttons for navigating the UI and Wifi/Battery elements.
</details>

<!-- A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance. -->
