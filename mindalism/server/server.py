# Import flask and datetime module for showing date and time
import json
from flask import Flask
from flask import request
from flask_cors import CORS
from SpeechToText import speechtotext

  
# Initializing flask app
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
  
# Route for seeing a data
@app.route('/toTextJournal', methods=['GET', 'POST'])
def toTextJournal():
    speechtotext.main()
    print('The SPEECH TO TEXT TEXT teXT teStekLJ:SLKFJ:LE')
    data = "true"
    return data

      
# Running app
if __name__ == '__main__':
    app.run(host='localhost', port='5000', debug=True)