import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario(): void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario ():FormGroup{
    return this.fabricaDiccionario.group({
      iup:['123456741',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['Natural',[Validators.required]],
      identificacionremitente:['1234565789',[Validators.required]],
      nombreremitente:['kevin valencia',[Validators.required]],
      departamentoremitente:['Antioquia',[Validators.required]],
      municipioremitente:['Medellin',[Validators.required]],
      direccionremitente:['cr25#45-65',[Validators.required]],
      tipodestinatario:['Empresa',[Validators.required]],
      identificaciondestinatario:['235689874',[Validators.required]],
      nombredestinatario:['Rodoldo ',[Validators.required]],
      departamentodestinatario:['Huila',[Validators.required]],
      municipiodestinatario:['oporapa',[Validators.required]],
      direcciondestinatario:['transversal superior calle 25#4565',[Validators.required]]

    })

  }


}
