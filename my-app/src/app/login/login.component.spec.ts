import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { AuthService } from './../_service/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[RouterTestingModule],
        declarations: [ LoginComponent ],
        providers:[AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 

  // it('spyOn AuthService',() => {
  //   let authService = fixture.debugElement.injector.get(AuthService);
  //   let length=sessionStorage.length
  //   spyOn(authService,'login').and.returnValue(sessionStorage.setItem('token','login'));
  //   fixture.whenStable().then(()=>{
  //     expect(length).toEqual(1);
  //   })
  // })
});
