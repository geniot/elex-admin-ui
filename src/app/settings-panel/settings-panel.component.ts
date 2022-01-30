import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from "../destroyablecomponent";

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.css']
})
export class SettingsPanelComponent extends DestroyableComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
