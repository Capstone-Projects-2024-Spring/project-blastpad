---
sidebar_position: 1
---

# BlastPad

<!-- (generated using [Sphinx](../../../build/html/index.html)) -->

# API Documentation

This document describes the API endpoints available from the Flask server.


### `GET /editor`
<details open="True">
    - Renders the Blockly editor.
    - Optional Parameters:
        - fromHomescreen: Makes the "Return to Home" button visible if true.
        - game: Tries to load a specific game workspace if present.
</details>

### `GET /`
<details open="True">
    - Renders the Home Screen.
</details>

### `GET /icons/<path>`
<details open="True">
    - Returns a saved game icon from the `/icons` folder.
</details>

### `POST /save>`
<details open="True">
    - Attempts to save, compile, and test run a workspace.
    - Expected Body: A Game Workspace
</details>

### `POST /saveWithoutRun>`
<details open="True">
    - Attempts to save and compile a workspace.
    - Expected Body: A Game Workspace
</details>

### `GET /games`
<details open="True">
    - Returns an array of metadata describing locally saved games.
</details>


### `GET /games/<game_workspace_filename>`
<details open="True">
    - Returns the full JSON workspace of the specified game.
</details>


### `GET /run`
<details open="True">
    - Attempts to compile and run a game.
    - Expected Parameters:
        - game: Name of the game to run.
</details>


### `GET /compile`
<details open="True">
    - Attempts to compile a game.
    - Expected Parameters:
        - game: Name of the game to compile.
</details>

### `GET /test`
<details open="True">
    - Attempts to run a game for 5 seconds in the background.
    - Expected Parameters:
        - game: Name of the game to compile.
</details>

### `GET /get_wifi_networks`
<details open="True">
    - Returns available local access points.
</details>


### `POST /disconnect_wifi`
<details open="True">
    - Disconnects from the current access point.
</details>


### `POST /connect_to_wifi`
<details open="True">
    - Attempts to connect to a specified access point.
    - Body:
        - SSID: SSID of the desired access point.
        - Password: Password for the desired access point.
</details>


### `GET /get/community/<search>`
<details open="True">
    - Returns game metadata from Supabase where game names fuzzy-match `<search>`. 
    - Defaults to all games if `<search>` is not present.
</details>

### `GET /get/classroom/<classroom_id>/<search>`
<details open="True">
    - Returns game metadata from Supabase where game names belong to `<classroom_id>` and fuzzy-match `<search>`. 
    - Defaults to all games belonging to `<classroom_id>` if `<search>` is not present.
</details>


### `POST /create/classroom`
<details open="True">
    - Creates a classroom based on the body of the request.
    - Body:
        - Classroom Data
            - invite_code: String
            - teacher: String
            - title: String
            - description: String
</details>



### `GET /share/community/<game_name>`
<details open="True">
    - Shares a game called `<game_name>` to the community hub.
</details>


### `GET /share/classroom/<classroom_id>/<game_name>`
<details open="True">
    - Shares a game called `<game_name>` to the classroom matching `<classroom_id>`.
</details>

### `GET /join/classroom/<invite>`
<details open="True">
    - Joins a classroom with the invite code `<invite>`
</details>


### `GET /leave/classroom/<invite>`
<details open="True">
    - Leaves a classroom with the invite code `<invite>`
</details>


### `GET /download/community/<game_name>`
<details open="True">
    - Downloads a game from the community hub matching `<game_name>`.
</details>

### `GET /download/classroom/<classroom_id>/<game_name>`
<details open="True">
    - Downloads a game from the classroom with id `<classroom_id>` matching `<game_name>`.
</details>

### `GET /running`
<details open="True">
    - Returns `{"success": "successful!}`.
</details>