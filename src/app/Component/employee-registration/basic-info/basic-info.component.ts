import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/business-entities/employe';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Role from 'src/app/business-entities/role';
import Login from 'src/app/business-entities/login';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})

export class BasicInfoComponent implements OnInit {

  public basicInfo: any
  public edit = false;
  public id: number = 0;
  public newEmpId: number;

  public roleList : Role [] = [{roleName: 'hr', id: 3},{roleName: 'employee', id: 2}, {roleName: 'admin', id: 1}]
  
  public login: Login = new Login();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {
    
  }

  ngOnInit() {

    const role = new Role();
    role.id = -1;
    this.login.roleDto = role;

    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('user')) {
        this.id = parseInt(params.get('user'));
        this.edit = true;
      }

    })

    if (this.id) {
      this.getEmpoyee(this.id)
    } else {
      this.basicInfo = new Employee();
      this.basicInfo.gender = "-1";
      this.basicInfo.religion = "-1";
      this.basicInfo.maritalStatus = "-1";
    }

  }

  public getEmpoyee(id: number) {
    this.apiService.getEmployeeById(id).subscribe(res => {
      this.basicInfo = res;
    })
  }

  public saveEmployee() {
    this.apiService.createEmployee(this.basicInfo).subscribe((res:any) => {
      this.login.userDto = res;

    })
  }

  public saveLogin() {
    this.apiService.createLogin(this.login).subscribe(res => {
      // launch popup

    })
  }

  public updateEmployee() {
    this.apiService.createEmployee(this.basicInfo).subscribe((res:any) => {
      this.login.userDto = res;
      this.router.navigate(['secured/employee-details/profile'])
    })
  }
}
