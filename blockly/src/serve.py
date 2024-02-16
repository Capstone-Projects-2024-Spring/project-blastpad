from flask import Flask, render_template
# from flask_cors import CORS

app = Flask(
    __name__,
    static_url_path='', 
    static_folder='../dist/', 
    template_folder='../dist/'
)

# CORS(app)

@app.route('/')

def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
