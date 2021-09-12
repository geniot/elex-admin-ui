import {Component, OnInit} from '@angular/core';
import {InfoService} from "../infoservice";
import {AdminDictionary} from "../model/admindictionary";
import {environment} from "../../environments/environment";
import {Action} from "../model/action";
import {Task} from "../model/task";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
  selectedDictionary!: AdminDictionary | null;
  task!: Task | null;
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
        this.task = null;
      });
    this.infoService.model.asObservable().subscribe(
      model => {
        for (let dictionary of model.adminDictionaries) {
          if (dictionary.selected) {
            this.infoService.selectedDictionary.next(dictionary);
            break;
          }
        }
      });
    this.infoService.taskExecutorModel.asObservable().subscribe(
      model => {
        for (let task of model.tasks) {
          if (task.fileName == this.infoService.selectedDictionary.value.fileName) {
            this.task = task;
            return;
          }
        }
        this.task = null;
      });
  }

  onReindex() {
    this.infoService.model.value.action = Action.REINDEX;
    this.infoService.updateModel();
  }
}
