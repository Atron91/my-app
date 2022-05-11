import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';

import { HomePage } from './home.page';

import { LoginUtilsService } from '../../services/login-utils.service';
import { SessionDataService } from 'src/services/session-data.service';
import { ContractServices } from 'src/services/contracts-user.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    
    

  ],
  providers: [LoginUtilsService, SessionDataService, ContractServices],
  declarations: [HomePage]
})
export class HomePageModule {}