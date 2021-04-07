import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './../_modal/student';
import { Students } from './../_modal/students';

@Injectable({providedIn: 'root'})
export class StudentService {
    constructor(private http: HttpClient) {}
    url="https://reqres.in/api"
    students:Student[]=[];
    getALLStudent(){
        return this.http.get<Students>(`${this.url}/users`);
    }

    getStudentById(id:number){
        return this.http.get<Student>(`${this.url}/users/${id}`);
    }
}
