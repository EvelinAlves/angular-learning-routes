import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(): any[] {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'Phonegap'}
    ];
  }

  getCurso(id: number): any {
    const cursos = this.getCursos();

    for (const curso of cursos) {
      if (curso.id == id) {
        return curso;
      }
    }
    return null;

    // for(let i=0; i<cursos.length; i++){
    //   let curso = cursos[i];
    //   if(curso.id == id) {
    //     return curso;
    //   };
    // }
  }

}
