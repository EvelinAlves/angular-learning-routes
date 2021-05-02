import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('AuthGuard - canActivate');
    return this.verificarAcesso();
  }

  canLoad(route: Route): Observable<boolean> | boolean {
    console.log('AuthGuard - canLoad: verificando se o usuário pode carregar o código do módulo');
    return this.verificarAcesso();
  }


  private verificarAcesso(): boolean {
    if (this.authService.usuarioEstaAutenticado() === true) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
