import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { IFormCanDeactivate } from './../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  private aluno: any;
  private inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(private route: ActivatedRoute,
    private alunosService: AlunosService) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  //Da interface IFormCanDeactivate
  podeDesativar() {
    if (this.formMudou) {
      return confirm('Deseja sair?');
    }

    return true;
  }

}
