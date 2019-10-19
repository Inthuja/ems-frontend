import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private user = new BehaviorSubject<number>(0);

    sendUser(user: number) {
      this.user.next(user);
    }

    getUser(): Observable<number> {
      return this.user.asObservable();
    }

}
