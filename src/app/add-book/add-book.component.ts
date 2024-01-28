import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Emitter } from '../emitters/authEmitter';
import { NotificationService } from '../services/notification.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  addBookForm: FormGroup | undefined;
  message: string;
  isAuth: boolean;

  constructor(private bookService: BookService,
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.isAuth = this.tokenStorage.isLoggedIn();
    this.addBookForm = this.fb.group({
      title: ['', Validators.required],
      ISBN: ['', Validators.required],
      language: ['', Validators.required],
      publisher: ['', Validators.required],
      publishedYear: ['', Validators.required],
      numPages: ['', Validators.required],
    })
  }

  addBook() {
    this.bookService.addBook(this.addBookForm.value).subscribe(
      (response) => {
        this.message = 'Książka została dodana';
        this.clearFields()
      }, (err) => {

      })
  }

  clearFields() {
    this.addBookForm.reset();
  }
}
