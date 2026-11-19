import { Component } from '@angular/core';
import { DaySelector } from '../day-selector/day-selector';
import { SelectedExerciseList } from '../selected-exercise-list/selected-exercise-list';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [DaySelector, SelectedExerciseList],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss'
})
export class TemplateForm {}