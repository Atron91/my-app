import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginUtilsService } from '../../services/login-utils.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private loginUtilsService: LoginUtilsService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  doLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid && this.loginUtilsService.validatePassword(this.loginForm.controls['password'].value)) {
      this.router.navigateByUrl("/home");
      
    } else {
      console.log('Por favor rellena los campos correctamente');
    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }


}
