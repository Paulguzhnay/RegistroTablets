import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
