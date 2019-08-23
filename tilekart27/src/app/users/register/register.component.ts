import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  zipCode:string = '^[1-9][0-9]{5}$';
  registerForm:FormGroup;
  saveMessage:string='';
  // userName:FormControl;
  constructor(private formBuilder: FormBuilder, private userService:UserService) { 
    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.required],
      email: ['contact@uitricks.com'],
      phone: ['8088292978'],
      billingAdress: this.formBuilder.group({
        doorNumber: [],
        city : [],
        zip : ['',[Validators.required,Validators.pattern(this.zipCode)]]
      })
    })
    
  }

  ngOnInit() {
  }

  register(){
    //console.log(this.registerForm.value);
    this.userService.createUser(this.registerForm.value).subscribe((message)=>{
      console.log(message);
      this.saveMessage = message;
    })
  }

}
