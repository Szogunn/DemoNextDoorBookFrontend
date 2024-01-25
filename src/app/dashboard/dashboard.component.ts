import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  message: String;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.test();
  }

  test() {
    this.service.test().subscribe((response) => {
      console.log(response);
      this.message = response.message;
    });
  }

}
