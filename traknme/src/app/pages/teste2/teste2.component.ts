import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../../shared/service.service';


@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.scss']
})
export class Teste2Component  {

  title = 'traknme';
  
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = -23.985953333333335;
  lng: number = -46.3032885;

  public origin : any;
  public destination: any;
  
  posicoes = [];

  public destinos = [];

  constructor(private service: ServiceService) {

  }

  getPosicoesByDate(data) {
    this.service.getByDate(data).subscribe(
      data => localStorage.setItem("posicoes", JSON.stringify(data))
    );
    
  }

  getPosicoes() {
    let points = JSON.parse(localStorage.getItem("posicoes"));
    this.origin = { lat: points[0].latitude, lng: points[0].longitude }
    this.destination = { lat: points[0].latitude, lng: points[0].longitude }
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

