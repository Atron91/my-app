import { Component, OnInit } from '@angular/core';

import { SessionData } from 'src/services/models/session-data.model';
import { SessionDataService } from 'src/services/session-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: SessionData = null;

  constructor(
    private sessionDataService: SessionDataService
  ){}
   
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.data = this.sessionDataService.getSessionData()
      
  }
  
}
