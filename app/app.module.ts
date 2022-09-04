import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { BienvenidosComponent } from './page/bienvenidos/bienvenidos.component';
import { ErrorComponent } from './page/error/error.component';
import { SoloRegistradosComponent } from './page/solo-registrados/solo-registrados.component';
import { SoloAdminComponent } from './page/solo-admin/solo-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidosComponent,
    ErrorComponent,
    SoloRegistradosComponent,
    SoloAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
