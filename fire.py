from flask import Flask
from firebase import firebase

firebase = firebase.FirebaseApplication("https://rayze-108b7.firebaseio.com/",None)

dic=firebase.get('https://rayze-108b7.firebaseio.com/1W75CnTEOHm89jDZdqh-3lv7H15rZYfQDumN09B9Lzms/Job_Listings', None)
data=json.loads(dic)

return{"information"=data}