import { Component, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppName='Blogger';
  name="Hafiz Awais"
  getname(){
    return this.name
  }
  obj={
    Name:"Awais",
    age:20

  }
  arr=[
     'awais' ,20, 'peter' , 23
  ]
  a=40
  b=60
  siteURL=window.location.href
}
