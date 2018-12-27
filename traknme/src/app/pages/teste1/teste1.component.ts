import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../../shared/service.service';



@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.scss']
})
export class Teste1Component implements OnInit {

  title = 'traknme';

  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = -23.985953333333335;
  lng: number = -46.3032885;


  public origin: any;
  public destination: any;

  constructor(private service: ServiceService) { }

  
  ngOnInit() {
    this.getPoints();
  }

  getDirection() {
    let points = JSON.parse(localStorage.getItem("points"));
    this.origin = { lat: points[0].latitude, lng: points[1].longitude }
    this.destination = { lat: points[1].latitude, lng: points[1].longitude }
  }

  getPoints() {
    this.service.getAll().subscribe(
      data => localStorage.setItem("points", JSON.stringify(data))
    );
  }

  public renderOptions = {
    suppressMarkers: true,
  }

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: true,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      opacity: 0.8,
    },
  }


}
