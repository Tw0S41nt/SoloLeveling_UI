import { Routes } from '@angular/router';
import { ExerciseDetail } from './features/exercises/components/exercise-detail/exercise-detail';
import { ExerciseList } from './features/exercises/components/exercise-list/exercise-list';

export const routes: Routes = [
  // TODO: change to 'dashboard' once the Dashboard component is merged
  { path: '', redirectTo: 'exercises', pathMatch: 'full' },
  { path: 'exercises', component: ExerciseList },
  { path: 'exercises/:id', component: ExerciseDetail },
];
