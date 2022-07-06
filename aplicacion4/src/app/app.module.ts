import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { RegistrarEstudiantePage } from './pages/registrar-estudiante/registrar-estudiante.page';
// import { RegistrarDocentePage } from './pages/registrar-docente/registrar-docente.page';
//import { FormsModule } from '@angular/forms';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ListTabletsPage } from './pages/list-tablets/list-tablets.page';
// import { UpdateDocentePage } from './pages/update-docente/update-docente.page';
// import { UpdateEstudiantesPage } from './pages/update-estudiantes/update-estudiantes.page';
// import { RegistrarUsuarioPage } from './pages/registrar-usuario/registrar-usuario.page';
// import { MenuPrincipalPage } from './pages/menu-principal/menu-principal.page';
// import { IngresarMateriaPage } from './pages/ingresar-materia/ingresar-materia.page';
// import { ListarMateriaPage } from './pages/listar-materia/listar-materia.page';
// import { UpdateMateriaPage } from './pages/update-materia/update-materia.page';
// import { UpdateTabletsPage } from './pages/update-tablets/update-tablets.page';
// import { InsertTabletsPage } from './pages/insert-tablets/insert-tablets.page';
// import { LogginPage } from './pages/loggin/loggin.page';
// import { RegistrarPrestamoPage } from './pages/registrar-prestamo/registrar-prestamo.page';



@NgModule({
  declarations: [AppComponent,

    // RegistrarEstudiantePage,
    // RegistrarDocentePage,
    // ListTabletsPage,
    // UpdateDocentePage,
    // UpdateEstudiantesPage,
    // RegistrarUsuarioPage,
    // MenuPrincipalPage,
    // IngresarMateriaPage,
    // ListarMateriaPage,
    // UpdateMateriaPage,
    // UpdateTabletsPage,
    // InsertTabletsPage,
    // LogginPage,
    // RegistrarPrestamoPage,
  ],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
