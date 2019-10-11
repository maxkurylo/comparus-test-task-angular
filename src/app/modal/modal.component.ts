import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showModal: boolean
  @Input() winner: string
  @Output() onModalClosed = new EventEmitter()

  private userWin = {
    title: 'You won!',
    description: 'That was a good one! Machines are already crying!'
  }
  private computerWin = {
    title: 'Computer won!',
    description: 'Well, not this time... You can always try one more time! If you not scared, of course.'
  }

  constructor() { }

  ngOnInit() {
  }

  onModalClose() {
    this.onModalClosed.emit()
  }


  calculateModalTitle() {
    if (this.winner === 'user')
      return this.userWin.title
    else if (this.winner === 'computer')
      return this.computerWin.title
    return ''
  }

  calculateModalDescription() {
    if (this.winner === 'user')
      return this.userWin.description
    else if (this.winner === 'computer')
      return this.computerWin.description
    return ''
  }

}
