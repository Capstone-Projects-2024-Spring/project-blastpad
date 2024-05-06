var compiler = require('../blockly/compiler_src.js')
const jsonfile = require('jsonfile')
const definitionsArray = jsonfile.readFileSync(`../blockly/src/blocks/game.json`)
const fs = require('fs');
const testWorkspace = jsonfile.readFileSync('test_workspace.json');
var badWorkspace = jsonfile.readFileSync('test_workspace.json');
badWorkspace.blocks.blocks[0].inputs = {};

var spawn = require('child_process').spawn;
require('node-fetch')

var server = null

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

beforeAll( async () => {
    server = spawn('python', ['../flask/serve.py' ], {
        detached: true
    })

    server.stdout.on('data', function(data) {
        // console.log('stdout: ' + data);
    });

    await wait(1000);
});

describe("Use Case 1: Compile & Play Game ", () => {

    describe("Game Compiles", () => {
        test('Compile a Game', () => {
            compiler.compile("test_workspace.json", "compiled_result.py", "./images");

            setTimeout(() => {
                expect(fs.existsSync('compiled_result.py')).toBe(true);
            }, 2500)
        })

    });

    describe("Compiled Game Runs", () => {
        test('Compiler Generated Valid Python', (done) => {
            exec_sync("compiled_result.py").then((res) => {
                console.log(res);
                if(res == 0) {
                    done();
                }
            })
        }, 10000)
    });
});

describe("Use Case 2: Develop a Game", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
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


    test('Access Editor', (done) => {
        fetch('http://localhost:8000/editor?load=NewGame.json&fromHomescreen=true').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })

    
    test('Compile a Game', () => {
        compiler.compile("test_workspace.json", "compiled_result.py", "./images");

        setTimeout(() => {
            expect(fs.existsSync('compiled_result.py')).toBe(true);
        }, 2500)
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
});

describe("Use Case 3: Develop a Game from Laptop", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
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
});




describe("Use Case 4: Debug a Game", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
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

    test('Fail To Save Misconstructed Game', (done) => {
        fetch('http://localhost:8000/saveWithoutRun/', {
            method: "POST",
            body: JSON.stringify(badWorkspace),
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

    test('Fail to Compile Misconstructed Game', () => {
        compiler.compile("bad_workspace.json", "bad_result.py", "./images", true);

        setTimeout(() => {
            expect(fs.existsSync('bad_result.py')).toBe(false);
        }, 2500)
    })

    test('Save Valid Game after changes', (done) => {
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
      }, 5 * 1000)

});



describe("Use Case 5: Join a Classroom", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })
});


describe("Use Case 6: Download Game from a Classroom", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
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

});


describe("Use Case 7: View Classmate's Games in Classroom and Upload One", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })

    test('Retrieve Games from a Classroom & Share', (done) => {
        fetch('http://localhost:8000/get/classroom/7/all').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })  
});

describe("Use Case 8: Download game from the Community Hub", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
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
});


describe("Use Case 9: Share game to the Community Hub", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })

    test('Retrieve Games from Community Hub & Share', (done) => {
        fetch('http://localhost:8000/get/community/all').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })  
});


describe("Use Case 10: Create a Classroom", () => {

    test('Access Home Screen', (done) => {
        fetch('http://localhost:8000/').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })

    test('Create a Classroom', (done) => {
        fetch('http://localhost:8000/get/community/all').then((res) => {
            if(res.status == 200) {
                done()
            }
        }).catch((e) => {
            done(e);
        })
    })  
});


describe("Use Case 11: View Wifi & Connect", () => {

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
    server.kill();
});