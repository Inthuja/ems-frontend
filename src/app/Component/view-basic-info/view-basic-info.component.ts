import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Employee from 'src/app/business-entities/employe';
import { InteractionService } from 'src/app/services/interaction.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-basic-info',
  templateUrl: './view-basic-info.component.html',
  styleUrls: ['./view-basic-info.component.css']
})
export class ViewBasicInfoComponent implements OnInit {

  private id: number = 0;
  public basicInfo: any;
  public nameList: any;
  public logedUserRole: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private interactionService: InteractionService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.logedUserRole = user.role;

    if (this.logedUserRole === 'employee') {
      this.id = user.userId;  
      this.interactionService.sendUser(this.id);    
    }    

    if (this.logedUserRole !== 'employee') {
      this.apiService.getAllEmployeeNames().subscribe(list => {
        this.nameList = list;
      })

    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('user')) {
        this.id = parseInt(params.get('user'));
        this.onUserChange();
      }
    })
    }

    if (this.id) {
      this.getEmployeeById(this.id);
    }
  }

  public navigateUpdate() {
    this.router.navigate(['/secured/profile'], { queryParams: { user: this.id }});
  }

  public onUserChange() {
    this.interactionService.sendUser(this.id);
    this.getEmployeeById(this.id)
  }

  public getEmployeeById(id: number) {
    this.apiService.getEmployeeById(id).subscribe(employee => {
      this.basicInfo = employee;
    })
  }
}
