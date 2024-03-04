---
sidebar_position: 1
---
# Unit tests

## BlocklyEditor

### +saveWorkspace()

Stubbed test class: blocklyEditor
Requires access to sandboxed filesystem.

Unit test checks if a workspace's contents have been updated after method is called.

### +loadWorkspace()

Stubbed test class: blocklyEditor
Requires some sort of sandboxed browser. Cypress is ideal for this.

Unit test checks that the correct workspace has been loaded and displayed in the editor.

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