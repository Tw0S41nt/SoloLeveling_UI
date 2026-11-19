import { Routes } from '@angular/router';
import { TemplateForm } from './features/templates/components/template-form/template-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'templates/new',
    pathMatch: 'full'
  },
  {
    path: 'templates/new',
    component: TemplateForm
  },
  {
    path: 'templates/:id/edit',
    component: TemplateForm
  }
];