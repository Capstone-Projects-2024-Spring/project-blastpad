---
sidebar_position: 1
---
# Unit tests


## Unit Test Reports

You can find the generated unit test report [here.](https://htmlpreview.github.io/?https://github.com/Capstone-Projects-2024-Spring/project-blastpad/blob/assets/test-report.html)

## BlocklyEditor

### +saveWorkspace()

Stubbed test class: blocklyEditor
Requires access to sandboxed filesystem.

Unit test checks if a workspace's contents have been updated after method is called.

### +loadWorkspace()

Stubbed test class: blocklyEditor
Requires some sort of sandboxed browser. Cypress is ideal for this.

Unit test checks that the correct workspace has been loaded and displayed in the editor.

# DeviceManager Class

### +loadGalleryTest()

This unit test is for the loadGallery() method in the DeviceManager class. The test calls the loadGallery method and tests if the "currentScreen" variable was changed to "Gallery".

- Stubbed test class: instance of DeviceManager class 
- Input: Void
- Expected Output: True

```
public loadGalleryTest(Void) -> Boolean
    deviceManager = New DeviceManager()
    deviceManager.loadGallery()
    return deviceManager.currentScreen == "Gallery"
```

## ClassroomManager 

### +joinClassroom(c: Classroom)
- Creates an empty list of `Classroom` objects.
- `expected_size` is set to the current list size plus one.
- A `Classroom` object is instantiated with random IDs and a `Game` list.
- Calls `joinClassroom()` with the `Classroom` object.
- Checks if the `Classroom` list size has increased by one.

### +leaveClassroom(c: Classroom) 
- Creates an empty list of `Classroom` objects.
- `expected_size` is set to the current list size minus one.
- A `Classroom` object is instantiated with random IDs and a `Game` list.
- Calls `leaveClassroom()` with the `Classroom` object.
- Checks if the `Classroom` list size has decreased by one.

### +viewClassrooms() 
- Instantiates several `Classroom` objects and stores them in a list.
- Calls `viewClassrooms()`.
- Passes if all `Classroom` objects are displayed.

## Classroom 

### +deleteGame(userID: int): bool
- Instantiates a `Classroom` and two `Game` objects.
- `userID` matches one of the `Game` objects' author attribute.
- Calls `deleteGame()` with `userID`.
- Passes if it returns `True`.

### +approveGame(userID: int): bool
- Creates a `Classroom` and a `Game` object.
- Sets `userID` to the `Game` object's author.
- Calls `approveGame()`.
- Passes if it returns `True`.

### +uploadGame(game: Game)
- Creates a `Classroom` with a `Game` list.
- Sets `expected` to the `Game` list's size plus one.
- Instantiates a `Game` object with random attributes.
- Calls `uploadGame()` with the `Game` object.
- Passes if `Game` list size equals `expected`.

## Game

### +startGame()
- Creates a `Game` object with random attributes.
- Calls `startGame()`.
- Passes if it returns `True`.

### +pauseGame()
- Creates a `Game` object with random attributes.
- Calls `startGame()` then `pauseGame()`.
- Passes if it returns `True`.

### +quitGame()
- Creates a `Game` object with random attributes.
- Calls `startGame()` then `quitGame()`.
- Passes if it returns `True`.

### +uploadToClassroom(Classroom)
- Instantiates a `Classroom` with a `Game` list.
- Creates a `Game` object.
- `expected` is set to the `Game` list's size plus one.
- Calls `uploadToClassroom()` with the `Classroom`.
- Passes if `Game` list size equals `expected`.

### +compileGame()
- Creates a `Game` object with random attributes.
- Calls `compileGame()`.
- Passes if it returns `True`.

## Sensor

### +getSensorData()
Stubbed Test Class: sensor
Requires hardware to be connected to a sensor

This unit test checks if sensorData is a non-empty array and if the calibration parameter is set to false.

- Creates a `Sensor` object
- Calls `getSensorData()`
- Passes if it returns a non-zero integer array and calibration is set to false

### +recalibrateSensor()
Stubbed Test Class: sensor
Requires hardware to be connected to a sensor

This unit test checks if the calibration parameter has been changed to True.

- Creates a `Sensor` object
- Calls `getSensorData()`
- Passes if the calibration parameter is set to True.

### +clearSensorData()
Stubbed Test Class: sensor
Requires hardware to be connected to a sensor

This unit test checks if the sensorData array is set to all zeroes.

- Creates a `Sensor` object
- Calls `clearSensorData()`
- Passes if the sensorData array is composed of all zeroes.

## Documentation

### +loadContent(type: String) : String
Stubbed Test Class: documentation
Requires an existing blockly documentation file assigned a type

This unit test checks if a documentation string has been returned from the requested dummy content (given by type).

- Creates a `Documentation` object
- `expected` is set to the documentation string manually
- Calls `loadContent(type)`
- Passes if `Documentation` returned equals `expected` string.

## Configuration

### +scan() : String[]
Stubbed Test Class: configuration
Requires absence of connections to any network

This unit test checks if scan returns a non-empty array of available networks to connect to.

- Creates a `Configuration` object
- Calls `scan()`
- Passes if returned String array is non-empty

### +connect(SSID: String, securityKey: String)
Stubbed Test Class: configuration
Requires access to the wireless adapter hardware

This unit test checks if connect(SSID, securityKey) sets the connectionStatus to True

- Creates a `Configuration` object
- Calls `connect(SSID, securityKey)`
- Passes if connectionStatus is True

### +close()
Stubbed Test Class: configuration
Requires a network connection

This unit test checks if close() sets the connectionStatus to False

- Creates a `Configuration` object
- Calls `close()`
- Passes if connectionStatus is False
