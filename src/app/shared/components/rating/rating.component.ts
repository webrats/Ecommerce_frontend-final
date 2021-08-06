import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() star = "";  
  constructor() { }

  ngOnInit(): void {
  }

  rating(){
    return `<i class='fa fa-star'></i><i class='fa fa-star'></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>`
  }

}
