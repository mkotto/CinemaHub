import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import EventEmitter from 'events';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { coordinates } from './coordinate';
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
    this.layers = this.initialCoordinates.map(value => marker([value.latitude,value.longtitude]))
  }

  @Output()
  onSelectedLocation = new EventEmitter<coordinates>();

  @Input()
  initialCoordinates: coordinates[] = [];

  

  layers: Marker<any>[] = [];
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular movies' })
    ],
    zoom: 14,
    center: latLng(43.31886889587862 , 45.693168640136726)
  };

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longtitude = event.latlng.lng;
    console.log(latitude + ' / ' + longtitude);
    this.layers = [];
    this.layers.push(marker([latitude, longtitude]));
    this.onSelectedLocation.emit({latitude, longtitude});
  }
}
