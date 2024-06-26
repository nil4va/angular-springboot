import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/mainpage/header/header.component';
import {HomeComponent} from './components/mainpage/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './components/mainpage/nav-bar/nav-bar.component';
import {Overview1Component} from './components/aevents/overview1/overview1.component';
import {Overview2Component} from './components/aevents/overview2/overview2.component';
import {Overview3Component} from './components/aevents/overview3/overview3.component';
import {Overview4Component} from './components/aevents/overview4/overview4.component';
import {EventsComponent} from './events/events.component';
import {Detail2Component} from './components/aevents/detail2/detail2.component';
import {Detail3Component} from './components/aevents/detail3/detail3.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {ErrorComponent} from './components/mainpage/error/error.component';
import {Detail4Component} from "./components/aevents/detail4/detail4.component";
import {Detail5Component} from './components/aevents/detail5/detail5.component';
import {Overview5Component} from './components/aevents/overview5/overview5.component';
import {HttpClient} from "@angular/common/http";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events/overview1', component: Overview1Component},
  {path: 'events/overview2', component: Overview2Component},
  {path: 'events/overview3', component: Overview3Component},
  {
    path: 'events/overview4', component: Overview4Component, children: [
      {path: ':id', component: Detail4Component}
    ]
  },
  {
    path: 'events/overview5', component: Overview5Component, children: [
      {path: ':id', component: Detail5Component}
    ]
  },
  {path: '**', component: ErrorComponent},
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
    ErrorComponent,
    Overview4Component,
    Detail4Component,
    Detail5Component,
    Overview5Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
