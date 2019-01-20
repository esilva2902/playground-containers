import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.css']
})
export class MouseEventsComponent implements OnInit {

  private left: number = 0;
  private right: number = 0;
  private top: number = 0;
  private bottom: number = 0;
  private width: number = 0;
  private height: number = 0;

  constructor() { }

  ngOnInit() {
    let wrapper = document.querySelector('.wrapper');

    wrapper.addEventListener('mousemove', (e: MouseEvent) => {
      console.log(`==> mousemove: `);
      console.log(`e.clientX: ${e.clientX} - e.clientY: ${e.clientY}`);
      console.log(`e.pageX: ${e.pageX} - e.pageY: ${e.pageY}`);
    });

    let container = document.querySelector('.container');

    this.left = container.getBoundingClientRect().left;
    this.right = container.getBoundingClientRect().right;
    this.top = container.getBoundingClientRect().top;
    this.bottom = container.getBoundingClientRect().bottom;

    this.width = container.getBoundingClientRect().width;
    this.height = container.getBoundingClientRect().height;
  }
}
