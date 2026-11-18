import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

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
  private http = inject(HttpClient);
  private api_url = 'http://localhost:8080/SoloFit/api/templates/allTemplates'
  getTemplates(): Observable<WorkoutTemplate[]> {
    return this.http.get<WorkoutTemplate[]>(this.api_url);
  }
  addTemplate(name: string) {
    console.log('Adding template:', name);
  }
}