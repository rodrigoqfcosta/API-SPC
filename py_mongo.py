import pymongo
from pymongo import MongoClient


cluster = MongoClient("mongodb+srv://rodrigoqfcosta:1234@main.jx3h3.mongodb.net/teste?retryWrites=true&w=majority")
db = cluster["SPC"]
collection = db["teste"]

post = {"_id": 0, "name": "Teste01"}

collection.insert_one(post)
