import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student:Student = new Student();
  constructor(private _activatedRoute:ActivatedRoute,private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      parms=>{
        let id=parms.get('id');
        this._httpClient.get(`https://api.mohamed-sadek.com/Student/GetByID?id=${id}`)
        .subscribe(
          (response:any)=>{
            this.student=response.Data;
          },
          (error:any)=>{}
        );
        
      }
    );
  }
}
