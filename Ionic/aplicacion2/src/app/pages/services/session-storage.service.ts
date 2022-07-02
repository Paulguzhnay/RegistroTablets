import { Injectable } from '@angular/core';
import { Logeo } from 'src/app/domain/SessionStorageModel';
@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  sessionStorgaeModel:Logeo=new Logeo();
  constructor() { }
  
  public set(key:string,value:string){
  this.sessionStorgaeModel[key]=value;
  }
  get(key:string):string{
  return this.sessionStorgaeModel[key]
  }
  remove(key:string){
  this.sessionStorgaeModel[key]=null;
  }
  clear(){
  this.sessionStorgaeModel=new Logeo();
  }
  }
