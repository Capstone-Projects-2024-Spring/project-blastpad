---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

# UML

```mermaid
---
title: BlastPad
---
classDiagram
    BlocklyEditor o-- "0..*" Game
		Classroom o-- "0..*" Game
		BlocklyEditor o-- "0..*" Block
		BlocklyEditor o-- "1" Documentation
		Gallery <-- "1" ClassroomManager
		Gallery <-- "1" BlocklyEditor
		ClassroomManager *-- "0..*" Classroom
		DeviceManager <-- "1" Gallery
		Block <-- "0..*" Sensor
		Gallery <-- "1" Configuration
		DeviceManager <-- "1" User
		Database o-- "0..*" User
		Database o-- "0..*" Classroom
		
		
    class Game{
        -title: String
		-imageFile: String
        -version: String
		-author: String
		
		+startGame()
		+pauseGame()
		+quitGame()
		+uploadToClassroom(Classroom)
    }
    class BlocklyEditor{
        -games: Game[]
		-availableBlocks: Block[]
		
		+createNewGame()
		+saveGame()
		+displayBlockInformation()
		+displayErrorMessages()
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
```

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.
