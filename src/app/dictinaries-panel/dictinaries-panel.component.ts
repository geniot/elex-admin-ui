import {Component, OnInit} from '@angular/core';
import {InfoService} from "../infoservice";
import {AdminDictionary} from "../model/admindictionary";

@Component({
  selector: 'app-dictinaries-panel',
  templateUrl: './dictinaries-panel.component.html',
  styleUrls: ['./dictinaries-panel.component.css']
})
export class DictinariesPanelComponent implements OnInit {
  dictionaries: AdminDictionary[] = [];

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.infoService.model.asObservable().subscribe(
      model => {
        this.dictionaries = model.dictionaries;
      });
  }

  onSelect(d: AdminDictionary) {
    for (let dictionary of this.dictionaries) {
      if (dictionary == d) {
        if (dictionary.selected) {
          dictionary.selected = false;
          this.infoService.selectedDictionary.next(AdminDictionary.EMPTY);
        } else {
          dictionary.selected = true;
          this.infoService.selectedDictionary.next(dictionary);
        }
      }else{
        dictionary.selected = false;
      }
    }
    this.infoService.saveState();
  }

}
