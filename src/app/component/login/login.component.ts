import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/store/users/users.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);

  onSignIn() {
    if (!this.email.value.includes('@')) {
      alert('Please Enter Valid Email');
      return;
    }
    // console.log(this.email.value, this.pass.value);
    const user = { email: this.email.value, password: this.pass.value };
    this.store.dispatch(addUser({ user: user }));
  }
}
