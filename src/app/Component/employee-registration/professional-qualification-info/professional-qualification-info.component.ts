import { Component, OnInit } from '@angular/core';
import ProfessionalQualification from 'src/app/business-entities/professional-qualification';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Employee from 'src/app/business-entities/employe';

@Component({
  selector: 'app-professional-qualification-info',
  templateUrl: './professional-qualification-info.component.html',
  styleUrls: ['./professional-qualification-info.component.css']
})
export class ProfessionalQualificationInfoComponent implements OnInit {

  public id = 0;
  public professionalInfo: any;
  public employee = new Employee();


  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private apiService: ApiService
    ) { }

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
      this.professionalInfo = new ProfessionalQualification();
      this.professionalInfo.userDto = this.employee;
    }
  }

  public createNew(){
    this.apiService.createProfessional(this.professionalInfo).subscribe(res => {
      this.professionalInfo = new ProfessionalQualification();
      this.professionalInfo.userDto = this.employee;
    })
  }

  public updateInfo(){
    this.apiService.createProfessional(this.professionalInfo).subscribe(res => {
      this.professionalInfo = new ProfessionalQualification();
      this.professionalInfo.userDto = this.employee;
      this.router.navigate(['secured/employee-details/professional-info'], {queryParams: {user:this.professionalInfo.userDto.id}})
    })
  }


  public getById(id: number) {
    this.apiService.getProfessionalQualificationByid(id).subscribe(res => {
      this.professionalInfo = res;
    })
  }
  
}
