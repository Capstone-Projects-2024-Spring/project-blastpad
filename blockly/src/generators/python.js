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
  return `# placeholder game loop... pygame0 anyone?\nwhile true:\n${branch}`
};

forBlock['metadata'] = function(block, generator) {
  var value_game_name = generator.valueToCode(block, 'game name', python.Order.ATOMIC);
  var value_author_name = generator.valueToCode(block, 'author name', python.Order.ATOMIC);
  var value_description = generator.valueToCode(block, 'description', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `
  # ${value_game_name}
  # By ${value_author_name}
  # ${value_description}
  `
  return code;
};

forBlock['draw'] = function(block, generator) {
  var statements_draw = generator.statementToCode(block, 'draw');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['actor'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['set_actor'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'Actor', javascript.Order.ATOMIC);
  var value_property = generator.valueToCode(block, 'property', javascript.Order.ATOMIC);
  var statements_to = generator.statementToCode(block, 'to');
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

forBlock['draw_actor'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};

module.exports = forBlock;