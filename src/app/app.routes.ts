import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { CreateTemplate } from './features/templates/components/create-template/create-template';
import { ViewSingleTemplate } from './features/templates/components/view-single-template/view-single-template';
import { ViewAllExercises } from './features/exercises/components/view-all-exercises/view-all-exercises';
import { ViewSingleExercise } from './features/exercises/components/view-single-exercise/view-single-exercise';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'templates/new', component: CreateTemplate },
  { path: 'templates/:id', component: ViewSingleTemplate},
  { path: 'exercises', component: ViewAllExercises},
  { path: 'exercises/:id', component: ViewSingleExercise}
];