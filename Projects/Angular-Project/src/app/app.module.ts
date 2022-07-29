import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { BrandsComponent } from './brands/brands.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountsComponent } from './counts/counts.component';
import { ServicesComponent } from './services/services.component';
import { MoreServicesComponent } from './more-services/more-services.component';
import { FeaturesComponent } from './features/features.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HerosPartComponent } from './heros-part/heros-part.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BrandsComponent,
    HeroSectionComponent,
    AboutUsComponent,
    CountsComponent,
    ServicesComponent,
    MoreServicesComponent,
    FeaturesComponent,
    TeamsComponent,
    ContactUsComponent,
    HerosPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
