import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';




const routes: Routes = [
  {path:"projects",component:ProjectListComponent},
  {path:"project-enquiry",component:ProjectEnquiryComponent},
  {path:"employee-list",component:EmployeeListComponent},
  {path:"add-employee", component:AddEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
