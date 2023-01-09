import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/services/emp-service.service';

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {
 addData:FormGroup;
 
  constructor(private fb:FormBuilder,private service:EmpServiceService,private route:Router) { }
   
    initialFunc(){
      this.addData=this.fb.group({
        names:[null,Validators.required],
        surnames:[null,Validators.required],
        positions:[null,Validators.required],
        emails:[null,Validators.required],
        salarys:[null,Validators.required],
        phones:[null,Validators.required],
        ages:[null,Validators.required],
      })
    }
  
  ngOnInit(): void {
    this.initialFunc()
  }
  submit:boolean=false
  empListArr
  addClick(){
    if(this.addData.valid){
      this.route.navigate(['/tableemp'])
      this.empListArr=this.service.callFunc()
   this.empListArr.push(this.addData.value)
    }
   else{
    return this.submit=true
   }
  }
  
}
