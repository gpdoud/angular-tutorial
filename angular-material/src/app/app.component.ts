import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  matMenu;

  anArray = [
    { id: 1, name: 'Greg', age: 60 }
  ];
  colsToDisplay = [ 'id', 'name', 'age' ];

  log() {
    console.log("Log");
  }
}
