import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  addBookForm: FormGroup | undefined;
  message: string;

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit() {
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
