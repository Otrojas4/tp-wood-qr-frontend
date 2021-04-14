import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.setUpLoginForm();
  }

  setUpLoginForm(): void {
    this.loginForm = new FormGroup({
      vc_nro_dispositivo: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^[0-9]\d*$/)]),
      vc_contraseña: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern(/^[a-zA-Z0-9_]*$/)]),
    });
  }


}
