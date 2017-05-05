import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
//import { AlunosGuard } from './guards/alunos.guard';  movido para escopo local da módulo
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    {
        path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule', // carregamento lazy load
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard] //verifica se pode compilar o block de JS do componente
    },
    {
        path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule', // carregamento lazy load
        canActivate: [AuthGuard],
        canLoad: [AuthGuard] //verifica se pode compilar o block de JS do componente
        //canActivateChild: [AlunosGuard] movido para escopo local da módulo
    },
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    //imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }