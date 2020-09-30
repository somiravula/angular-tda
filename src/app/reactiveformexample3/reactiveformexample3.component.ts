import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'form-3',
  templateUrl: './reactiveformexample3.component.html'
})
export class Reactiveformexample3Component {

public example3Form:FormGroup;
public hobby=["Playing","Travellig","Net Surffing"];
  constructor(private fb:FormBuilder) { }

  ngOnInit():void {
    this.example3Form=new FormGroup({
     firstname:new FormControl(null),
     lastname:new FormControl(null),
      //hobbies: this.fb.array(this.hobby.map(i => this.fb.control(true)))
     hobbies:new FormArray(this.hobby.map(i => new FormControl()))
    });
    
  }

}