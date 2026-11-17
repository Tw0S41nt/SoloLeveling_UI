import { Injectable, signal } from '@angular/core';

export interface Exercise {
  id: number;
  name: string;
}

export interface WorkoutTemplate {
  id: number;
  day: string;
  name: string;
  exercises: Exercise[];
}

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  templates = signal<WorkoutTemplate[]>([
    { id: 1, day: 'Monday', name: 'Upper Body Blast', exercises: [] },
    { id: 2, day: 'Wednesday', name: 'Leg Day Power', exercises: [] }
  ]);

  addTemplate(name: string) {
    const newTemplate: WorkoutTemplate = {
      id: Date.now(),
      day: 'Friday',
      name: name,
      exercises: []
    };
    this.templates.update(list => [...list, newTemplate]);
  }
}