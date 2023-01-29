# Import flask and datetime module for showing date and time
from flask import Flask
from flask_cors import CORS
from SpeechToText import speechtotext

# Initializing flask app
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
  
  
# Route for seeing a data
@app.route('/toTextJournal', methods=['GET', 'POST'])
def toTextJournal(): 
    speechtotext.main()
    return "it has been done"
      
# Running app
if __name__ == '__main__':
    app.run(host='localhost',  port='5000', debug=True)