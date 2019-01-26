import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.css']
})
export class MouseEventsComponent implements OnInit {

  private b_left: number = 0;
  private b_right: number = 0;
  private b_top: number = 0;
  private b_bottom: number = 0;
  private b_width: number = 0;
  private b_height: number = 0;

  private r_left: number = 0;
  private r_right: number = 0;
  private r_top: number = 0;
  private r_bottom: number = 0;
  private r_width: number = 0;
  private r_height: number = 0;

  constructor() { }

  ngOnInit() {
    let wrapper = document.querySelector('.wrapper');

    this.r_left = wrapper.getBoundingClientRect().left;
    this.r_right = wrapper.getBoundingClientRect().right;
    this.r_top = wrapper.getBoundingClientRect().top;
    this.r_bottom = wrapper.getBoundingClientRect().bottom;

    this.r_width = wrapper.getBoundingClientRect().width;
    this.r_height = wrapper.getBoundingClientRect().height;

    wrapper.addEventListener('mousemove', (e: MouseEvent) => {
      console.log(`==> mousemove: `);
      console.log(`e.clientX: ${e.clientX} - e.clientY: ${e.clientY}`);
      console.log(`e.pageX: ${e.pageX} - e.pageY: ${e.pageY}`);
    });

    let container = document.querySelector('.container') as HTMLElement;

    this.b_left = container.getBoundingClientRect().left;
    this.b_right = container.getBoundingClientRect().right;
    this.b_top = container.getBoundingClientRect().top;
    this.b_bottom = container.getBoundingClientRect().bottom;

    this.b_width = container.getBoundingClientRect().width;
    this.b_height = container.getBoundingClientRect().height;
  }
}
