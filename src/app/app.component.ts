import { Component } from '@angular/core';


export interface Cell {
  id: number,
  highlighted: boolean,
  win: boolean,
  loose: boolean
}

export interface Score {
  user: number,
  computer: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cells: Cell[] = [... new Array(100)].map((el, i) => ({ id: i, highlighted: false, win: false, loose: false }))
  public score: Score = { user: 0, computer: 0 }
  public showModal: boolean = false
  public showMenu: boolean = true
  public cellHighlightInterval: number = 900
  public readonly winningScore: number = 10
  public winner: string = ''

  private readonly breakTimeout: number = 800
  private highlightedCell: number = null


  startGame() {
    this.gameIteration()
  }

  gameIteration() {
    this.highlightedCell = Math.floor(Math.random() * this.cells.length)
    this.timeout(this.breakTimeout)
      .then(() => this.highlightCell())
      .then(() => this.timeout(this.cellHighlightInterval))
      .then(() => this.timeRanOut())
      .then(() => this.timeout(this.breakTimeout))
      .then(() => this.checkForGameWin())
      .then(() => this.clearField())
      .then(() => { this.showModal ? '' : this.gameIteration() })

  }

  timeout(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time)
    })
  }

  highlightCell() {
    return new Promise((resolve, reject) => {
      this.cells[this.highlightedCell].highlighted = true
      resolve()
    })
  }

  timeRanOut() {
    const cell = this.cells[this.highlightedCell]
    if (!cell.win) {
      this.score.computer += 1
      cell.loose = true;
    }
  }

  clearField() {
    const cell = this.cells[this.highlightedCell]
    cell.win = false
    cell.loose = false
    cell.highlighted = false
    this.highlightedCell = null
  }

  checkForGameWin() {
    if (this.score.user === this.winningScore) {
      this.showModal = true
      this.winner = 'user'
    }
    if (this.score.computer === this.winningScore) {
      this.showModal = true
      this.winner = 'computer'
    }
  }



  onStartButtonClicked(cellHighlightInterval: number) {
    this.cellHighlightInterval = cellHighlightInterval
    this.showMenu = false
    this.startGame()
  }

  onCellClicked(cellId: number) {
    const cell = this.cells[cellId]
    if (!cell.win && !cell.loose && cellId === this.highlightedCell) {
      this.score.user += 1
      cell.win = true
    }
  }

  onModalClosed() {
    this.showModal = false
    this.showMenu = true
    this.score.computer = 0
    this.score.user = 0
    this.winner = ''
  }

}
