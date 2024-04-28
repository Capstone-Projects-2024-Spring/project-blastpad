var compiler = require('../blockly/compiler_src.js')
const jsonfile = require('jsonfile')
const definitionsArray = jsonfile.readFileSync(`../blockly/src/blocks/game.json`)
const fs = require('fs');
const testWorkspace = jsonfile.readFileSync('test_workspace.json');
var spawn = require('child_process').spawn;
require('node-fetch')

child = null

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

beforeAll( async () => {
    child = spawn('python', ['../flask/serve.py' ], {
        detached: true
    })

    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    await wait(1000);
});

describe("Flask", () => {

    test('Flask Server Starts', (done) => {
        fetch('http://localhost:8000/running').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Get Games from Flask Server', (done) => {
        fetch('http://localhost:8000/games').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Download Game with Flask Server', (done) => {
        fetch('http://localhost:8000/download/community/Miniban').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Compile Game with Flask Server', (done) => {
        fetch('http://localhost:8000/compile?game=Miniban').then((res) => {
            res.json().then((body) => {
                if(body.game_compiled) {
                    done()
                } else {
                    done("Game did not compile");
                }
            })
        }).catch((e) => {
            done(e);
        })
      })
});


afterAll(() => {
    child.kill();
});
