import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPage1Component } from './user-page1/user-page1.component';
import { UserPage2Component } from './user-page2/user-page2.component';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  declarations: [UserPage1Component, UserPage2Component, UserHomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
