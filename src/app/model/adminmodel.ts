import {AdminDictionary} from "./admindictionary";
import {environment} from "../../environments/environment";
import {Action} from "./action";

export class AdminModel {
  adminDictionaries: AdminDictionary[] = [];
  baseApiUrl: String = environment.BASE_API_URL;
  action: Action = Action.INIT;
}
