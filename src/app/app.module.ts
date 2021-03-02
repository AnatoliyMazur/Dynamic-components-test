import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import {LibraryModule} from './library/library.module';
import {DYNAMIC_COMPONENT_TYPE} from './exports';
import {DuplicateDynamicComponent} from './dynamic/duplicate-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule.forRoot({type: DuplicateDynamicComponent, provide: DYNAMIC_COMPONENT_TYPE})
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
