import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPrincipalPage } from './pages/menu-principal/menu-principal.page';
import { LogginPage } from './pages/loggin/loggin.page'; 

const routes: Routes = [
  {
    path: '',
    // component: LogginPage,
    redirectTo: 'loggin',
    pathMatch: 'full'

  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ingresar-materia',
    loadChildren: () => import('./pages/ingresar-materia/ingresar-materia.module').then( m => m.IngresarMateriaPageModule)
  },
  {
    path: 'inserttablets',
    loadChildren: () => import('./pages/insert-tablets/insert-tablets.module').then( m => m.InsertTabletsPageModule)
  },
  {
    path: 'list-tablets',
    loadChildren: () => import('./pages/list-tablets/list-tablets.module').then( m => m.ListTabletsPageModule)
  },
  {
    path: 'listar-materia',
    loadChildren: () => import('./pages/listar-materia/listar-materia.module').then( m => m.ListarMateriaPageModule)
  },
  {
    path: 'loggin',
    loadChildren: () => import('./pages/loggin/loggin.module').then( m => m.LogginPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'registradocente',
    loadChildren: () => import('./pages/registrar-docente/registrar-docente.module').then( m => m.RegistrarDocentePageModule)
  },
  {
    path: 'registrar-estudiante',
    loadChildren: () => import('./pages/registrar-estudiante/registrar-estudiante.module').then( m => m.RegistrarEstudiantePageModule)
  },
  {
    path: 'registrar-prestamo',
    loadChildren: () => import('./pages/registrar-prestamo/registrar-prestamo.module').then( m => m.RegistrarPrestamoPageModule)
  },
  {
    path: 'registrar-usuario',
    loadChildren: () => import('./pages/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
  {
    path: 'update-docente',
    loadChildren: () => import('./pages/update-docente/update-docente.module').then( m => m.UpdateDocentePageModule)
  },
  {
    path: 'update-estudiantes',
    loadChildren: () => import('./pages/update-estudiantes/update-estudiantes.module').then( m => m.UpdateEstudiantesPageModule)
  },
  {
    path: 'update-materia',
    loadChildren: () => import('./pages/update-materia/update-materia.module').then( m => m.UpdateMateriaPageModule)
  },
  {
    path: 'update-tablets/:id',
    loadChildren: () => import('./pages/update-tablets/update-tablets.module').then( m => m.UpdateTabletsPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
