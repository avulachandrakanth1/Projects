import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPage1Component } from './admin-page1/admin-page1.component';
import { AdminPage2Component } from './admin-page2/admin-page2.component';

const routes: Routes = [
  {
    path:'admin',children:[
      {
        path:'',component:AdminHomeComponent,children:[
          {
            path:'adminPage1', component:AdminPage1Component
          },
          {
            path:'adminPage2', component:AdminPage2Component
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
export class AdminRoutingModule { }
