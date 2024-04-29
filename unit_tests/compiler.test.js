var compiler = require('../blockly/compiler_src.js')
const jsonfile = require('jsonfile')
const definitionsArray = jsonfile.readFileSync(`../blockly/src/blocks/game.json`)
const fs = require('fs');
const testWorkspace = jsonfile.readFileSync('test_workspace.json');
var spawn = require('child_process').spawn;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function exec_sync(filepath) {
    return new Promise((resolve, reject) => {
        wait(2000).then(() => {
            var pychild = spawn('python', [filepath, "headless"], {detached: true});
            var exitedPrematurely = false;
            pychild.on('exit', () => {
                exitedPrematurely = true;
            })
            
            wait(5000).then(() => {
                if(exitedPrematurely) {
                    reject(-1);
                    return;
                } else {
                    pychild.kill('SIGINT');
                    resolve(0)
                    return;
                }
            })

        });
    });
}

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
        compiler.compile("test_workspace.json", "compilertest_compiled_result.py");

        setTimeout(() => {
            expect(fs.existsSync('compilertest_compiled_result.py')).toBe(true);
        }, 2500)
    })

});

describe("Compiled Game Runs", () => {
    test('Compiler Generated Valid Python', (done) => {
        exec_sync("compilertest_compiled_result.py").then((res) => {
            console.log(res);
            if(res == 0) {
                fs.unlinkSync('compilertest_compiled_result.py');
                done();
            }
        })
    }, 10000)
});