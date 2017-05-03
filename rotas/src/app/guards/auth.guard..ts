import { Observable } from 'rxjs/Rx';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,
              private router: Router) { }

  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{

      if(this.authService.usuarioEstaAutenticado()){
        return true;
      } 

      this.router.navigate(['/login']);

      return false;

  }

}
