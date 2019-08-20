import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  // userName:FormControl;
  constructor() { 
    this.registerForm = new FormGroup({
      userName: new FormControl('UI Tricks'),
      email: new FormControl('contact@uitricks.com'),
      phone: new FormControl('8088292978'),
      billingAdress: new FormGroup({
        doorNumber: new FormControl(),
        city : new FormControl(),
        zip : new FormControl()
      })
    })
    
  }

  ngOnInit() {
  }

  register(){
    console.log(this.registerForm.value);
  }

}
