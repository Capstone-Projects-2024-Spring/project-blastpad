const fs = require('fs');
const jsonfile = require('jsonfile')
const Blockly = require('blockly/core');
const libraryBlocks = require('blockly/blocks'); // not entirely sure if this is necessary
const {pythonGenerator} = require('blockly/python');
const en = require('blockly/msg/en');
const savePixels = require("save-pixels")
const ndarray = require("ndarray");


// const FieldBitmap = require("./src/field-bitmap.js");
// console.log(FieldBitmap);

class dummyField extends Blockly.Field {}
dummyField.fromJson = () => {};
Blockly.fieldRegistry.register('field_bitmap', dummyField);

Blockly.setLocale(en);

const primaryColor = [54, 61, 128, 255]
const secondaryColor = [13, 167, 63, 255]
const tertiaryColor = [255, 63, 63, 255]
const backgroundColor = [0, 0, 0, 0]


const pixel_colors = {
    0: backgroundColor,
    1: primaryColor,
    2: secondaryColor,
    3: tertiaryColor,
}


function scaleBitmap(bitmap, scaleFactor) {
    let scaledBitmap = [];
    for (let i = 0; i < bitmap.length; i++) {
        let scaledRow = [];
        for (let j = 0; j < bitmap[i].length; j++) {
            for (let k = 0; k < scaleFactor; k++) {
                scaledRow.push(bitmap[i][j]); // Replicate pixel values
            }
        }
        for (let k = 0; k < scaleFactor; k++) {
            scaledBitmap.push(scaledRow.slice()); // Replicate rows
        }
    }
    return scaledBitmap;
}


var saveBitmap = (bitmap, size, name) => {

    // old squish approach
    
    // var squished = [];
    // for(var string of bitmap) {
    //     for(bit of string) {
    //         squished.push(bit * 255);
    //     }
    // }

    // var d = {
    //     data: squished,
    //     shape: size,
    //     stride: [size[0], 1],
    //     offset: 0
    // }


    var scaleFactor = 10;
    var scaled = [];

    var scaled = scaleBitmap(bitmap, scaleFactor);
    var data = scaled.map((arr) => {return scaled.slice();});

    var d = new ndarray(data, [size[0]*scaleFactor, size[1]*scaleFactor, 4]);
    
    for(var x in scaled) {
        for(var y in scaled[x]) {
            var color = pixel_colors[scaled[x][y]];

            for(var i=0;i<4;i++) {
                d.set(y, x, i, color[i])
            }
        }
    }  
    
    var out = fs.createWriteStream(`./blockly/compiled_games/images/${name.toLowerCase().replace(/[^a-zA-Z ]/g, "") || "UNKNOWN"}.png`);
    savePixels(d, "png").pipe(out)
}

var unrollWorkspaceBlocks = (workspace) => {
    var workspaceBlocks = [];

    var saveBlock = (block) => {
        workspaceBlocks.push(block)
        
        if(block.inputs) {
            for(var input of Object.keys(block.inputs)) {
                saveBlock(block.inputs[input].block);
            }
        }

        if(block.next) {
            saveBlock(block.next.block)
        }
        if(block.inputs && block.inputs.DO) {
            saveBlock(block.inputs.DO);
        }
    }

    for(var block of workspace.blocks.blocks) {
        saveBlock(block);
    }

    return workspaceBlocks;
}

var getVariableName = (block_id, workspace) => {
    // console.log("looking",block_id);
    var variable_match = workspace.variables.filter((variable)=>variable.id == block_id)
    // console.log(workspace.variables)
    if(variable_match.length == 0) { return block_id }

    return variable_match[0].name;
}

var getBitmapSize = (bitmap_type, definitions) => {
    var size = definitions.blocks.filter((definition)=>definition.type==bitmap_type)[0]["args0"][1];
    return [size.width, size.height]
}

try {
    const file = jsonfile.readFileSync(process.argv[2]);
    var filename = process.argv[2].replace(/^.*[\\/]/, '')
    var output = process.argv[3] || "./blockly/compiled_games/"+filename.split('.')[0]+".py"

    // SAVE BITMAPS
    // PROBABLY SHOULD BE IN THEIR OWN GAME FOLDER
    var allWorkspaceBlocks = unrollWorkspaceBlocks(file)

    // THIS IS HOW WE GET BLOCK DEFINITIONS
    var definitionsArray = jsonfile.readFileSync('./blockly/src/blocks/game.json')
    var definitions = Blockly.common.createBlockDefinitionsFromJsonArray(definitionsArray.blocks);
    Blockly.common.defineBlocks(definitions);

    // console.log(allWorkspaceBlocks);

    for(var block of allWorkspaceBlocks) {
        // save orphaned bitmaps
        if(["small_bitmap", "large_bitmap"].includes(block.type)) {
            var size = getBitmapSize(block.type, definitionsArray)
            saveBitmap(block.fields.field, size, block.id);
        }
        if(block.type == "variables_set") {
            for(var key in block.inputs) {
                var variable_id = block.fields.VAR.id;
                var bitmapBlock = block.inputs[key].block;
                if(["small_bitmap", "large_bitmap"].includes(bitmapBlock.type)) {
                    // console.log("variable set...");
                    var size = getBitmapSize(bitmapBlock.type, definitionsArray)
                    var name = getVariableName(variable_id, file)
                    saveBitmap(bitmapBlock.fields.field, size, name);
                }
            }
        }


        if(block.type == "actor") {
            var bitmapBlock = block.inputs.ImageName.block;

            if(["small_bitmap", "large_bitmap"].includes(bitmapBlock.type)) {
                var size = getBitmapSize(bitmapBlock.type, definitionsArray)
                var name = getVariableName(bitmapBlock.id, file)
                saveBitmap(bitmapBlock.fields.field, size, name);
            }

            // return;
        }
    }

    // THIS IS HOW WE GET BLOCK GENERATION
    const forBlock = require('../blockly/src/generators/python.js')
    Object.assign(pythonGenerator.forBlock, forBlock);
    
    try {
        var workspace = new Blockly.Workspace();
        Blockly.serialization.workspaces.load(file, workspace);
        var code = pythonGenerator.workspaceToCode(workspace);

        code += `\n\n\n\npgzrun.go()`
        fs.writeFile(output, code, err => {
            if (err) {
              console.error(err);
            }
          });
    } catch (e) {
        console.log(e);
    }

} catch (e) {
    console.error(e);
}