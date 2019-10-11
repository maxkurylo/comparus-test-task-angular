import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() cellHighlightInterval: number
  @Input() showMenu: boolean
  @Output() onStartButtonClicked = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  onStartButtonClick(cellHighlightInterval: number) {
    if (!cellHighlightInterval || cellHighlightInterval < 100 || cellHighlightInterval > 10000)
      cellHighlightInterval = 900
    this.onStartButtonClicked.emit(cellHighlightInterval)
  }

}
