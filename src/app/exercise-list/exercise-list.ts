import { Component } from '@angular/core';

/** One exercise in the SoloFit library (mock data until we connect the API). */
interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  primaryMuscle: string;
}

@Component({
  imports: [],
  selector: 'app-exercise-list',
  styleUrl: './exercise-list.scss',
  templateUrl: './exercise-list.html',
})
export class ExerciseList {
  // Mock data matching the seed rows in the SoloFit database
  protected readonly exercises: Exercise[] = [
    { id: 1, name: 'Bench Press', bodyPart: 'Chest', primaryMuscle: 'Chest' },
    { id: 2, name: 'Squat', bodyPart: 'Legs', primaryMuscle: 'Quads' },
    { id: 3, name: 'Bicep Curl', bodyPart: 'Arms', primaryMuscle: 'Biceps' },
    { id: 4, name: 'Overhead Press', bodyPart: 'Shoulders', primaryMuscle: 'Delts' },
  ];
}
