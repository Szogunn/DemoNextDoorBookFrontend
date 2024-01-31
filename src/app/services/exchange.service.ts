import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

const url = environment.apiURL + '/exchange';
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient) { }

  public exchange(id: number, endRent: Date): Observable<any> {
    return this.httpClient.post(url + "/get", { id, endRent });
  }
}
