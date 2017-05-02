import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswich',
  templateUrl: './diretiva-ngswich.component.html',
  styleUrls: ['./diretiva-ngswich.component.css']
})
export class DiretivaNgswichComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
