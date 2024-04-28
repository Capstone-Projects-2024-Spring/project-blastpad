/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

import * as Blockly from 'blockly';
// import {blocks} from './blocks/text';

// newfangles
import data from './blocks/game.json';
const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(data.blocks);


console.log(Blockly.Variables);
console.log(Blockly.Variables.NAME_TYPE);

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

const errorWindow = document.getElementById('hasErrors');
const errorBody = document.getElementById('errorBody');
const errorFix = document.getElementById('errorFix');
const newGameButton = document.getElementById('newGameButton');


const blocklyDiv = document.getElementById('blocklyDiv');
const saveGameButton = document.getElementById('saveGame');
const runGameButton = document.getElementById('runGame');
const homeButton = document.getElementById('homeButton');

const homeButtonContents = document.getElementById('homeButtonContents');


const loader = document.getElementById('loader');
const checkmark = document.getElementById('flashCheckmark');

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
                "x": 3,
                "y": 73,
                "inputs": {
                    "game name": {
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
                    },
                    "game_icon": {
                        "block": {
                            "type": "small_bitmap",
                            "id": "X4Cx3nyk!n5;^%t]v!h@",
                            "fields": {
                                "field": [
                                    [
                                        2,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        2
                                    ],
                                    [
                                        0,
                                        0,
                                        2,
                                        2,
                                        2,
                                        2,
                                        0,
                                        0
                                    ],
                                    [
                                        0,
                                        2,
                                        2,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0
                                    ],
                                    [
                                        0,
                                        2,
                                        1,
                                        0,
                                        0,
                                        1,
                                        2,
                                        0
                                    ],
                                    [
                                        0,
                                        2,
                                        1,
                                        0,
                                        0,
                                        1,
                                        2,
                                        0
                                    ],
                                    [
                                        0,
                                        2,
                                        2,
                                        1,
                                        1,
                                        2,
                                        2,
                                        0
                                    ],
                                    [
                                        0,
                                        0,
                                        2,
                                        2,
                                        2,
                                        2,
                                        0,
                                        0
                                    ],
                                    [
                                        2,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        2
                                    ]
                                ]
                            }
                        }
                    }
                },
                "next": {
                    "block": {
                        "type": "procedures_callnoreturn",
                        "id": "KQhe;5r3h1M4Ox;#vQz0",
                        "extraState": {
                            "name": "Start Game"
                        },
                        "next": {
                            "block": {
                                "type": "game_loop",
                                "id": "86d_D8;/4N~aV7tNH6~-",
                                "inputs": {
                                    "DO": {
                                        "block": {
                                            "type": "change_background_color",
                                            "id": "cJcZ?Z.b](#d?vdP(/?@",
                                            "fields": {
                                                "Background Color": "#ffffff"
                                            },
                                            "next": {
                                                "block": {
                                                    "type": "move",
                                                    "id": "xBy]CE^JAC:X%~OQ5Cul",
                                                    "inputs": {
                                                        "actor": {
                                                            "block": {
                                                                "type": "variables_get",
                                                                "id": "0pIK^!Cx.Wr,1l}~q4(g",
                                                                "fields": {
                                                                    "VAR": {
                                                                        "id": "k;Uf!p8Cc_^Gp!R$UvQW"
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "x": {
                                                            "block": {
                                                                "type": "math_number",
                                                                "id": "!]wAS/Q9xI|-IF;LlB/%",
                                                                "fields": {
                                                                    "NUM": 30
                                                                }
                                                            }
                                                        },
                                                        "y": {
                                                            "block": {
                                                                "type": "math_number",
                                                                "id": "Q^]SWTy/0mWHnOVOzk_h",
                                                                "fields": {
                                                                    "NUM": 0
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "next": {
                                                        "block": {
                                                            "type": "key_down_b",
                                                            "id": "maZ[?H|-w#Z/f3F+{^6j",
                                                            "inputs": {
                                                                "DO": {
                                                                    "block": {
                                                                        "type": "exit",
                                                                        "id": "bYWFe9KW8aT68o.*=Gtx"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "type": "procedures_defnoreturn",
                "id": "vc~SadWEO0H$O43jvHEb",
                "x": 485,
                "y": 131,
                "icons": {
                    "comment": {
                        "text": "Describe this function...",
                        "pinned": false,
                        "height": 80,
                        "width": 160
                    }
                },
                "fields": {
                    "NAME": "Start Game"
                },
                "inputs": {
                    "STACK": {
                        "block": {
                            "type": "variables_set",
                            "id": "^X1yt]muzF*Z_xi$qvB2",
                            "fields": {
                                "VAR": {
                                    "id": "k;Uf!p8Cc_^Gp!R$UvQW"
                                }
                            },
                            "inputs": {
                                "VALUE": {
                                    "block": {
                                        "type": "actor",
                                        "id": "avabmJ%.,d*}?~se*3K8",
                                        "fields": {
                                            "me": {
                                                "id": "XdVI}Q2vY|fOoyWn_Smb"
                                            },
                                            "other": {
                                                "id": "8lbQrf#in@SK5fSe`P=^"
                                            },
                                            "layer": {
                                                "id": "yYvzMy_4$=o?/]Q^s/Mp"
                                            }
                                        },
                                        "inputs": {
                                            "ImageName": {
                                                "block": {
                                                    "type": "small_bitmap",
                                                    "id": "WQyeC9=sIGoqjEV-O@Gl",
                                                    "fields": {
                                                        "field": [
                                                            [
                                                                0,
                                                                0,
                                                                0,
                                                                0,
                                                                0,
                                                                0,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                1,
                                                                1,
                                                                1,
                                                                1,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                2,
                                                                2,
                                                                2,
                                                                1,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                2,
                                                                2,
                                                                2,
                                                                1,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                1,
                                                                1,
                                                                1,
                                                                1,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                0,
                                                                0,
                                                                0,
                                                                1,
                                                                0,
                                                                0
                                                            ],
                                                            [
                                                                0,
                                                                1,
                                                                1,
                                                                0,
                                                                0,
                                                                1,
                                                                1,
                                                                0
                                                            ]
                                                        ]
                                                    }
                                                }
                                            },
                                            "start_x": {
                                                "block": {
                                                    "type": "math_number",
                                                    "id": "?uCRN`sx`xTm5PQFnSWz",
                                                    "fields": {
                                                        "NUM": 400
                                                    }
                                                }
                                            },
                                            "start_y": {
                                                "block": {
                                                    "type": "math_number",
                                                    "id": "ZTo).juN6(:T8+C0qb2x",
                                                    "fields": {
                                                        "NUM": 250
                                                    }
                                                }
                                            },
                                            "width": {
                                                "block": {
                                                    "type": "math_number",
                                                    "id": "uSH7X2,V#[WLH*`C+Rq7",
                                                    "fields": {
                                                        "NUM": 80
                                                    }
                                                }
                                            },
                                            "height": {
                                                "block": {
                                                    "type": "math_number",
                                                    "id": "34*rfZfZF+(3KWrM/H8l",
                                                    "fields": {
                                                        "NUM": 80
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    },
    "variables": [
        {
            "name": "Actor",
            "id": "k;Uf!p8Cc_^Gp!R$UvQW"
        },
        {
            "name": "me",
            "id": "XdVI}Q2vY|fOoyWn_Smb"
        },
        {
            "name": "other actor",
            "id": "8lbQrf#in@SK5fSe`P=^"
        },
        {
            "name": "other layer",
            "id": "yYvzMy_4$=o?/]Q^s/Mp"
        }
    ]
}


saveGameButton.addEventListener("click", async (e) => {
    startLoading();
    const data = Blockly.serialization.workspaces.save(ws);
    runGameButton.classList.add("disabled");

    var response = await fetch("/save", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if(response.status == 400) {
        var res = await response.json();
        showError(res.error, res.fix || "No Recommended Fix.");
      } else {
        saveSuccess();
        runGameButton.classList.remove("disabled");
      }

      stopLoading();
      console.log(response);
})



runGameButton.addEventListener("click", async (e) => {
  startLoading();
  const data = Blockly.serialization.workspaces.save(ws);
  console.log(data);
  var metadata = data.blocks.blocks.find((b)=>b.type=="metadata")
  
  console.log(metadata);
  var gamename = metadata.inputs["game name"].block.fields.TEXT
  console.log(gamename);
  runGameButton.classList.add("disabled");

  var response = await fetch("/run?"+ new URLSearchParams({
    game: gamename
}), {
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(response.status == 400) {
      var res = await response.json();
      showError(res.error, "Game did not run!");
    } else {
      runGameButton.classList.remove("disabled");
    }

    stopLoading();
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
    
  fetch(`/games/${gameName}`).then(response => {response
    .json().then((gameWorkspace) => {
    Blockly.Events.disable();
    Blockly.serialization.workspaces.load(gameWorkspace, ws, false);
    Blockly.Events.enable();

    selectionContainer.classList.add("hidden");
    pageContainer.classList.remove("hidden");
  }).catch((error) => {
    console.log("No games found, loading empty workspace.")
    loadNewGame();
  })})
}



newGameButton.addEventListener('click', (e) => {
  loadNewGame();
});

const loadNewGame = () => {
  Blockly.serialization.workspaces.load(defaultWorkspace, ws, false);
  selectionContainer.classList.add("hidden");
  pageContainer.classList.remove("hidden");
}

const startEditor = () => {
  selectionContainer.classList.remove("hidden");
  pageContainer.classList.add("hidden");

  console.log("fetching games");

  fetch('/games').then(response => { 
    response.json()
    .then((json) => {
    for(var game of json.games) {
      var gameName = game.name;
      var gameFileName = game.workspace_filename;

      // you would also want to display the bitmap here... generate an image perhaps
      var icon = document.createElement("i")
      icon.className = "fa-solid fa-pen-to-square"

      var gamePlaceholder = document.createElement("h2");
      gamePlaceholder.innerHTML = gameName;
      gamePlaceholder.setAttribute("gameName", gameFileName)
      gamePlaceholder.prepend(icon);

      
      gamePlaceholder.addEventListener('click', (e) => {
        var gameToLoad = e.target.getAttribute("gameName")
        fetchAndLoadGame(gameToLoad);
      });
      gamesContainer.appendChild(gamePlaceholder);
    }
  }
).catch((err) => {
    console.log(err);
    console.log("No games found, loading empty workspace.")
    Blockly.serialization.workspaces.load(defaultWorkspace, ws, false);
    selectionContainer.classList.add("hidden");
    pageContainer.classList.remove("hidden");
  })})

  // load(ws);
// runCode();
}

const params = new URLSearchParams(document.location.search);
var specifiedGame = params.get('load');
if(specifiedGame) {
  fetchAndLoadGame(specifiedGame);
}

var fromHomescreen = params.get('fromHomescreen');
if(fromHomescreen) {
    homeButton.classList.remove("hidden");
    homeButton.addEventListener("click", (e) => {
        window.location.href = "/";
    })
} else {
    homeButton.classList.remove("hidden");
    homeButtonContents.innerHTML = "Back to Game Selection";
    homeButton.addEventListener("click", (e) => {
        window.location.reload();
    })
}

const showError = (error, fix) => {
  errorWindow.classList.remove("hidden");
  errorBody.innerHTML = error;
  errorFix.innerHTML = fix;
}

const startLoading = () => {
  saveGameButton.classList.add("disabled");
  loader.classList.remove("hidden");
}

const stopLoading = () => {
  saveGameButton.classList.remove("disabled");
  loader.classList.add("hidden");
}

const saveSuccess = () => {
  checkmark.classList.add("flash");

  setTimeout(() => {
    checkmark.classList.remove("flash");
  }, 1500);
}



startEditor();

