import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Emitter } from '../emitters/authEmitter';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username = null;

  constructor(private homeService: HomeService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.homeService.accessHome().subscribe({
      next: (res) => {
        this.username = this.tokenStorage.getUser()
        Emitter.authEmitter.emit(true)
      }, error: (err) => {
        Emitter.authEmitter.emit(false)
      }
    })
  }


}
