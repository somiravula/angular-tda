import { Component } from '@angular/core';
import { FormArray, FormBuilder,  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forms-2',
  templateUrl: './reactive-forms-example-2.component.html',
})
export class ReactiveFormsExample2Component  {
  public fg: FormGroup;
  public dbData = ["Cricket", "Football", "Watching TV"];
  constructor(private fb: FormBuilder) {

  }
  public ngOnInit(): void {
    this.fg = this.fb.group({
      firstName: ['somesh'],
      interests: this.fb.array(this.dbData.map(i => this.fb.control(true)))
    });

//to get controle
    this.fg.get('firstName').valueChanges.subscribe(value => {
      console.log("Firstname: " + value);

    })
//to get final value
   console.log(this.fg.get('interests').value);
  // this.fg.setValue({firstName:'Nilima',interests:[true,false,true]});
  this.fg.patchValue({firstName:'Nilu'})
  }

  
}