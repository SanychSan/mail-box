import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRootComponent } from './users-root/users-root.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersRootComponent,
    UserDetailComponent
  ],
  providers: [
    UsersService
  ],
  declarations: [
    UsersRootComponent,
    UserDetailComponent
  ]
})
export class UsersModule { }
