import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      routing: '/home',
      name: 'home',
      icon: 'fa-solid fa-house',
    },
    {
      routing: '/bookshelf',
      name: 'Bookshelf',
      icon: 'fa-solid fa-book',
    },
    {
      routing: '3',
      name: 'Products',
      icon: 'fa-solid fa-box',
    },
    {
      routing: '4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      routing: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
    },
    {
      routing: '6',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
    }
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
