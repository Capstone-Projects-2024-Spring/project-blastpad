---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
- BlastPad must allow users to develop and play games created using the Blockly code editor.
- BlastPad must be easily navigable for children.
    - All pages should lack unnecessary visual clutter and contain only a few distinct intractable elements.
    - Any text displayed on the BlastPad, including documentation, UI elements, alerts and errors, should be interpretable by a child, age 5 at the youngest.
- The device contains a built-in Blockly code editor that is accessible from the Home Page.
    - The home page must contain a large, prominent button to navigate to the code editor.
    - Ability to create a new game or edit an existing game.
    - Ability to save game projects.
    - Ability to run a game from the editor and return to it when the game is exited.
    - Ability to configure a game’s title, image, author, and version.
    - Blocks that generate PyGame-0 code must be available in the editor.
    - Comment blocks must be available in the editor so that users can describe their program and leave notes.
    - The block editor must contain a link to built-in documentation for blocks
    - The code editor must be accessible from a laptop via a local network connection.
        - The Code Editor contains an “upload to classroom button.
            - Users must be able to select which classroom to upload their game to from a drop-down.
    - The Home Screen contains a “view classrooms” button.
        - Users must be able to select a classroom from a list of classrooms they have joined.
        - Users must be able to browse games that other users have shared with the classroom and download them.
- Device must be capable of loading and running games.
    - Users must be able to start games from either the code editor or Home Screen and return to their original view when the game ends.
    - Debug information must be visible in the code editor should the game encounter a fatal error.
    - Games must take up the entire focus of the BlastPad while they are running.
- Each BlastPad device must support a basic username and password authentication system.
    - Users must be able to set a username and password on their BlastPad.
    - Teachers and parents must be able to bypass authentication with a master password.
- Accepts input from a keyboard and mouse.
    - Users must be able to use a keyboard and mouse to navigate BlastPad’s Home Screen and block editor.
- Home screen must appear when the system starts.
    - Displays a horizontally scrolling gallery of the user’s saved games.
    - Contains a button that opens the code editor.
    - Contains a gear icon to open system configuration.
- System settings must be accessible from the home page with a gear icon.
    - Users must be able to configure WiFi and volume.
- Device must have the ability to be used as an access point to share games.
    - Users must be able to publish games online and it can be downloaded from the remote server by another BlastPad.
    - Users must be able to download games to the BlastPad by browsing for publicly published games and selecting one for download.
- BlastPad games must be able to upload to a public database.
    Users must be able to upload their games to a web server that hosts them for other users to download.
- BlastPad games must be uploadable to a private group.
    - Users must be able to upload their games to a web server that hosts them for other users to download.
        - The web server must allow teachers and parents to create classroom groups for students to upload their games to.
        - Teachers and parents must be able to approve the upload of games before they are visible.
        - Users must be able to join multiple classrooms from their BlastPad and download games from them.
        - Teachers and parents must be able to restrict download functionality on a BlastPad with a PIN or Password.
- Gallery must be accessible from the home page to display information about the game projects.
    - The user must see the title, image, version, file size, author and playtime associated with a game.
    - Users must be able to select an item from the gallery to launch a game.
- Contains built-in documentation.
    - Users must be able to read information about blocks available in the code editor, such as recommended usage, expected parameters, and examples of proper use.
- Supports a variety of sensors for use in games.
    - Users must be able to use data from a light sensor, accelerometer, temperature sensor, and microphone in their games.
    - The block editor must contain blocks that read from sensors.
    - Games must make explicit which sensors they rely on

## Nonfunctional Requirements

- All BlastPad games should contain a common structure utilizing a primary game loop, setup function, and end function.
- Code blocks must be simple to understand and use.
    - All code blocks should have one specific and clearly defined purpose.
- BlastPad must not require a laptop to use.
    - The Code Editor, while accessible over LAN, must be usable with an attached keyboard and mouse OR builtin BlastPad peripherals.
- All pages must be navigable with onboard BlastPad peripherals as well as an attached keyboard and mouse.
- Any content downloaded to the BlastPad should be approved by a teacher or parent before use. 
- BlastPad must be easily configurable by teachers and parents.