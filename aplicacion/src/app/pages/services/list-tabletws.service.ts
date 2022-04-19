import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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
  
}
