

import { Component, input } from '@angular/core';
import { WorkoutTemplate } from '../../../services/templateService';

@Component({
  selector: 'app-template-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ template().name }}</h3>
      <p>Day: {{ template().day }}</p>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #444; padding: 12px; margin: 8px 0; border-radius: 6px; background: #1e1e2f; color: #fff; }
  `]
})
export class TemplateCardComponent {
  template = input.required<WorkoutTemplate>();
}