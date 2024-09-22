import { Injectable } from '@angular/core';

import{ Animal} from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(youtubers: Animal[],youtuber: Animal){
    return youtubers.filter((yt) => youtuber.name !== yt.name);
  }
}
