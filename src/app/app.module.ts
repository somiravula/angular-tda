import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { ReactiveFormsExample2Component } from './reactive-forms-example-2/reactive-forms-example-2.component';
import { Reactiveformexample3Component } from './reactiveformexample3/reactiveformexample3.component';
import { Example4Component } from './example4/example4.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { NestedFormwithFormBuilderComponent } from './nested-formwith-form-builder/nested-formwith-form-builder.component';
import { FormarrayPracticeExComponent } from './formarray-practice-ex/formarray-practice-ex.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ReactiveFormsExampleComponent, ReactiveFormsExample2Component, Reactiveformexample3Component, Example4Component, NestedFormComponent, NestedFormwithFormBuilderComponent, FormarrayPracticeExComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
