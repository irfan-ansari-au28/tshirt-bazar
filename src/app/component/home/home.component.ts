import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products = this.productsService.products;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log(this.productsService.products, 'products');
    // console.log(this.productsService.cart, 'cart');
    this.productsService.cartItems.subscribe((data) => {
      return data;
    });
  }
}
