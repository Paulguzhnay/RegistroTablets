import { Injectable } from '@angular/core';
import { MateriaWS } from 'src/app/domain/materiaws';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MateriawsService {

  constructor(private http: HttpClient) { }
  registrarMateria(materia:MateriaWS):Observable<any>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/RegistrarM";
    console.log(url)
    console.log(materia)
    return this.http.post<any>(url,materia);
  }

  getMateria(){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/ListarMateria";
    return this.http.get<any>(url);
  }
  
  getDocentes(){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/docentes";
    return this.http.get<any>(url);
  }

  update(materia: MateriaWS){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/actMat";
    console.log(materia)
    return this.http.post<any>(url, materia);
  }
  borrarMateria(user: number){
    let uri="http://localhost:8080/Aplicacion/rs/contactos/eliminarMateria?id="
   let url=uri+user
   console.log(url)
   return this.http.delete(url);
  }
  buscarMateria(id:number):Observable<MateriaWS>{
    let uri="http://localhost:8080/Aplicacion/rs/contactos/ListarMaterias?id="
    let url=uri+id
    console.log(url)
    console.log("AQUI"+this.http.get<MateriaWS>(url));
    console.log(MateriaWS)
    return this.http.get<MateriaWS>(url);
 }

 buscarMateriaDocente(id:number) :Observable<MateriaWS>{
    let uri="http://localhost:8080/Aplicacion/rs/contactos/buscarMateriaDocente?id="
    let url=uri+id
    return this.http.get<MateriaWS>(url);
 }

}
