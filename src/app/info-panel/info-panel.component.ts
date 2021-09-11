import {Component, OnInit} from '@angular/core';
import {InfoService} from "../infoservice";
import {AdminDictionary} from "../model/admindictionary";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
  selectedDictionary!: AdminDictionary | null;
  baseApiUrl: String = environment.BASE_API_URL;

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.infoService.selectedDictionary.asObservable().subscribe(
      dictionary => {
        if (dictionary == AdminDictionary.EMPTY) {
          this.selectedDictionary = null;
        } else {
          this.selectedDictionary = dictionary;
        }
      });
    this.infoService.model.asObservable().subscribe(
      model => {
        for (let dictionary of model.dictionaries){
          if (dictionary.selected){
            this.infoService.selectedDictionary.next(dictionary);
            break;
          }
        }
      });
  }

}
