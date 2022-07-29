import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPage1Component } from './admin-page1/admin-page1.component';
import { AdminPage2Component } from './admin-page2/admin-page2.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [AdminPage1Component, AdminPage2Component, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { 
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  page1(){
    this.router.navigate(['page1'], {relativeTo:this.route});
  }

}
