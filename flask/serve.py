from flask import Flask, request, render_template
import json
from flask_cors import CORS
import os

# GAME FOLDER LOCATION TODO!!

GAMES_FOLDER = "./saved/"
DIST_FOLDER = "../blockly/dist"

app = Flask(
    __name__,
    static_url_path='', 
    static_folder=DIST_FOLDER,
    template_folder=DIST_FOLDER
)

CORS(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/save/<game_name>', methods = ['POST'])
def save(game_name):
    if request.method == 'POST':
        gamedata = request.json

        with open(GAMES_FOLDER+game_name+'.json', 'w', encoding='utf-8') as f:
            json.dump(gamedata, f, ensure_ascii=False, indent=4)
            
            result = {'status': 'success'}
            return result, 200

    result = {'status': 'error...'}
    return result, 300



@app.route('/games/', methods = ['GET'])
def allgames():
    dir_list = os.listdir(GAMES_FOLDER)
    return {"games": dir_list}, 200

@app.route('/games/<game_name>', methods = ['GET'])
def onegame(game_name):
    f = open(GAMES_FOLDER+'/'+game_name)
    data = json.load(f)
    return data, 200

if __name__ == '__main__':
    app.run(debug=True)

