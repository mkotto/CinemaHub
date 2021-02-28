import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';
// import { Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng } from 'leaflet';
// import L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = {
    layers : 
      [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
          maxZoom: 18, 
          attribution: 'helloman'
        })],
    zoom: 5,
    center: latLng(46.8799966, -121.726909)
  };

}
