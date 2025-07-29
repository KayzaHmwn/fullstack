from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_data():
    return jsonify({
        "pesan": "Halo dari backend Flask!",
        "status": "Berhasil",
        "server": "AWS EC2 Backend"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
