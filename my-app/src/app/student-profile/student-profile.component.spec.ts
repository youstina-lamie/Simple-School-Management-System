import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'


import { StudentProfileComponent } from './student-profile.component';
import { StudentService } from './../_service/student.service';
import { AuthService } from './../_service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentProfileComponent', () => {
  let component: StudentProfileComponent;
  let fixture: ComponentFixture<StudentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule,RouterTestingModule],
        declarations: [ StudentProfileComponent ],
        providers:[StudentService,AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('firstName of student is right', () => {

  //   component.studentId=1;
  //   sessionStorage.setItem('token','login')
  //   let element:HTMLElement = fixture.nativeElement;
  //   let firstName = element.querySelector('#firstName').textContent;
    
  //   console.log(firstName)
  //   expect(firstName).toBe(component.student.first_name)
  // })



});
