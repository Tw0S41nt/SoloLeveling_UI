import { Component } from '@angular/core';
import { ExerciseCard } from '../../../../shared/components/exercise-card/exercise-card';

@Component({
  imports: [ExerciseCard],
  selector: 'app-exercise-detail',
  styleUrl: './exercise-detail.scss',
  templateUrl: './exercise-detail.html',
})
export class ExerciseDetail {}
