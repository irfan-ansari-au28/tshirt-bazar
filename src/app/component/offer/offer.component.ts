import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { of, first, map, tap } from 'rxjs';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
})
export class OfferComponent implements OnInit {
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.userList.subscribe((data) => console.log('subscriber2', data));

    of(1, 2, 3)
      .pipe(
        tap((x) => console.log('the actual value', x)),
        map((y) => y * 2)
      )
      .subscribe((v) => console.log(`value: ${v}`));
  }

  // ngOnDestroy(): void {
  //   this.user.userList.unsubscribe();
  // }

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: any) {
    console.log(value);

    const parsedValue = parseInt(value.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(this.length);
    }

    console.log(this.includeLetters, 'thisIncludeLetter');
  }

  onChangeLetter() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters, 'thisIncludeLetter');
  }

  onChangeNumber() {
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers, 'includeNumbers');
  }

  onChangeSymbol() {
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols, 'includeSymbols');
  }

  onClickButton() {
    console.log('button clicked');

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    const index = Math.floor(Math.random() * this.length * 10);

    for (let i = 0; i < index; i++) {
      console.log(i);
    }
  }

  input!: number;
  onChangeInput(value: any) {
    this.input = +value.value;
  }
}
