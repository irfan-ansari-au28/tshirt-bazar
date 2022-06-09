import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { of, first, map } from 'rxjs';
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
      .pipe(map((x) => x * 2))
      .subscribe((v) => console.log(`value: ${v}`));
  }

  // ngOnDestroy(): void {
  //   this.user.userList.unsubscribe();
  // }
}
