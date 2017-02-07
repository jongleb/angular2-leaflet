import { Injectable} from '@angular/core';
import * as leaflet from 'leaflet';
import MapOptions = L.MapOptions;

@Injectable()
export class LeafletFactoryService {

  private _map: leaflet.Map;

  createMap(el: HTMLElement, options?: MapOptions) {
    this._map = leaflet.map(el, options);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OSM'
    }).addTo(this._map)

  }
}
