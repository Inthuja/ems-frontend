import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    public isAuthenticated(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.userName) {
        return true;
      } 
      return false;
    }
}
