import { Component, OnInit } from '@angular/core';
import Experience from 'src/app/business-entities/experience';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent implements OnInit {


  public experience: Experience = new Experience();
  constructor() { }

  ngOnInit() {
  }

}
