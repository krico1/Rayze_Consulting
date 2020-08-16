from flask import Flask
from firebase import firebase

app=Flask(__name__)

firebase = firebase.FirebaseApplication("https://rayze-108b7.firebaseio.com/",None)

@app.route('/info')
def info(): 
    dic=firebase.get('https://rayze-108b7.firebaseio.com/1W75CnTEOHm89jDZdqh-3lv7H15rZYfQDumN09B9Lzms/Job Listings', None)
    return {dic}