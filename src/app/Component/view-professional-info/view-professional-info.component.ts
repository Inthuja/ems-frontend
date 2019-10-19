import { Component, OnInit } from '@angular/core';
import ProfessionalQualification from 'src/app/business-entities/professional-qualification';

@Component({
  selector: 'app-view-professional-info',
  templateUrl: './view-professional-info.component.html',
  styleUrls: ['./view-professional-info.component.css']
})
export class ViewProfessionalInfoComponent implements OnInit {

  public professionalInfo : ProfessionalQualification = new ProfessionalQualification();
  constructor() { }

  ngOnInit() {
  }

}
