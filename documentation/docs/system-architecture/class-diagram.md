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
	Database o-- "0..*" Classroom
	BlocklyEditor o-- "1" Documentation
	CommunityHub <-- "1" ClassroomSettingsPage
	CommunityHub <-- "1" BlocklyEditor	
	ClassroomSettings *-- "0..*" ClassroomPage
	ProfileSettingsPage <-- "1" CommunityHub
	CommunityHub <-- "1" NetworkSettingsPage	
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

The class diagram above demonstrates various relationships between classes within the BlastPad system. The **User** class is associated with the **DeviceManager** class, indicating that a user can interact with the device via the device manager. The **DeviceManager** class is also associated with the **Gallery** for loading it, as indicated by the loadGallery() method. Furthermore, the **Gallery** class is connected to the **ClassroomManager**, allowing users to view multiple classrooms, as shown by the viewClassrooms() method.

The **ClassroomManager** maintains a one-to-many relationship with the **Classroom** class, signifying that it can manage multiple **Classrooms**. Each **Classroom** is capable of handling multiple **Game** objects, as depicted by their **one-to-many** association. The **Game** class is similarly connected to the **BlocklyEditor** class through a **one-to-many** relationship, suggesting that the **BlocklyEditor** can manage numerous **Block** objects.

The **Database** class has a **one-to-many link** with both the **User** and **Classroom** classes, indicating that it stores and manages data from both Users and **Classrooms**.

The **Block** class has a **one-to-many** relationship with the **Sensor** class, illustrating that blocks can access and utilize one or many sensors. The **Documentation** class is standalone but associated with the **BlocklyEditor** to provide tutorials for different blocks in the **BlocklyEditor**.

Lastly, the **Gallery** class is linked to the **Configuration** class to handle WiFi connections.

## `Block`
- Describes the properties necessary to define and create a Blockly code block

## `BlocklyEditor`
- Allows the user to work on Blockly based projects and create/place code blocks within it

## `Classroom`
- Acts as a platform to host user-created Blockly games

## `ClassroomManager`
- Lets the user interact with classrooms

## `CodeCompiler`
- Converts the raw Blockly JSON definition into a runnable code Block in Python

## `Configuration`
- Manages the Blastpad's WiFi connection supporting scanning for new networks, connecting to one, and disconnecting from one

## `Documentation`
- Loads help documentation for the Blockly code blocks

## `Game`
- Contains the metadata of a Blockly game, allows users to play the game it defines, and upload it to a Classroom


<!-- A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance. -->
