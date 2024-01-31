/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/python';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const color =
    generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffffff'";

  const addText = generator.provideFunction_(
      'addText',
      `def ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color):
        # placeholder
      `
  );
  // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};


forBlock['test_block'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
      'printText',
      `def ${generator.FUNCTION_NAME_PLACEHOLDER_}(text):\n  # custom function\n  print(text)
      `
  );
  // Generate the function call for this block.
  const code = `${addText}(${text});\n`;
  return code;
};


forBlock['game_loop'] = function (block, generator) {
  let branch = generator.statementToCode(block, 'DO');
  // branch = generator.addLoopTrap(branch, block) || generator.PASS;
  return `# placeholder game loop... pygame0 anyone?\nwhile true:\n${branch}`
};