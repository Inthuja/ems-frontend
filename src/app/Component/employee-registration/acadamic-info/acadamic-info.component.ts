import { Component, OnInit } from '@angular/core';
import AcadamicQualification from 'src/app/business-entities/acadamic-qualification';

@Component({
  selector: 'app-acadamic-info',
  templateUrl: './acadamic-info.component.html',
  styleUrls: ['./acadamic-info.component.css']
})
export class AcadamicInfoComponent implements OnInit {

  public acadamicInfo :AcadamicQualification = new AcadamicQualification();
  constructor() { }

  ngOnInit() {
  }

}
