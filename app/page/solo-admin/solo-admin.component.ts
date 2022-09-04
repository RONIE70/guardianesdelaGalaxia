import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-solo-admin',
  templateUrl: './solo-admin.component.html',
  styleUrls: ['./solo-admin.component.css'],
})
export class SoloAdminComponent implements OnInit {
  constructor(private aceptoServicio: AuthService) {}

  ngOnInit(): void {}

  acepto(): void {
    this.aceptoServicio.adminAceptaAccion();
  }

  noacepto(): void {
    this.aceptoServicio.adminNoAceptaAccion();
  }
}
