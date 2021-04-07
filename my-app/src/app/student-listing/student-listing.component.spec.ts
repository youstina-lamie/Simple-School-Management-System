import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';

import { StudentListingComponent } from './student-listing.component';
import { StudentService } from './../_service/student.service';
import { AuthService } from './../_service/auth.service';


describe('StudentListingComponent', () => {
    
  let component: StudentListingComponent;
  let fixture: ComponentFixture<StudentListingComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule,RouterTestingModule],
        declarations: [ StudentListingComponent ],
        providers:[StudentService,AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  


  it('pagenation test', ()=>{
    let num=2;
    component.students.length=6;
    component.pagenationFun(num);
    expect(component.pages.length).toEqual(3)
  })

});
