import { Component, OnInit } from '@angular/core';
import ProfessionalQualification from 'src/app/business-entities/professional-qualification';

@Component({
  selector: 'app-professional-qualification-info',
  templateUrl: './professional-qualification-info.component.html',
  styleUrls: ['./professional-qualification-info.component.css']
})
export class ProfessionalQualificationInfoComponent implements OnInit {

  public professionalInfo : ProfessionalQualification = new ProfessionalQualification();
  constructor() { }

  ngOnInit() {
  }

}
