import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  storeUserData(data){
    console.log("data:", data);
    const body = JSON.stringify(data);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    })
    return this.http.post('/api/admin/user/signup', body, {headers: headers});
  }

  fetchUserData(){

  }
}
