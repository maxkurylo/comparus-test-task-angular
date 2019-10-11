import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Cell } from '../app.component'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() cells: Cell[]
  @Input() highlightedCell: number

  @Output() onCellClicked = new EventEmitter<number>()


  constructor() {

  }

  ngOnInit() {

  }


  onCellClick(cellId: number) {
    this.onCellClicked.emit(cellId)
  }

}
