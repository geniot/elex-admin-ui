import {Dictionary} from "./dictionary";
import {environment} from "../../environments/environment";

export class Model {
  dictionaries: Dictionary[] = [];
  baseApiUrl:String = environment.BASE_API_URL;
}


