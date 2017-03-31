import { Component, OnInit, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'curso',
  template: '{{ nomeCurso }}',
  inputs:['nomeCurso:nome'] //meta dados
})
export class InputPropertyComponent {
  
  //@Input('nome')  - por variável
  nomeCurso:string = "";

  constructor(){

  }
}
