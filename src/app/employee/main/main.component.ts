import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  passAdd(){
  this.route.navigate(['/add'])
  }
  passTable(){
    this.route.navigate(['/tableemp'])
    }
    passComment(){Comment
      this.route.navigate(['/comment'])
      }

}
