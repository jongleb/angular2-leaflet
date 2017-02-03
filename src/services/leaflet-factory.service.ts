import { Injectable} from '@angular/core';
import * as leaflet from 'leaflet';
import MapOptions = L.MapOptions;

@Injectable()
export class LeafletFactoryService {

  createMap(el: HTMLElement, options?: MapOptions) {
    console.log(el);
    console.log(options);
    leaflet.map(el, options);
  }
}
