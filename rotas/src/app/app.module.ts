import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
//import { CursosModule } from './cursos/cursos.module'; agora é usado pelo lazy Load
//import { AlunosModule } from './alunos/alunos.module'; agora é usado pelo lazy Load
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard.';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    //CursosModule, agora é usado pelo lazy Load
    //AlunosModule, agora é usado pelo lazy Load
    AppRoutingModule
  ],
  providers: [ AuthService, AuthGuard, CursosGuard, AlunosGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
