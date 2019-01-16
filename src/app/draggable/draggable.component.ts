import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMouseDown(e) {
    console.log(`e.clientX: ${e.clientX}`);
  }

  onClick(e) {
    console.log(`event: ${JSON.stringify(e, undefined, 2)}`);
  }
}
