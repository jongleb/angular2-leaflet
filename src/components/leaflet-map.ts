///<reference path="../../node_modules/@types/leaflet/index.d.ts"/>
import {Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  Input} from '@angular/core';
import {LeafletFactoryService} from '../services/leaflet-factory.service';

import {CRS,
  MapOptions,
  Zoom,
  LatLngExpression,
  Layer,
  LatLngBoundsExpression,
  Renderer} from 'leaflet'
import LayerOptions = L.LayerOptions;

@Component({
  selector: 'jg-leaflet-map',
  template: `<div class="leaflet-wrap">
    <ng-content></ng-content>
  </div>`,
  styles: [`
     .leaflet-wrap{
        height: 100%;
     }
  `],
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
  public closePopupOnClick?: boolean = true;

  @Input()
  public zoomSnap?: number = 1;

  @Input()
  public zoomDelta?: number = 1;

  @Input()
  public trackResize?: boolean = true;

  @Input()
  public boxZoom?: boolean = true;

  @Input()
  public doubleClickZoom?: Zoom = true;

  @Input()
  public dragging?: boolean = true;


  /**
   * Map state options
   */
  @Input()
  public crs?: CRS = L.CRS.EPSG3857;

  @Input()
  public lat: number = 51.505;

  @Input()
  public lng: number = -0.09;

  @Input()
  public center: LatLngExpression;

  @Input()
  public zoom: number = 13;

  @Input()
  public minZoom: number;

  @Input()
  public maxZoom: number;

  @Input()
  public layers?: Array<Layer> = [];

  @Input()
  public maxBounds?: LatLngBoundsExpression = null;

  @Input()
  public renderer?: Renderer = L.canvas();

  /**
   * Animation options
   */
  @Input()
  public fadeAnimation?: boolean = true;

  @Input()
  public markerZoomAnimation?: boolean = true;

  @Input()
  public transform3DLimit?: number = 2^23;

  @Input()
  public zoomAnimation?: boolean = true;

  @Input()
  public zoomAnimationThreshold?: number = 4;

  /**
   * Panning inertia options
   */
  @Input()
  public inertia?: boolean = null;

  @Input()
  public inertiaDeceleration?: number = 3000;

  @Input()
  public inertiaMaxSpeed?: number = Infinity;

  @Input()
  public easeLinearity?: number = 0.2;

  @Input()
  public worldCopyJump?: boolean = false;

  @Input()
  public maxBoundsViscosity?: number = 0.0;

  /**
   * Keyboard navigation options
   */
  @Input()
  public keyboard?: boolean = true;

  @Input()
  public keyboardPanDelta?: number = 80;

  /**
   * Mousewheel options
   */

  @Input()
  public scrollWheelZoom?: Zoom = true;

  @Input()
  public wheelDebounceTime?: number = 40;

  @Input()
  public wheelPxPerZoomLevel?: number = 60;

  /**
   * Touch interaction options
   */
  @Input()
  public tap?: boolean = true;

  @Input()
  public tapTolerance?: number = 15;

  @Input()
  public touchZoom?: Zoom = null;

  @Input()
  public bounceAtZoomLimits?: boolean = true;

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
      center: this.center || L.latLng(this.lat, this.lng),
      closePopupOnClick: this.closePopupOnClick,
      crs: this.crs,
      doubleClickZoom: this.doubleClickZoom,
      dragging: this.dragging,
      easeLinearity: this.easeLinearity,
      fadeAnimation: this.fadeAnimation,
      inertia: this.inertia,
      inertiaDeceleration: this.inertiaDeceleration,
      inertiaMaxSpeed: this.inertiaMaxSpeed,
      keyboard: this.keyboard,
      keyboardPanDelta: this.keyboardPanDelta,
      layers: this.layers,
      markerZoomAnimation: this.markerZoomAnimation,
      maxBounds: this.maxBounds,
      maxBoundsViscosity: this.maxBoundsViscosity,
      maxZoom: this.maxZoom,
      minZoom: this.minZoom,
      renderer: this.renderer,
      scrollWheelZoom: this.scrollWheelZoom,
      tap: this.tap,
      tapTolerance: this.tapTolerance,
      touchZoom: this.touchZoom,
      trackResize: this.trackResize,
      transform3DLimit: this.transform3DLimit,
      wheelDebounceTime: this.wheelDebounceTime,
      wheelPxPerZoomLevel: this.wheelPxPerZoomLevel,
      worldCopyJump: this.worldCopyJump,
      zoom: this.zoom,
      zoomAnimation: this.zoomAnimation,
      zoomAnimationThreshold: this.zoomAnimationThreshold,
      zoomControl: this.zoomControl,
      zoomDelta: this.zoomDelta,
      zoomSnap: this.zoomSnap,
      preferCanvas: this.preferCanvas
    });
  }

}
