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

  ngOnInit() {}
  handleLogin() {
    if (this.username == "user" && this.password == "pass") {
      this.username = "";
      this.password = "";
      localStorage.setItem('login', 'true');
      this.router.navigate(["/secured/dashboard"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
