import { Component, OnInit } from '@angular/core';
import AcadamicQualification from 'src/app/business-entities/acadamic-qualification';
import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-academic-info',
  templateUrl: './view-academic-info.component.html',
  styleUrls: ['./view-academic-info.component.css']
})
export class ViewAcademicInfoComponent implements OnInit {

  private id: number = 0;

  public acadamic : any;
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
      this.getByemployee()      
    }
  }


  public getByemployee() {
    this.apiService.getAccadamicQualificationByEmployee(this.id).subscribe( result => {
      this.acadamic = result;
    })
  }

  public updateInfo(id: number) {
    this.router.navigate(['/secured/academic-info'], { queryParams: { id: id }})
}
  public deleteInfo(id: number) {
    this.apiService.deleteAcadamic(id).subscribe(res => {
      this.getByemployee();
    });
  }
}
