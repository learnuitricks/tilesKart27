import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements  CanActivate{

  canActivate():boolean{
    if(sessionStorage.getItem('user')==null || sessionStorage.getItem('user')==''){
      return false;
    }
    else
    {
      return true;
    }
  }

}
