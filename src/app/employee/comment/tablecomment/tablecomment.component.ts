import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-tablecomment',
  templateUrl: './tablecomment.component.html',
  styleUrls: ['./tablecomment.component.css']
})
export class TablecommentComponent implements OnInit {

  constructor(private services:CommentService) { }

  
  ngOnInit(): void {
    this.tableArr=this.services.call()
  }
tableArr
}
