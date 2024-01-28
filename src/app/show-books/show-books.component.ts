import { Component, OnInit, PipeTransform } from '@angular/core';
import { BookService } from '../services/book.service';
import { TokenStorageService } from '../services/token-storage.service';
import DataTable from 'datatables.net-dt';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';

interface Book {
  Title: string;
  ISBN: string;
  Language: string;
  publicationDate: Date
  Wydawca: string;
  numPages: number
}

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent implements OnInit {
  books: any[];
  isAuth: boolean;


  constructor(private bookService: BookService,
    private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    this.isAuth = this.tokenStorage.isLoggedIn();

    this.bookService.showBooks().subscribe((response: any[]) => {
      this.books = response;
    });

  }




}
