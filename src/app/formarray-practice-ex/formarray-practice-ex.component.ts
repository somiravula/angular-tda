import { Component, OnInit } from '@angular/core';
import{FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-formarray-practice-ex',
  templateUrl: './formarray-practice-ex.component.html'
})
export class FormarrayPracticeExComponent implements OnInit {
reactiveform:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.reactiveform=this.formbuilder.group({
      movies:this.formbuilder.array([this.setMovie()])
    });
  }
  setMovie():FormGroup
  {
    return this.formbuilder.group({
      movieName:['Bahubali'],
      ratings:[],
      type:[]   
      
    })
  }
  addMovie()
  {
    this.movie.push(this.setMovie())
    console.log(this.movie)
  }

  get movie():FormArray
  {
   return this.reactiveform.get('movies') as FormArray;
  }


}