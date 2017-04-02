import { Component } from '@angular/core';

import { LifeCycleComponent } from './ciclo/life-cycle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  deletarConteudo:boolean = false;

  valorInicial:number = 15;

}
