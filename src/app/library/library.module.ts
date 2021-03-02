import {ModuleWithProviders, NgModule, Type} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import {DynamicInterface} from '../dynamic.interface';
import {DynamicGeneratorDirective} from "../dynamic-generator.directive";



@NgModule({
  declarations: [LibraryComponent, DynamicGeneratorDirective],
  imports: [
    CommonModule
  ],
  exports: [LibraryComponent]
})
export class LibraryModule {
  static forRoot({type, provide}): ModuleWithProviders<any> {
    return  {
      ngModule: LibraryModule,
      providers: [{provide, useValue: type}]
    };
  }
}
