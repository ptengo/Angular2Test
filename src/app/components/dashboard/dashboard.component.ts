import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pics: Array<any>;


  constructor(private http:Http) {
    
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.pics = res);

  }
  ngOnInit() {
  }

}
