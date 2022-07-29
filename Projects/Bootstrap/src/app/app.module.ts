import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountsComponent } from './counts/counts.component';
import { ServicesComponent } from './services/services.component';
import { MoreServicesComponent } from './more-services/more-services.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { FeaturesComponent } from './features/features.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    AboutUsComponent,
    CountsComponent,
    ServicesComponent,
    MoreServicesComponent,
    TestimonalsComponent,
    FeaturesComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
