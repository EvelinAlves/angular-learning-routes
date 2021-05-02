import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        console.log('AlunosGuard: Guarda de rota filha');
        if (state.url.includes('editar')) {
            // alert('Usuário sem acesso.');
            // return false;
            // return of(false);
        }
        return true;
    }
}
