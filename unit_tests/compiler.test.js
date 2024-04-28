var compiler = require('../blockly/compiler_src.js')
const jsonfile = require('jsonfile')
const definitionsArray = jsonfile.readFileSync(`../blockly/src/blocks/game.json`)
const fs = require('fs');
const testWorkspace = jsonfile.readFileSync('test_workspace.json');


describe("Compiler", () => {

    test('Hex to RGB conversion', () => {
        expect(compiler.hexToRgb("#000000")).toStrictEqual([0, 0, 0, 255])
    })
    
    test('Scale Bitmap', () => {
        expect(compiler.scaleBitmap([[0, 0], [0, 0]], 2)).toStrictEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
    })
        
    test('Bitmap String Representation', () => {
        expect(compiler.bmap_representation([[0, 0], [0, 0]])).toStrictEqual("[[0,0,],[0,0,],]")
    })

    test('Unroll Workspace Blocks', () => {
        expect(compiler.unrollWorkspaceBlocks(testWorkspace).length).toStrictEqual(489)
    })

    test('Find path to Exit', () => {
        expect(compiler.findPathToExit(testWorkspace)).toStrictEqual(true)
    })

    test('Get Variable Name', () => {
        expect(compiler.getVariableName("Y,$$6Sx,)A;Xt*HW$F1/", testWorkspace)).toStrictEqual("youwin")
    })

    test('Get Bitmap Size', () => {
        expect(compiler.getBitmapSize("large_bitmap", definitionsArray)).toStrictEqual([16, 16])
    })

    test('Compile a Game', () => {
        compiler.compile("test_workspace.json", "compiled_result.py");

        setTimeout(() => {
            expect(fs.existsSync('compiled_result.py')).toBe(true);
            fs.unlinkSync('compiled_result.py');
        }, 2500)
    })
});
