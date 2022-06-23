import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logeo } from 'src/app/domain/SessionStorageModel';
import { autentificacion } from 'src/app/domain/singleton';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  login : Logeo = new Logeo();
  c: any;

  //constructor(private usuario: UsuarioService, private router: Router, private aut : autentificacion) { }
  constructor(private usuario: UsuarioService, private router: Router) { }
 
  ngOnInit(): void {
  }


  logeo(){
    console.log('--------')
    console.log(this.usuario)
    console.log('--------')
    console.log(this.login.password)
    console.log(this.login.correo)
    console.log('-----/////**--')
    console.log(this.usuario.logeoUsuario)
    console.log('----*//*/*----')
  /*  
    if (this.login.correo==""||this.login.correo=="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }else if(this.login.correo == "cjaponc@ieee.org" && this.login.password == "abc123"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La tablet ha sido creada exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['Menu-Principal']);
    }else if(this.login.correo == "japon@gmail.com" && this.login.password == "iloveu"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La tablet ha sido creada exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['Menu-Principal']);
    }else if(this.login.correo == "ejemplo@gmail.com" && this.login.password == "ejemplo123"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La tablet ha sido creada exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['Menu-Principal']);
    }else{
      this.router.navigate(['Loggin-User']);

    }
*/

    this.usuario.logeoUsuario(this.login).subscribe((res: any[]) => {
      this.c = res
      console.log(this.c)
      if(this.c==true){

        //this.aut.setUsuario(this.c);
        this.router.navigate(['Menu-Principal']);
      }
    });

   
    

   // this.usuario.logeoUsuario(this.login.correo,this.login.password);
    
    /*
    if(this.login.correo == this.usuario.logeoUsuario()){
      console.log("Es valido")
     // this.router.navigate(['Menu-Principal']);
    }else{
      console.log("NO encontro nada")
     // this.router.navigate(['Loggin-User']);

    }*/

  }

  /*
  cargarUsuarios(){
    console.log(this.loginservice.getDatos(this.datos));
  
    this.loginservice.getDatos(this.datos).subscribe((res: any[]) => this.c = res);
  
  
  
    // this.c = this.contactoService.getDatos(this.contacto);
     console.log("-------------");
      console.log(this.c);
      console.log("-------------");
  
     //this.contactos = this.contactoService.getClientes();
      if(this.c!=null){
        //this.pantallaPrincipal.colocarUser(this.c);
        this.aut.setUsuario(this.c);
        this.router.navigate(['Menu-Principal']);
        
      }

    }*/


}
