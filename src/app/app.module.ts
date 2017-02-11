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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    PreferencesComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
