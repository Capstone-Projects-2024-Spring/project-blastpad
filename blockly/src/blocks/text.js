/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  'type': 'add_text',
  'message0': 'Add text %1 with color %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'COLOR',
      'check': 'Colour',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};

const testBlock = {
  'type': 'test_block',
  'message0': 'Print out %1',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': 'heehee',
  'helpUrl': '',
};


const gameLoop = {
  'type': 'game_loop',
  'message0': 'Game Loop',
  'message1': 'DO %1 End of Game',
  "args0": [
  ],
  'args1': [
    {
      'type': 'input_statement',
      'name': 'DO',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'tooltip': 'Your Game Loop!',
  'helpUrl': '',
  'style': 'loop_blocks'
};


// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [addText, testBlock, gameLoop]);
