import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

    private usuarioAutenticado = false;

    mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router) { }

    fazerLogin(usuario: Usuario): void {
        if (usuario.nome === 'evelin' && usuario.senha === '123456') {
            this.usuarioAutenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.router.navigate(['/']);
        } else {
            this.usuarioAutenticado = false;
            this.mostrarMenuEmitter.emit(false);
        }
    }

    usuarioEstaAutenticado(): boolean {
        return this.usuarioAutenticado;
    }
}
