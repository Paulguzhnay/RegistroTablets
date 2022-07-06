import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tablet } from 'src/app/domain/tablets';


@Injectable({
  providedIn: 'root'
})
export class ListTabletwsService {

  constructor(private http: HttpClient) { }

  getTablet(){

    let uri="http://localhost:8080/Aplicacion/rs/contactos/Tablets"
    let url=uri
    console.log(url)
    return this.http.get<any>(url);

  }
  registrarTablet(tablet:Tablet):Observable<any>{
    let url="http://localhost:8080/Aplicacion/rs/contactos/RegistroTablet";
    console.log(url)
    console.log(tablet)
    return this.http.post<any>(url,tablet);
  }

 

  update(tablet:Tablet){
    let url = "http://localhost:8080/Aplicacion/rs/contactos/actualizarTablet";
    return this.http.post<any>(url,tablet);
  }

  buscarTablet(user: number):Observable<Tablet>{

    let uri="http://localhost:8080/Aplicacion/rs/contactos/BuscarTablet?id="
   let url=uri+user
   console.log(url)
   return this.http.get<Tablet>(url);
 }

 borrarTablet(user: number){

  let uri="http://localhost:8080/Aplicacion/rs/contactos/borrarTablet?id="
 let url=uri+user
 console.log(url)
 return this.http.delete(url);
  }
  buscarEst(user:number):Observable<Tablet>{

    let uri="http://localhost:8080/Aplicacion/rs/contactos/estudiantesT?id="
   let url=uri+user
   console.log(url)
   return this.http.get<Tablet>(url);
 }
  
  
}
