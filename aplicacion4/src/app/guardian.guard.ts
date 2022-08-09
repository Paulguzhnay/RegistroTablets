import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Console } from 'console';

import {Observable} from 'rxjs';
import { AuthenticationService } from './api/authentication.service';
import { UsuarioService } from './pages/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if (!this.auth.GetSession()) {
      this.router.navigate(['loggin']);
    }
    return true;
  }
}
