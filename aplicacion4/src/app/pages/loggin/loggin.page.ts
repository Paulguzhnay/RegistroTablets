import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logeo } from 'src/app/domain/SessionStorageModel';
import { autentificacion } from 'src/app/domain/singleton';
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/api/authentication.service';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class  LogginPage implements OnInit {
  login : Logeo = new Logeo();
  c: any;

  constructor(private auth: AuthenticationService, 
              private router: Router, 
              private menu:MenuController) { }

  ionViewWillEnter(){
    this.menu.enable(false);
    this.auth.remove();
  }

  ionViewDidEnter(){
    this.login.password="";
    this.login.correo="";
  }
 
  ngOnInit(): void {
    this.login.password="";
    this.login.correo="";
    this.auth.remove();
  }


  logeo(){
  
    this.auth.doLogin(this.login).subscribe((res: any[]) => {
      this.c = res
   
      if(this.c==true){
        this.auth.setUsuario(this.login);
        this.auth.SetSession(true);
          
        return this.router.navigate(['/menu-principal']).then(() => false);
        }else {
          this.auth.SetSession(false);

      }
    });

  }

}
