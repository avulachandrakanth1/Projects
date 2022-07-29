import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentClassComponent } from './parent-class/parent-class.component';
import { ChildClassComponent } from './child-class/child-class.component';
import { FactorialService } from './factorial.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentClassComponent,
    ChildClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FactorialService],
  bootstrap: [AppComponent]

})
export class AppModule { }
