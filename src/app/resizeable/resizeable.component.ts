import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resizeable',
  templateUrl: './resizeable.component.html',
  styleUrls: ['./resizeable.component.css']
})
export class ResizeableComponent implements OnInit {

  private resize;

  constructor() { }

  ngOnInit() {

  }

  onResize(firstDiv: HTMLElement, rightDiv: HTMLElement, lastDiv: HTMLElement, e: MouseEvent) {
    e.preventDefault();

    console.log(`MouseEvent(mousedown): `, e);
    console.log(`original_mouse_x: `, e.pageX);
    console.log(`firstDiv.getBoundingClientRect().right: `, firstDiv.getBoundingClientRect().right);
    console.log(`firstDiv.getBoundingClientRect().left: `, firstDiv.getBoundingClientRect().left);

    let original_width = firstDiv.getBoundingClientRect().right - firstDiv.getBoundingClientRect().left;
    let original_mouse_x = e.pageX;

    console.log(`firstDiv.getBoundingClientRect().right - firstDiv.getBoundingClientRect().left`, original_width);

    let right_width = rightDiv.getBoundingClientRect().right - rightDiv.getBoundingClientRect().left;
    let last_width = lastDiv.getBoundingClientRect().right - lastDiv.getBoundingClientRect().left;

    this.resize = (moveEvent: MouseEvent) => {
      console.log(`MouseEvent(mousemove): `, e);

      let width = original_width + (moveEvent.pageX - original_mouse_x);

      console.log(`new firstDiv width: `, width);

      firstDiv.style.width = `${width}px`;

      rightDiv.style.left = `${100 + width + 20}px`;
      lastDiv.style.left = `${100 + width + 20 + right_width + 20}px`;
    };

    window.addEventListener('mousemove', this.resize);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.resize);
    });
  }
  
}
