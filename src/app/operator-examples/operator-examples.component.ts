import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, of, timer } from 'rxjs';
import { filter,map, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-operator-examples',
  templateUrl: './operator-examples.component.html'
})
export class OperatorExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //pipe is use to combine multiple operators
    //fileter will emmits only those value which are satisfied by given predicate
    //map will apply given project function on each value emmited by source observable  and emmits resulting values as an observable

  //   let obj=of(1,2,3,4,5,6);
  //   let case1=obj.pipe(
  //     filter(x=>x%2===0),
  //     map(y=>y*y)
  //   )
  //  case1.subscribe(x=>console.log('obs1 : =',x));

//mapTo will emmits given constant value when evry time source observable emmits value
    // let obj1=of(1,2,3,4,5,6);
    // let case2=obj1.pipe(
    // mapTo('HI')
    // )
    // case2.subscribe(x=>console.log(x))

//take opeartor is use to limit the
    const source=interval(1000)
   const example=source.pipe(mapTo("Hello world"),
     take(10));
   example.subscribe(x=>console.log(x));
   
   //

  //combine latest
  //Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.
     let obj4=of(1,2,3,4,5,6);
     let obj3=of(11,22,33,44,55,66);
      let obj5=of(30);
      const  output=combineLatest(obj3,obj4,obj5).subscribe(x=>console.log(x));

     //timer
     //Creates an Observable that starts emitting after an dueTime and emits ever increasing numbers after each period of time thereafter.
    // const numbers = timer(3000, 10000);
    // numbers.subscribe(x => console.log(x));

     }


}