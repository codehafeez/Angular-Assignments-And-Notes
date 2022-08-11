import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MysServiceService {

  constructor(private http:HttpClient) { }
  getUsers(){
    let url = "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }

  getUserData(){
    return{
      name:"Abdul Hafeez",
      age: 24
    }
  }

}
