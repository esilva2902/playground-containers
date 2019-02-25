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

  onResize(outerDiv: HTMLElement, rightDiv: HTMLElement, lastDiv: HTMLElement, e: MouseEvent) {
    e.preventDefault();

    // console.log(`outerDiv.getBoundingClientRect(): `, outerDiv.getBoundingClientRect());
    // console.log(`outerDiv: `, outerDiv);
    // console.log(`outerDiv.style.left: `, outerDiv.style.left);
    // console.log(`outerDiv.style.width: `, outerDiv.style.width);
    // console.log(`outerDiv.style: `, outerDiv.style);

    let original_width = outerDiv.getBoundingClientRect().right - outerDiv.getBoundingClientRect().left;
    let original_mouse_x = e.pageX;

    let right_width = rightDiv.getBoundingClientRect().right - rightDiv.getBoundingClientRect().left;
    let last_width = lastDiv.getBoundingClientRect().right - lastDiv.getBoundingClientRect().left;

    this.resize = (moveEvent: MouseEvent) => {
      let width = original_width + (moveEvent.pageX - original_mouse_x);
      outerDiv.style.width = `${width}px`;

      rightDiv.style.left = `${100 + width + 20}px`;
      lastDiv.style.left = `${100 + width + 20 + right_width + 20}px`;
    };

    window.addEventListener('mousemove', this.resize);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', this.resize);
    });
  }
  
}
