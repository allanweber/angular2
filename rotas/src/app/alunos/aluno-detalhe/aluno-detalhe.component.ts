import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  private aluno:any;
  private inscricao: Subscription;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private alunoService:AlunosService) { }

 editar(){
   this.router.navigate(['/alunos', this.aluno.id, 'editar']);
 }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
          let id = params['id'];
          this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
