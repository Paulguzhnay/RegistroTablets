import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPrincipalPage } from './pages/menu-principal/menu-principal.page';
import { LogginPage } from './pages/loggin/loggin.page'; 
import { AuthGuard } from './guardian.guard';

const routes: Routes = [
  {
    path: '',
    // component: LogginPage,
    redirectTo: 'loggin',
    pathMatch: 'full'

  },

  {
    path: 'folder/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'ingresar-materia',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/ingresar-materia/ingresar-materia.module').then( m => m.IngresarMateriaPageModule)
  },
  {
    path: 'inserttablets',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/insert-tablets/insert-tablets.module').then( m => m.InsertTabletsPageModule)
  },
  {
    path: 'list-tablets',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/list-tablets/list-tablets.module').then( m => m.ListTabletsPageModule)
  },
  {
    path: 'listar-materia',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/listar-materia/listar-materia.module').then( m => m.ListarMateriaPageModule)
  },
  {
    path: 'loggin',
    loadChildren: () => import('./pages/loggin/loggin.module').then( m => m.LogginPageModule)
  },
  {
    path: 'menu-principal',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'registradocente',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/registrar-docente/registrar-docente.module').then( m => m.RegistrarDocentePageModule)
  },
  {
    path: 'registrar-estudiante',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/registrar-estudiante/registrar-estudiante.module').then( m => m.RegistrarEstudiantePageModule)
  },
  {
    path: 'registrar-prestamo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/registrar-prestamo/registrar-prestamo.module').then( m => m.RegistrarPrestamoPageModule)
  },
  {
    path: 'registrar-usuario',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/registrar-usuario/registrar-usuario.module').then( m => m.RegistrarUsuarioPageModule)
  },
  {
    path: 'update-docente/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/update-docente/update-docente.module').then( m => m.UpdateDocentePageModule)
  },
  {
    path: 'update-estudiantes/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/update-estudiantes/update-estudiantes.module').then( m => m.UpdateEstudiantesPageModule)
  },
  {
    path: 'update-materia/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/update-materia/update-materia.module').then( m => m.UpdateMateriaPageModule)
  },
  {
    path: 'update-tablets/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/update-tablets/update-tablets.module').then( m => m.UpdateTabletsPageModule)
  },
  {
    path: 'listar-estudiantes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/listar-estudiantes/listar-estudiantes.module').then( m => m.ListarEstudiantesPageModule)
  },
  {
    path: 'listar-docentes',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/listar-docentes/listar-docentes.module').then( m => m.ListarDocentesPageModule)
  },
  {
    path: 'devolver-prestamo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/devolver-prestamo/devolver-prestamo.module').then( m => m.DevolverPrestamoPageModule)
  },
  {
    path: 'actualizar-prestamo/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actualizar-prestamo/actualizar-prestamo.module').then( m => m.ActualizarPrestamoPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
