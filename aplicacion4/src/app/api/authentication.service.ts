import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { version } from 'process';
import { logging } from 'protractor';
import { Logeo } from '../domain/SessionStorageModel';
import { LogginPage } from '../pages/loggin/loggin.page';
import { UsuarioService } from '../pages/services/usuario.service';

export const AUTHT_TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user : Logeo = new Logeo();
  login: boolean;
  c: any;
  vsession: Boolean;

  TokenValue:LogginPage;


  constructor(private usuario: UsuarioService) { }

  setUsuario(login: Logeo){
    
    this.user = login;
  
  }

 /* SetSession(login: boolean){
    sessionStorage.setItem('login', ''+login);
  }

  GetSession(){
    if(sessionStorage.getItem('login') == 'true' ){
      return true;
    }else{
      return false
    }
  }*/
  SetSession(login: boolean){
    localStorage.setItem('login', ''+login);
  }

  GetSession(){
    if(localStorage.getItem('login') == 'true'){
      return true;
    }else{
      return false
    }
  }




  /*getUsuario(){
    return this.user;
  }
*/

  remove(){
    localStorage.removeItem('login');
    sessionStorage.removeItem('login');
  }

  doLogin(user: Logeo){ 
    return this.usuario.logeoUsuario(user);
  }

  
}
