---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
- BlastPad’s home screen will appear when the system starts.
    - The Home Screen displays a horizontally scrolling gallery of the user’s saved games.
    - The Home Screen contains a button that opens the code editor.
    - The Home Screen contains a gear icon to open system configuration.
- The gear icon on the home page allows users to configure system settings
    - Users will be able to configure WiFi and volume
- The horizontal gallery on the home page displays information about the game.
    - The user can see the title, image, version, file size, author and playtime associated with a game.
    - Users will be able to select an item from the gallery to launch a game..
- The home page contains a large, prominent button that opens the built-in code editor.
    - Users will be able to create a new game or edit an existing game.
    - Users will be able to save their project.
    - Users will be able to run their game from the editor and return to it when the game is exited.
    - Users will be able to configure the game’s title, image, author, and version.
    - Blocks that generate pygame0 code will be available in the editor.
    - Comment blocks will be available in the editor so that users can describe their program and leave notes..
    - The block editor contains a link to built-in documentation for blocks
    - The code editor will be accessible from a laptop via a local network connection.
        - The Code Editor contains an “upload to classroom button.
            - Users will be able to select which classroom to upload their game to from a drop-down.
    - The Home Screen contains a “view classrooms” button.
        - Users will be able to select a classroom from a list of classrooms they have joined.
        - Users will be able to browse games that other users have shared with the classroom and download them.
- BlastPad contains built-in documentation.
    - Users will be able to read information about blocks available in the code editor, such as recommended usage, expected parameters, and examples of proper use.
- BlastPad must support a variety of sensors for use in games.
    - Users will be able to use data from a light sensor, accelerometer, temperature sensor, and microphone in their games.
    - The block editor will contain blocks that read from sensors.
    - Games will make explicit which sensors they rely on
- BlastPad must accept input from a keyboard and mouse.
    - Users will be able to use a keyboard and mouse to navigate BlastPad’s Home Screen and block editor.
- BlastPad must be able to load and run games.
    - Users will start games from either the code editor or Home Screen and return to their original view when the game ends.
    - Debug information will be visible in the code editor should the game encounter a fatal error.
    - Games will take up the entire focus of the BlastPad while they are running
- BlastPad games will be uploaded to a public database
    Users will be able to upload their games to a web server that hosts them for other users to download.
- BlastPad games will optionally be shareable within a private group.
    - Users will be able to upload their games to a web server that hosts them for other users to download.
        - The web server will allow teachers and parents to create classroom groups for students to upload their games to.
        - Teachers and parents will be able to approve the upload of games before they are visible.
        - Users will be able to join multiple classrooms from their BlastPad and download games from them.
        - Teachers and parents will be able to restrict download functionality on a BlastPad with a PIN or Password. 
- Each BlastPad will support a basic username and password authentication system.
    - Users will be able to set a username and password on their BlastPad.
    - Teachers and parents will be able to bypass authentication with a master password.

## Nonfunctional Requirements

- BlastPad will be easily navigable for children.
    - All pages should lack unnecessary visual clutter and contain only a few distinct intractable elements.
    - Any text displayed on the BlastPad, including documentation, UI elements, alerts and errors, should be interpretable by a child, age 5 at the youngest.
- All pages must be navigable with onboard BlastPad peripherals as well as an attached keyboard and mouse.
- Any content downloaded to the BlastPad should be approved by a teacher or parent before use. 
- Code blocks will be simple to understand and use.
    - All code blocks should have one specific and clearly defined purpose.
- All BlastPad games should contain a common structure utilizing a primary game loop, setup function, and end function.
- BlastPad will be easily configurable by teachers and parents.
- BlastPad will not require a laptop to use.
    - The Code Editor, while accessible over LAN, will be usable with an attached keyboard and mouse OR builtin BlastPad peripherals.