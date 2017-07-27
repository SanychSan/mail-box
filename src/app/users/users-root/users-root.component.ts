import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-root',
  templateUrl: './users-root.component.html',
  styleUrls: ['./users-root.component.css']
})
export class UsersRootComponent implements OnInit, OnDestroy {

  usersSubscribtion;

  users: IUsersUser[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersSubscribtion = this.userService.users.subscribe(users => {
      this.users = users;
    });
    this.userService.getUsers();
  }

  ngOnDestroy(): void {
    this.usersSubscribtion.unsubscribe();
  }

  edit(user: IUsersUser): void {
    this.router.navigate(['users', user.id]);
  }

  remove(user: IUsersUser): void {
    this.userService.remove(user).then(() => {
      this.userService.getUsers();
    });
  }

  addNewUser() {
    this.router.navigate(['users', 'new']);
  }

}
