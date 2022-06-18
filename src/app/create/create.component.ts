import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import{StudentComponent} from '../student/student.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  registrationForm:FormGroup = new FormGroup({});
  students:Student[] = []
  constructor(private _httpClient:HttpClient, private router: Router, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group({
      firstName:['salma',[Validators.required]],

      lastName:['mohamed',[Validators.required]],

      age:[22,[Validators.required, Validators.pattern('^[0-9]+$')]],

      nationalID:[12345678910111,[Validators.required, Validators.pattern('[0-9]{14}')]]

    });
  }

  

   
  addStudent(firstName:string, lastName:string, age:number, nationalId:string)
  {
    let student = new Student();
    student.firstName = firstName;
    student.lastName = lastName;
    student.Age = age;
    student.NationalID = nationalId;
    this._httpClient.post('https://api.mohamed-sadek.com/student/post', student).subscribe(
      (response:any)=>{
        student.ID = response.Data;
        this.students.push(student)
        this.router.navigateByUrl('/students');
      },
      (error:any)=>{

      }
    );
  }

  register()
  {
    console.log(JSON.stringify(this.registrationForm.value));
    //Validate user name and password from API
  }



}
