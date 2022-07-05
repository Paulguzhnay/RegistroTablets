import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menú Principal', url: '/menu-principal',},
    { title: 'Registrar Docente', url: '/registradocente'},
    { title: 'Registrar Estudiantes', url: '/registrar-estudiante'},
    { title: 'Registrar Materia', url: '/ingresar-materia'},
    { title: 'Actualizar Docente', url: '/update-docente'},
    { title: 'Actualizar Estudiante', url: '/update-estudiantes'},
    { title: 'Listar Materia', url: '/listar-materia'},
    { title: 'Nuevo Colaborador', url: '/registrar-usuario'},
    { title: 'Registrar Tablet', url: '/inserttablets'},
    { title: 'Listar Tablet', url: '/list-tablets'},
    { title: 'Registrar Prestamo', url: '/registrar-prestamo'},
    { title: 'Cerrar Sesión', url: '/loggin'},
  ];
 
  constructor() {}
}
