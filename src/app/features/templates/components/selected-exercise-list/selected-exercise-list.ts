import { Component, input, output } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise.model';
import { ExerciseDetailCard } from '../exercise-detail-card/exercise-detail-card';

@Component({
  selector: 'app-selected-exercise-list',
  standalone: true,
  imports: [ExerciseDetailCard],
  templateUrl: './selected-exercise-list.html',
  styleUrl: './selected-exercise-list.scss'
})
export class SelectedExerciseList {
  exercises = input.required<Exercise[]>();
  remove = output<string>();
}
