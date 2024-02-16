/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/text';
import {forBlock} from './generators/python';
import {pythonGenerator} from 'blockly/python';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
Object.assign(pythonGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const saveGameButton = document.getElementById('saveGame');

const selectionContainer = document.getElementById('selectionContainer')
const gamesContainer = document.getElementById('gamesContainer')
const pageContainer = document.getElementById('pageContainer')

const ws = Blockly.inject(blocklyDiv, {toolbox});



saveGameButton.addEventListener("click", async (e) => {
    const data = Blockly.serialization.workspaces.save(ws);

    var response = await fetch("http://localhost:5000/save/game", {
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

  const code = pythonGenerator.workspaceToCode(ws);
  // const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

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
  runCode();
});


const fetchAndLoadGame = (gameName) => {
  // gamename includes .json at the end. this will need to change
  // on both the flask end and this end.

  fetch(`http://localhost:5000/games/${gameName}`).then(function(response) {
    return response.json()
  }).then((gameWorkspace) => {
    Blockly.Events.disable();
    Blockly.serialization.workspaces.load(gameWorkspace, ws, false);
    Blockly.Events.enable();

    selectionContainer.classList.add("hidden");
    pageContainer.classList.remove("hidden");
  })
}

const startEditor = () => {
  selectionContainer.classList.remove("hidden");
  pageContainer.classList.add("hidden");

  fetch('http://localhost:5000/games').then(function(response) {
    return response.json()
  }).then((json) => {
    console.log(json);
    for(var gameFileName of json.games) {
      // you would also want to display the bitmap here... generate an image perhaps
      var gamePlaceholder = document.createElement("h2");
      gamePlaceholder.innerHTML = gameFileName;
      gamePlaceholder.addEventListener('click', (e) => {
        fetchAndLoadGame(gameFileName);
      });
      gamesContainer.appendChild(gamePlaceholder);
    }
  })

  // load(ws);
// runCode();
}

startEditor();