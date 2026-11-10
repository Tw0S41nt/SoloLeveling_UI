import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-card.html',
  styleUrl: './template-card.scss'
})
export class TemplateCardComponent {
  templates = [
    { id: 1, name: 'Chest & Triceps Hypertrophy' },
    { id: 2, name: 'Leg Day Power Split' },
    { id: 3, name: 'Back & Biceps Strength' },
    { id: 4, name: 'Shoulders & Core Sculpt' }
  ];
}