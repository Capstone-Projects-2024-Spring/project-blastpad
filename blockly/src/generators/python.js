/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import {Order} from 'blockly/python';

var forBlock = Object.create(null);

const Order = {
  ATOMIC: 0,             // 0 "" ...
  COLLECTION: 1,         // tuples, lists, dictionaries
  STRING_CONVERSION: 1,  // `expression...`
  MEMBER: 2.1,           // . []
  FUNCTION_CALL: 2.2,    // ()
  EXPONENTIATION: 3,     // **
  UNARY_SIGN: 4,         // + -
  BITWISE_NOT: 4,        // ~
  MULTIPLICATIVE: 5,     // * / // %
  ADDITIVE: 6,           // + -
  BITWISE_SHIFT: 7,      // << >>
  BITWISE_AND: 8,        // &
  BITWISE_XOR: 9,        // ^
  BITWISE_OR: 10,        // |
  RELATIONAL: 11,        // in, not in, is, is not, >, >=, <>, !=, ==
  LOGICAL_NOT: 12,       // not
  LOGICAL_AND: 13,       // and
  LOGICAL_OR: 14,        // or
  CONDITIONAL: 15,       // if else
  LAMBDA: 16,            // lambda
  NONE: 99,              // (...)
}

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!

// forBlock['add_text'] = function (block, generator) {
//   const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
//   const color =
//     generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffffff'";

//   const addText = generator.provideFunction_(
//       'addText',
//       `def ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color):
//         # placeholder
//       `
//   );
//   // Generate the function call for this block.
//   const code = `${addText}(${text}, ${color});\n`;
//   return code;
// };

// forBlock['test_block'] = function (block, generator) {
//   const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
//   const addText = generator.provideFunction_(
//       'printText',
//       `def ${generator.FUNCTION_NAME_PLACEHOLDER_}(text):\n  # custom function\n  print(text)
//       `
//   );
//   // Generate the function call for this block.
//   const code = `${addText}(${text});\n`;
//   return code;
// };

forBlock['game_loop'] = function (block, generator) {
  let branch = generator.statementToCode(block, 'DO');
  // branch = generator.addLoopTrap(branch, block) || generator.PASS;
  return `
def update():
  screen.clear()
${branch}
\n`
};

forBlock['metadata'] = function(block, generator) {
  var value_game_name = generator.valueToCode(block, 'game name', Order.ATOMIC);
  var value_author_name = generator.valueToCode(block, 'author name', Order.ATOMIC);
  var value_description = generator.valueToCode(block, 'description', Order.ATOMIC);
  var code = `

# BLASTPAD PRODUCTIONS
# ${value_game_name}
# By ${value_author_name}
# ${value_description}\n

# from gpiozero import Button, LED
import pgzrun
# from pgzhelper import *
# button = Button(5)

TITLE = "${value_game_name}"
WIDTH = 40
HEIGHT = 100
\n
\n
`
  return code;
};

forBlock['actor'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'ImageName', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `Actor(${value_name}, (20, 50))`;
  return [code, Order.NONE];
};

forBlock['set_actor'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'Actor', Order.ATOMIC);
  var value_property = generator.valueToCode(block, 'property', Order.ATOMIC);
  var statements_to = generator.valueToCode(block, 'to', Order.ATOMIC);

  // TODO: Assemble python into code variable.
  var code = `setattr(${value_actor}, ${value_property}, ${statements_to})\n`
  return code;
};

forBlock['draw_actor'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `${value_name}.draw()\n`
  return code;
};

forBlock['key_down'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`

def on_key_down():
  ${branch}
`;
  return code;
};

forBlock['get_property'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'Actor', Order.ATOMIC);
  var value_property = generator.valueToCode(block, 'Property', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `getattr(${value_actor}, ${value_property})`;
  return [code, Order.NONE]
};


forBlock['small_bitmap'] = function(block, generator) {
  var code = `"${block.id.toLowerCase().replace(/[^a-zA-Z ]/g, "")}"`;
  return [code, Order.NONE]
};


forBlock['large_bitmap'] = function(block, generator) {
  var code = `"${block.id.toLowerCase().replace(/[^a-zA-Z ]/g, "")}"`;
  return [code, Order.NONE]
};


module.exports = forBlock;