import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'

import { StudentService } from './student.service';

describe('StudentService', () => {
    let service : StudentService;
    let httpMock : HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[StudentService],
    })

    service = TestBed.get(StudentService); 
    console.log(service);
    httpMock = TestBed.get(HttpTestingController )
  });

  it('should be created',inject([StudentService],(service:StudentService)=>{
    expect(service).toBeTruthy();
  }));



  afterEach( () => { 
      httpMock.verify();
  })

  

  it('should retrieve All students from API', () => {
      const dummyStudents={"page":1,
        "per_page":6,
        "total":12,
        "total_pages":2,
        "data":[
          {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
          {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
          {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
          {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
          {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
          {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],
        "support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};
  

      service.getALLStudent().subscribe(students => {
          expect(students).toEqual(dummyStudents)
      });

      const request = httpMock.expectOne(`${service.url}/users`)
      expect(request.request.method).toBe('GET');
      request.flush(dummyStudents);
    });


    // it('should retrieve student from API', () => {
    //     const dummyArrOfStudent=[
    //         {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
    //         {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
    //     ]
  
    //     service.getStudentById(2).subscribe(student => {
    //         expect(student).toEqual(dummyArrOfStudent[1])
    //     });
  
    //     const request = httpMock.expectOne(`${service.url}/users/2`)
    //     expect(request.request.method).toBe('GET');
    //     request.flush(dummyArrOfStudent);
    //   });

});
