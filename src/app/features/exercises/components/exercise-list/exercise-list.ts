import { Component, inject, signal } from '@angular/core';
import { ExerciseService } from '../../../../services/exercise.service';
import { BodyPartFilter } from '../../../../shared/components/body-part-filter/body-part-filter';
import { ExerciseDetailCard } from '../exercise-detail-card/exercise-detail-card';

@Component({
  imports: [BodyPartFilter, ExerciseDetailCard],
  selector: 'app-exercise-list',
  styleUrl: './exercise-list.scss',
  templateUrl: './exercise-list.html',
})
export class ExerciseList {
  private readonly exerciseService = inject(ExerciseService);

  protected readonly exercises = this.exerciseService.exercises;
  protected readonly newExerciseName = signal('');

  protected onNameInput(event: Event): void {
    this.newExerciseName.set((event.target as HTMLInputElement).value);
  }

  protected addExercise(): void {
    this.exerciseService.addExercise(this.newExerciseName());
    this.newExerciseName.set('');
  }
}
