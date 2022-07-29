import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPage1Component } from './user-page1/user-page1.component';
import { UserPage2Component } from './user-page2/user-page2.component';

const routes: Routes = [
  {
    path:'user',children:[
      {
        path:'',component:UserHomeComponent,children:[
          {
            path:'userPage1', component:UserPage1Component
          },
          {
            path:'userPage2', component:UserPage2Component
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
