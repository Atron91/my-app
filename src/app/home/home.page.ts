import { Component, OnInit } from '@angular/core';

import { ServicesData, SessionData, UserData } from 'src/services/models/session-data.model';
import { SessionDataService } from 'src/services/session-data.service';
import { ContractServices } from 'src/services/contracts-user.service';

import { MenuController } from '@ionic/angular';
import { ServiceData } from '../../services/models/session-data.model';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: SessionData = null;
  balance: UserData = null;
  services: ServicesData = null;
  showServices = false;
  
  

  constructor(
    private sessionDataService: SessionDataService,
    private contractServices: ContractServices,
    private menuCtrl: MenuController
  ){}
   
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.data = this.sessionDataService.getSessionData()
    this.balance = this.contractServices.userBalance()
    this.services = this.contractServices.getContractServices()
    
  }
  
  public showService(){
    
    // if(this.balance.balance === type.(this.services.services)){

      this.showServices = !this.showServices;
    // }
  
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
  
}
