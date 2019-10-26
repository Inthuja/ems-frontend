import { Component, OnInit } from '@angular/core';
import Experience from 'src/app/business-entities/experience';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Employee from 'src/app/business-entities/employe';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {

  public id = 0;
  public experience: any;
  public employee = new Employee();
  
  constructor(private activatedRoute : ActivatedRoute, private apiService: ApiService,
      private router : Router
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
      this.experience = new Experience();
      this.experience.userDto = this.employee;
    }
  }

  public createNew(){
    this.apiService.createExperience(this.experience).subscribe(res => {
      this.experience = new Experience();
      this.experience.userDto = this.employee;
    })
  }

  public update(){
    this.apiService.createExperience(this.experience).subscribe(res => {
      this.experience = new Experience();
      this.experience.userDto = this.employee;
      this.router.navigate(['secured/employee-details/experience'], {queryParams: {user:this.experience.userDto.id}})
    })
  }

  public getById(id: number) {
    this.apiService.getExperienceByid(id).subscribe((res:any) => {
      this.experience = res;
      this.employee.id = res.userDto.id;
      this.experience.userDto = this.employee;
    })
  }

}
