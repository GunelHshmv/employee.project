import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private route:Router,private services:EmpServiceService) { }
tablearr
  ngOnInit(): void {
    this.tablearr=this.services.callFunc()
  }
  


}
