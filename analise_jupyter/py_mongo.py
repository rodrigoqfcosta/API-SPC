# Link para documentação do MongoDB server: https://docs.mongodb.com/manual/reference/

from pymongo import MongoClient
from csv import DictReader
from SETUP import USERNAME, PASSWORD


# Conexão com o banco de dados
cluster = MongoClient(f"mongodb+srv://{USERNAME}:{PASSWORD}@main.jx3h3.mongodb.net/teste?retryWrites=true&w=majority")
db = cluster["SPC"]
collection_test = db["teste"]

# Collection com os dados segmentados
collection = db["segmentado"]

# Inserção da base de dados de TESTE
path_CSV = 'analise_jupyter/dataset_v01.csv'
with open(path_CSV, "r") as file:
    dados = [record for record in DictReader(file)]
collection_test.insert_many(dados)  # Habilite essa linha para fazer a inserção na base
#collection_test.delete_many({})  # Habilitar essa linha para exclusão da collection_test 

print(collection_test.count_documents({}))  # Contagem dos documentos na collection_test, tem de ser igual a 10000

# Tratamentos dos dado de teste
cont = 1
results = collection_test.find({})
for result in results:
    id = result['id']
    if result['latitude'] != "" and result['longitude'] != "":
        lat = result['latitude'] if type(result['latitude']) == float else float(result['latitude'].replace(',', '.'))
        long = result['longitude'] if type(result['longitude']) == float else float(result['longitude'].replace(',', '.'))
        result['latitude'] = lat
        result['longitude'] = long
        collection_test.update_one({'id': id}, {"$set": {'latitude': lat}})
        collection_test.update_one({'id': id}, {"$set": {'longitude': long}})
        print(cont)
        cont += 1
    


# COMANDOS BÁSICOS:

# Contagem dos documentos
# result = collection_test.count_documents({})
# print(result)

# Atualizar ou criar um novo campo 
# collection_test.update_one({<nome_campo>: <valor_campo>}, {"$set": {<nome_campo>: <valor_campo>}})

# Deletar um item
# collection_test.delete_one({<nome_campo>: <valor_campo>})

# Deletar varios itens
# collection_test.delete_many({})

# Buscar por todos os itens
# results = collection_test.find({})
# for result in results:
#     print(result)

# Busca por um item
# results = collection_test.find_one({<nome_campo>: <valor_campo>})
# print(results)

# Buscar por varios itens
# results = collection_test.find({<nome_campo>: <valor_campo>})
# for result in results:
#     print(result[<nome_campo>])

# Inserção de um unico item
# collection_test.insert_one(<nome_campo>: <valor_campo>)

# Inserção de varios itens
# collection_test.insert_many([<nome_campo1>: <valor_campo1>, <nome_campo2>: <valor_campo2>])
