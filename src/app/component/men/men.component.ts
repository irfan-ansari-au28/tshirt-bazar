import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interface/product.interface';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/service/shared.service';
import { loadCartItems } from 'src/app/store/cart/cart.actions';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
})
export class MenComponent implements OnInit {
  constructor(
    private answerService: CartService,
    private sharedService: SharedService,
    private store: Store
  ) {}
  data = [];
  ngOnInit(): void {
    this.answerService.answers.subscribe((res) => {
      this.data = res;
      // console.log(res, 'response from men component');
    });
  }
  onSave() {
    // console.log('hitting on save');

    // this.answerService.answers.next(this.data);
    // console.log('Successfully submitted the response');

    this.sharedService.sendClickEvent();
    alert('thanks!');
  }
}
