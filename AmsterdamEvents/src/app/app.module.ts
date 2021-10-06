import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import { HomeComponent } from './components/mainpage/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/mainpage/nav-bar/nav-bar.component';
import { Overview1Component } from './events/overview1/overview1.component';
import { Overview2Component } from './events/overview2/overview2.component';
import { Overview3Component } from './events/overview3/overview3.component';
import { EventsComponent } from './events/events.component';
import { Detail2Component } from './events/detail2/detail2.component';
import { Detail3Component } from './events/detail3/detail3.component';
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { ErrorComponent } from './components/mainpage/error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events/overview1', component: Overview1Component },
  { path: 'events/overview2', component: Overview2Component },
  { path: 'events/overview3', component: Overview3Component },
  { path: '**', component: ErrorComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        NavBarComponent,
        Overview1Component,
        Overview2Component,
        Overview3Component,
        EventsComponent,
        Detail2Component,
        Detail3Component,
        ErrorComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
