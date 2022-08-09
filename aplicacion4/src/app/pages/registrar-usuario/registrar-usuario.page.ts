import { Component, OnInit } from '@angular/core';
import { UsuarioWS } from 'src/app/domain/usuariows';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {
  usuario: UsuarioWS = new UsuarioWS();
  constructor(private usuarioWS:UsuarioService) { }

  ngOnInit(): void {
  }
  guardar(){
    this.usuarioWS.registrarUsuario(this.usuario).subscribe(data=>{
      console.log(data)
      
    })
    this.usuario.apellido="";
      this.usuario.nombre="";
      this.usuario.cargo="";
      this.usuario.password="";
      this.usuario.correo="";
      this.usuario.rol="";
  }
}
