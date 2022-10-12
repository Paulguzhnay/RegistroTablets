import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstudianteWS } from 'src/app/domain/estudiantews';
import { RTablet } from 'src/app/domain/RegTablet';

@Injectable({
  providedIn: 'root'
})
export class EstudiantewsService {


  constructor(private http: HttpClient) { }

  registrarEstudiante(estudiante:EstudianteWS):Observable<any>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/RegistrarE";
    console.log(url)
    console.log(estudiante)
    return this.http.post<any>(url,estudiante);
  }

  getEstudiantes(){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/estudiantes";
    return this.http.get<any>(url);
  }

  update(estudiante: EstudianteWS){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/actualizarEstudiante";
    return this.http.post<any>(url, estudiante);
  }

  eliminart(id: Number){  
    let uri="http://localhost:8080/Aplicacion/rs/contactos/eliminarEstudiante?id="
    let url=uri+id
    console.log(url)
    return this.http.delete(url);
  }
//--------------------------
  buscarEstudiante(id: Number):Observable<EstudianteWS>{

    let uri="http://localhost:8080/Aplicacion/rs/contactos/buscarEstudiantes?id="
    let url=uri+id
    console.log(url)
    return this.http.get<EstudianteWS>(url);
 }
 updateR(tabletR: RTablet){
  let url = "http://localhost:8080/Aplicacion/rs/contactos/actualizarPrestamo";
  console.log(tabletR)
  console.log("HOLA 1")
  return this.http.post<any>(url, tabletR);
  console.log("PASO")
}
//
estudiantesRegistroTablet (id: Number):Observable<RTablet>{
  let uri="http://localhost:8080/Aplicacion/rs/contactos/estudiantesPrestamos?id="
  let url=uri+id
  console.log(url)
  return this.http.get<RTablet>(url);
}

verificarEstRegistrado (nombre: String, apellido: String, carrera:String):Observable<any>{
  let uri="http://localhost:8080/Aplicacion/rs/contactos/verificarEstRegistrado?nombre="+nombre+"" +"&apellido="+apellido+"&carrera="+carrera
  let url=uri

  console.log("URL",url)
  return this.http.get<any>(url);
}

verificarTabRegistrado (nombre: String):Observable<any>{
  let uri="http://localhost:8080/Aplicacion/rs/contactos/verificarTabRegistrado?nombre="+nombre
  let url=uri
  console.log("URL",url)
  return this.http.get<any>(url);
}
}

