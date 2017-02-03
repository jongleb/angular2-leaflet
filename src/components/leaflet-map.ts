import {Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, Input} from '@angular/core';
import {LeafletFactoryService} from '../services/leaflet-factory.service';
import Zoom = L.Zoom;
import CRS = L.CRS;
import LatLngExpression = L.LatLngExpression;
import Layer = L.Layer;
import LatLngBoundsExpression = L.LatLngBoundsExpression;
import Renderer = L.Renderer;

@Component({
  selector: 'jg-leaflet-map',
  template: `<div class="leaflet-wrap"><ng-content></ng-content></div>`,
  providers: [
    LeafletFactoryService
  ]
})
export class JGLeafletMapComponent implements OnChanges, OnInit, OnDestroy{

  @Input()
  public preferCanvas?: boolean;

  /**
   * Control options
   */
  @Input()
  public attributionControl?: boolean;

  @Input()
  public zoomControl?: boolean;

  /**
   * Interaction options
   */
  @Input()
  closePopupOnClick?: boolean;

  @Input()
  zoomSnap?: number;

  @Input()
  zoomDelta?: number;

  @Input()
  trackResize?: boolean;

  @Input()
  boxZoom?: boolean;

  @Input()
  doubleClickZoom?: Zoom;

  @Input()
  dragging?: boolean;


  /**
   * Map state options
   */
  @Input()
  crs?: CRS;

  @Input()
  center?: LatLngExpression;

  @Input()
  zoom?: number;

  @Input()
  minZoom?: number;

  @Input()
  maxZoom?: number;

  @Input()
  layers?: Array<Layer>;

  @Input()
  maxBounds?: LatLngBoundsExpression;

  @Input()
  renderer?: Renderer;

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
    this._factory.createMap();
  }

}
