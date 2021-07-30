import { Component,  OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  cHangedValue:string = 'Permanent';
  setValue(e) {
    this.cHangedValue = e.target.value;
  }
 employees:{id:number,firstName:string,lastName:string,type:string}[]=[
  {
    "id": 153444,
    "firstName": "Tom",
    "lastName": "Cruise",
    "type":"Temporary"
  },
  {
    "id": 425452,
    "firstName": "James",
    "lastName": "Miller",
    "type":"Permanent"
  },
  {
    "id": 535355,
    "firstName": "Berkshire ",
    "lastName": "Hathaway ",
    "type":"Temporary"
  }
  ,
  {
    "id": 444242,
    "firstName": "James",
    "lastName": "Bond",
    "type":"Temporary"
  }
  ,
  {
    "id": 234324,
    "firstName": "Siya",
    "lastName": "Hathaway",
    "type":"Temporary"
  }
]

}
