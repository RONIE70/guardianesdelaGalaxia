import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsuariosGuard implements CanActivate {
  constructor(private miServicio:AuthService, private miRouter:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //return false;
    if (this.miServicio.estaLogueado) {
      return true;
    } else {
      this.miRouter.navigate(["error"]);
      return false;
     
    }
  }
}
