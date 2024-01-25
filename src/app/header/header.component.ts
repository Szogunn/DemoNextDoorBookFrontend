import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { NotificationService } from '../services/notification.service';
import { Emitter } from '../emitters/authEmitter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  isLoggedIn: boolean = false;


  constructor(private storageService: TokenStorageService,
    private notification: NotificationService) { }


  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  ngOnInit(): void {
    this.notification.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = this.storageService.isLoggedIn();
    });
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  getUsername(): string {
    return this.storageService.getUser();
  }

  logout() {
    this.storageService.logout();
    Emitter.authEmitter.emit(false)
  }

}
