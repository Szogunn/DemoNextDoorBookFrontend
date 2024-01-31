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
      sublist: []
    },
    {
      routing: '/bookshelf',
      name: 'Bookshelf',
      icon: 'fa-solid fa-book',
      sublist: [
        {
          routing: '/bookshelf/add',
          name: 'Add',
          icon: 'fa-solid fa-house',
        }
        , {
          routing: '/bookshelf/show',
          name: 'Show my books',
          icon: 'fa-solid fa-house'
        },
        {
          routing: '/bookshelf/show',
          name: 'Show my neighbours books',
          icon: 'fa-solid fa-house'
        }]
    },
    {
      routing: '3',
      name: 'Products',
      icon: 'fa-solid fa-box',
      sublist: []
    },
    {
      routing: '4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
      sublist: []
    },
    {
      routing: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      sublist: []
    },
    {
      routing: '6',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
      sublist: []
    }
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  toggleSublist(item: any) {

  }

}
