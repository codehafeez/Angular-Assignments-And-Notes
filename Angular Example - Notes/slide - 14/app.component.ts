import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyApp';

  getFormData(value:any){
    alert("Name : "+value.name+"\n Age : "+value.age);
  }
}
