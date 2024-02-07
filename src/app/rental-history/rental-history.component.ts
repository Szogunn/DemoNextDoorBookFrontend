import { ExchangeStatus } from './../models/ExchangeStatus.enum';
import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { Exchange } from '../models/Exchange';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-rental-history',
  templateUrl: './rental-history.component.html',
  styleUrls: ['./rental-history.component.scss']
})
export class RentalHistoryComponent implements OnInit {
  exchangeStatuses = Object.values(ExchangeStatus);
  selectedStatuses: { [key: number]: boolean } = {};
  user: string;
  exchanges: Exchange[];

  constructor(private exchangeService: ExchangeService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.hasSelectedStatuses()
    this.user = this.tokenStorageService.getUser();
  }

  public getUserRentalHisotry() {
    const selectedStatuses = Object.keys(this.selectedStatuses)
      .filter(key => this.selectedStatuses[key])
      .map(key => key);

    this.exchangeService.getUserRentalHistory(selectedStatuses).subscribe({
      next: (res: Exchange[]) => {
        this.exchanges = res
      }
    })
  }

  hasSelectedStatuses(): boolean {
    return Object.values(this.selectedStatuses).some(value => value === true);
  }


}
