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

const onlyBitmaps = (process.argv.indexOf('--bitmaps') > -1);
const onlyIcon = (process.argv.indexOf('--icon') > -1);

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


var saveBitmap = (bitmap, size, name, icon=false) => {

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
    
    var writeLocation = `${__dirname}/compiled_games/images/${name.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(" ", "-") || "UNKNOWN"}.png`
    if(icon) {
        writeLocation = `${__dirname}/../flask/saved/icons/${name.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(" ", "-") || "UNKNOWN"}.png` 
    }
    var out = fs.createWriteStream(writeLocation);
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
            saveBlock(block.inputs.DO.block);
        }
    }

    for(var block of workspace.blocks.blocks) {
        saveBlock(block);
    }

    return workspaceBlocks;
}

var findPathToExit = (workspace) => {

    var topLevelBlocks = workspace.blocks.blocks;
    var eFound = false;

    var traverse = (block) => {
        if(eFound == true) { return; }

        console.log(block);
        if(block.type == "exit") {
            eFound = true;
        };

        if(block.type.split("_").includes("procedures") && block.extraState != undefined) {
            traverse(topLevelBlocks.filter(b => {
                return b.fields != undefined && b.fields.NAME != undefined && b.fields.NAME == block.extraState.name
            })[0])
        }

        if(block.inputs) {
            for(var input of Object.keys(block.inputs)) {
                traverse(block.inputs[input].block);
            }
        }

        if(block.next) {
            traverse(block.next.block)
        }
    }

    // start from metadata block...
    traverse(topLevelBlocks.find((b)=>b.type=="metadata"));

    return eFound;
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
    var output = process.argv[3] || `${__dirname}/compiled_games/`+filename.split('.')[0]+".py"

    // SAVE BITMAPS
    // PROBABLY SHOULD BE IN THEIR OWN GAME FOLDER
    var allWorkspaceBlocks = unrollWorkspaceBlocks(file)

    // THIS IS HOW WE GET BLOCK DEFINITIONS
    var definitionsArray = jsonfile.readFileSync(`${__dirname}/src/blocks/game.json`)
    var definitions = Blockly.common.createBlockDefinitionsFromJsonArray(definitionsArray.blocks);
    Blockly.common.defineBlocks(definitions);


    if(onlyIcon) {
        for(var block of allWorkspaceBlocks) {
            if(block.type == "metadata") {
                var bitmapBlock = block.inputs.game_icon.block
                var size = getBitmapSize(bitmapBlock.type, definitionsArray)
                saveBitmap(bitmapBlock.fields.field, size, block.inputs["game name"].block.fields.TEXT, true);
                break;
            }
        }
        
        setTimeout(() => [
            process.exit(0)
        ], 1200);
    } else {
        var hasExit = findPathToExit(file);
        if(!hasExit) {
            process.exit(-1);
        }

        // Save all those BitMaps.
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

        if(onlyBitmaps) {
            console.log("Saved Bitmaps.");
            return 0;
        }

        // THIS IS HOW WE GET BLOCK GENERATION
        const forBlock = require(`${__dirname}/src/generators/python.js`)
        Object.assign(pythonGenerator.forBlock, forBlock);
        
        try {
            var workspace = new Blockly.Workspace();
            Blockly.serialization.workspaces.load(file, workspace);
            var code = pythonGenerator.workspaceToCode(workspace);

            fs.writeFile(output, code, err => {
                if (err) {
                console.error(err);
                }
            });
        } catch (e) {
            console.log(e);
            process.exit(-1)
        }

    }
} catch (e) {
    console.error(e);
    process.exit(-1)
}