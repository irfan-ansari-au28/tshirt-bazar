import { Component, Input, OnInit } from '@angular/core';

interface item {
  cardIcon: string;
  cardTitle: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item!: item;
  constructor() {}

  ngOnInit(): void {}
}
