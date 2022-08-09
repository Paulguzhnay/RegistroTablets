import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logeo } from 'src/app/domain/SessionStorageModel';
import { UsuarioWS } from 'src/app/domain/usuariows';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  


  registrarUsuario(usuario:UsuarioWS):Observable<any>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/RegistroU";
    const options ={responseType: 'text' as 'json'};
    return this.http.post(url,usuario,options);
  }

  logeoUsuario(logdatos : Logeo){
    let url="http://localhost:8080/Aplicacion/rs/contactos/Login?correo="+logdatos.correo +"&password="+logdatos.password;
    return this.http.get<any>(url);


  }

}
