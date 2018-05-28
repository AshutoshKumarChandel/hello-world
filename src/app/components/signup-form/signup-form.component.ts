import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [UsernameValidators.cannotContainSpace, Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z ]*")], UsernameValidators.shouldBeUnique),
      password: new FormControl('', [UsernameValidators.cannotContainSpace, Validators.required, Validators.minLength(9), Validators.maxLength(25), Validators.pattern("[a-zA-Z0-9!@#$%^&*]*")])
    })
  });

  login() {
    this.form.setErrors({
      inValidLogin: true
    });
  }

  get password() {
    return this.form.get('account.password');
  }

  get username() {
    return this.form.get('account.username');
  }
}
