import { Injectable} from '@angular/core';

@Injectable()
export class LeafletFactoryService {

  createMap(el: HTMLElement, options/**?: MapOptions**/) {
    console.log(el);
    console.log(options);
  }
}
