from flask import Flask, request, render_template, jsonify
import json
from flask_cors import CORS
import os
import datetime

# GAME FOLDER LOCATION TODO!!

GAMES_FOLDER = "./saved/"
DIST_FOLDER = "../blockly/dist"

#DUMMY DATA FOR LOGIN
users = {
    'username1': 'password1',
    'username2': 'password2',
    'username3': 'password3'
}


def log_login(username, success):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    status = "Success" if success else "Fail"
    log_entry = f"{timestamp} - Username: {username}, Status: {status}\n"
    with open("login_log.txt", "a") as log_file:
        log_file.write(log_entry)

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
        # parse request to find metadata 
        print(request.json)
        gamename = ""

        for x in request.json["blocks"]["blocks"]:
            if(x["type"]=="metadata"):
                gamename = x["inputs"]["game name"]["block"]["fields"]["TEXT"]
                break

        with open(GAMES_FOLDER+gamename+'.json', 'w', encoding='utf-8') as f:
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

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users and users[username] == password:
        log_login(username, True)  # Log successful login
        return jsonify({'message': 'Login successful!'}), 200
    else:
        log_login(username, False)  # Log failed login
        return jsonify({'message': 'Invalid username or password'}), 401



if __name__ == '__main__':
    app.run(debug=True)

