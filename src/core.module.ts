import {NgModule, ModuleWithProviders} from '@angular/core';
import {JG_COMPONENTS} from './components/index';


@NgModule({
  declarations: [
    ...JG_COMPONENTS
  ],
  exports: [
    ...JG_COMPONENTS
  ]
})
export class JGLeafletModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JGLeafletModule,
      providers: [],
    };
  }
}
