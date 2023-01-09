import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddinfoComponent } from './addinfo/addinfo.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './tableemp/table.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  
}
