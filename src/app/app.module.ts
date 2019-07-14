import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable/draggable.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import { ResizeableComponent } from './resizeable/resizeable.component';
import { SeparatorComponent } from './separator/separator.component';
import { ResizerDirective } from './common/resizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    MouseEventsComponent,
    ResizeableComponent,
    SeparatorComponent,
    ResizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
