import { UserDTO } from './../models/UserDTO';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../models/Address';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  mojaMapa: Map<string, any> = new Map<string, any>();
  address: Address;
  user: UserDTO;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserProfile()
  }

  getUserProfile() {
    let id: number;
    this.route.paramMap.subscribe(params => {
      id = parseInt(params.get('id'))
    });

    this.userService.getUserProfile(id).subscribe({
      next: (response) => {
        this.address = response.addressDTO;
        this.user = response.userDTO;
        this.mojaMapa.set('bookAmount', response.bookAmount)
        this.mojaMapa.set('booksBorrowedAmount', response.booksBorrowedAmount)
        this.mojaMapa.set('booksLentAmount', response.booksLentAmount)
        console.log(this.mojaMapa);

      }
    })
  }

}
