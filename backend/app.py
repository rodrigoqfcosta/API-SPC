from flask import Flask, Response
from database.db import initialize_db, db
from database.models import Teste

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb+srv://rodrigoqfcosta:1234@main.jx3h3.mongodb.net/SPC?retryWrites=true&w=majority',
    'db': 'SPC'
}

initialize_db(app)

@app.route('/')
def hello():
    return { 'hello': 'World!' }


@app.route('/users')
def get_users():
    users = Teste.objects().to_json()
    return Response(users, mimetype='applications/json', status=200)


app.run()