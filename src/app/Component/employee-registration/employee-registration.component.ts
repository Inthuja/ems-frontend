import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public role: string;
  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.role = user.role;
  }

}
