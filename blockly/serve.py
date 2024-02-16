from flask import Flask, request, render_template
import json
from flask_cors import CORS

# GAME FOLDER LOCATION TODO!!

app = Flask(
    __name__,
    static_url_path='', 
    static_folder='/dist/', 
    template_folder='/dist/'
)

CORS(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/save/<game_name>', methods = ['POST'])
def save(game_name):
    if request.method == 'POST':
        gamedata = request.json

        with open(game_name+'.json', 'w', encoding='utf-8') as f:
            json.dump(gamedata, f, ensure_ascii=False, indent=4)
            
            result = {'status': 'success'}
            return result, 200

    result = {'status': 'okay'}
    return result, 201

if __name__ == '__main__':
    app.run(debug=True)

