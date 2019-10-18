import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/business-entities/employe';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})

export class BasicInfoComponent implements OnInit {

  public basicInfo: Employee = new Employee();
  constructor() {
    this.basicInfo.gender = "-1";
    this.basicInfo.religion = "-1";
    this.basicInfo.civilStatus = "-1";

   }

  ngOnInit() {
  }

}
