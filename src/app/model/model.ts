import {AdminDictionary} from "./admindictionary";
import {environment} from "../../environments/environment";

export class Model {
  dictionaries: AdminDictionary[] = [];
  baseApiUrl:String = environment.BASE_API_URL;
}


