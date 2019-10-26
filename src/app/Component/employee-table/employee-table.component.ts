import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/business-entities/employe';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  public employees: any
  constructor(private router: Router, private apiService: ApiService) { }


  ngOnInit() {
    this.apiService.getAllEmployees().subscribe(res => {
      this.employees = res;
    })

  }

  public navigateView(id: number) {
    this.router.navigate(['/secured/employee-details/profile'],{queryParams: {user: id}});
  }
}
