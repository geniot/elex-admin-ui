import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {Model} from "./model/model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AdminDictionary} from "./model/admindictionary";


@Injectable({providedIn: 'root'})
export class InfoService {
  baseApiUrl = environment.BASE_API_URL;
  modelLocalStorageName = 'elex-admin-modelLocalStorageName';
  dataUrl = this.baseApiUrl + '/admin';
  model: BehaviorSubject<Model> = new BehaviorSubject(new Model());
  selectedDictionary: BehaviorSubject<AdminDictionary> = new BehaviorSubject(AdminDictionary.EMPTY);

  constructor(public http: HttpClient) {
    let m: Model = new Model();
    if (localStorage.getItem(this.modelLocalStorageName)) {
      m = JSON.parse(localStorage.getItem(this.modelLocalStorageName)!);
    }
    m.baseApiUrl = this.baseApiUrl;
    this.model.next(m);
  }

  updateModel() {
    this.http.post<Model>(this.dataUrl, JSON.stringify(this.model.value)).subscribe(model => {
      localStorage.setItem(this.modelLocalStorageName, JSON.stringify(model));
      this.model.next(model);
    });
  }

  saveState() {
    localStorage.setItem(this.modelLocalStorageName, JSON.stringify(this.model.value));
  }
}
