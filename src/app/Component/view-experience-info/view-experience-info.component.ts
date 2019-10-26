import { Component, OnInit } from '@angular/core';
import Experience from 'src/app/business-entities/experience';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-experience-info',
  templateUrl: './view-experience-info.component.html',
  styleUrls: ['./view-experience-info.component.css']
})
export class ViewExperienceInfoComponent implements OnInit {

  private id: number;
  public experience: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private interactionService: InteractionService,
    private apiService: ApiService
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.get('user')){
        this.id = parseInt(params.get('user'));
        
      }
    })

    if(this.id) {
      this.getByEmployee();
    }
  }

  public getByEmployee(){
    this.apiService.getExperienceByEmployee(this.id).subscribe(result => {
      this.experience = result;
    })
  }
  public updateInfo(id: number) {
    this.router.navigate(['/secured/experience'], { queryParams: { id: id }})
}
public deleteInfo(id: number) {
  this.apiService.deleteExperience(id).subscribe(res => {
    this.getByEmployee();
  });
}
}
