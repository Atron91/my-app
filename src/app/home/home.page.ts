import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginUtilsService } from '../../services/login-utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public loginUtilsService: LoginUtilsService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  doLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid && this.loginUtilsService.validatePassword(this.loginForm.controls['password'].value)) {
      console.log('OK venga');
    } else {
      console.log('Por favor rellena los campos correctamente');
    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }
  
  private validatePassword(): boolean {
    return this.loginForm.controls['password'].value.length === 6;
  }
}
