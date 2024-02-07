import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { ExchangeStatus } from '../models/ExchangeStatus.enum';

const url = environment.apiURL + '/exchange';
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private httpClient: HttpClient) { }

  public exchange(id: number, date: Date): Observable<any> {
    const endRent = date.toString();

    return this.httpClient.post(url + `/${id}`, null, {
      params: { endRent } // Ustawienie parametru exchangeStatus jako parametru zapytania
    });
  }

  public getUserRentalHistory(exchangesStatuses: string[]): Observable<any> {
    const params = { statuses: exchangesStatuses };
    return this.httpClient.get(url + "/history", { params: params });
  }

  public updateExchangeStatus(id: number, exchangeStatus: string): Observable<any> {
    return this.httpClient.post(url + `/update-status/${id}`, null, {
      params: { exchangeStatus } // Ustawienie parametru exchangeStatus jako parametru zapytania
    });
  }
}
