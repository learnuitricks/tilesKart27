import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string ='';
  passWord:string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.userName == null || this.userName == ""){
      console.log('user name is required');
      alert('user name is required');
    }
    else
    {
      sessionStorage.setItem('user',this.userName);
      this.router.navigate(['/tiles']);
    }
  }

}
