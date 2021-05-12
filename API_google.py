import googlemaps
from pprint import pprint

API_KEY = 'AIzaSyAEhFxkxhkRXWmDYkU-bmGCTdfkdyUMjoU'

cliente_maps = googlemaps.Client(API_KEY)

adress = 'Rua Ipatinga 55, São José dos Campos, SP'
resp = cliente_maps.geocode(adress)
pprint(resp)