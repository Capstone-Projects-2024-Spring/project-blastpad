---
sidebar_position: 2
---
# Integration Tests


You can find the generated integration test report [here.](https://htmlpreview.github.io/?https://github.com/Capstone-Projects-2024-Spring/project-blastpad/blob/assets/integration-report.html)


Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.




## Integration Test for Use Case 1
A user would like to play a game on their BlastPad.

1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Code Editor" button the user is sent to the Blockly Code Editor.
3. Upon Pressing the "Create New Game" button the user is able to manipulate blocks in the editor and save the game to storage.

<details open="True">
- Runs `Blockly Compiler / Game Compiles` unit test.
- Runs `Blockly Compiler / Compiled Game Runs` unit test.
- Passes if all tests pass.
</details>






## Integration Test for Use Case 2
A user would like to develop a game using the BlastPad.

1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Code Editor" button the user is sent to the Blockly Code Editor.
3. Upon Pressing the "Create New Game" button the user is able to manipulate blocks in the editor and save the game to storage.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Access Editor` unit test.
- Runs `Blockly Compiler / Game Compiles` unit test.
- Runs `Flask / Save Game` unit test.
- Passes if all tests pass.
</details>






## Integration Test for Use Case 3
A user would like to develop a game for the BlastPad with their laptop.

1. Upon startup, the BlastPad starts the flask server.
2. Upon connecting to blastpad.local:8000/editor, the user is presented with the editor.
3. Upon pressing the "Save Game" button, the workspace is saved to the BlastPad.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Access Editor` unit test.
- Runs `Blockly Compiler / Game Compiles` unit test.
- Runs `Flask / Save Game` unit test.
- Passes if all tests pass.
</details>


## Integration Test for Use Case 4
A user’s Blockly code fails during compilation and they would like to view the error message in order to debug their blocks.

1. Upon startup, the BlastPad starts the flask server.
2. Upon connecting to blastpad.local:8000/editor, the user is presented with the editor.
3. Upon pressing the "Save Game" button, the workspace is not saved and an error message is displayed.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Access Editor` unit test.
- Runs `Blockly Compiler / Game Compiles` unit test.
- Runs `Flask / Fail to Save Game` unit test.
- Passes if all tests pass.
</details>





## Integration Test for Use Case 5
A user would like to join a classroom from the BlastPad.

1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Settings" button the settings page is displayed.
3. Upon pressing the "Join Classroom" button, the user is able to join a classroom.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Retrieve Games from a Classroom` unit test.
- Passes if all tests pass.
</details>






## Integration Test for Use Case 6
A user would like to view their classmate's games and play one.


1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Settings" button the settings page is displayed.
3. Upon pressing the "Join Classroom" button, the user is able to join a classroom.
4. Upon pressing the "Classroom" button, the user is able to view games in a classroom.
5. Upon pressing the "Download Game" button, the user is able to download and play a game from the classroom.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Retrieve Games from a Classroom` unit test.
- Runs `Flask / Download Game from Classroom` unit test.
- Runs `Blockly Compiler / Game Compiles` unit test.
- Runs `Blockly Compiler / Compiled Game Runs` unit test.
- Passes if all tests pass.
</details>








## Integration Test for Use Case 7
A user would like to upload a game to a Classroom

1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Settings" button the settings page is displayed.
3. Upon pressing the "Join Classroom" button, the user is able to join a classroom.
4. Upon pressing the "Share to Classroom" button, the user is able to share their game to a classroom.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Retrieve Games from a Classroom` unit test.
- Runs `Flask / Upload Game to Classroom` unit test.
- Passes if all tests pass.
</details>






## Integration Test for Use Case 8
A user would like to view the games on the Community Hub and play one.

1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Community Hub" button, the user is able to join a classroom.
3. Upon pressing the "Download Game" button, the user is able to download and play a game from the community hub.


<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Retrieve Games from the Community Hub` unit test.
- Runs `Flask / Download Game from Community Hub` unit test.
- Runs `Blockly Compiler / Game Compiles` unit test.
- Runs `Blockly Compiler / Compiled Game Runs` unit test.
- Passes if all tests pass.
</details>






## Integration Test for Use Case 9
A user would like to upload a game to the Community Hub.

1. Upon turning on the BlastPad the user is routed to the Homescreen.
4. Upon pressing the "Share to Community Hub" button, the user is able to share their game to a community hub.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Retrieve Games from the Community Hub` unit test.
- Runs `Flask / Upload Game to Community Hub` unit test.
- Passes if all tests pass.
</details>



## Integration Test for Use Case 10
A user/teacher would like to a create a classroom to host BlastPad projects for students

1. Upon turning on the BlastPad the user is routed to the Homescreen.
2. Upon pressing the "Settings" button the settings page is displayed.
3. Upon pressing the "Create" tab, the create classroom dialog is displayed.
4. Upon pressing the "Create Classroom" button, the user's classroom is added to the database of classrooms.


<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Saved Games` unit test.
- Runs `Flask / Create Classroom` unit test.
- Passes if all tests pass.
</details>



## Integration Test for Use Case 11
A user would like to configure the WiFi for the BlastPad.

1. Upon turning on the BlastPad the user is routed to the Homescreen
2. Upon pressing the "Settings" button the user is sent to the settings page
3. Upon pressing the "Wi-Fi" tab, the user is presented with the wifi configuration dialog.
4. The user is shown a list of available networks on the configuration dialog.
5. Upon selecting a network, the user is able to enter the network's password.
6. Upon successfully entering the network's password, the BlastPad is connected to the network.

<details open="True">
- Runs `Flask / Access Home Screen` unit test.
- Runs `Flask / Get Local Wifi Networks` unit test.
- Passes if all tests pass.
</details>
