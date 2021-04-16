import { Component } from '@angular/core';
import arrayWords from '../words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  limit = 10;
  words = '';
  handleSlideChange(newLimit:number){
    this.limit = newLimit;
  }

  generateWords(){
    this.words = arrayWords.slice(0,this.limit).join(" ");
  }
}
