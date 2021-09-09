import {Component, OnInit} from '@angular/core';
import {Dictionary} from "../dictionary";

@Component({
  selector: 'app-dictinaries-panel',
  templateUrl: './dictinaries-panel.component.html',
  styleUrls: ['./dictinaries-panel.component.css']
})
export class DictinariesPanelComponent implements OnInit {
  dictionaries: Dictionary[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      let dictionary: Dictionary = new Dictionary();
      dictionary.name = "name " + i;
      this.dictionaries.push(dictionary);
    }
  }

}
