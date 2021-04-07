import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../_service/student.service';
import { Student } from './../_modal/student';
import { AuthService } from './../_service/auth.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  studentId;
  student:Student;


  constructor(private studentService:StudentService,private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
    });

    this.studentService.getStudentById(this.studentId).subscribe(
      data => {
        this.student=data['data'];
      },
      error => {
        console.log(error);
      }
    );
  }
  logout(){
    this.authService.logout()
  }

}
