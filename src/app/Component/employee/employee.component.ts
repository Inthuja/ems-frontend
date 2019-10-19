import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private id : number;
  constructor(private interactionService: InteractionService) { }


  ngOnInit() {  
      this.interactionService.getUser().subscribe(id => {
        if(id != 0)
        {this.id = id;}
      })
  }

}
