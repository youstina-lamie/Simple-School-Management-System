import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { StudentService } from './../_service/student.service';
import { Router } from '@angular/router';
import { Student } from './../_modal/student';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrls: ['./student-listing.component.scss']
})
export class StudentListingComponent implements OnInit {

  students:Student[]=[];
  pages:number[]=[];
  sizeOfPage:number=2;
  currentPage=0;

  constructor(private studentService:StudentService,private authService:AuthService,private router:Router) { }
 

  ngOnInit(): void {
    this.studentService.getALLStudent().subscribe(
      data => {
        this.students=data['data']
        this.pagenationFun(this.sizeOfPage);
      },
      error => {
        console.log(error);
      }
    );
   
   
  }

  pagenationFun(number){
    if(number>=1){
      this.sizeOfPage=number;
      this.pages=[];
      for(let i=0;i<this.students.length/number;i++){
        this.pages.push(i+1)
      }
    
    }  
  }
 

  logout(){
    this.authService.logout()
  }

  studentSelected(id){
    this.router.navigate(['profile/',id])
  }
  
  getStudentForCurrentPage(){
    const start=this.currentPage*this.sizeOfPage;
    return this.students.slice(start , start +(+this.sizeOfPage));
  }
}
