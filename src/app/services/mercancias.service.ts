import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MercanciasService {

  constructor( public peticion:HttpClient) { }

  buscarMercanciaPorId(id:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/mercancias/${id}`
    return this.peticion.get(uri)
  }
}
