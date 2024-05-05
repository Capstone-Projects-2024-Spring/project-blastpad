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
	ProfileSettingsPage --o "0..*" HomePage
	BlocklyEditor o-- "0..*" Block
	ProfileSettingsPage o-- "0..*" ClassroomPage
	BlocklyEditor o-- "1" Documentation
	CommunityPage <-- "1" ClassroomSettingsPage
	CommunityPage <-- "1" BlocklyEditor	
	ClassroomSettingsPage *-- "0..*" ClassroomPage
	ProfileSettingsPage <-- "1" CommunityPage
	CommunityPage --> NetworkSettings	
	Game <-- "1" CodeCompiler
	NavBar --> Icons
	HomePage --> NavBar
		
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
    class Documentation {
		+header: String
    	+body: String

		+loadContent(type: String) String
	}
	class CodeCompiler {
		+compileBlocklytoPython()
	}
```

## Class Relationships



## `Block`
- Describes the properties necessary to define and create a Blockly code block

## `BlocklyEditor`
- Allows the user to work on Blockly based projects and create/place code blocks within it

## `ClassroomPage`
- Acts as a platform to host user-created Blockly games belonging in a classroom

## `ClassroomSettingsPage`
- Lets the user interact with classrooms

## `CodeCompiler`
- Converts the raw Blockly JSON definition into a runnable code Block in Python

## `NetworkSettings`
- Manages the Blastpad's WiFi connection supporting scanning for new networks, connecting to one, and disconnecting from one

## `Documentation`
- Loads help documentation for the Blockly code blocks

## `Game`
- Contains the metadata of a Blockly game, allows users to play the game it defines, and upload it to a Classroom

## `CommunityPage`
- Allows for all users to upload their games and download games without belonging to a classroom.

## `ProfileSettingsPage`
- Allows for users to create an account.

## `HomePage`
- The main screen for the BlastPad allowing for game edits, sharing and other features.

## `Icons`
- A list of functions which return different SVG objects for the Navbar and other components to render.

## `NavBar`
- The Navigation Bar of the BlastPad featuring buttons for navigating the UI and Wifi/Battery elements.

<!-- A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance. -->
