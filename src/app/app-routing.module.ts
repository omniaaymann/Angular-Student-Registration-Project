import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'create', component:CreateComponent},
  {path:'students', component:StudentComponent},
  {path:'studentDetails/:id', component:StudentDetailsComponent},
  {path:'', component:HomeComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
