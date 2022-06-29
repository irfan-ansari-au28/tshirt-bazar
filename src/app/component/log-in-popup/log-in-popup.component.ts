import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in-popup',
  templateUrl: './log-in-popup.component.html',
  styleUrls: ['./log-in-popup.component.css'],
})
export class LogInPopupComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(PopupComponent);
  }
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {}
