import { APP_INITIALIZER, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private route:Router,private services:CommentService) { }

  ngOnInit(): void {
    
  }
  comment:string
  send(){
    if(this.comment!=null){
this.comAddArr=this.services.call()
    this.comAddArr.push(this.comment)
    }
      
  }
  comAddArr


}
