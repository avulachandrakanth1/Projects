import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPartComponent } from './header-part/header-part.component';
import { HerosPartComponent } from './heros-part/heros-part.component';
import { BrandsPartComponent } from './brands-part/brands-part.component';
import { AboutPartComponent } from './about-part/about-part.component';
import { CountsPartComponent } from './counts-part/counts-part.component';
import { ServicesComponent } from './services/services.component';
import { MoreServicesPartComponent } from './more-services-part/more-services-part.component';
import { FeaturesComponent } from './features/features.component';
import { PortfolioPartComponent } from './portfolio-part/portfolio-part.component';
import { TeamComponent } from './team/team.component';
import { ContactPartComponent } from './contact-part/contact-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPartComponent,
    HerosPartComponent,
    BrandsPartComponent,
    AboutPartComponent,
    CountsPartComponent,
    ServicesComponent,
    MoreServicesPartComponent,
    FeaturesComponent,
    PortfolioPartComponent,
    TeamComponent,
    ContactPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
