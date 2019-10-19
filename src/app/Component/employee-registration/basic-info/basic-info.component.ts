import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/business-entities/employe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})

export class BasicInfoComponent implements OnInit {

  public basicInfo: Employee = new Employee();
  public edit = false;
  public id : number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.basicInfo.gender = "-1";
    this.basicInfo.religion = "-1";
    this.basicInfo.civilStatus = "-1";

   }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.get('user')){
        this.id = parseInt(params.get('user'));
        this.edit = true;
      }

    })
  }

}
