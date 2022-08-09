import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tablet } from 'src/app/domain/tablets';
import { RTablet } from 'src/app/domain/RegTablet';


@Injectable({
  providedIn: 'root'
})
export class ListTabletwsService {
  
  ta: any;

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
  
 insertarTabletR(tabletR:RTablet):Observable<any>{
  let url="http://localhost:8080/Aplicacion/rs/contactos/InsertarTR";
  console.log(url)
  return this.http.post<any>(url,tabletR);
}
actualizarTabletR(tabletR:RTablet):Observable<any>{
  let url="http://localhost:8080/Aplicacion/rs/contactos/actualizarPrestamo";
  console.log(tabletR)
  return this.http.post<any>(url,tabletR);
}
getTabletPrestamo(){

  let url="http://localhost:8080/Aplicacion/rs/contactos/verficarTabletsPrestadas"
  
  console.log(url)
  return this.http.get<any>(url);

}

verificarTablet(codigo: string): Observable<Tablet>{
  let uri="http://localhost:8080/Aplicacion/rs/contactos/verificarTablet?codigo="
  let url=uri+codigo
  return this.http.get<Tablet>(url);
}
//----------
listTabletPrestamo(id:number) : Observable<RTablet>{
  let uri="http://localhost:8080/Aplicacion/rs/contactos/listTabletsVerificadas?id="
  let url=uri+id
  console.log(url)
  return this.http.get<RTablet>(url);
}

//---------------------------------------
verificarTabletEst(codigo: number, nombreT: String): Observable<any>{
  let url="http://localhost:8080/Aplicacion/rs/contactos/verificarTabletEst?id="+codigo+"&nombreT="+nombreT;
  console.log(url)
  return this.http.get<Tablet>(url);
}


}
