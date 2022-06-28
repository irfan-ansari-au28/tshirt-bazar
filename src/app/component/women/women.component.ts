import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css'],
})
export class WomenComponent implements OnInit {
  users: User[] = [];

  displayedColumns: any = ['id', 'name', 'email', 'website'];
  constructor(private user: UserService) {}

  // userList = new BehaviorSubject<User[]>(this.users);

  ngOnInit(): void {
    this.user
      .getUser()
      .pipe(tap((x) => console.log(x, 'tap')))
      .subscribe((data) => {
        // this.users = data;
        this.user.setUsersList(data);
        // console.log(this.users);
      });

    this.user.userList.subscribe((users) => {
      this.users = users;
    });
  }

  addData() {
    console.log('subscriber1', this.users);
  }
  removeData() {
    this.users.pop();
    console.log(this.users, 'pop');
  }

  // ngOnDestroy() {
  //   this.user.userList.unsubscribe();
  // }
}
