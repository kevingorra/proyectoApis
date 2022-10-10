import { Component, OnInit } from '@angular/core';
import{Color,ScaleType,LegendPosition}from'@swimlane/ngx-charts'

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent  {
  single=[
    {
      "name": "Zona Azul",
      "value": 8940000
    },
    {
      "name": "Zona Verde",
      "value": 5000000
    },
    {
      "name": "Zona Amarilla",
      "value": 7200000
    },
      {
      "name": "Zona Roja",
      "value": 6200000
    }
  ];
  view:[number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition:LegendPosition=LegendPosition.Below ;

  colorScheme :Color= {
    name:'colorestcc',
    selectable:true,
    group:ScaleType.Ordinal,


    domain: ['#005DFF', '#75F38A', '#FFF000', '#FF1700']
  };

  constructor() {
   // Object.assign(this, { single });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

