import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  names!:any
  pass!:any
  flag:boolean=false
  arrayD:Array<any>=[
    'a',"k"
  ];
  passc(){
    return this.route.navigate(['/main'])

  }
check():any{
  this.arrayD.forEach((names:any,pass:any)=>{
    if(this.names=='a' && this.pass=='1'){
      return this.passc()
    }
    else{
      return this.flag=true
    }
  })
}
  ngOnInit(): void {
  }

}
