import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  routeSubscribtion;
  user: IUsersUser;
  userId: string;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.maxLength(24)],
      lastName:  ['', Validators.maxLength(24)],
      email:     ['', Validators.email]
    });

    this.routeSubscribtion = this.route.params.pluck('userId').subscribe(userId => {
      this.userId = userId as string;

      if (userId !== 'new') {
        this.userService.getUser(userId as string).then(user => {
          this.user = user;

          this.userForm.controls.firstName.setValue(user.firstName);
          this.userForm.controls.lastName.setValue(user.lastName);
          this.userForm.controls.email.setValue(user.email);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscribtion.unsubscribe();
  }

  goBack() {
    this.router.navigate(['users']);
  }

  save() {
    if (this.userForm.valid) {
      if (this.userId === 'new') {
        this.userService.add({
          firstName: this.userForm.controls.firstName.value,
          lastName: this.userForm.controls.lastName.value,
          email: this.userForm.controls.email.value
        })
        .then(res => {
          this.userId = res.id;
        });
      } else {
        this.userService.update({
          ...this.user,
          firstName: this.userForm.controls.firstName.value,
          lastName: this.userForm.controls.lastName.value,
          email: this.userForm.controls.email.value
        });
      }
    }
  }

}
