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
	UserManager --o "0..*" Database
	Classroom o-- "0..*" Game
	DeviceManager <-- "1" UserManager
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
    class Sensor {
		+sensorID: int
		-sensorData: int[]
		-calibration: Boolean

		+getSensorData(): int[]
		+recalibrateSensor()
		+clearSensorData()
    }
    class Classroom {
        +classroomID: int
		+teacherID: int

		+deleteGame(userID: int) bool
		+approveGame(userID: int) bool
		+uploadGame(game: Game)
    }
	class ClassroomManager {
		-classrooms: Classroom[]

		+joinClassroom(c: Classroom) bool
		+leaveClassroom(c: Classroom) bool
		+viewClassrooms()
	}
	class UserManager {
    	-String: username
		-String: password
		+login(username: String, password: String) bool
		+createAccount(username: String, password: String) bool
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
		+viewGames() Games[]
			
    }
    class Documentation {
		+header: String
    	+body: String

		+loadContent(type: String) String
	}
	class DeviceManager {
		+currentScreen: String

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

## `Database`
- Stores user and classroom information used for logging in and for retrieving classrooms

## `DeviceManager`
- Loads the BlastPad's screen upon startup and keeps track of the current screen displayed

## `Documentation`
- Loads help documentation for the Blockly code blocks

## `Gallery`
- Manages the current screen displayed to the user and allows them to navigate to different pages

## `Game`
- Contains the metadata of a Blockly game, allows users to play the game it defines, and upload it to a Classroom

## `Sensor`
- Allows Blockly blocks to retrieve data from the BlastPad's onboard sensors (temperature, light, etc.)

## `UserManager`
- Manages user login for the BlastPad with username/password authentication and allows the creation of a new account



<!-- A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance. -->
