import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  public signup(signupRequest: any): Observable<any> {
    return this.httpClient.post(this.url + "/user/signup", signupRequest)
  }

  public generateToken(loginRequest: any): Observable<any> {
    return this.httpClient.post(this.url + "/user/login", loginRequest)
  }

  public test(): Observable<any> {
    return this.httpClient.get(this.url + "/test", {
      headers: this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT')
    if (jwtToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }
}
