import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina:number;
  inscricao:Subscription;

  constructor(private cursosServices:CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  proximaPagina(){
    this.pagina ++;
    this.router.navigate(['/cursos'], {queryParams:{'pagina': this.pagina}});
  }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
    
    this.inscricao = this.route.queryParams.subscribe(
      (query: any) =>{
        this.pagina = query['pagina'];
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
