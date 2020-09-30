import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-formwith-form-builder',
  templateUrl: './nested-formwith-form-builder.component.html'
})
export class NestedFormwithFormBuilderComponent implements OnInit {
  nestedForm: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.nestedForm=this.fb.group(
      {
        username:[''],
        email: [''],
        skills: this.fb.array([
          this.AddSkill()
        ])
        
      });

  
  // this.nestedForm.get('email').valueChanges.subscribe(s=>
  // {
  //   console.log(s)
  // })
  //   this.nestedForm.valueChanges.subscribe((formvalues:any)=>
  // {
  //   console.log(JSON.stringify(formvalues));
  // })
    // this.nestedForm.get('skills').valueChanges.subscribe(value => {
    //   console.log(JSON.stringify(value));
    // })
  }
  AddSkill():FormGroup
  {
  return this.fb.group({
          skillname:[''],
          experience: [''],
          proficiency:['Beginner']
        })
  }

}