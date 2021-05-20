# Aplicação da API Google Maps

from pprint import pprint
from SETUP import API_KEY
import googlemaps

cliente_maps = googlemaps.Client(API_KEY)


def geocode(adress):
    result = cliente_maps.geocode(adress)
    return result


def reverse_geocode(lat, long):
    """ 
    Função que recebe a latitude e longitude do dataframe e retorna os dados da cidade, estado, tipo do logradouro 
    e determina se o endereço pertence a Pessoa fisica (CPF) ou Juridica (CNPJ).

    Args:
        lat (float): [Latitude]
        long (float): [longitude]

    Returns:
        list: [cidade, estado, logradouro, tipo_pessoa]
    """
    result = cliente_maps.reverse_geocode((lat, long))
    
    logradouro = result[0]['types'][0]
    if 'establishment' in result[0]['types']:
        tipo_pessoa = 'CNPJ'
    else:
        tipo_pessoa = 'CPF'
    
    try:
        for c in range(len(result[0]['address_components'])):
            if 'administrative_area_level_2' in result[0]['address_components'][c]['types']:
                cidade = result[0]['address_components'][c]['long_name']
            elif 'administrative_area_level_1' in result[0]['address_components'][c]['types']:
                estado = result[0]['address_components'][c]['long_name']
    except:
        cidade = 'NaN'
        estado = 'NaN'    

    return [cidade, estado, logradouro, tipo_pessoa]


# Desmarque para teste de API
reverse_geocode(-23.2469265,-45.8384675)
