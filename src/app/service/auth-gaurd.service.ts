import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/users/users.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
  constructor(private router: Router, private store: Store) {}
  isLoggedIn$!: boolean;

  canActivate() {
    this.store
      .select(selectUser)
      .subscribe((res) => (this.isLoggedIn$ = res.isLoggedIn));
    if (this.isLoggedIn$) {
      console.log(
        this.isLoggedIn$,
        'canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],'
      );

      return true;
    } else {
      alert('Please Sign In');
    }

    return false;
  }
}
