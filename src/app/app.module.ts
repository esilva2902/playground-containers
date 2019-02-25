import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable/draggable.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import { ResizeableComponent } from './resizeable/resizeable.component';
import { SeparatorComponent } from './separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    MouseEventsComponent,
    ResizeableComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
