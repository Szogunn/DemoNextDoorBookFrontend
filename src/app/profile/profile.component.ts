import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formAddress: FormGroup | undefined;
  isAuth: boolean;
  message: string;

  constructor(private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService,
    private userService: UserService) { };

  ngOnInit() {
    this.isAuth = this.tokenStorage.isLoggedIn();
    this.formAddress = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      houseNumber: ['', Validators.required],
      zipCode: ['', Validators.required]
    })
  }

  addAddress() {
    this.userService.addAddress(this.formAddress.value).subscribe({
      next: (res) => {
        this.message = res.message;
        this.isAuth = true;
        this.clearFields();
      }
    })
  }

  clearFields() {
    this.formAddress.reset();
  }
}
