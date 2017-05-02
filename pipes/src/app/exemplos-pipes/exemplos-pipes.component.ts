import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro:any = {
    titulo:'guerra civil',
    rating:4.656,
    numeroPaginas:130,
    preco: 25.65,
    data: new Date('1984-02-22') ,
    url:'http://books.com/guerra-civil'
  };

  livros: string[] = ['Angular 2', 'Java'];

  filtro:string = "";

  addCurso(value){
    this.livros.push(value);
  }

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor Assincrono'), 2000)
  })

  valorAsync2 = Observable.interval(2000)
                .map(valor => 'Valor Async 2');

  constructor() { }

  ngOnInit() {
  }

}
