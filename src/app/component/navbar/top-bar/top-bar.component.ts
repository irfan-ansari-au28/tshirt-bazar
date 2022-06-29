import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectCart } from 'src/app/store/cart/cart.selector';
import { selectUser } from 'src/app/store/users/users.selector';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store) {}
  isLoggedIn!: boolean;
  cartCount$!: number;

  ngOnInit(): void {
    this.store
      .select(selectUser)
      .subscribe((res) => (this.isLoggedIn = res.isLoggedIn));

    this.store.select(selectCart).subscribe((val) => {
      this.cartCount$ = val.cartItems.length;
    });
  }

  openDialog() {
    this.dialog.open(LoginComponent, {
      height: '400px',
      width: '300px',
    });
  }
}
