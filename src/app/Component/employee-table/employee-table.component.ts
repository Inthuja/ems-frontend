import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/business-entities/employe';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  public employees: Employee[] = [{
    fullname: "anushanth",
    dateOfBirth: new Date('01/013/1993'),
    joinDate: new Date('10/10/2019'),
    civilStatus: "Single",
    contactNo: 756942988,
    email: 'anushanu@live.com',
    address: 'chenkalady',
    religion: 'Hindu',
    gender: "male",
    nic: "930131431v"
  }];
  constructor() { }


  ngOnInit() {
  }

}
