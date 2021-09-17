import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {AdminModel} from "./model/adminmodel";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AdminDictionary} from "./model/admindictionary";
import {TaskExecutorModel} from "./model/taskexecutormodel";
import {Action} from "./model/action";


@Injectable({providedIn: 'root'})
export class InfoService {
  baseApiUrl = environment.BASE_API_URL;
  modelLocalStorageName = 'elex-admin-modelLocalStorageName';
  dataUrl = this.baseApiUrl + '/admin/data';
  taskExecutorUrl = this.baseApiUrl + '/admin/tasks';

  model: BehaviorSubject<AdminModel> = new BehaviorSubject(new AdminModel());
  taskExecutorModel: BehaviorSubject<TaskExecutorModel> = new BehaviorSubject(new TaskExecutorModel());
  selectedDictionary: BehaviorSubject<AdminDictionary> = new BehaviorSubject(AdminDictionary.EMPTY);

  constructor(public http: HttpClient) {
    let m: AdminModel = new AdminModel();
    if (localStorage.getItem(this.modelLocalStorageName)) {
      m = JSON.parse(localStorage.getItem(this.modelLocalStorageName)!);
    }
    m.baseApiUrl = this.baseApiUrl;
    this.model.next(m);

    setInterval(() => {
      this.updateTaskExecutorModel();
    }, 500);

    this.taskExecutorModel.asObservable().subscribe(
      taskExecutorModel => {
        for (let task of taskExecutorModel.tasks) {
          if (task.action == Action.POOL_UPDATE) {
            this.updateModel();
          }
        }
      });
  }

  updateModel() {
    this.http.post<AdminModel>(this.dataUrl, JSON.stringify(this.model.value)).subscribe(model => {
      localStorage.setItem(this.modelLocalStorageName, JSON.stringify(model));
      this.model.next(model);
    });
  }

  updateTaskExecutorModel() {
    this.http.get<TaskExecutorModel>(this.taskExecutorUrl).subscribe(model => {
      this.taskExecutorModel.next(model);
    });
  }

  saveState() {
    localStorage.setItem(this.modelLocalStorageName, JSON.stringify(this.model.value));
  }
}
