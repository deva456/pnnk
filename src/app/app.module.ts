import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { ProjectTypesService } from './project-types.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { BoldPipe } from './bold.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ClientComponent } from './client/client.component';
import { UserService } from './user.service';






@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectEnquiryComponent,
    EmployeeComponent,
    EmployeeListComponent,
    BoldPipe,
    AddEmployeeComponent,
    ClientComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProjectTypesService,EmployeeService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
