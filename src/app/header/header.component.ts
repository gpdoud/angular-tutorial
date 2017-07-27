import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: '<div><p>HeaderComponent</p></div>',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
