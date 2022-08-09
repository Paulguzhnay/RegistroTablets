import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  


  public appPages = [

    { title: 'Menú Principal', url: '/menu-principal',},
    { title: 'Registrar Colaborador', url: '/registrar-usuario', },
    { title: 'Registrar Docente', url: '/registradocente'},
    { title: 'Registrar Estudiantes', url: '/registrar-estudiante'},
    { title: 'Registrar Materia', url: '/ingresar-materia'},
    { title: 'Registrar Prestamo', url: '/registrar-prestamo'},
    { title: 'Registrar Tablet', url: '/inserttablets'},
    { title: 'Devolver Tablet', url: '/devolver-prestamo'},
    { title: 'Listar Docente', url: '/listar-docentes'},
    { title: 'Listar Estudiante', url: '/listar-estudiantes'},
    { title: 'Listar Materia', url: '/listar-materia'},
    { title: 'Listar Tablet', url: '/list-tablets'},
    { title: 'Cerrar Sesión', url: '/loggin'},
  ];

  public appPages2 = [

    { title: 'Menú Principal', url: '/menu-principal',},

    { title: 'Cerrar Sesión', url: '/loggin'},
  ];

 

  constructor() {}
}
