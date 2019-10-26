import { Component, OnInit } from '@angular/core';
import ProfessionalQualification from 'src/app/business-entities/professional-qualification';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-professional-info',
  templateUrl: './view-professional-info.component.html',
  styleUrls: ['./view-professional-info.component.css']
})
export class ViewProfessionalInfoComponent implements OnInit {

  private id: number;
  public professionalInfo: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private interactionService: InteractionService,
    private apiService: ApiService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParamMap.subscribe(params => {
      if (params.get('user')) {
        this.id = parseInt(params.get('user'));

      }
    })

    if(this.id) {
      this.getByEmployee()
    }
  }

  public getByEmployee(){
    this.apiService.getProfessionalQualificationByEmployee(this.id).subscribe(result => {
      this.professionalInfo = result;
    })
  }
  public updateInfo(id: number) {
      this.router.navigate(['/secured/professional-info'], { queryParams: { id: id }})
  }
  public deleteInfo(id: number) {
    this.apiService.deleteProfessional(id).subscribe(res=> {
      this.getByEmployee();
    })
  }
}
