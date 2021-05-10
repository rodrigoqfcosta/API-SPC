import googlemaps

API_KEY = 'AIzaSyAEhFxkxhkRXWmDYkU-bmGCTdfkdyUMjoU'

cliente_maps = googlemaps.Client(API_KEY)


# >>> dir(cliente_maps) Funções disponivel:
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', 
# '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', 
# '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', 
# '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 
# '_generate_auth_url', '_get', '_get_body', '_request', 'base_url', 'channel', 'clear_experience_id', 
# 'client_id', 'client_secret', 'directions', 'distance_matrix', 'elevation', 'elevation_along_path', 
# 'find_place', 'geocode', 'geolocate', 'get_experience_id', 'key', 'nearest_roads', 'place', 'places', 
# 'places_autocomplete', 'places_autocomplete_query', 'places_nearby', 'places_photo', 'queries_per_second', 
# 'requests_kwargs', 'retry_over_query_limit', 'retry_timeout', 'reverse_geocode', 'sent_times', 'session', 
# 'set_experience_id', 'snap_to_roads', 'snapped_speed_limits', 'speed_limits', 'static_map', 'timeout', 'timezone']