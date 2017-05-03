import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes =
    [
        {
            //path: 'alunos', component: AlunosComponent,agora é usado pelo lazy Load
            path: '', component: AlunosComponent, // não precisa mais informar quando usa Lazy Load
            canActivateChild: [AlunosGuard],  //movido para escopo local da módulo
            children: [
                { path: 'novo', component: AlunoFormComponent },
                {
                    path: ':id', component: AlunoDetalheComponent,
                    resolve: { aluno: AlunoDetalheResolver }
                },
                {
                    path: ':id/editar', component: AlunoFormComponent,
                    canDeactivate: [AlunosDeactivateGuard]
                }
            ]
        }
    ];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}