import { Component } from '@angular/core';
import { MysServiceService } from './mys-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app2';
  myName = "";
  myAge = "";
  data=<any>[];
  constructor(private myS:MysServiceService){
    let data = this.myS.getUserData();
    this.myName = data.name;
    this.myAge = data.age+"";

    console.log(this.myS.getUsers());
    this.myS.getUsers().subscribe(data=>{
      this.data = data
    })
  }
}

