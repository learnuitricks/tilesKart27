import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
 
  @Input() rating:number = 0;
  ratingArray:Array<number>=[];
  newRating:string;
  @Output() ratingUpdated:EventEmitter<string> = new EventEmitter();
  constructor() {
       }

  ngOnInit() {
   
  }

  ngOnChanges(): void {
    for (let index = 0; index < this.rating; index++) {
      this.ratingArray.push(index);
    }
  }

  updateRating(){
    console.log(`new rating value  is ${this.newRating}`);
    this.ratingUpdated.emit(this.newRating);
  }


}
