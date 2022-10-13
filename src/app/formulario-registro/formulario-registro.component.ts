import { ZonasService } from './../services/zonas.service';
import { MercanciasService } from './../services/mercancias.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  formulario!:FormGroup;
  controlDeZona:boolean=true;
  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MercanciasService,
    public servicioZonas:ZonasService,

    ) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
    this.servicioZonas.consultarZonas()
    .subscribe(respuesta=>{
      this.datosZonas=respuesta.map((zona:any)=>{
        return {nombre:zona.nombre,id:zona.id}
      })
    })

  }

  public analizarFormulario(): void{
    let datosMercancia=this.formulario.value
    datosMercancia.iup=2
    datosMercancia.volumen=80
    datosMercancia.nombre="Mercancia de prueba"
    datosMercancia.zona={id:this.formulario.value.zona}


    console.log(datosMercancia)
    this.servicioMercancias.ingresarMercancia(datosMercancia)
    .subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    
    
    })

  }

  public inicializarFormulario ():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['',[Validators.required]],//Validators.minLength(6)
      tiporemitente:['',[Validators.required]],
      identificacionremitente:['',[Validators.required]],
      nombreremitente:['',[Validators.required]],
      departamentoremitente:['',[Validators.required]],
      municipioremitente:['',[Validators.required]],
      direccionremitente:['',[Validators.required]],
      tipodestinatario:['',[Validators.required]],
      identificaciondestinatario:['',[Validators.required]],
      nombredestinatario:['',[Validators.required]],
      departamentodestinatario:['',[Validators.required]],
      municipiodestinatario:['',[Validators.required]],
      direcciondestinatario:['',[Validators.required]],
      zona:['1',[Validators.required]]

    })

  }

  public buscarMercancia(){
    let iup=this.formulario.value.iup
    console.log(this.datosZonas)
  this.servicioMercancias.buscarMercanciaPorId(iup)
  .subscribe(respuesta=>{
   this.formulario.patchValue({
    tiporemitente:respuesta.tipoRemitente,
    identificacionremitente:respuesta.idRemitente,
    nombreremitente:respuesta.nombreRemitente,
    departamentoremitente:respuesta.Remitente,
    municipioremitente:respuesta.municipioRemitente,
    direccionremitente:respuesta.direccionRemitente,
    tipodestinatario:respuesta.tipoDestinatario,
    identificaciondestinatario:respuesta.idDestinatario,
    nombredestinatario:respuesta.nombreDestinatario,
    departamentodestinatario:respuesta.deptoDestinatario,
    municipiodestinatario:respuesta.municipioDestinatario,
    direcciondestinatario:respuesta.direccionDestinatario,

   })
   this.formulario.disable()
   this.formulario.controls['iup'].enable()
   this.controlDeZona=false
  },
    error=>{console.log(error.error)
      this.formulario.enable()
      this.formulario=this.inicializarFormulario()
      this.controlDeZona=true

    })
  }


}
