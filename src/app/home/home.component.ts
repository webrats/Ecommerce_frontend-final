import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  
  slides: string [] = ['assets/images/21.jpg', 'assets/images/44.jpg', 'assets/images/bg3.jpg' ]
    i=0;

    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }
//edit here    
    getNext() {
        this.i = this.i===(this.slides.length-1) ? this.i%(this.slides.length-1): this.i + 1;
    }


  
}
