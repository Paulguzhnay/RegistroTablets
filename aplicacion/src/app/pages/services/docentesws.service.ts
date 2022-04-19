import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocenteWS } from 'src/app/domain/docentews';

@Injectable({
  providedIn: 'root'
})
export class DocenteswsService {

  constructor(private http:HttpClient) { }
  registrarDocente(docente:DocenteWS):Observable<any>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/RegistroD";
    console.log(url)
    console.log(docente)
    return this.http.post<any>(url,docente);
  }

  getDocentes(){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/docentes";
    return this.http.get<any>(url);
  }

  update(docente: DocenteWS){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/actualizarDocente";
    return this.http.post<any>(url,docente);
  }

}
