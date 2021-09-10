import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import { HomeComponent } from './components/mainpage/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/mainpage/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
