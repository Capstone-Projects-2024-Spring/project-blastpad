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
        // console.log('stdout: ' + data);
    });

    await wait(1000);
});

describe("Flask", () => {

    test('Server Starts', (done) => {
        fetch('http://localhost:8000/running').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      
      test('Retrieve Saved Games', (done) => {
        fetch('http://localhost:8000/games').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })


      test('Retrieve Games from Community Hub', (done) => {
        fetch('http://localhost:8000/get/community/all').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })


      test('Retrieve Games from a Classroom', (done) => {
        fetch('http://localhost:8000/get/classroom/7/all').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Access Editor', (done) => {
        fetch('http://localhost:8000/editor?load=NewGame.json&fromHomescreen=true').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Save Game', (done) => {
        fetch('http://localhost:8000/saveWithoutRun/', {
            method: "POST",
            body: JSON.stringify(testWorkspace),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      }, 10 * 1000)


      test('Fail To Save Misconstructed Game', (done) => {
        testWorkspace.blocks.blocks[0].inputs = {};

        fetch('http://localhost:8000/saveWithoutRun/', {
            method: "POST",
            body: JSON.stringify(testWorkspace),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if(res.status == 400) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      }, 10 * 1000)


      test('Download Game', (done) => {
        fetch('http://localhost:8000/download/community/Miniban').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })

      test('Run Compiler on Saved Game', (done) => {
        fetch('http://localhost:8000/compile?game=Miniban').then((res) => {
            res.json().then((body) => {
                if(body.game_compiled) {
                    done()
                }
            })
        }).catch((e) => {
            done(e);
        })
      })

      test('Get Local Wifi Networks', (done) => {
        fetch('http://localhost:8000/get_wifi_networks').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
      })
});


afterAll(() => {
    child.kill();
});
