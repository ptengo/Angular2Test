import { Component, ViewEncapsulation } from '@angular/core';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { customTransition } from './animations/transition.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [customTransition()],
  host: {'[@customTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
 
 
}
