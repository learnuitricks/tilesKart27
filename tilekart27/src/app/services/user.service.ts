import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userAPIURL : string = "http://demo5911200.mockable.io/user";
  constructor(private httpClient: HttpClient) { }

  createUser(user):Observable<string>{
    return this.httpClient.post<string>(this.userAPIURL,user,httpOtions)
  }
}

const httpOtions = {
  headers: new HttpHeaders(
    {
      'Content-Type':'application/json',
      'Authorization':'mytoken'
    }
  )
}
