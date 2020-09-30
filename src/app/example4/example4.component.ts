

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html'
})
export class Example4Component implements OnInit {
form4:FormGroup;
courses=["IT","Computer","Pharmacy"]
username;
paswword;
course;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

// [FormGroup] directive binds <form> element to FormGroup instance
// FormControlName directive binds input elements to FormControl instance
    //there are two ways to create from  control, instance
    //1. without form buider
  this.form4=new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
      courses1:new FormArray(this.courses.map(item=>new FormControl()))
  });
  //2.with from builder
    // this.form4=this.fb.group({
    //   username:[''],
    //   password:[''],
    //   courses1:new FormArray(this.courses.map(item=>new FormControl()))
    // })
  }
show()
{
  //there are two ways to access form control value
  //1.using get method
  console.log(this.form4.get('username').value)
  //2.using contole.propertyname
  console.log(this.form4.controls.username.value)
  debugger
  //console.log(this.form4)
  this.form4.get('username').disable();
this.username=this.form4.get('username').value;
this.paswword=this.form4.get('password').value;
this.course=this.form4.get('courses1').value;
}
}