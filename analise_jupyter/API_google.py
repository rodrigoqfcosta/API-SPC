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
        address = result[0]['formatted_address'].split(',')
        cidade_estado = address[2].split('-')
        tipo = result[0]['types'][0]
        lista.append(cidade_estado[0].strip())
        lista.append(cidade_estado[1].strip())
        lista.append(tipo)
    except:
        lista.append('Cidade Não encontrada!')
        lista.append('Estado Não encontrado!')
        lista.append('N/D!')
        
    return lista


# Desmarque para teste de API
reverse_geocode(-4.84758, -37.78439)
