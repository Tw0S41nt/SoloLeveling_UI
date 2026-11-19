import { Component, input, output } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise.model';

@Component({
  selector: 'app-exercise-detail-card',
  standalone: true,
  templateUrl: './exercise-detail-card.html',
  styleUrl: './exercise-detail-card.scss'
})
export class ExerciseDetailCard {
  exercise = input.required<Exercise>();
  remove = output<string>();
}
