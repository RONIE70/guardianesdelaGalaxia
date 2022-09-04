import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAceptaGuard } from './guardianes/admin-acepta.guard';
import { AdminGuard } from './guardianes/admin.guard';
import { UsuariosGuard } from './guardianes/usuarios.guard';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';
import { SoloAdminComponent } from './page/solo-admin/solo-admin.component';
import { SoloRegistradosComponent } from './page/solo-registrados/solo-registrados.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bienvenidos', component: BienvenidosComponent },
  { path: 'soloregistrados', component: SoloRegistradosComponent, canActivate:[UsuariosGuard]},
  { path: 'soloAdmin', component: SoloAdminComponent, canActivate:[AdminGuard], canDeactivate:[AdminAceptaGuard]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
