import { Component, ViewEncapsulation } from '@angular/core';
import {Http} from '@angular/http';
import {SidenavComponent} from './components/sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  pics: Array<any>;


  constructor(private http:Http) {
    
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.pics = res);

  }
  randomName(start: any) {
        start.toggle();
    }
}
