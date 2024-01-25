import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor() { }

  private loggedInSubject = new Subject<boolean>();

  loggedIn$ = this.loggedInSubject.asObservable();

  notifyLoggedIn(): void {
    this.loggedInSubject.next(true);
  }
}
