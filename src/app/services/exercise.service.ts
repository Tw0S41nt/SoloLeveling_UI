import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Exercise } from '../shared/models/exercise.model';

/** Loads exercises from the SoloFit API and keeps track of ones added in the UI. */
@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/SoloFit/api/exercises';

  /** Highest id seen from the API, so added exercises never reuse a database id. */
  private highestFetchedId = 0;

  // The API has no POST for exercises yet, so new ones only live here until the page reloads
  private readonly addedExercisesSignal = signal<Exercise[]>([]);
  readonly addedExercises = this.addedExercisesSignal.asReadonly();

  /** GET /SoloFit/api/exercises - every exercise in the database. */
  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl).pipe(
      tap((exercises) => {
        this.highestFetchedId = Math.max(
          this.highestFetchedId,
          ...exercises.map((exercise) => exercise.exerciseId),
        );
      }),
    );
  }

  /** Adds an exercise with the next free id. Blank names are ignored. */
  addExercise(name: string): void {
    const trimmed = name.trim();
    if (!trimmed) {
      return;
    }
    this.addedExercisesSignal.update((list) => {
      const nextId =
        Math.max(this.highestFetchedId, ...list.map((exercise) => exercise.exerciseId)) + 1;
      return [...list, { exerciseId: nextId, name: trimmed }];
    });
  }
}
