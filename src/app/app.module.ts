import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable/draggable.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import { ResizeableComponent } from './resizeable/resizeable.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    MouseEventsComponent,
    ResizeableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
