import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private title = null;
  private date = null;

  constructor() { }

  ngOnInit() {
    this.title = "Build Details";
    this.date = new Date();
  }

}
