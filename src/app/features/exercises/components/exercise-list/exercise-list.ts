import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, tap } from 'rxjs';
import { ExerciseService } from '../../../../services/exercise.service';
import { BodyPartFilter } from '../../../../shared/components/body-part-filter/body-part-filter';
import { Exercise } from '../../../../shared/models/exercise.model';
import { ExerciseDetailCard } from '../exercise-detail-card/exercise-detail-card';

@Component({
  imports: [BodyPartFilter, ExerciseDetailCard],
  selector: 'app-exercise-list',
  styleUrl: './exercise-list.scss',
  templateUrl: './exercise-list.html',
})
export class ExerciseList {
  private readonly exerciseService = inject(ExerciseService);

  protected readonly loaded = signal(false);
  protected readonly loadError = signal(false);

  /** Exercises fetched from the API. Starts as [] until the response arrives. */
  readonly exercises = toSignal(
    this.exerciseService.getExercises().pipe(
      tap(() => this.loaded.set(true)),
      catchError(() => {
        this.loadError.set(true);
        return of<Exercise[]>([]);
      }),
    ),
    { initialValue: [] },
  );

  protected readonly addedExercises = this.exerciseService.addedExercises;
  protected readonly totalCount = computed(
    () => this.exercises().length + this.addedExercises().length,
  );

  protected readonly newExerciseName = signal('');

  protected onNameInput(event: Event): void {
    this.newExerciseName.set((event.target as HTMLInputElement).value);
  }

  protected addExercise(): void {
    this.exerciseService.addExercise(this.newExerciseName());
    this.newExerciseName.set('');
  }
}
