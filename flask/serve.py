from flask import Flask, request, render_template
import json
from flask_cors import CORS
import os
import subprocess

# GAME FOLDER LOCATION TODO!!

GAMES_FOLDER = "./saved/"
DIST_FOLDER = "../blockly/dist"

app = Flask(
    __name__,
    static_url_path='',
    static_folder=DIST_FOLDER,
    template_folder=DIST_FOLDER
)

CORS(app, resources={r"/api/*": {"origins": "*"}})

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

##########################################
##### WiFi Network Requests Handling #####
##########################################

@app.route('/get_networks', methods = ['GET'])
def get_networks():
    connected_network = None
    available_networks = set()

    try:
        iwgetid_result = subprocess.run(["iwgetid", "-r"], capture_output=True, text=True, check=True)
        connected_network = iwgetid_result.stdout.strip()
    except:
        pass

    try:
        nmcli_result = subprocess.run(["nmcli", "-f", "SSID", "device", "wifi", "list"], capture_output=True, text=True, check=True)
        networks = nmcli_result.stdout.splitlines()[1:]
        for network in networks:
            network = network.strip()
            if network and network != "--" and network != connected_network:
                available_networks.add(network)
    except:
        pass

    response = json.dumps({'connected_network': connected_network, 'available_networks': list(available_networks)})
    print(response)
    return response

##########################################
### WiFi Network Requests Handling END ###
##########################################

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True, threaded=True)
