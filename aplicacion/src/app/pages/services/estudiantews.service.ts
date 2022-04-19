import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstudianteWS } from 'src/app/domain/estudiantews';

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
    /*?nombreE="+nombreE+"&apellidoE="+apellidoE+
    "&carreraE="+carreraE+"&asignaturaE="+asignaturaE+"&periodoE="+periodoE*/
  }

  getEstudiantes(){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/estudiantes";
    return this.http.get<any>(url);
  }

  update(estudiante: EstudianteWS){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/actualizarEstudiante";
    return this.http.post<any>(url, estudiante);
  }

}

