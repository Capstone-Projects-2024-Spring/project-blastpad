from flask import Flask, request, render_template, jsonify
import json
from flask_cors import CORS
import os
import subprocess

# GAME FOLDER LOCATION TODO!!

GAMES_FOLDER = "./saved/"
DIST_FOLDER = "./built_pages/"

app = Flask(
    __name__,
    static_url_path='',
    static_folder=DIST_FOLDER,
    template_folder=DIST_FOLDER
)

CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/editor')
def editor():
    return render_template('blockly.html')


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


###########################################################
##### Endpoint to start a game given a workspace name #####
###########################################################
# def compile_game(json_file_path):
#     # Path to the compiler script
#     compiler_script_path = os.path.join(".", "blockly", "compile.js")

#     # Check if the JSON file exists
#     if not os.path.exists(json_file_path):
#         print(f"Error: JSON file '{json_file_path}' not found.")
#         return
    
#     # Construct the command to run, enclosing json_file_path in quotes
#     command = f"node {compiler_script_path} \"{json_file_path}\""

#     # Call the compiler script using os.system()
#     return_code = os.system(command)
    
#     if return_code == 0:
#         # Compilation succeeded
#         print("Game compiled successfully!")
#         run_game(game)
#     else:
#         # Compilation failed
#         print("Compilation failed.")

# def on_compile_click(game_json_path):
#     # Set the path to the game JSON file
#     # json_file_path = os.path.join(".", "flask", "saved", "Multiplayer Tetris.json")
#     compile_game(game.path)
# def run_game(game):
#     game_file = "./blockly/compiled_games/" + game.name + ".py"
#     subprocess.run(['python', game_file])



##########################################
##### WiFi Network Requests Handling #####
##########################################

@app.route('/get_wifi_networks', methods = ['GET'])
def get_wifi_networks():
    # num_networks = 10
    # response_data = {
    #     'connected_network': "Applebaum's Network",
    #     'available_networks': ["xfinity-wifi", "eduroam", "tusecurewireless", "Stacy's iPhone", "VeryCoolNetwork123445"]
    # }

    # response_data = {
    #     'connected_network': None,
    #     'available_networks': []
    # }

    return jsonify(response_data), 200, {'Access-Control-Allow-Origin': '*'}

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

    response_data = {
        'connected_network': connected_network,
        'available_networks': list(available_networks)
    }

    return jsonify(response_data), 200, {'Access-Control-Allow-Origin': '*'}

@app.route('/disconnect_wifi', methods=['POST'])
def disconnect_wifi():
    # return '', 200, {'Access-Control-Allow-Origin': '*'}

    connected_network = None

    try:
        connected_network = subprocess.run(["iwgetid", "-r"], capture_output=True, text=True, check=True)
    except subprocess.CalledProcessError:
        pass

    if connected_network is None:
        return '', 200, {'Access-Control-Allow-Origin': '*'}

    try:
        subprocess.run(["nmcli", "device", "disconnect", "wlan0"], check=True)
        return '', 200, {'Access-Control-Allow-Origin': '*'}
    except subprocess.CalledProcessError:
        return jsonify({"message": "Error: Failed to disconnect from network"}), 500, {'Access-Control-Allow-Origin': '*'}

# Checks if a password is recorded for a given WiFi network
def found_password(self, ssid):
    connections_dir = '/etc/NetworkManager/system-connections'
    if not os.path.exists(connections_dir) or not os.path.isdir(connections_dir):
        messagebox.showerror("Error", "NetworkManager connections directory not found")
        return False

    connection_files = os.listdir(connections_dir)
    for filename in connection_files:
        if filename.startswith(ssid):
            with open(os.path.join(connections_dir, filename), 'r') as f:
                content = f.read()
                if 'psk=' in content:
                    return True
    return False

@app.route('/connect_to_wifi', methods=['POST'])
def connect_to_wifi():
    data = request.json
    ssid = data.get('ssid')
    password = data.get('password')

    if not ssid:
        return jsonify({'error': 'SSID not provided'}), 400, {'Access-Control-Allow-Origin': '*'}

    if password:
        try:
            subprocess.run(["nmcli", "device", "wifi", "connect", network, "password", password], check=True)
            return '', 200, {'Access-Control-Allow-Origin': '*'}
        except subprocess.CalledProcessError:
            return jsonify({'error': 'Incorrect password'}), 401, {'Access-Control-Allow-Origin': '*'}

    # No password given and found local password
    if found_password(ssid):
        try:
            subprocess.run(["nmcli", "device", "wifi", "connect", ssid], check=True)
            return '', 200, {'Access-Control-Allow-Origin': '*'}
        except subprocess.CalledProcessError:
            return jsonify({'error': 'Password not saved', 'request_password': True}), 404
    
    return jsonify({'error': 'Password required but not provided'}), 401, {'Access-Control-Allow-Origin': '*'}

##########################################
### WiFi Network Requests Handling END ###
##########################################

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True, threaded=True)
