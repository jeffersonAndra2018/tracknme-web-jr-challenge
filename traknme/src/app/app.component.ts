
import { ServiceService } from './shared/service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traknme';
  
  public origin: any;
  public destination: any;
  posicoes = [];

  public destinos = [];

  constructor(private service: ServiceService) {

  }

  ngOnInit() {
    
  }

  getPosicoesByDate(data) {
    this.service.getByDate(data).subscribe(
      data => localStorage.setItem("posicoes", JSON.stringify(data))
    );
    
  }

  getPosicoes() {
    let posicoes = JSON.parse(localStorage.getItem("posicoes"));
    console.log(posicoes);
    for (let i = 0; i < posicoes.length; i++) {
      this.destinos.push({
        origem: { lat: posicoes[i][0].latitude, lng: posicoes[i][0].longitude },
        destino: { lat: posicoes[i][1].latitude, lng: posicoes[i][1].longitude }
      });
    }
  
    console.log(this.destinos);
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




