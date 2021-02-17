import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRating = 5;

  @Input()
  selectedRate = 0;
  previousRate = 0;

  maxRatingArray = [];

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number){
    this.selectedRate = index;
  }

  handleMouseLeave(){
    if(this.previousRate !== 0){
      this.selectedRate = this.previousRate;
    }else{
      this.selectedRate = 0;
    }
  }

  public rate(index: number){
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
  }

}
