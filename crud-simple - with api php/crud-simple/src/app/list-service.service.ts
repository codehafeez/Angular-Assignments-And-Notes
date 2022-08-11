import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListServiceService {
  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost/angular_api";
  getUsers(){
    return this.http.get(this.baseUrl+"/read.php");
  }

  insertUser(name:any, email:any, age:any){
    return this.http.post<any>(this.baseUrl+"/insert.php", { name,email,age });  
  }
}
