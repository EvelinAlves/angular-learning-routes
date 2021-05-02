import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

    private alunos: Aluno[] = [
        {id: 1, nome: 'Evelin', email: 'evelin@email.com'},
        {id: 2, nome: 'Hérina', email: 'herina@email.com'},
        {id: 3, nome: 'Taís', email: 'tais@email.com'},
    ];

    constructor() {}

    getAlunos(): any[] {
        return this.alunos;
    }

    getAluno(id: number): any {
        for (const aluno of this.alunos) {
            if (id == aluno.id) {
                return aluno;
            }
        }
        return null;
    }
}
