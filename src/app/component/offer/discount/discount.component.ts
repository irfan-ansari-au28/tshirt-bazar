import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit {
  @Output() discount = new EventEmitter<object>();
  @Output() userInfo = new EventEmitter<Object>();

  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClickButton() {
    this.discount.emit({
      't-shirt': 20,
      shirt: 30,
    });
  }

  onSubmitResponse(user: Object) {
    this.userInfo.emit(user);
  }

  onSubmit() {
    console.log(this.email, this.password);
    this.userInfo.emit({
      email: this.email,
      password: this.password,
    });
    this.email = '';
    this.password = '';
  }
}
