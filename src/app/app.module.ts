import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MailsModule } from './mails/mails.module';
import { UsersModule } from './users/users.module';
import { UsersRootComponent } from './users/users-root/users-root.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { MailsRootComponent } from './mails/mails-root/mails-root.component';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';
import { UsersService } from './users/users.service';
import { AuthComponent } from './auth/auth.component';

import { AuthGuard } from './auth.guard';

// used to create fake backend
import { fakeBackendProvider } from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


const routs: Route[] = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'users',
    component: UsersRootComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/:userId',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mails',
    component: MailsRootComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routs),
    MailsModule,
    UsersModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UsersService,
    AuthGuard,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
