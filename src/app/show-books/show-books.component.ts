import { Component, OnInit, PipeTransform } from '@angular/core';
import { BookService } from '../services/book.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Book } from '../models/Book';


@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent implements OnInit {
  books: Book[];
  isAuth: boolean;
  myBook: boolean = true;


  constructor(private bookService: BookService,
    private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    this.isAuth = this.tokenStorage.isLoggedIn();
    if (this.isAuth) {
      this.onCheckboxChange();
    }


  }

  onCheckboxChange() {
    this.books = []
    if (this.myBook) {
      this.bookService.showBooks().subscribe((response: Book[]) => {
        console.log(response);

        this.books = response;
      });
    } else {
      this.bookService.showNeighboursBooks().subscribe(
        (response) => {
          this.books = response;
        });
    }
  }



}
