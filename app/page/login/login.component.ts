import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private miServicio:AuthService) {}

  ngOnInit(): void {}

  hacerLogin(): void {
    console.log('haciendo login Usuario');
    this.miServicio.loguear();
  }

  hacerLoginAdmin(): void {
    console.log('haciendo login Admin');
    this.miServicio.loguearAdmin();
  }
}
