import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public role : string;
  constructor() { }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.role = user.role;
  }

}
