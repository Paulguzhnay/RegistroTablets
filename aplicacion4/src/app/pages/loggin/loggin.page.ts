import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logeo } from 'src/app/domain/SessionStorageModel';
import { autentificacion } from 'src/app/domain/singleton';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class  LogginPage implements OnInit {
  login : Logeo = new Logeo();
  c: any;

  //constructor(private usuario: UsuarioService, private router: Router, private aut : autentificacion) { }
  constructor(private usuario: UsuarioService, private router: Router, private menu:MenuController) { }

  ionViewWillEnter(){
    this.menu.enable(false);
  }

  ionViewDidEnter(){
    this.login.password="";
    this.login.correo="";
  }
 
  ngOnInit(): void {
    this.login.password="";
    this.login.correo="";
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
    

    this.usuario.logeoUsuario(this.login).subscribe((res: any[]) => {
      this.c = res
      console.log(this.c)

     
      if(this.c==true){
        this.router.navigate(['/menu-principal']);
      }
    });


  }

}
