import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();

    //Compartilhada entre as instâncias
    static criouNovoCurso = new EventEmitter<string>();

    private cursos:string[] =  ['Angular', 'Node', 'Java'];

    constructor(private logService:LogService){
        console.log('Cursos');
    }

    getCursos(){
        this.logService.consoleLog('Obtendo cursos...');
        return this.cursos;
    }

    addcurso(curso:string){
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

}