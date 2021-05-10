# Link para documentação do MongoDB server: https://docs.mongodb.com/manual/reference/

import pymongo
from pymongo import MongoClient
from csv import DictReader


# Conexão com o banco de dados
cluster = MongoClient("mongodb+srv://rodrigoqfcosta:1234@main.jx3h3.mongodb.net/teste?retryWrites=true&w=majority")
db = cluster["SPC"]
collection = db["teste"]

# Alimentação do bando de dados SPC
path_CSV = 'C:/Users/rodri/Repositorios_GIT/API-SPC/analise_jupyter/dataset_v01.csv'
with open(path_CSV, "r") as file:
    dados = [record for record in DictReader(file)]

#collection.insert_many(dados)  # habilite essa função para fazer a inserção na base
result = collection.count_documents({})  # Contagem dos documentos na collection, tem de ser igual a 10000
print(result)





# COMANDOS BÁSICOS:

# Contagem dos documentos
# result = collection.count_documents({})
# print(result)

# Atualizar ou criar um novo campo 
# collection.update_one({<nome_campo>: <valor_campo>}, {"$set": {<nome_campo>: <valor_campo>}})

# Deletar um item
# collection.delete_one({<nome_campo>: <valor_campo>})

# Deletar varios itens
# collection.delete_many({})

# Buscar por todos os itens
# results = collection.find({})
# for result in results:
#     print(result)

# Busca por um item
# results = collection.find_one({<nome_campo>: <valor_campo>})
# print(results)

# Buscar por varios itens
# results = collection.find({<nome_campo>: <valor_campo>})
# for result in results:
#     print(result[<nome_campo>])

# Inserção de um unico item
# collection.insert_one(<nome_campo>: <valor_campo>)

# Inserção de varios itens
# collection.insert_many([<nome_campo1>: <valor_campo1>, <nome_campo2>: <valor_campo2>])
