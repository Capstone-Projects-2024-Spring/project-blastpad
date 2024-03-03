---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Integration Test for use case 7

A user would like to view their classmate's games and play one.

Stubbed functional units: ClassroomManager, example database with classrooms, BlocklyCompiler

•   Verify that ClassroomManager can initialize correctly
•   Verify that ClassroomManager can communicate with the example database
•   Verify that ClassroomManager returns classrooms from the example database when viewClassrooms() is called
•   Verify that ClassroomManager can view the games stored inside one of the returned classrooms
•   Verify that BlocklyCompiler can compile one of the games stored in the classroom

## Integration Test for use case 8

A user would like to upload a game to a Classroom

Stubbed functional units: ClassroomManager, example database with classrooms

•   Verify that ClassroomManager can initialize correctly
•   Verify that ClassroomManager can communicate with the example database
•   Verify that ClassroomManager can call a classroom's uploadGame() method

## Integration Test for use case 9

A user/teacher would like to a create a classroom to host BlastPad projects for students

Stubbed functional units: BlastPad website, example database with classrooms

•   Verify that a classroom can be added to the example database with a query.
•   Verify that a shortlink to the classroom can be generated.


## Integration Test for use case 10

A user/teacher would like to approve an uploaded game to be visible in the Classroom

Stubbed functional units: BlastPad website, example database with classrooms

•   Verify that a classroom's games can be retrieved from the example database with a query.
•   Verify that a game in a pending state can be filtered from a list of retrieved games.
•   Verify that this game can be downloaded from the database with a query.
•   Verify that the game's pending state can be changed to an approved state with a query.


