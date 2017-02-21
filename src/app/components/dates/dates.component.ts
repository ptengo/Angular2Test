import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  dates: Array<any>;
  constructor(private http:Http) {
    
    this.http.get('./datahome.json')
      .map(response => response.json().dates)
      .subscribe(res => this.dates = res);

  }

  ngOnInit() {
  }

}
