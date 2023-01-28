# Import flask and datetime module for showing date and time
from flask import Flask
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
# from SpeechToText import speechtotext

cred = credentials.Certificate("firebase_admin_cred.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
# @app.route('/toTextJournal', methods=['GET'])
# def toTextJournal():
#     return speechtotext.main()
      
# Running app
if __name__ == '__main__':
    app.run(port='5000', debug=True)