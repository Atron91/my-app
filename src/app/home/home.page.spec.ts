import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('call doLogin', ()=>{
    beforeEach(()=>{
      spyOn(console, 'log');
    });

    describe('with valid credentials', ()=>{
      beforeEach(()=>{
        component.loginForm.controls['email'].setValue('test@gmail.com');
        component.loginForm.controls['password'].setValue('12345');
        component.doLogin();
      });

      it('should log ok', ()=>{
        expect(console.log).toHaveBeenCalledWith('OK');
      });
      it('should be valid email', ()=>{
        expect(component.loginForm.controls['email'].valid).toBeTruthy();
      });
      it('should be valid password', ()=>{
        expect(component.loginForm.controls['password'].valid).toBeTruthy();
      });
      it('should set loginForm.valid to true', ()=>{
        expect(component.loginForm.valid).toBeTruthy();
      });
    
    });
    
    describe('with invalid credentials', ()=>{
      beforeEach(()=>{
      });
      describe('no valid email', ()=>{
        beforeEach(()=>{
          component.loginForm.controls['email'].setValue('test');
          component.loginForm.controls['password'].setValue('12345');
          component.doLogin();
        });

        it('should log error', ()=>{
          expect(console.log).toHaveBeenCalledWith('Por favor rellena los campos correctamente');
        });
        it('should be invalid email', ()=>{
          expect(component.loginForm.controls['email'].valid).toBeFalsy();
        });
        it('should be valid password', ()=>{
          expect(component.loginForm.controls['password'].valid).toBeTruthy();
        });
        it('should set loginForm.valid to false', ()=>{
          expect(component.loginForm.valid).toBeFalsy();
        });
      });
      describe('no valid password', ()=>{
        beforeEach(()=>{
          component.loginForm.controls['email'].setValue('test@gmail.com');
          component.loginForm.controls['password'].setValue('1234');
          component.doLogin();
        });

        it('should log error', ()=>{
          expect(console.log).toHaveBeenCalledWith('Por favor rellena los campos correctamente');
        });
        it('should be valid email', ()=>{
          expect(component.loginForm.controls['email'].valid).toBeTruthy();
        });
        it('should be invalid password', ()=>{
          expect(component.loginForm.controls['password'].valid).toBeFalsy();
        });
        it('should set loginForm.valid to false', ()=>{
          expect(component.loginForm.valid).toBeFalsy();
        });
    
      });
    }); 

  });
});
