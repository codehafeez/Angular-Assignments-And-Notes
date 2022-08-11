import { Component } from '@angular/core';
import { ListServiceService } from './list-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'crud-simple';  
  
  dataList=<any>[];
  constructor(private myServiceList:ListServiceService){
    this.myServiceList.getUsers().subscribe(data=>{
      this.dataList = data
    })
  }
  
  addUser(value: any){
    if(value.name.length > 0 && value.email.length > 0 && value.age > 0){
      this.myServiceList.insertUser(value.name, value.email, value.age).subscribe(data=>{
        if(data[0].message == "success"){
          this.myServiceList.getUsers().subscribe(data=>{ this.dataList = data })
        }
        else { alert(data[0].message); }
      })
    }
    else { alert('Please enter all the data.'); }
  }

}
