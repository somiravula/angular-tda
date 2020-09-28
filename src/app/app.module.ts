import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormsExampleComponent } from './reactive-forms-example/reactive-forms-example.component';
import { ReactiveFormsExample2Component } from './reactive-forms-example-2/reactive-forms-example-2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ReactiveFormsExampleComponent, ReactiveFormsExample2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
