import { Component, OnInit, Input } from '@angular/core';
import { Score } from '../app.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() score: Score
  @Input() winningScore: number

  constructor() { }

  ngOnInit() {
  }

  calculateProgressBarWidth(currentScore: number) {
    const width = currentScore / this.winningScore * 100
    return width + '%'
  }

}
