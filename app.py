from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import time
from datetime import date 
app = Flask(__name__)
 

@app.route('/', methods=['post', 'get'])
def index():
     return render_template('index.html')


if __name__ == '__main__':
   app.run(debug="true")




