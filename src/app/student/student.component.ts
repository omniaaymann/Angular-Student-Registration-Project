import { Component, OnInit } from '@angular/core';

import { Student } from './student';

import{HttpClient} from '@angular/common/http'
import { takeLast } from 'rxjs';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {

  students:Student[] = []
  constructor(private _httpClient:HttpClient)
  {

  }

  ngOnInit():void {
    this._httpClient.get('https://api.mohamed-sadek.com/student/get').subscribe(
       //@return — An Observable of the response body as a JSON object.
      (response:any)=>{
        console.log(JSON.stringify(response));
        this.students = response.Data;
      }
      ,(error:any)=>{

      }
    )
  }
     

        deleteStudent(index:number)
        {
         let student = this.students[index];
         this.students.splice(index,1);
         this._httpClient.delete(`https://api.mohamed-sadek.com/student/delete?id=${student.ID}`).subscribe(
           (response:any)=>{},
           (error:any)=>{}
         )
        }

        getStudentCount(){
          return this.students.length;
        }

       



  }




  
