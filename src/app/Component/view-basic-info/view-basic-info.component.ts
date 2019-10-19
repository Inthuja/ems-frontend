import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Employee from 'src/app/business-entities/employe';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-view-basic-info',
  templateUrl: './view-basic-info.component.html',
  styleUrls: ['./view-basic-info.component.css']
})
export class ViewBasicInfoComponent implements OnInit {

  private id : number;
  public basicInfo: Employee;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private interactionService: InteractionService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      if(params.get('user')){
        this.id = parseInt(params.get('user'));
        this.onUserChange();
      }

    })
  }

  public navigateUpdate() {
    this.router.navigate(['/secured/profile'],{queryParams: {user: this.id}});
  }

  public onUserChange() {
    this.interactionService.sendUser(this.id);
    this.basicInfo = {
      id:1,
      fullname: "anushanth",
      dateOfBirth: new Date('01/013/1993'),
      joinDate: new Date('10/10/2019'),
      civilStatus: "Single",
      contactNo: 756942988,
      email: 'anushanu@live.com',
      address: 'chenkalady',
      religion: 'Hindu',
      gender: "male",
      nic: "930131431v"
    }
    console.log(this.id)
  }
}
