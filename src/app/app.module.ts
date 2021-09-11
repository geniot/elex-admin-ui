import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularSplitModule} from 'angular-split';

import { AppComponent } from './app.component';
import { DictinariesPanelComponent } from './dictinaries-panel/dictinaries-panel.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import {InfoService} from "./infoservice";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DictinariesPanelComponent,
    SettingsPanelComponent,
    InfoPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSplitModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
