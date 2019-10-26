import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data.expectedRole;

    const user = JSON.parse(localStorage.getItem('user'));
    let can = false;
    expectedRole.forEach(role => {
      if(role == user.role) {
          can = true;
        }
    });
    if (
      !this.auth.isAuthenticated() || !can      
    ) {
      this.router.navigate([route.data.redirectTo]);
      return false;
    }
    return true;
  }
}