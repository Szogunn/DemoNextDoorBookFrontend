import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


const url = environment.apiURL + '/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  addBook(book: any): Observable<any> {
    console.log(book);

    return this.httpClient.post(url + "/add", book)
  }

  showBooks(): Observable<any> {
    console.log("wywołane");

    return this.httpClient.get(url + "/show")
  }

}
