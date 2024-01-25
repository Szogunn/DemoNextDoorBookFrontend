import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const JWT = 'JWT';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }
  public saveUser(data: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, data.username);
  }

  public saveToken(data: any): void {
    window.sessionStorage.removeItem(JWT);
    window.sessionStorage.setItem(JWT, data.token);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public logout() {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(JWT);
  }
}
