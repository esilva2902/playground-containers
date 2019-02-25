import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {

  @Input('height') height: string;
  private isCursorOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class.resize-cursor')
  get resizeCursor() {
    return this.isCursorOver;
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
