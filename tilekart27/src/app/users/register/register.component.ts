import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  // userName:FormControl;
  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      userName: ['UI Tricks'],
      email: ['contact@uitricks.com'],
      phone: ['8088292978'],
      billingAdress: this.formBuilder.group({
        doorNumber: [],
        city : [],
        zip : []
      })
    })
    
  }

  ngOnInit() {
  }

  register(){
    console.log(this.registerForm.value);
  }

}
