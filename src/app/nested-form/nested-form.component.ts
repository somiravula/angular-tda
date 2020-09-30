import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
})
export class NestedFormComponent implements OnInit {
  nestedForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.nestedForm = new FormGroup(
      {
        username: new FormControl(),
        email: new FormControl(),
        skills: new FormGroup({
          skillname: new FormControl(),
          experience: new FormControl(),
          proficiency: new FormControl()
        })
      });
  }
  Save() {
    console.log(this.nestedForm.value)
  }
  LoadData() {
    //to assign value to form control setValue and patchvalue method
    //setValue requires all field shuld be give values  or use to update all form controls  values 
    // this.nestedForm.setValue({
    //   username: 'Snehesh',
    //   email: 's@gmail.com',
    //   skills: {
    //     skillname: 'Angular',
    //     experience: '2',
    //     proficiency: 'Intermediate'
    //   }
    // })

    //use to update subset of form controls   values
        this.nestedForm.patchValue({
      username: 'Snehesh',
      email: 's@gmail.com',
      skills: {
        skillname: 'Angular',
       // experience: '2',
        proficiency: 'Intermediate'
      }
    })
  }
}