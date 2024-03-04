---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Integration Test for Use Case 4
This integration test is for the scenario where the user debugs a Blockly game they created.
- Input: Void
- Expected Output: True

```
public Use_Case_4_Integration_Test(Void) -> Boolean
    # Starting Blast Pad
    deviceManager = New DeviceManager()

    # Open gallery to view games
    deviceManager.loadGallery()

    # View games in the gallery 
    Games gamesArray = deviceManager.Gallery.viewGames()

    # Open a game that doesn't compile in the Blockly Editor
    deviceManager.BlockEditor.loadWorkspace(gamesArray[0])

    # Compile the game and store the compilation status message
    output = deviceManager.BlockEditor.workspaces[0].compileGame()

    # Check if the compilation failed
    return output != "Successful Compilation!"
```

## Integration Test for Use Case 5
This integration test is for the scenario where the user creates an account
- Input: username (String), password (String)
- Expected Output: True

```
public Use_Case_5_Integration_Test(string username, string password) -> Boolean
    # Starting Blast Pad
    deviceManager = New DeviceManager()

    # Create account (method returns true if successfully created)
    return deviceManager.UserManager.createAccount(username, password)
```

## Integration Test for Use Case 6
This integration test is for the scenario where the user joins a classroom 
- Input: classroom_id (int)
- Expected Output: True

```
public Use_Case_5_Integration_Test(int classroom_id) -> Boolean
    # Saving classroom that user wants to join
    classroom = New Classroom(classroom_id)

    # Starting Blast Pad
    deviceManager = New DeviceManager()

    # Open gallery to access Classroom Manager
    deviceManager.loadGallery()

    # Join classroom (method returns true if successfully joined)
    return deviceManager.Gallery.ClassroomManager.joinClassroom(classroom)
```

## Integration Test for Use Case 7

A user would like to view their classmate's games and play one.

Stubbed functional units: ClassroomManager, example database with classrooms, BlocklyCompiler

•   Verify that ClassroomManager can initialize correctly
•   Verify that ClassroomManager can communicate with the example database
•   Verify that ClassroomManager returns classrooms from the example database when viewClassrooms() is called
•   Verify that ClassroomManager can view the games stored inside one of the returned classrooms
•   Verify that BlocklyCompiler can compile one of the games stored in the classroom

## Integration Test for Use Case 8

A user would like to upload a game to a Classroom

Stubbed functional units: ClassroomManager, example database with classrooms

•   Verify that ClassroomManager can initialize correctly
•   Verify that ClassroomManager can communicate with the example database
•   Verify that ClassroomManager can call a classroom's uploadGame() method

## Integration Test for Use Case 9

A user/teacher would like to a create a classroom to host BlastPad projects for students

Stubbed functional units: BlastPad website, example database with classrooms

•   Verify that a classroom can be added to the example database with a query.
•   Verify that a shortlink to the classroom can be generated.


## Integration Test for Use Case 10

A user/teacher would like to approve an uploaded game to be visible in the Classroom

Stubbed functional units: BlastPad website, example database with classrooms

•   Verify that a classroom's games can be retrieved from the example database with a query.
•   Verify that a game in a pending state can be filtered from a list of retrieved games.
•   Verify that this game can be downloaded from the database with a query.
•   Verify that the game's pending state can be changed to an approved state with a query.


