import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // this.parentFunction.emit('hello')
    let myData = {name:'Hafeez', age:24 };
    this.parentFunction.emit(myData)
  }

}
