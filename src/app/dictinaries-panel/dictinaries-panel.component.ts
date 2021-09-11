import {Component, OnInit} from '@angular/core';
import {InfoService} from "../infoservice";
import {Dictionary} from "../model/dictionary";

@Component({
  selector: 'app-dictinaries-panel',
  templateUrl: './dictinaries-panel.component.html',
  styleUrls: ['./dictinaries-panel.component.css']
})
export class DictinariesPanelComponent implements OnInit {
  dictionaries: Dictionary[] = [];

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.infoService.model.asObservable().subscribe(
      model => {
        this.dictionaries = model.dictionaries;
      });
  }

  onSelect(d: Dictionary) {
    for (let dictionary of this.dictionaries) {
      if (dictionary == d) {
        if (dictionary.selected) {
          dictionary.selected = false;
        } else {
          dictionary.selected = true;
        }
      } else {
        dictionary.selected = false;
      }
    }
  }

}
