import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  username: string;
  password: string;

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.userName) {
      this.router.navigate(["/secured/dashboard"]);
    }
  }
  handleLogin() {
    if (this.username == "user" && this.password == "pass") {
      localStorage.setItem('user', JSON.stringify({userName: this.username, role: 'hr'}));
      this.username = "";
      this.password = "";
      this.router.navigate(["/secured/dashboard"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
