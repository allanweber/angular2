import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard.';
import { CursosGuard } from './guards/cursos.guard';
//import { AlunosGuard } from './guards/alunos.guard';  movido para escopo local da módulo

const appRoutes: Routes = [
    {
        path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard]
    }, // carregamento lazy load
    {
        path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        //canActivateChild: [AlunosGuard] movido para escopo local da módulo
    }, // carregamento lazy load
    { path: 'login', component: LoginComponent },
    {
        path: '', component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }