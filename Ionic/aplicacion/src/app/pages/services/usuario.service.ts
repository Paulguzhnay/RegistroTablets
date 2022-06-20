import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logeo } from 'src/app/domain/login';
import { UsuarioWS } from 'src/app/domain/usuariows';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  


  registrarUsuario(usuario:UsuarioWS):Observable<any>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/RegistroU";
    console.log(url)
    console.log(usuario)
    return this.http.post<any>(url,usuario);
  }

  logeoUsuario(logdatos : Logeo){
    let url="http://localhost:8080/Aplicacion/rs/contactos/Login?correo="+logdatos.correo +"&password="+logdatos.password;
    console.log(url)
    return this.http.get<any>(url);

  }

/*  logeoUsuario(correo :String, password:String):Observable<any[]>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/Login?correo="+correo +"}&password={"+password;
    console.log(url)
    return this.http.get<any>(url);

  }
*/


 /* logeoUsuario(logdatos : Logeo):Observable<any[]>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/Login?correo={"+logdatos.correo +"}&password={"+logdatos.password+"}";
    console.log(url)
    
    return this.http.post<any>(url,logdatos);

  }
*/
}
