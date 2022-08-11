import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app3';
  constructor(
      private viewContainer:ViewContainerRef, 
      private cfr:ComponentFactoryResolver){}

  async loadAdmin(){
    this.viewContainer.clear();
    const { ListComponent } = await import('./admin/list/list.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    );
  }
  async loadUser(){
    this.viewContainer.clear();
    const { LoginComponent } = await import('./user/login/login.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(LoginComponent)
    );
  }
}
