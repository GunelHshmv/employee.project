import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddinfoComponent } from './employee/addinfo/addinfo.component';
import { TableComponent } from './employee/tableemp/table.component';
import { LoginComponent } from './employee/login/login.component';
import { CommentComponent } from './employee/comment/comment.component';
import { TablecommentComponent } from './employee/comment/tablecomment/tablecomment.component';
import { MainComponent } from './employee/main/main.component';

const route:Routes=[
  {path:"login",component: LoginComponent},
  {path:"tableemp",component:TableComponent},
  {path:"add",component:AddinfoComponent},
  {path:"comment",component:CommentComponent},
  {path:"main",component:MainComponent},
  {path:"commentT",component:TablecommentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddinfoComponent,
    TableComponent,
    LoginComponent,
    CommentComponent,
    TablecommentComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }