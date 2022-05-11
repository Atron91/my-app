import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { ContractServices } from 'src/services/contracts-user.service';
import { SessionDataService } from 'src/services/session-data.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [ IonicModule.forRoot(), ReactiveFormsModule],
      providers: [ SessionDataService, ContractServices, MenuController]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('created', () => {
    // const component = TestBed.createComponent(HomePage);
    // const app = component.componentInstance;
    expect(component).toBeUndefined();
    // console.log("EY");
  });
  // it('prueba 2', () => {
  //   expect(component.ngOnInit).toBeTruthy();
  // });
});
