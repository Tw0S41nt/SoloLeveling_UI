import { Exercise } from './exercise.model';

export interface WorkoutTemplate {
  id: string;
  name: string;
  dayOfWeek: string;
  exercises: Exercise[];
}