/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
// import {blocks} from './blocks/text';

// newfangles
import data from './blocks/game.json';
const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(data.blocks);

// import {forBlock} from './generators/python';
// import {pythonGenerator} from 'blockly/python';
// import {FieldBitmap} from '@blockly/blockly-field-bitmap';
// import '@blockly/field-bitmap';

import './field-bitmap.js'
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

// Object.assign(pythonGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
// const codeDiv = document.getElementById('generatedCode').firstChild;
// const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const saveGameButton = document.getElementById('saveGame');

const selectionContainer = document.getElementById('selectionContainer')
const gamesContainer = document.getElementById('gamesContainer')
const pageContainer = document.getElementById('pageContainer')

const ws = Blockly.inject(blocklyDiv, {toolbox});
const defaultWorkspace = {
  "blocks": {
      "languageVersion": 0,
      "blocks": [
          {
              "type": "metadata",
              "id": "A$mP~29yJri+II[;(i/h",
              "x": 40,
              "y": 60,
              "inputs": {
                  "game name": {
                      "block": {
                          "type": "text",
                          "id": "uL4`ChH4}lTzo~sEz[ot",
                          "fields": {
                              "TEXT": "Multiplayer Tetris"
                          }
                      }
                  },
                  "author name": {
                      "block": {
                          "type": "text",
                          "id": "?)6dy[;RNRixg1lHZGed",
                          "fields": {
                              "TEXT": "BlastPad Team"
                          }
                      }
                  },
                  "description": {
                      "block": {
                          "type": "text",
                          "id": "D?WrcH,o0F0HKfy2~GC;",
                          "fields": {
                              "TEXT": "This is an example project."
                          }
                      }
                  }
              }
          },
        ]
      }
    };

saveGameButton.addEventListener("click", async (e) => {
    const data = Blockly.serialization.workspaces.save(ws);

    var response = await fetch("/save/game", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
})

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {

  // const code = pythonGenerator.workspaceToCode(ws);
  // const code = javascriptGenerator.workspaceToCode(ws);
  // codeDiv.innerText = code;
  // outputDiv.innerHTML = '';

  // eval(code);
};

// Load the initial state from storage and run the code.

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});


// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()) {
    return;
  }
  // runCode();
});


const fetchAndLoadGame = (gameName) => {
  // gamename includes .json at the end. this will need to change
  // on both the flask end and this end.

  fetch(`/games/${gameName}`).then(function(response) {
    return response.json()
  }).then((gameWorkspace) => {
    Blockly.Events.disable();
    Blockly.serialization.workspaces.load(gameWorkspace, ws, false);
    Blockly.Events.enable();

    selectionContainer.classList.add("hidden");
    pageContainer.classList.remove("hidden");
  }).catch((error) => {
    console.log("No games found, loading empty workspace.")
    Blockly.serialization.workspaces.load(defaultWorkspace, ws, false);
    selectionContainer.classList.add("hidden");
    pageContainer.classList.remove("hidden");
  })
}

const startEditor = () => {
  selectionContainer.classList.remove("hidden");
  pageContainer.classList.add("hidden");

  console.log("fetching games");

  fetch('/games').then(function(response) {
    console.log(response)
    console.log(response.body);
    console.log("trying json conversion");
    console.log(response.json());
    return response.json()
  }).then((json) => {

    console.log(json);
    for(var gameFileName of json.games) {
      // you would also want to display the bitmap here... generate an image perhaps
      var gamePlaceholder = document.createElement("h2");
      gamePlaceholder.innerHTML = gameFileName;
      gamePlaceholder.setAttribute("gameName", gameFileName)

      gamePlaceholder.addEventListener('click', (e) => {
        var gameToLoad = e.target.getAttribute("gameName")
        fetchAndLoadGame(gameToLoad);
      });
      gamesContainer.appendChild(gamePlaceholder);
    }
  }).catch((err) => {
    console.log(err);
    console.log("No games found, loading empty workspace.")
    Blockly.serialization.workspaces.load(defaultWorkspace, ws, false);
    selectionContainer.classList.add("hidden");
    pageContainer.classList.remove("hidden");
  })

  // load(ws);
// runCode();
}

const params = new URLSearchParams(document.location.search);
var specifiedGame = params.get('load');
if(specifiedGame) {
  fetchAndLoadGame(specifiedGame);
}

startEditor();
