import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  estaLogueado: boolean = false;
  adminLogueado:boolean = false;
  adminAcepta:boolean = false;
  constructor() {}

  loguear(): void {
    this.estaLogueado = true;
    console.log('dentro del servicio');
  }

  desloguear(): void {
    this.estaLogueado = false;
  }

  loguearAdmin(): void {
    this.adminLogueado = true;
    console.log('dentro del servicio');
  }

  desloguearAdmin(): void {
    this.adminLogueado = false;
  }
  
  adminAceptaAccion():void{
    this.adminAcepta = true;
  }

  adminNoAceptaAccion():void{
    this.adminAcepta = false;
  }


}
