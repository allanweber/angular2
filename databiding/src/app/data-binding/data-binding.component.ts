import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://allan.io';
  cursoAngular:boolean = true;
  urlImagem:string  = 'http://lorempixel.com/400/200/nature/';
  conteudo:string = "";
  conteudoSalvo:string = "";
  isMouseOver:boolean = false;

  nome:string = "";

  pessoa = {nome:'', idade: 18};

  nomeCurso:string = 'Curso de angular 2!';

  valorInicial:number = 10;

  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert('Botão clicado.');
  }

  onKeyUp(event:KeyboardEvent){
    console.log(event);
    this.conteudo = (<HTMLInputElement>event.target).value;
  }

  onSave(valor:string){
    this.conteudoSalvo = valor;
  }

  onMouse(){
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event){
    alert(event.novoValor);
  }
}
