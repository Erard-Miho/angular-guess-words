import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { lorem } from 'faker';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-builtin-game',
  templateUrl: './builtin-game.component.html',
  styleUrls: ['./builtin-game.component.scss']
})
export class BuiltinGameComponent  {


  randomText = lorem.sentence();

  items='';
  newItems='';

  compare(randomLetters: string, enteredLetters: string){
    if (!enteredLetters){
      return 'pending';
    }

    return randomLetters === enteredLetters ? 'correct' : 'incorrect';
  }

  constructor() {


   }

   count = 20

   startCountDown(){
     if(this.count){
       this.doCountDown();
     }
   }

   doCountDown(){
     setTimeout(()=>{
       this.count = this.count -1;
       this.processCountDown();
     }, 1000)
   }

   processCountDown(){
     console.log("counting is: ", this.count);

     if(this.count == 0){
       console.log("finished");
     } else{
       this.doCountDown();
     }
   }
  ngOnInit(): void {
   this.startCountDown()
  }

}
