import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  currentUser: any;
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password:  ['', Validators.required]
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    this.authenticationService.logout();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login() {
    this.authForm.markAsTouched();

    if (this.authForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.authForm.controls.username.value, this.authForm.controls.password.value)
      .subscribe(result => {
        if (result === true) {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.authForm.reset();
        } else {
          this.error = 'Username or password is incorrect';
        }
        this.loading = false;
      });
  }

}
