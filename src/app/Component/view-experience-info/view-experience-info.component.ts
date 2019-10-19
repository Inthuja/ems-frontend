import { Component, OnInit } from '@angular/core';
import Experience from 'src/app/business-entities/experience';

@Component({
  selector: 'app-view-experience-info',
  templateUrl: './view-experience-info.component.html',
  styleUrls: ['./view-experience-info.component.css']
})
export class ViewExperienceInfoComponent implements OnInit {

  
  public experience: Experience = new Experience();
  constructor() { }

  ngOnInit() {
  }

}
