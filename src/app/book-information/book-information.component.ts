import { UserDTO } from './../models/UserDTO';
import { ExchangeService } from './../services/exchange.service';
import { Component, Input } from '@angular/core';
import { Book } from '../models/Book';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.scss']
})
export class BookInformationComponent {
  book: Book;
  exchangeForm: FormGroup;
  message: string;

  constructor(private route: ActivatedRoute,
    private exchangeService: ExchangeService,
    private fb: FormBuilder,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'))
      console.log(id);

      this.getBook(id);
    });

    this.exchangeForm = this.fb.group({
      endRent: ['', Validators.required]
    })
  }

  getBook(id: number) {
    this.bookService.getBook(id).subscribe({
      next: (response) => {
        this.book = response;
      }
    })
  }

  exchange() {
    this.exchangeService.exchange(this.book.id, this.exchangeForm.value.endRent).subscribe({
      next: (res) => {
        this.message = res.message;
      }, error: (err) => {
        if (err.status === 409) {
          this.message = err.message;
        }
      }
    })
  }
}
