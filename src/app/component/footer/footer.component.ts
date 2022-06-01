import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() cardItems = [
    {
      cardIcon: 'local_shipping',
      cardTitle: 'Free Shipping In India',
    },
    {
      cardIcon: 'account_balance_wallet',
      cardTitle: 'Money Back Guarantee',
    },
    {
      cardIcon: 'support_agent',
      cardTitle: '24/7 Customer Support',
    },
    {
      cardIcon: 'monetization_on',
      cardTitle: 'Lowest Prices Guarented',
    },
    {
      cardIcon: 'card_giftcard',
      cardTitle: 'Exclusive for Sportshold',
    },
    {
      cardIcon: 'delivery_dining',
      cardTitle: '5-Day Delivery in India',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
