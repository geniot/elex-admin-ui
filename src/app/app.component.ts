import {Component} from '@angular/core';
import {LayoutConfig} from "./model/layoutconfig";
import {IOutputData} from "angular-split";
import {cloneDeep} from 'lodash';
import {InfoService} from "./infoservice";
import {DestroyableComponent} from "./destroyablecomponent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DestroyableComponent{
  splitLayoutLocalStorageName = 'elex-admin-splitLayoutLocalStorageName';
  config: LayoutConfig = new LayoutConfig();
  defaultConfig: LayoutConfig = new LayoutConfig();

  constructor(private infoService: InfoService) {
    super();
  }

  ngOnInit() {
    if (localStorage.getItem(this.splitLayoutLocalStorageName)) {
      this.config = JSON.parse(localStorage.getItem(this.splitLayoutLocalStorageName) || '{}')
    } else {
      this.resetConfig()
    }
    this.infoService.updateModel();
    this.infoService.updateTaskExecutorModel();
  }

  resetConfig() {
    this.config = cloneDeep(this.defaultConfig)
    localStorage.removeItem(this.splitLayoutLocalStorageName)
  }

  onDragEnd(e: IOutputData) {
    this.config.columns[0].size = e.sizes[0] as number;
    this.config.columns[1].size = e.sizes[1] as number;
    this.config.columns[2].size = e.sizes[2] as number;
    this.saveLocalStorage()
  }

  saveLocalStorage() {
    localStorage.setItem(this.splitLayoutLocalStorageName, JSON.stringify(this.config))
  }
}
