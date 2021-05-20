# Aplicação da API Google Maps

from pprint import pprint
from SETUP import API_KEY
import googlemaps

cliente_maps = googlemaps.Client(API_KEY)


def geocode(adress):
    result = cliente_maps.geocode(adress)
    return result


def reverse_geocode(lat, long):
    lista = []
    result = cliente_maps.reverse_geocode((lat, long))
    #pprint(result)
    try:
        cidade = result[0]['address_components'][2]['long_name']
        estado = result[0]['address_components'][3]['long_name']
        tipo = result[0]['types'][0]
        lista.append(cidade)
        lista.append(estado)
        lista.append(tipo)
    except:
        lista.append('Cidade Não encontrada!')
        lista.append('Estado Não encontrado!')
        lista.append('N/D!')
        
    return lista


# Desmarque para teste
#reverse_geocode(-18.45250818, -44.17324348)
