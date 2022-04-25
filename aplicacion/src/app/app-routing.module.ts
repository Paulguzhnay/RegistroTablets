import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrarDocenteComponent } from './pages/registrar-docente/registrar-docente.component';
import { RegistrarEstudianteComponent } from './pages/registrar-estudiante/registrar-estudiante.component';
import { ListTabletsComponent } from './pages/list-tablets/list-tablets.component';
import { UpdateDocenteComponent } from './pages/update-docente/update-docente.component';
import { UpdateEstudiantesComponent } from './pages/update-estudiantes/update-estudiantes.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { IngresarMateriaComponent } from './pages/ingresar-materia/ingresar-materia.component';
import { ListarMateriaComponent } from './pages/listar-materia/listar-materia.component';
import { UpdateMateriaComponent } from './pages/update-materia/update-materia.component';
import { InsertTabletsComponent } from './pages/insert-tablets/insert-tablets.component';
import { UpdateTabletsComponent } from './pages/update-tablets/update-tablets.component';
import { LogginComponent } from './pages/loggin/loggin.component';

const routes: Routes = [
  {path: "Registrar-Estudiante",component:RegistrarEstudianteComponent},
  {path: "Registrar-Docente",component:RegistrarDocenteComponent},
  {path: "Listar-Tablets",component:ListTabletsComponent},
  {path: "Actualizar-Estudiante", component:UpdateEstudiantesComponent},
  {path: "Actualizar-Docente", component:UpdateDocenteComponent},
  {path: "Registrar-Usuario", component:RegistrarUsuarioComponent},
  {path: "Menu-Principal", component:MenuPrincipalComponent},
  {path: "Registrar-Materia", component:IngresarMateriaComponent},
  {path: "Listar-Materia", component:ListarMateriaComponent},
  {path: "Actualizar-Materia/:id", component:UpdateMateriaComponent},
  {path: "Insertar-Tablets",component:InsertTabletsComponent},
  {path: "Actualizar-Tablets/:id",component:UpdateTabletsComponent},
  {path: "Loggin-User", component:LogginComponent}
];

export const app_routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
