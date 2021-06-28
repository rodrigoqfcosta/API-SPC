import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { STYLE_MAP } from 'src/app/utils/consts';
import { GetData } from '../../services/CpfsAPI';
import MarkerClusterer from '@googlemaps/markerclustererplus';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @ViewChild('marker') el;

  loader;
  markers   : google.maps.Marker[] = [];
  mapLoaded : boolean;
  map       : google.maps.Map;
  heatmap   : google.maps.visualization.HeatmapLayer
  center    : google.maps.LatLngLiteral;
  markerCluster: MarkerClusterer;
  endpoint = "/cpf"

  source: google.maps.LatLngLiteral;

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: true,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 4
  }

  ngOnInit(): void {
    this.source = {
      lat: -23.25131,
      lng: -45.8876838
    }

    this.map = new google.maps.Map(document.getElementById('map'), {
      ...this.options,
      center: this.source
    });

    this.map.addListener('tilesloaded', () => {
      this.mapLoaded = true;
    });

    this.heatmap = new google.maps.visualization.HeatmapLayer();
    this.markerCluster = new MarkerClusterer(this.map);
  }

  ngAfterViewInit() {
    this.habilitarMarkers()
  }


  clearMarkers() {
    this.markers.forEach((element) => {
      element.setMap(null)
    })

    this.markers = []
    this.heatmap.setMap(null)
    this.markerCluster.setMap(null)
    this.map = new google.maps.Map(document.getElementById('map'), {
      ...this.options,
      center: this.source
    });
    
  }

  habilitarMarkers() {
    this.clearMarkers();
    GetData(this.endpoint).then((response) => {
      response.data.data.forEach(element => {
          if(element.LATITUDE != "" && element.LONGITUDE != "") {
         
            let marker = new google.maps.Marker({
              position: {
                lat: Number(element.LATITUDE),
                lng: Number(element.LONGITUDE)
              },
              title: `${element.CONSUMO} | ${element.RENDA}`,
              clickable: true,
              visible: true,
              map: this.map,
            });

            marker.addListener("click", () => {
              let infoWindow = new google.maps.InfoWindow({
                content:`${element.CONSUMO}<br />${element.RENDA}`
              });

              infoWindow.open(this.map, marker)
              
              marker.setClickable(true)
              
            });

            this.markers.push(marker)
          }
      });
    })
  }

  async habilitarHeatMap()  {
    var _positions = [];
    this.clearMarkers();
    await GetData(this.endpoint).then(async (response) => {
        await response.data.data.forEach(element => {
            if(element.LATITUDE != "" && element.LONGITUDE != "") {
            var point = new google.maps.LatLng(Number(element.LATITUDE),Number(element.LONGITUDE))
            _positions.push(point)
            }
        });
      })
    this.heatmap.setData(_positions)
    this.heatmap.setMap(this.map)
  }


  async habilitarCluster() {
    var _positions: google.maps.Marker[] = [];
    this.clearMarkers();
    await GetData(this.endpoint).then(async(response) => {
        console.log(response)
        await response.data.data.forEach(element => {
            if(element.LATITUDE != "" && element.LONGITUDE != "") {
              let marker = new google.maps.Marker({
              position: {
                lat: Number(element.LATITUDE),
                lng: Number(element.LONGITUDE)
              },
            }
            
            );

            marker.addListener("click", () => {
              let infoWindow = new google.maps.InfoWindow({
                content:`${element.CONSUMO} <br />${element.RENDA}`
              });

              infoWindow.open(this.map, marker)
              
              marker.setClickable(true)
              
            });

            _positions.push(marker)
          } 
        });
      })
      
    this.markerCluster = new MarkerClusterer(this.map, _positions,  {
      imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
  }

  changeEndpoint(end) {
    this.endpoint = end
    this.habilitarMarkers();
    this.el.nativeElement.checked = true
    debugger
  }
  

}
