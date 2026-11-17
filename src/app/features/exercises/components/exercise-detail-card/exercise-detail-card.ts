import { Component, input } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise.model';

/** Presentational card that displays one exercise passed in by its parent. */
@Component({
  imports: [],
  selector: 'app-exercise-detail-card',
  styleUrl: './exercise-detail-card.scss',
  templateUrl: './exercise-detail-card.html',
})
export class ExerciseDetailCard {
  readonly exercise = input.required<Exercise>();
}
