import { Exchange } from './../models/Exchange';
import { ExchangeService } from './../services/exchange.service';
import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { ExchangeStatus } from '../models/ExchangeStatus.enum';

@Component({
  selector: 'app-exchange-request',
  templateUrl: './exchange-request.component.html',
  styleUrls: ['./exchange-request.component.scss']
})
export class ExchangeRequestComponent {
  exchanges: Exchange[];
  isAuth: boolean;
  acceptStatus = ExchangeStatus.ACCEPTED;
  rejectStatus = ExchangeStatus.REJECTED;

  constructor(private exchangeService: ExchangeService,
    private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    this.isAuth = this.tokenStorage.isLoggedIn();
    if (this.isAuth) {
      this.onCheckboxChange();
    }


  }

  onCheckboxChange() {
    this.exchangeService.getUserRentalHistory([ExchangeStatus.PENDING]).subscribe({
      next: (response: Exchange[]) => {
        this.exchanges = response;
        console.log(this.exchanges);
      }
    });
  }

  changeExchangeStatus(exchangeId: number, exchangeStatus: ExchangeStatus) {
    console.log(exchangeStatus);

    this.exchangeService.updateExchangeStatus(exchangeId, exchangeStatus).subscribe({
      next: (response: Exchange) => {
        console.log(response);
        window.location.reload()
      }
    })
  }
}
