import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forms',
  templateUrl: './reactive-forms-example.component.html',
})
export class ReactiveFormsExampleComponent  {
  public fg: FormGroup;
  public dbData = ["Cricket", "Football", "Watching TV"];
  public ngOnInit(): void {
    this.fg = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: "blur",
      }),
      interests: new FormArray(this.dbData.map(i => new FormControl())),
    });

    this.fg.valueChanges.subscribe(value => {
      console.log(value.interests.toString());
    });

    this.fg.get('firstName').valueChanges.subscribe(value => {
      console.log("Firstname: " + value);
    })
  }
}

// formGroup.valueChanges, formControl.valueChanges, 
// FormControl extends AbstractControl
// FormArray extends AbstractControl
// FormGroup extends AbstractControl