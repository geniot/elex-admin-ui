import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DictinariesPanelComponent } from './dictinaries-panel/dictinaries-panel.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DictinariesPanelComponent,
    SettingsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
