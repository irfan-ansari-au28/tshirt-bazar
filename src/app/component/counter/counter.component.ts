import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor(private crud: CrudService) {}

  user = {
    name: 'Eshana Shah',
    roll: '23',
  };

  ngOnInit(): void {
    this.crud
      .getUsers()
      .pipe(
        tap((user) => console.log('from pipe', user)),
        map((user) => {
          console.log(user, 'from map');
          return user;
        })
      )

      .subscribe((data) => {
        console.log('from crud', data);
      });

    this.crud
      .postUsers(this.user)
      .subscribe((data) => console.log('from post', data));
  }
}
