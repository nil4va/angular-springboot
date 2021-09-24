import { Component, OnInit } from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate = new Date().toLocaleString();
  status = AEvent.createRandomAEvent();


  constructor() {
    console.log(this.status)
  }



  ngOnInit(): void {

  }
}
