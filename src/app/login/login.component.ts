import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | undefined;

  errorMessage: string;

  constructor(private service: UserService,
    private fb: FormBuilder,
    private router: Router,
    private storageService: TokenStorageService,
    private notification: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login1() {
    this.service.generateToken(this.loginForm.value).subscribe(
      (response) => {
        if (response.token) {
          this.storageService.saveUser(response);
          this.storageService.saveToken(response);
          this.notification.notifyLoggedIn();
          this.router.navigateByUrl('home');
        } else {
          console.log("zalogowanie response" + response);
        }
      },
      (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Niepoprawna nazwa użytkownika lub hasło';
          this.clearFields()
        }
      })
  }

  login() {
    const formValue = this.loginForm.value
    this.service.generateToken(this.loginForm.value).subscribe({
      next: (res) => {
        this.storageService.saveUser(res);
        this.storageService.saveToken(res);
        this.notification.notifyLoggedIn();
        this.router.navigateByUrl('home');
      }, error: (err) => {
        if (err.status === 401) {
          this.errorMessage = 'Niepoprawna nazwa użytkownika lub hasło';
          this.clearFields()
        }
      }
    })
  }


  clearFields() {
    this.loginForm.reset();
  }


}
