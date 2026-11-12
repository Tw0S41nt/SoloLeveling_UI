import { Component } from '@angular/core';
import { BodyPartFilter } from '../../../../shared/components/body-part-filter/body-part-filter';
import { ExerciseCard } from '../../../../shared/components/exercise-card/exercise-card';

@Component({
  imports: [BodyPartFilter, ExerciseCard],
  selector: 'app-exercise-list',
  styleUrl: './exercise-list.scss',
  templateUrl: './exercise-list.html',
})
export class ExerciseList {}
