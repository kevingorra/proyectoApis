import { ZonasService } from './../services/zonas.service';
import { Component, OnInit } from '@angular/core';
import { MercanciasService } from '../services/mercancias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datosZonas:any[]=[];

  constructor(
    public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService
    ) {
    this.servicioZona.consultarZonas()
    .subscribe(respuesta=>{
      console.log(respuesta);
      this.datosZonas=respuesta
    })
  }

  retirarMercancia(idMercancia:any):void{
    
    this.servicioMercancia.retirarMercancia(idMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    })
  }

  ngOnInit(): void {
  }

}
