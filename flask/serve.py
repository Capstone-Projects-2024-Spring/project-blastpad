from flask import Flask, request, render_template, jsonify, send_from_directory, send_file
import json
from flask_cors import CORS
import os
import subprocess
import datetime
from supabase import create_client, Client

url: str = "https://klexzeldnyavipasmvvl.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZXh6ZWxkbnlhdmlwYXNtdnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMjg1MjMsImV4cCI6MjAyODcwNDUyM30.A2uS9JLBYLEwO85Ol-F4k760zVTX_dGbTaG4Hq2BuVA"
supabase: Client = create_client(url, key)

# GAME FOLDER LOCATION TODO!!

__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
GAMES_FOLDER = os.path.join(__location__, "saved")
DIST_FOLDER = os.path.join(__location__, "built_pages")
BLOCKLY = os.path.join(__location__, "../blockly")
COMPILER_SCRIPT_PATH = os.path.join(BLOCKLY, "compile.js")

def unrollWorkspaceBlocks(workspace):
    workspaceBlocks = []

    def saveBlock(block):
        workspaceBlocks.append(block)
        if "inputs" in block:
            for input in block["inputs"]:
                saveBlock(block["inputs"][input]["block"])
        
        if "next" in block:
            saveBlock(block["next"]["block"])
        
        if "inputs" in block and "DO" in block["inputs"]:
            saveBlock(block["inputs"]['DO']["block"])
    

    for block in workspace['blocks']['blocks']:
        saveBlock(block)
    
    return workspaceBlocks



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


@app.route('/icons/<path>')
def send_report(path):
    return send_file(GAMES_FOLDER+"/icons/"+path)

@app.route('/save/', methods = ['POST'])
def save():
    if request.method == 'POST':
        gamedata = request.json

        # actually unnecessary to find gamename thru metadata, but keeping for legacy
        gamename = ""
        metadataFound = False
        loopFound = False
        closeFound = False
        iconFound = False
        validMetadata = False

        # Iterate through workspace to find metadata

        blocks = unrollWorkspaceBlocks(gamedata)
        
        for x in blocks:
            if(x["type"]=="exit"):
                print(x)
                closeFound = True
            if(x["type"]=="game_loop"):
                loopFound = True   

        for x in gamedata["blocks"]["blocks"]:
            if(x["type"]=="metadata"):
                iconFound = "game_icon" in x["inputs"]
                validMetadata = "game name" in x["inputs"] and "author name" in x["inputs"] and "description" in x["inputs"]

                if(validMetadata == False):
                    break

                gamename = x["inputs"]["game name"]["block"]["fields"]["TEXT"]
                metadataFound = True

        
        if validMetadata == False:
            return {"error": "Invalid Metadata.", "fix": "Make sure you have a name, author, and description in your metadata block."}, 400
        if metadataFound == False:
            return {"error": "Metadata Block Missing", "fix": "Make sure your project has a metadata block. You can find it under the Game Logic category."}, 400
        if iconFound == False:
            return {"error": "Game Icon Missing", "fix": "Make sure your project has a game icon attached to its metadata block. You can find bitmaps under the Actors category."}, 400
        if loopFound == False:
            return {"error": "Game Loop Block Missing", "fix": "Make sure your project has a game loop block. You can find it under the Game Logic category."}, 400
        if closeFound == False:
            return {"error": "Exit Game Block Missing", "fix": "Make sure your project has a reachable exit block. You can find it under the Game Logic category."}, 400

            
        with open(os.path.join(GAMES_FOLDER, gamename+".json"), 'w', encoding='utf-8') as f:
            json.dump(gamedata, f, ensure_ascii=False, indent=4)

        save_icon_result = save_game_icon(gamename)
        if save_icon_result.returncode != 0:
            return {'error': 'Could not save game icon.'}, 400

        compile_result = compile_game(gamename)
        if compile_result.returncode != 0:
            return {'error': 'Game does not compile.', "fix": "Make sure you have a reachable exit block.", "err": compile_result.stderr}, 400
            
        game_test_result = test_run_game(gamename)
        print(game_test_result)
        if game_test_result['game_ran'] == True:
            return {'success': 'Game runs!'}, 200
        else:
            return {'error': 'Game does not run.', "fix": "Check your project for blocks without followup actions- for example, 'if' or 'Key Down' blocks without more blocks inside them."}, 400
        


@app.route('/games/', methods = ['GET'])
def allgames():
    included_extensions = ['js']
    files = [ fi for fi in os.listdir(GAMES_FOLDER) if fi.endswith(".json") ]

    file_info = []
    for fi in files:
        file_path = os.path.join(GAMES_FOLDER, fi)
        with open(file_path, 'r') as f:
            game_data = json.load(f)
            metadata = next((block for block in game_data["blocks"]["blocks"] if block["type"] == "metadata"), None)
            if metadata:
                file_info.append({
                    'name': fi[:-5],
                    'workspace_filename': fi,
                    'raw_last_updated': os.path.getmtime(file_path),
                    'last_updated': datetime.datetime.fromtimestamp(os.path.getmtime(file_path)).strftime('%m/%d/%y'),
                    'game_icon_path': "/icons/"+fi[:-5]+".png",
                    'metadata': [{key: obj["block"]["fields"]["TEXT"]} for key, obj in metadata["inputs"].items() if "TEXT" in obj["block"]["fields"]]
                })

    file_info.sort(key=lambda x: x['raw_last_updated'], reverse=True)

    return {"games": file_info}, 200

@app.route('/games/<game_name>', methods = ['GET'])
def onegame(game_name):
    f = open(GAMES_FOLDER+'/'+game_name)
    data = json.load(f)
    return data, 200


###########################################################
##### Endpoint to start a game given a workspace name #####
###########################################################

def compile_game(game_name):
    json_file_path = os.path.join(GAMES_FOLDER, game_name+".json")

    if not os.path.exists(json_file_path):
        print(f"Error: JSON file '{json_file_path}' not found.")
        return False
    
    result = subprocess.run(
        ['node', COMPILER_SCRIPT_PATH, json_file_path],
        capture_output = True,
        text = True
    )

    return result

def save_game_icon(game_name):
    json_file_path = os.path.join(GAMES_FOLDER, game_name+".json")

    if not os.path.exists(json_file_path):
        print(f"Error: JSON file '{json_file_path}' not found.")
        return False
    
    result = subprocess.run(
        ['node', COMPILER_SCRIPT_PATH, json_file_path, "--icon"],
        capture_output = True,
        text = True
    )

    print(result.stdout)
    print(result.stderr)

    return result



@app.route('/run', methods = ['GET'])
def compile_and_run():
    game_name = request.args.get('game')
    
    response_data = {}

    result = compile_game(game_name)
    if result.returncode == 0:
        response_data = run_game(game_name)
    else:
        response_data = {
            'game_compiled': False,
            'stderr': result.stderr,
            'stdout': result.stdout
        }

    return jsonify(response_data), 200


def run_game(game_name):
    game_file = os.path.join(BLOCKLY, "compiled_games", game_name+".py")
    game_run_result = subprocess.run(['python', game_file, "not_headless"],         
        capture_output = True,
        text = True)

    return {'game_ran': game_run_result.returncode == 0, 'stdout': game_run_result.stdout, 'stderr': game_run_result.stderr }


@app.route('/test', methods = ['GET'])
def test_game():
    game_name = request.args.get('game')
    response_data = {}
    result = compile_game(game_name)
    if result.returncode == 0:
        response_data = test_run_game(game_name)
    else:
        response_data = {
            'game_compiled': False,
            'stderr': result.stderr,
            'stdout': result.stdout
        }

    return jsonify(response_data), 200

def test_run_game(game_name):
    game_file = os.path.join(BLOCKLY, "compiled_games", game_name+".py")
    game_run_result = subprocess.run(['python', game_file, "headless", "&"],         
        capture_output = True,
        text = True,
        timeout=5)

    return {'game_ran': game_run_result.returncode == 0, 'stdout': game_run_result.stdout, 'stderr': game_run_result.stderr }



##########################################
##### WiFi Network Requests Handling #####
##########################################

@app.route('/get_wifi_networks', methods = ['GET'])
def get_wifi_networks():
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

    return jsonify(response_data), 200

@app.route('/disconnect_wifi', methods=['POST'])
def disconnect_wifi():
    connected_network = None

    try:
        connected_network = subprocess.run(["iwgetid", "-r"], capture_output=True, text=True, check=True)
    except subprocess.CalledProcessError:
        pass

    if connected_network is None:
        return '', 200

    try:
        subprocess.run(["nmcli", "device", "disconnect", "wlan0"], check=True)
        return '', 200
    except subprocess.CalledProcessError:
        return jsonify({"message": "Error: Failed to disconnect from network"}), 500

# Checks if a password is recorded for a given WiFi network
def found_password(ssid):
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
        return jsonify({'error': 'SSID not provided'}), 400

    if password:
        try:
            subprocess.run(["nmcli", "device", "wifi", "connect", ssid, "password", password], check=True)
            return '', 200
        except subprocess.CalledProcessError:
            return jsonify({'error': 'Incorrect password'}), 401

    # No password given and found local password
    if found_password(ssid):
        try:
            subprocess.run(["nmcli", "device", "wifi", "connect", ssid], check=True)
            return '', 200
        except subprocess.CalledProcessError:
            return jsonify({'error': 'Password not saved', 'request_password': True}), 404
    
    return jsonify({'error': 'Password required but not provided'}), 401

##########################################
### WiFi Network Requests Handling END ###
##########################################

###############################
##### SUPABASE !!!!!!!!!! #####
###############################

@app.route('/get/community/', methods = ['GET'])
def communityhubgames():
    games = supabase.table('game_metadata').select("*").execute().data
    print(games)

    for game in games:
        game['game_icon_path'] = "https://klexzeldnyavipasmvvl.supabase.co/storage/v1/object/public/images/"+game['id']+'.png'

    return {"games": games}, 200

@app.route('/share/community/<game_name>', methods = ['GET'])
def sharetocommunityhub(game_name):
    fpath = GAMES_FOLDER+"/"+game_name+".json"
    iconpath = GAMES_FOLDER+"/icons/"+game_name+".png"

    print(fpath)
    print(iconpath)

    fileMetadata = None;

    with open(fpath, 'r') as f:
        game_data = json.load(f)
        metadata = next((block for block in game_data["blocks"]["blocks"] if block["type"] == "metadata"), None)
        if metadata:
            fileMetadata = {
                'id': game_name,
                'author': metadata["inputs"]["author name"]["block"]["fields"]["TEXT"],
                'description': metadata["inputs"]["description"]["block"]["fields"]["TEXT"]
            }

    data, count = supabase.table('game_metadata').upsert(fileMetadata).execute()

    try:
        with open(fpath, 'rb') as f:
            supabase.storage.from_("games").upload(file=f,path=game_name+".json", file_options={"content-type": "application/json", "upsert":"true"})

        with open(iconpath, 'rb') as f:
            supabase.storage.from_("images").upload(file=f,path=game_name+".png", file_options={"content-type": "image/x-png", "upsert":"true"})

    except:
        return {"error":"upload failed"}, 400

    return {"success":"upload successful!"}, 200


@app.route('/download/community/<game_name>', methods = ['GET'])
def downloadfromcommunityhub(game_name):
    fpath = GAMES_FOLDER+"/"+game_name+".json"
    iconpath = GAMES_FOLDER+"/icons/"+game_name+".png"

    try:
        with open(fpath, 'wb+') as f:
            res = supabase.storage.from_('games').download(game_name+".json")
            f.write(res)

        with open(iconpath, 'wb+') as f:
            res = supabase.storage.from_('images').download(game_name+".png")
            f.write(res)
        
    except:
        return {"error":"download failed"}, 400

    return {"success":"download successful!"}, 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True, threaded=True)
