import { Injectable, signal } from '@angular/core';
import { Exercise } from '../../../shared/models/exercise.model';

@Injectable()
export class TemplateService {
  availableExercises: Exercise[] = [
    { id: '1', name: 'Push Ups', muscleGroup: 'Chest', category: 'Upper' },
    { id: '2', name: 'Bench Press', muscleGroup: 'Chest', category: 'Upper' },
    { id: '3', name: 'Pull Ups', muscleGroup: 'Back', category: 'Upper' },
    { id: '4', name: 'Bicep Curls', muscleGroup: 'Arms', category: 'Upper' },
    { id: '5', name: 'Squats', muscleGroup: 'Legs', category: 'Lower' },
    { id: '6', name: 'Deadlift', muscleGroup: 'Legs', category: 'Lower' },
    { id: '7', name: 'Lunges', muscleGroup: 'Legs', category: 'Lower' },
    { id: '8', name: 'Calf Raises', muscleGroup: 'Calves', category: 'Lower' }
  ];

  selectedExercises = signal<Exercise[]>([]);

  addExercise(exercise: Exercise) {
    if (!this.selectedExercises().some(e => e.id === exercise.id)) {
      this.selectedExercises.update(items => [...items, exercise]);
    }
  }

  removeExercise(id: string) {
    this.selectedExercises.update(items =>
      items.filter(exercise => exercise.id !== id)
    );
  }
}
