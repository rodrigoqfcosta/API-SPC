from .db import db

class Teste(db.Document):
    id = db.StringField(required=True, unique=True)
    data_nasc = db.DateTimeField()
    renda = db.StringField()
    latitude = db.DecimalField()
    longitude = db.DecimalField()
