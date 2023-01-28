# Import flask and datetime module for showing date and time
from flask import Flask
from .SpeechToText import speechtotext
import datetime
  
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data
@app.route('/')
def toTextJournal():
    return speechtotext.main()
      
# Running app
if __name__ == '__main__':
    app.run(port='5000', debug=True)