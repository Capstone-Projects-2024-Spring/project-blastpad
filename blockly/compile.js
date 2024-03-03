const fs = require('fs');
const jsonfile = require('jsonfile')
const Blockly = require('blockly/core');
const libraryBlocks = require('blockly/blocks'); // not entirely sure if this is necessary
const {pythonGenerator} = require('blockly/python');
const en = require('blockly/msg/en');
Blockly.setLocale(en);

try {
    const file = jsonfile.readFileSync(process.argv[2]);
    var filename = process.argv[2].replace(/^.*[\\/]/, '')
    console.log(process.argv[3]);
    var output = process.argv[3] || filename.split('.')[0]+".py"

    // THIS IS HOW WE GET BLOCK DEFINITIONS
    var definitionsArray = jsonfile.readFileSync('./src/blocks/game.json')
    var definitions = Blockly.common.createBlockDefinitionsFromJsonArray(definitionsArray.blocks);
    Blockly.common.defineBlocks(definitions);

    // THIS IS HOW WE GET BLOCK GENERATION

    const forBlock = require('./src/generators/python.js')
    Object.assign(pythonGenerator.forBlock, forBlock);

    try {
        var workspace = new Blockly.Workspace();
        Blockly.serialization.workspaces.load(file, workspace);
        const code = pythonGenerator.workspaceToCode(workspace);

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