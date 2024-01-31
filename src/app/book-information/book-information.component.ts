import { ExchangeService } from './../services/exchange.service';
import { Component, Input } from '@angular/core';
import { Book } from '../models/Book';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.book = {
        id: parseInt(params.get('id')),
        title: params.get('title'),
        ISBN: params.get('ISBN'),
        language: params.get('language'),
        publishedYear: new Date(Date.parse(params.get('publishedYear'))),
        publisher: params.get('publisher'),
        numPages: parseInt(params.get('numPages')),
        owner: params.get('owner')
      };
    });

    this.exchangeForm = this.fb.group({
      endRent: ['', Validators.required]
    })
  }

  exchange() {
    console.log(this.exchangeForm.value);
    this.exchangeService.exchange(this.book.id, this.exchangeForm.value.endRent).subscribe(
      (res) => {
        this.message = res.message;
      }
    )
  }
}
