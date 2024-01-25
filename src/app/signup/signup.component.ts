import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup | undefined;
  message: string;

  constructor(private service: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator })
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true })
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  signup() {
    this.service.signup(this.signupForm.value).subscribe(
      (response) => {
        this.message = 'Użytkownik poprawnie zarejestrowany';
        this.clearFields()
      })
  }

  clearFields() {
    this.signupForm.reset();
  }

}
