///<reference path="../../node_modules/@types/leaflet/index.d.ts"/>
import {Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  Input} from '@angular/core';
import {LeafletFactoryService} from '../services/leaflet-factory.service';

import {CRS,
  Zoom,
  LatLngExpression,
  Layer,
  LatLngBoundsExpression,
  Renderer} from 'leaflet'

@Component({
  selector: 'jg-leaflet-map',
  template: `<div class="leaflet-wrap"><ng-content></ng-content></div>`,
  providers: [
    LeafletFactoryService
  ]
})
export class JGLeafletMapComponent implements OnChanges, OnInit, OnDestroy{

  @Input()
  public preferCanvas?: boolean = false;

  /**
   * Control options
   */
  @Input()
  public attributionControl?: boolean = false;

  @Input()
  public zoomControl?: boolean = false;

  /**
   * Interaction options
   */
  @Input()
  closePopupOnClick?: boolean = true;

  @Input()
  zoomSnap?: number = 1;

  @Input()
  zoomDelta?: number = 1;

  @Input()
  trackResize?: boolean = true;

  @Input()
  boxZoom?: boolean = true;

  @Input()
  doubleClickZoom?: Zoom = true;

  @Input()
  dragging?: boolean = true;


  /**
   * Map state options
   */
  @Input()
  crs?: CRS = L.CRS.EPSG3857;

  @Input()
  center: LatLngExpression;

  @Input()
  zoom: number;

  @Input()
  minZoom: number;

  @Input()
  maxZoom: number;

  @Input()
  layers?: Array<Layer> = [];

  @Input()
  maxBounds?: LatLngBoundsExpression = null;

  @Input()
  renderer?: Renderer =  null;

  /**
   * Animation options
   */
  @Input()
  fadeAnimation?: boolean;

  @Input()
  markerZoomAnimation?: boolean;

  @Input()
  transform3DLimit?: number;

  @Input()
  zoomAnimation?: boolean;

  @Input()
  zoomAnimationThreshold?: number;

  /**
   * Panning inertia options
   */
  @Input()
  inertia?: boolean;

  @Input()
  inertiaDeceleration?: number;

  @Input()
  inertiaMaxSpeed?: number;

  @Input()
  easeLinearity?: number;

  @Input()
  worldCopyJump?: boolean;

  @Input()
  maxBoundsViscosity?: number;

  /**
   * Keyboard navigation options
   */
  @Input()
  keyboard?: boolean;

  @Input()
  keyboardPanDelta?: number;

  /**
   * Mousewheel options
   */

  @Input()
  scrollWheelZoom?: Zoom;

  @Input()
  wheelDebounceTime?: number;

  @Input()
  wheelPxPerZoomLevel?: number;

  /**
   * Touch interaction options
   */
  @Input()
  tap?: boolean;

  @Input()
  tapTolerance?: number;

  @Input()
  touchZoom?: Zoom;

  @Input()
  bounceAtZoomLimits?: boolean;

  constructor(private _elem: ElementRef, private _factory: LeafletFactoryService){
  }

  ngOnChanges() {

  }

  ngOnDestroy() {

  }

  ngOnInit() {
    const container = this._elem.nativeElement.querySelector('.leaflet-wrap');
    this._initMapInstance(container);
  }

  private _initMapInstance(el: HTMLElement) {
    this._factory.createMap(el, <MapOptions>{
      attributionControl: this.attributionControl,
      bounceAtZoomLimits: this.bounceAtZoomLimits,
      boxZoom: this.boxZoom,
      center: this.center,
      closePopupOnClick: this.closePopupOnClick,
      crs: this.crs,
      doubleClickZoom: this.doubleClickZoom,
      dragging: this.dragging,
      easeLinearity: this.easeLinearity,
      fadeAnimation: this.fadeAnimation,
      inertia: this.inertia,
      inertiaDeceleration: this.inertiaDeceleration
    });
  }

}
