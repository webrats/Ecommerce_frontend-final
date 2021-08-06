import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chekcout-details',
  templateUrl: './chekcout-details.component.html',
  styleUrls: ['./chekcout-details.component.scss']
})
export class ChekcoutDetailsComponent implements OnInit {

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  checkout :FormGroup ; 
  ngOnInit(): void {
    this.checkout = new FormGroup({
      country : new FormControl(null,[Validators.required ,Validators.minLength(5)]),
      address : new FormControl( null,[Validators.required]),
      district: new FormControl(null,[Validators.required]),
      pin : new FormControl(null,[Validators.minLength(6) ]),
  
    });
  }

  checkoutConfirm(){
    console.log(this.checkout)
this.router.navigate(['checkout/confirm'])
  }

  userNameField(){

  }

   passwordField(){

  }
}
