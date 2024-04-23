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
while True:
  keyState = pygame.key.get_pressed()

  if keyState[pygame.K_ESCAPE]:
    pygame.display.quit()
    pygame.quit()
    exit()
  screen.fill(background_color)
  for x in actors:
    x.draw(screen) 
${branch}
  pygame.display.flip()
  clock.tick(30)
  pygame.event.pump()
\n`
};

forBlock['metadata'] = function(block, generator) {
  var value_game_name = generator.valueToCode(block, 'game name', Order.ATOMIC);
  var value_author_name = generator.valueToCode(block, 'author name', Order.ATOMIC);
  var value_description = generator.valueToCode(block, 'description', Order.ATOMIC);
  var value_icon = generator.valueToCode(block, 'game_icon', Order.ATOMIC);
  var code = `

# BLASTPAD PRODUCTIONS
# ${value_game_name}
# By ${value_author_name}
# ${value_description}\n

import pygame
import time
from pygame import mask
clock = pygame.time.Clock()
pygame.init()
pygame.display.init()
import os
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)
import sys

background_color = pygame.Color("#000000")

def is_key_pressed(key):
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN and event.key == key


def is_any_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def collide_pixels(actor1, actor2):
  return pygame.sprite.collide_mask(actor1, actor2)

actors = [];
collisions = {};

class Actor_Sprite_Obj(pygame.sprite.Sprite):
  def __init__(self, imageName, x, y, width, height):
      self.width = width
      self.height = height

      self.image = pygame.image.load("./images/"+imageName+".png")
      self.image = pygame.transform.scale(self.image, (width, height))
      self.rect = self.image.get_rect(center = (x, y))

  def draw(self, screen):
      screen.blit(self.image, (self.rect.x, self.rect.y))
    
  def moveHorizontal(self, pixels):
    self.rect.x += pixels

  def moveVertical(self, pixels):
    self.rect.y += pixels

  def changeImage(self, imageName):
    self.image = pygame.image.load("./images/"+imageName+".png")
    self.image = pygame.transform.scale(self.image, (self.width, self.height))

  # add change image func

def create_actor(image_name, x, y, width, height, collision_layer):
  actor = Actor_Sprite_Obj(image_name, x, y, width, height)
  actors.append(actor)

  if collision_layer not in collisions.keys():
    collisions[collision_layer] = pygame.sprite.Group()

  collisions[collision_layer].add(actor)

  return actor

font = pygame.font.Font('freesansbold.ttf', 32)
pygame.display.set_caption("${value_game_name}")

screen = None

if sys.argv[1] == "headless":
  screen = pygame.display.set_mode((1, 1), pygame.NOFRAME)

else:
  screen = pygame.display.set_mode((pygame.display.Info().current_w, pygame.display.Info().current_h), pygame.SCALED)
  # linux workaround
\n
\n
`
  return code;
};

forBlock['actor'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'ImageName', Order.ATOMIC);
  var value_x = generator.valueToCode(block, 'start_x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'start_y', Order.ATOMIC);
  var width = generator.valueToCode(block, 'width', Order.ATOMIC);
  var height = generator.valueToCode(block, 'height', Order.ATOMIC);

  // TODO: Assemble python into code variable.
  var code = `create_actor(${value_name}, ${value_x}, ${value_y}, ${width}, ${height})`;
  return [code, Order.NONE];
};

// forBlock['set_actor'] = function(block, generator) {
//   var value_actor = generator.valueToCode(block, 'Actor', Order.ATOMIC);
//   var value_property = generator.valueToCode(block, 'property', Order.ATOMIC);
//   var statements_to = generator.valueToCode(block, 'to', Order.ATOMIC);

//   // TODO: Assemble python into code variable.
//   var code = `setattr(${value_actor}, ${value_property}, ${statements_to})\n`
//   return code;
// };



forBlock['change_actor_image'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'actor', Order.ATOMIC);
  var image = generator.valueToCode(block, 'image', Order.ATOMIC);

  // TODO: Assemble python into code variable.
  var code = `${value_actor}.changeImage(${image})\n`
  return code;
};

forBlock['draw_actor'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 
`${value_name}.draw(screen)\n`
  return code;
};

forBlock['key_down_a'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_a]:
${branch}
`;
  return code;
};

forBlock['key_down_b'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_b]:
${branch}
`;
  return code;
};

forBlock['key_down_space'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_SPACE]:
${branch}
`;
  return code;
};



forBlock['key_down_left'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_LEFT]:
${branch}
`;
  return code;
};

forBlock['key_down_right'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_RIGHT]:
${branch}
`;
  return code;
};


forBlock['key_down_up'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_UP]:
${branch}
`;
  return code;
};


forBlock['key_down_down'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_DOWN]:
${branch}
`;
  return code;
};




forBlock['key_down_enter'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if keyState[pygame.K_RETURN]:
${branch}
`;
  return code;
};

forBlock['key_down_any'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if(is_any_key_pressed()):
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


forBlock['if_actors_colliding'] = function(block, generator) {
  var value_actor1 = generator.valueToCode(block, 'Actor1', Order.ATOMIC);
  var value_actor2 = generator.valueToCode(block, 'Actor2', Order.ATOMIC);
  var statements_do = generator.statementToCode(block, 'DO');


  var code = 
`if collide_pixels(${value_actor1}, ${value_actor2}):
${statements_do}
`;
  return code;
}

forBlock['draw_text'] = function(block, generator) {
  var value_content = generator.valueToCode(block, 'content', Order.ATOMIC);
  var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);

  var code = 
`text = font.render(${value_content}, True, (255, 255, 0))
textRect = text.get_rect()
textRect.topleft = (${value_x}, ${value_y})
screen.blit(text, textRect)
`
  return code;
};

forBlock['exit'] = function(block, generator) {
  var code = 
`pygame.display.quit()
pygame.quit()
exit()
`
  return code;
};

forBlock['teleport'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'actor', Order.ATOMIC);
  var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 
`${value_actor}.rect.x = ${value_x}
${value_actor}.rect.y = ${value_y}
`;
  return code;
};

forBlock['move'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'actor', Order.ATOMIC);
  var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 
`${value_actor}.moveHorizontal(${value_x})
${value_actor}.moveVertical(${value_y})
`;
  return code;
};


forBlock['velocity'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'actor', Order.ATOMIC);
  var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = 
`${value_actor}.horizontalVelocity(${value_x})
${value_actor}.verticalVelocity(${value_y})
`;
  return code;
};

forBlock['actor_x'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'Actor', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `${value_actor}.rect.x`;
  return [code, Order.NONE]
};
forBlock['actor_y'] = function(block, generator) {
  var value_actor = generator.valueToCode(block, 'Actor', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `${value_actor}.rect.y`;
  return [code, Order.NONE]
};

forBlock['change_background_color'] = function(block, generator) {
  var colour_background_color = block.getFieldValue('Background Color');
  // TODO: Assemble python into code variable.
  var code = `background_color = pygame.Color("${colour_background_color}")\n`;
  return code;
};

forBlock['layer_collide'] = function(block, generator) {
  var field_layer1 = block.getFieldValue('layer1');
  var value_layer1 = generator.valueToCode(block, 'layer1', Order.ATOMIC);
  var field_layer2 = block.getFieldValue('layer2');
  var value_layer2 = generator.valueToCode(block, 'layer2', Order.ATOMIC);
  var variable_actor_one = generator.nameDB_.getName(block.getFieldValue('actor one'), Blockly.Variables.NAME_TYPE);
  var variable_actor_two = generator.nameDB_.getName(block.getFieldValue('actor two'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.python.ORDER_NONE];
};

module.exports = forBlock;