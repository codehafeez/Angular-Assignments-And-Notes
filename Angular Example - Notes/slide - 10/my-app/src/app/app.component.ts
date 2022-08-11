import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeHafeez_Example-01';

  myNameIs = 'Abdul Hafeez';

  getMyName(){
    return this.myNameIs;
  }

  objData = {
    name: "Abdul Hafeez",
    age:24
  }

  myArr = ['Ali', 'Hafeez', 'Usman'];
}
