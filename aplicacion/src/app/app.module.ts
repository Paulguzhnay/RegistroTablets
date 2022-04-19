import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas 
import { app_routing } from './app-routing.module';

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
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
