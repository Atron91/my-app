import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { IonicModule } from '@ionic/angular';

import { LoginUtilsService } from '../../services/login-utils.service';

import { LoginPage } from './login.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginUtilsService],
  declarations: [LoginPage]
})
export class LoginPageModule {}
