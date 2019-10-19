import { Component, OnInit } from '@angular/core';
import AcadamicQualification from 'src/app/business-entities/acadamic-qualification';

@Component({
  selector: 'app-view-academic-info',
  templateUrl: './view-academic-info.component.html',
  styleUrls: ['./view-academic-info.component.css']
})
export class ViewAcademicInfoComponent implements OnInit {

  public accadamic: AcadamicQualification = new AcadamicQualification()
  constructor() { }

  ngOnInit() {
  }

}
