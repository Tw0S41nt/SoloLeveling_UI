import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../shared/models/exercise.model';

/** Holds the exercise library and the logic for changing it. */
@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/SoloFit/api/exercises';

  // Mock data matching the SoloFit seed rows until we connect to the API
  private readonly exercisesSignal = signal<Exercise[]>([
    {
      exerciseId: 1,
      name: 'Bench Press',
      bodyPart: 'Chest',
      primaryMuscle: 'Chest',
      secondaryMuscle: 'Triceps',
    },
    {
      exerciseId: 2,
      name: 'Squat',
      bodyPart: 'Legs',
      primaryMuscle: 'Quads',
      secondaryMuscle: 'Glutes',
    },
    {
      exerciseId: 3,
      name: 'Bicep Curl',
      bodyPart: 'Arms',
      primaryMuscle: 'Biceps',
      secondaryMuscle: 'Forearms',
    },
    {
      exerciseId: 4,
      name: 'Overhead Press',
      bodyPart: 'Shoulders',
      primaryMuscle: 'Delts',
      secondaryMuscle: 'Triceps',
    },
  ]);

  /** Read-only view so components can display exercises but only change them through this service. */
  readonly exercises = this.exercisesSignal.asReadonly();

  /** Adds an exercise with the next free id. Blank names are ignored. */
  addExercise(name: string): void {
    const trimmed = name.trim();
    if (!trimmed) {
      return;
    }
    this.exercisesSignal.update((list) => {
      const nextId = Math.max(0, ...list.map((exercise) => exercise.exerciseId)) + 1;
      return [...list, { exerciseId: nextId, name: trimmed }];
    });
  }

  /** GET /SoloFit/api/exercises - every exercise in the database. */
  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl);
  }
}
