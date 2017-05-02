
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService] //não é mais singleton
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  cursosService: CursosService;

  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    //Se inscreve no evento do service
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
      //function(curso) {
      //console.log(curso);
      //}
    );
  }

}
