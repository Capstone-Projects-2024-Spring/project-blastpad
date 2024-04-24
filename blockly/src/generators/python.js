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


const Variables = {
  DEVELOPER_VARIABLE: 'DEVELOPER_VARIABLE',
  VARIABLE: 'VARIABLE',
  PROCEDURE: 'PROCEDURE',
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

  keyState = {}
  for ev in pygame.event.get():
    if ev.type == pygame.KEYDOWN:
      keyState[ev.key] = 1

  for actor1 in actors:
    for actor2 in actors:
      if actor1 != actor2 and collide_pixels(actor1, actor2):
        # Actors collided, handle collision logic here
        actor1.onCollide(actor2, actor2.collision_layer)
        actor2.onCollide(actor1, actor1.collision_layer)


  if pygame.K_ESCAPE in keyState:
    pygame.display.quit()
    pygame.quit()
    exit()
  screen.fill(background_color)
  sorted_actors = sorted(actors, key=lambda x: x.z)
  for x in sorted_actors:
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

### BITMAP INSERTION POINT

background_color = pygame.Color("#000000")

def is_key_pressed(key):
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN and event.key == key


def is_any_key_pressed():
  for event in pygame.event.get():
    return event.type == pygame.KEYDOWN

def collide_pixels(actor1, actor2):
  if(pygame.sprite.collide_rect(actor1, actor2)):
    return pygame.sprite.collide_mask(actor1, actor2)
  return False

actors = [];
collisions = {};


def actor_in_layer_at_position(x, y, layer):
  if layer not in collisions.keys():
    return None
  for actor in collisions[layer]:
    if actor.rect.collidepoint(x, y):
      return actor
  
  return None

class Actor_Sprite_Obj(pygame.sprite.Sprite):
  def __init__(self, imageName, x, y, width, height, collision_layer, onCollide, z):
      super(Actor_Sprite_Obj, self).__init__()
      self.width = width
      self.height = height
      self.onCollide_func = onCollide
      self.collision_layer = collision_layer
      self.collisionsDisabled = False
      self.z = z
      
      self.image = pygame.image.load("./images/"+imageName+".png")
      self.image = pygame.transform.scale(self.image, (width, height))
      self.rect = self.image.get_rect(center = (x, y))

  def draw(self, screen):
      screen.blit(self.image, (self.rect.x, self.rect.y))
    
  def move(self, x, y):
    self.rect.x += x
    self.rect.y += y


  def changeImage(self, imageName):
    self.image = pygame.image.load("./images/"+imageName+".png")
    self.image = pygame.transform.scale(self.image, (self.width, self.height))

  def onCollide(self, other, layer):
    if not self.collisionsDisabled:
      self.onCollide_func(self, other, layer)
  
  def disableCollisions(self):
    self.collisionsDisabled = True

  def enableCollisions(self):
    self.collisionsDisabled = False

def create_actor(image_name, x, y, width, height, collision_layer, collide_func, z):
  actor = Actor_Sprite_Obj(image_name, x, y, width, height, collision_layer, collide_func, z)
  actors.append(actor)

  if collision_layer not in collisions.keys():
    collisions[collision_layer] = []

  collisions[collision_layer].append(actor)

  return actor


pygame.key.set_repeat(1)
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
  var collision_layer = generator.valueToCode(block, 'collision_layer', Order.ATOMIC) || `"default"`;
  var variable_me = generator.nameDB_.getName(block.getFieldValue('me'), Variables.VARIABLE);
  var variable_other = generator.nameDB_.getName(block.getFieldValue('other'), Variables.VARIABLE);
  var variable_layer = generator.nameDB_.getName(block.getFieldValue('layer'), Variables.VARIABLE);
  var draw_priority = generator.valueToCode(block, 'draw_priority', Order.ATOMIC) || 1;

  var statements_collide_with = generator.statementToCode(block, 'collide_with');

  var regex = /(\w+)\s*=(?!=)/g;
  var matches = statements_collide_with.matchAll(regex);
  var words = [];
  for (const match of matches) {
    words.push(match[1]);
  }

  var globals = words.length != 0 ? 'global ' + words.join(', ') : ''

  var funcName = "collide_"+block.id.toLowerCase().replace(/[^a-zA-Z ]/g, "")
  // TODO: Assemble python into code variable.
  var jank_declaration = `# def CollideFun
def ${funcName}(${variable_me}, ${variable_other}, ${variable_layer}):
  ${globals}
${statements_collide_with || '  pass'}
# endCollideFun`
  var code = `${jank_declaration}create_actor(${value_name}, ${value_x}, ${value_y}, ${width}, ${height}, ${collision_layer}, ${funcName}, ${draw_priority})`;
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
`if pygame.K_a in keyState:
${branch}
`;
  return code;
};

forBlock['key_down_b'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_b in keyState:
${branch}
`;
  return code;
};

forBlock['key_down_space'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_SPACE in keyState:
${branch}
`;
  return code;
};



forBlock['key_down_left'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_LEFT in keyState:
${branch}
`;
  return code;
};

forBlock['key_down_right'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_RIGHT in keyState:
${branch}
`;
  return code;
};


forBlock['key_down_up'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_UP in keyState:
${branch}
`;
  return code;
};


forBlock['key_down_down'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_DOWN in keyState:
${branch}
`;
  return code;
};




forBlock['key_down_enter'] = function(block, generator) {
  let branch = generator.statementToCode(block, 'DO');

  // TODO: Assemble python into code variable.
  var code = 
`if pygame.K_RETURN in keyState:
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
`${value_actor}.move(${value_x}, ${value_y})
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


forBlock['for_pixel_in_bitmap'] = function(block, generator) {
  var value_in_bitmap = generator.valueToCode(block, 'in_bitmap', Order.ATOMIC);
  value_in_bitmap = value_in_bitmap.replace(/['"()]/g, ''); // make it a variable name
  // console.log(value_in_bitmap)
  var variable_x = generator.nameDB_.getName(block.getFieldValue('x'), Variables.VARIABLE);
  var variable_y = generator.nameDB_.getName(block.getFieldValue('y'), Variables.VARIABLE);
  var variable_color = generator.nameDB_.getName(block.getFieldValue('color'), Variables.VARIABLE);

  var statements_do_for_pixels = generator.statementToCode(block, 'do_for_pixels');

  // HOLY FUCKING JANK
  if(value_in_bitmap[0] != `"` && value_in_bitmap.length > 7) {
    value_in_bitmap = `"${value_in_bitmap}"`
  }
  // TODO: Assemble python into code variable.
return `for ${variable_x} in range(len(bitmap_data_dict[${value_in_bitmap}])):
  for ${variable_y} in range(len(bitmap_data_dict[${value_in_bitmap}][${variable_x}])):
    ${variable_color} = bitmap_data_dict[${value_in_bitmap}][${variable_y}][${variable_x}]

${statements_do_for_pixels.split("\n").map(l=>"  "+l).join("\n")}\n`
};


forBlock['spawn_actor'] = function(block, generator) {
  var value_spawn = generator.valueToCode(block, 'spawn', Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = `${value_spawn}\n`;
  return code;
};


forBlock['occupied_by'] = function(block, generator) {
  var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
  var variable_name = generator.nameDB_.getName(block.getFieldValue('NAME'), Variables.VARIABLE);
  var value_layer = generator.valueToCode(block, 'layer', Order.ATOMIC);
  var statements_do = generator.statementToCode(block, 'do');

  // TODO: Assemble python into code variable.
  var code = 
`
test = actor_in_layer_at_position(${value_x}, ${value_y}, ${value_layer})

if test != None:
  ${variable_name} = test
  ${statements_do}
`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

forBlock['simple_occupied_by'] = function(block, generator) {
  var value_x = generator.valueToCode(block, 'x', Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', Order.ATOMIC);
  var value_layer = generator.valueToCode(block, 'layer', Order.ATOMIC);

  // TODO: Assemble python into code variable.
  var code = `(actor_in_layer_at_position(${value_x}, ${value_y}, ${value_layer}))`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.NONE];
};

forBlock['key_repeat_mode'] = function(block, generator) {
  var number_delay = block.getFieldValue('delay');
  // TODO: Assemble python into code variable.
  var code = `pygame.key.set_repeat(${parseInt(number_delay)*1000})\n`
  return code;
};

forBlock['remove_all_in_layer'] = function(block, generator) {
  var value_content = generator.valueToCode(block, 'content', Order.ATOMIC);

  var code = 
`if ${value_content} in collisions.keys():
  for actor_to_remove in collisions[${value_content}]:
    actors.remove(actor_to_remove)
  collisions[${value_content}] = []\n`
  return code;
};

forBlock['remove_actor'] = function(block, generator) {
  var value_content = generator.valueToCode(block, 'actor_to_remove', Order.ATOMIC);

  var code = 
`for layer in collisions.keys():
  if ${value_content} in collisions[layer]:
    collisions[layer].remove(${value_content})
if ${value_content} in actors:  
  actors.remove(${value_content})\n`
  return code;
};


forBlock['disable_collisions'] = function(block, generator) {
  var value_content = generator.valueToCode(block, 'actor_to_disable', Order.ATOMIC);

  var code = 
`${value_content}.disableCollisions()\n`
  return code;
};

forBlock['enable_collisions'] = function(block, generator) {
  var value_content = generator.valueToCode(block, 'actor_to_enable', Order.ATOMIC);

  var code = 
`${value_content}.enableCollisions()\n`
  return code;
};


module.exports = forBlock;