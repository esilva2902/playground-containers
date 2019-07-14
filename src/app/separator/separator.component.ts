import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {

  @Input('height') height: string;
  
  constructor() { }

  ngOnInit() {
  }

}
