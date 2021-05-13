import googlemaps
from pprint import pprint
from SETUP import API_KEY

cliente_maps = googlemaps.Client(API_KEY)
#### Funções disponiveis para uso!!!! ###

#    'base_url', 
#    'channel', 
#    'clear_experience_id', 
#    'client_id', 
#    'client_secret', 
#    'directions', 
#    'distance_matrix', 
#    'elevation', 
#    'elevation_along_path', 
#    'find_place', 
#    'geocode', 
#    'geolocate', 
#    'get_experience_id', 
#    'key', 
#    'nearest_roads', 
#    'place',
#    'places',
#    'places_autocomplete',
#    'places_autocomplete_query',
#    'places_nearby',
#    'places_photo',
#    'queries_per_second',
#    'requests_kwargs',
#    'retry_over_query_limit',
#    'retry_timeout',
#    'reverse_geocode',
#    'sent_times',
#    'session',
#    'set_experience_id',
#    'snap_to_roads',
#    'snapped_speed_limits',
#    'speed_limits',
#    'static_map',
#    'timeout',
#    'timezone'


def maps_geocode(args):
    return cliente_maps.maps_geocode(args)

