import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas 
import { app_routing } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarEstudianteComponent } from './pages/registrar-estudiante/registrar-estudiante.component';
import { RegistrarDocenteComponent } from './pages/registrar-docente/registrar-docente.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListTabletsComponent } from './pages/list-tablets/list-tablets.component';
import { UpdateDocenteComponent } from './pages/update-docente/update-docente.component';
import { UpdateEstudiantesComponent } from './pages/update-estudiantes/update-estudiantes.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { IngresarMateriaComponent } from './pages/ingresar-materia/ingresar-materia.component';
import { ListarMateriaComponent } from './pages/listar-materia/listar-materia.component';
import { UpdateMateriaComponent } from './pages/update-materia/update-materia.component';
import { UpdateTabletsComponent } from './pages/update-tablets/update-tablets.component';
import { InsertTabletsComponent } from './pages/insert-tablets/insert-tablets.component';
import { LogginComponent } from './pages/loggin/loggin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarEstudianteComponent,
    RegistrarDocenteComponent,
    ListTabletsComponent,
    UpdateDocenteComponent,
    UpdateEstudiantesComponent,
    RegistrarUsuarioComponent,
    MenuPrincipalComponent,
    IngresarMateriaComponent,
    ListarMateriaComponent,
    UpdateMateriaComponent,
    UpdateTabletsComponent,
    InsertTabletsComponent,
    LogginComponent,
 
    
    
  ],
  imports: [
    app_routing,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
