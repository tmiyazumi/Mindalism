from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from server.mindalismApi import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='client')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(api.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/flask/hello')