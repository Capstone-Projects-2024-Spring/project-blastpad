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
var bitmaps = {};

class dummyField extends Blockly.Field {}
dummyField.fromJson = () => {};
Blockly.fieldRegistry.register('field_bitmap', dummyField);

Blockly.setLocale(en);


function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
        255
     ] : null;
  }

  
const primaryColor = [54, 61, 128, 255]
const secondaryColor = [13, 167, 63, 255]
const tertiaryColor = [255, 63, 63, 255]
const quaternaryColor = [0, 0, 0, 255]
const pentaneryColor = [118, 55, 206, 255]

const backgroundColor = [0, 0, 0, 0]


var pixel_colors = ["#FFFFFF", "#000000","#4b5461","#97a9c4","#e6e5e0","#e8cb8e","#ba783d","#823b3b","#40263c","#7d5540","#c29f2d","#e2e697","#9abd31","#3c6347","#3c3045","#355a7a","#8db3b2","#e3deac","#a17886","#6e3b6a","#3e2447"]
pixel_colors = pixel_colors.map((c) => hexToRgb(c));
pixel_colors[0] = [0, 0, 0, 0];

// const pixel_colors = {
//     0: backgroundColor,
//     1: primaryColor,
//     2: secondaryColor,
//     3: tertiaryColor,
//     4: quaternaryColor,
//     5: pentaneryColor,
// }


function bmap_representation(bmap) {
    var str = '['
    for(var x in bmap) {
        str += '['
        for(var y of bmap[x]) {
            str += `${y},`
        }
        str += '],'
    }
    str += ']'
    return str;
}

function append_bitmaps_to_code(code) {
    var bitmaps_in_py = `bitmap_data_dict = {`;


    for(var bitmapName in bitmaps) {
        var data = bitmaps[bitmapName]
        var bmap_array = `${bmap_representation(data)}`;
        bitmaps_in_py += `"${bitmapName}" : ${bmap_array},`
    }
    bitmaps_in_py += "}"
    return code.replace("### BITMAP INSERTION POINT", bitmaps_in_py)
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
    bitmaps[name.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(" ", "-")] = bitmap;
    var scaleFactor = 10;
    var scaled = [];

    var scaled = scaleBitmap(bitmap, scaleFactor);
    var data = scaled.map((arr) => {return scaled.slice();});

    var d = new ndarray(data, [size[0]*scaleFactor, size[1]*scaleFactor, 4]);
    
    for(var x in scaled) {
        for(var y in scaled[x]) {
            var color = pixel_colors[scaled[x][y]];
            console.log(color);

            for(var i=0;i<4;i++) {
                d.set(y, x, i, color[i])
            }
        }
    }  
    
    var writeLocation = `${__dirname}/compiled_games/images/${name.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(" ", "-") || "UNKNOWN"}.png`
    if(icon) {
        writeLocation = `${__dirname}/../flask/saved/icons/${name}.png` 
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
    var currDepth = 0;
    var traverse = (block) => {
        currDepth++;
        if(currDepth > 500) {
            eFound = true;
            return;
        }
        if(eFound == true) { return; }
        if(block == undefined) { return; }
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
            code = append_bitmaps_to_code(code);

            console.log(code);

            var collidefun = code.match(/# def CollideFun([\s\S]*?)# endCollideFun/g);
            if (collidefun) {
                for(var extractedCode of collidefun) {

                    var cleanedExtraction = extractedCode.replace(/# def CollideFun|# endCollideFun/g, '');
                    var leadingSpaces = cleanedExtraction.match(/^\s*/)[0].length;
                    cleanedExtraction = cleanedExtraction.split("\n").map((s) => s.substring(leadingSpaces-1)).join("\n")
                    console.log(cleanedExtraction);
                    code = cleanedExtraction + code;
                }
            }

            code = code.replace(/# def CollideFun([\s\S]*?)# endCollideFun/g, '');

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