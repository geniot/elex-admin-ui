import {DictionaryStatus} from "./dictionarystatus";

export class AdminDictionary {
  id!: number;
  name!: string;
  indexLanguageCode!: string;
  contentsLanguageCode!: string;
  selected: boolean = false;

  fileName!: string;
  dataPath!: string;
  fileSize!: string;
  entries!: number;

  resourcesFileName!: string;
  resourcesFileSize!: string;
  resourcesCount!: number;

  ftIndexSize!: string;
  totalSize!: string;
  status: DictionaryStatus = DictionaryStatus.ENABLED;

  static EMPTY: AdminDictionary;
}
