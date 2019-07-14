import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ResizerDirective {

  private isCursorOver: boolean = false;

  constructor() { }

  @HostBinding('style.cursor')
  get resizeCursor() {
    return 'col-resize';
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isCursorOver = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isCursorOver = false;
  }
}
