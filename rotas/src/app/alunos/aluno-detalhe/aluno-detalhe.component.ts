import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { Aluno } from './../Aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  private aluno:Aluno;
  private inscricao: Subscription;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private alunoService:AlunosService) { }

 editar(){
   this.router.navigate(['/alunos', this.aluno.id, 'editar']);
 }

  ngOnInit() {
    //Refatorado para Resolver
    // this.inscricao = this.route.params.subscribe(
    //   (params:any) => {
    //       let id = params['id'];
    //       this.aluno = this.alunoService.getAluno(id);
    //   }
    // );

    //Usando Resolver
    this.inscricao = this.route.data.subscribe(
      (info) => {
         this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
