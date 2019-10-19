import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  public path = "";
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
