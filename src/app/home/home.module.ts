import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginUtilsService } from '../../services/login-utils.service';
import { SessionDataService } from 'src/services/session-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    

  ],
  providers: [LoginUtilsService, SessionDataService],
  declarations: [HomePage]
})
export class HomePageModule {}
