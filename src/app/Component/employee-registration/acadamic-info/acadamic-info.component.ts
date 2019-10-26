import { Component, OnInit } from '@angular/core';
import AcadamicQualification from 'src/app/business-entities/acadamic-qualification';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Employee from 'src/app/business-entities/employe';

@Component({
  selector: 'app-acadamic-info',
  templateUrl: './acadamic-info.component.html',
  styleUrls: ['./acadamic-info.component.css']
})
export class AcadamicInfoComponent implements OnInit {

  public id = 0;
  public acadamicInfo : any
  public employee = new Employee();

  constructor(private activatedRoute : ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {

    const user = JSON.parse(localStorage.getItem('user'));
    this.employee.id = user.userId;
    
    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('id')) {
        this.id = parseInt(params.get('id'));
      }
    })

    if (this.id) {
      this.getById(this.id);
    } else {
      this.acadamicInfo = new AcadamicQualification();
      this.acadamicInfo.userDto = this.employee;
    }
  }

  public createNew() {
    this.apiService.createAcadamic(this.acadamicInfo).subscribe(res => {
      this.acadamicInfo = new AcadamicQualification();
      this.acadamicInfo.userDto = this.employee;
    })
  }

  public update(info) {   
    this.apiService.createAcadamic(info).subscribe(res => {      
      this.acadamicInfo = new AcadamicQualification();
      this.acadamicInfo.userDto = this.employee;
      this.router.navigate(['secured/employee-details/academic-info'], {queryParams: {user:this.acadamicInfo.userDto.id}})
    })
  }

  public getById(id: number) {
    this.apiService.getAccadamicQualificationById(id).subscribe(res => {
      this.acadamicInfo = res;
    })
  }
}
