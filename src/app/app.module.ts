import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import 'hammerjs';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ChatComponent } from './components/chat/chat.component';
import { DatesComponent } from './components/dates/dates.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    PreferencesComponent,
    ChatComponent,
    DatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //RoutingModule, DESCOMENTAR PER AFEGIR ROUTING
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
