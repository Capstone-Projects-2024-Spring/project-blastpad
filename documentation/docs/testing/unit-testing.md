---
sidebar_position: 1
---
# Unit Tests


## Unit Test Reports

You can find the generated unit test report [here.](https://htmlpreview.github.io/?https://github.com/Capstone-Projects-2024-Spring/project-blastpad/blob/assets/test-report.html)

## Blockly Compiler

### Hex to RGB Conversion

<details open="True">

- Check that the compiler is able to convert Hexadecimal color values into a 4-tuple of red, green, blue, and alpha values in the range 0-255.
    - #### Input / User action
        - Hexadecimal color value. E.g: #000000
    - #### Expected Result
        - A 4-tuple is returned. E.g: [0, 0, 0, 255]
</details>





### Scale Bitmap

<details open="True">

- Check that the compiler is able to scale a bitmap to a new size.
    - #### Input / User action
        - Bitmap in 2d array form and a whole integer scaling factor.
    - #### Expected Result
        - A 2d array of the same bitmap, scaled to new dimensions.
</details>


### Bitmap String Representation

<details open="True">

- Check that the compiler is able to convert a 2d array bitmap into a string representing that 2d array. This is used to insert bitmap data into python code.
    - #### Input / User action
        - Bitmap in 2d array form.
    - #### Expected Result
        - A string representing that bitmap in the form "[[0,0,],[x,x], ... ]"
</details>

### Unroll Workspace Blocks

<details open="True">

- Check that the compiler is able to convert a nested workspace structure into an iterable list of blocks.
    - #### Input / User action
        - Blockly workspace JSON
    - #### Expected Result
        - An array of blocks contained in the workspace.
</details>



### Find Path to Exit

<details open="True">

- Check that the compiler is able to navigate a nested workspace structure and determine if the a Close Game block is reached.
    - #### Input / User action
        - Blockly workspace JSON
    - #### Expected Result
        - A boolean value indicating that the Close Game block is reachable.
</details>



### Get Variable Name

<details open="True">

- Check that the compiler is able to map a Block's UUID to a stored variable name in the workspace.
    - #### Input / User action
        - Block UUID and the workspace JSON it belongs to.
    - #### Expected Result
        - A predefined variable name present in the workspace that maps to that block.
</details>


### Get Bitmap Size

<details open="True">

- Check that the compiler is able to retrieve size information from the block definitions array based on the block type.
    - #### Input / User action
        - Block type and the block definitions array.
    - #### Expected Result
        - A 2d array representing the size of the bitmap. E.g: A block with the type "large_bitmap" should have a size of [16, 16].
</details>


### Compile a Game

<details open="True">

- Check that the compiler is able to generate python code from a workspace.
    - #### Input / User action
        - The file name of the workspace JSON and an optional destination file name.
    - #### Expected Result
        - A python program defined by the workspace blocks.
</details>


### Compiled Game Runs

<details open="True">

- Check that the compiler generated a _valid_ python program from a workspace.
    - #### Input / User action
        - The file name of the generated python program.
    - #### Expected Result
        - A boolean value indicating that the program ran for at least 5 seconds or failed to run.
</details>


## Flask Server

### Flask Server Starts

<details open="True">

- Check that the Flask server starts.
    - #### Input / User action
        - N/A
    - #### Expected Result
        - A boolean value indicating that Flask server is running on port 8000 and that it is serving data.
</details>





### Retrieve Saved Workspaces (Games)

<details open="True">

- Check that the Flask server correctly exposes saved workspaces through the /games endpoint.
    - #### Input / User action
        - Call to http://localhost:8000/games
    - #### Expected Result
        - An array of objects containing a workspace's name, author, description, and time last modified.
</details>


### Retrieve Games from Community Hub

<details open="True">

- Check that the Flask server correctly exposes workspaces (Games) in the Community Hub.
    - #### Input / User action
        - Call to http://localhost:8000/get/community/all
    - #### Expected Result
        - An array of objects containing a workspace's name, author, description, and time last modified.
</details>



### Retrieve Games from a Classroom

<details open="True">

- Check that the Flask server correctly exposes workspaces (Games) in a given Classroom.
    - #### Input / User action
        - Call to http://localhost:8000/get/classroom/{CLASSROOM_ID}/all
    - #### Expected Result
        - An array of objects containing a workspace's name, author, description, and time last modified.
</details>


### Access Editor From External Device

<details open="True">

- Check that the Flask server correctly serves the editor.
    - #### Input / User action
        - Navigate to http://localhost:8000/editor
    - #### Expected Result
        - Game selection menu is displayed, allowing the user to choose a saved workspace to edit or create a new one.
</details>

### Access Editor From Blastpad

<details open="True">

- Check that the Flask server correctly serves the editor.
    - #### Input / User action
        - Navigate to http://localhost:8000/editor?load=[GAMENAME].json&fromHomescreen=true
    - #### Expected Result
        - The block editor opens and displays [GAMENAME]'s workspace.
</details>

### Access Home Screen

<details open="True">

- Check that the Flask server correctly serves the home screen.
    - #### Input / User action
        - Navigate to http://localhost:8000/
    - #### Expected Result
        - The home screen is displayed.
</details>


### Save Game

<details open="True">

- Check that the Flask server correctly saves a workspace.
    - #### Input / User action
        - POST request to http://localhost:8000/saveWithoutRun with a workspace as body data.
    - #### Expected Result
        - The POSTed workspace is compiled and saved. Errors in compilation will cause the save request to fail and return 400.
</details>



### Download Game

<details open="True">

- Check that the Flask server correctly downloads a game from the Community Hub.
    - #### Input / User action
        - GET request to http://localhost:8000/download/community/[GAMENAME].
    - #### Expected Result
        - The requested workspace (game) is saved to disk.
</details>


### Run Compiler on Saved Game

<details open="True">

- Check that the Flask server is able to compile a saved game.
    - #### Input / User action
        - GET request to http://localhost:8000/compile?game=[GAMENAME]
    - #### Expected Result
        - The Blockly Compiler is run on [GAMENAME].json and the resulting python code is saved to /blockly/compiled_games.
</details>



### Get Local WiFi Networks

<details open="True">

- Check that the Flask server is able to scan for local wifi networks.
    - #### Input / User action
        - GET request to http://localhost:8000/get_wifi_networks
    - #### Expected Result
        - An array of objects containing information about nearby wifi access points.
</details>


<!-- ## Classroom Components

### Allow User to Join a Classroom

<details open="True">
- Check that the user is able to join a classroom with an invite code.
    - #### Input / User action
        - User inputs an invite code to a classroom.
    - #### Expected Result
        - User should be added to the classroom.
</details>

### Fail to join with an invalid invite code

<details open="True">
- Check that the user is unable to join a classroom with an invalid invite code.
    - #### Input / User action
        - User inputs an invalid invite code.
    - #### Expected Result
        - Classroom join request should fail.
</details>


### Allow User to Leave a Classroom

<details open="True">
- Check that the user is able to leave a classroom.
    - #### Input / User action
        - User presses the "leave classroom" button.
    - #### Expected Result
        - User should be removed from the classroom.
</details>

 -->
