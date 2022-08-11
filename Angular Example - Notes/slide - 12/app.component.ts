import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeHafeez_Example-01';

  fun1(){
    alert("Simple Function");
  }

  fun2(data?: any){
    alert("My name is : "+data);
  }

  products = ['value1', 'value2'];
  students = [
    {
      name: "Abdul",
      age: 20
    },
    {
      name: "Usman",
      age: 25
    }
  ];

  loding = true;
  isLogin = false;
  myNumberValue = 5;

  getColor(country?: any) 
  {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
      default: return 'Black';
    }
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
  ];  

  myColorValue = 'green';  
  myClassValue = "myClassValue";
  serverStatus: string = 'Offline';  
  myColor() {  
    return this.serverStatus === 'Online' ? 'green' : 'red';  
  }    
}
