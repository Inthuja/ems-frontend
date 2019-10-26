import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private apiService: ApiService) {}

  username: string;
  password: string;

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.userName) {
      this.router.navigate(["/secured/dashboard"]);
    }
  }
  handleLogin() {
    if (this.username !== "" && this.password !== "") {
      this.apiService.authenticate(this.username, this.password).subscribe(auth => {
        if (auth) {
          console.log(auth);
          localStorage.setItem('user', JSON.stringify(auth));
          this.username = "";
          this.password = "";
          this.router.navigate(["/secured/dashboard"]);
        } else {
          this.router.navigate(["/login"]);
        }
      })
  }
}
}
