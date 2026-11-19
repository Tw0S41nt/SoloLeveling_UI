import { Component, inject, signal, computed } from '@angular/core';
import { TemplateService } from '../../services/template';
import { DaySelector } from '../day-selector/day-selector';
import { SelectedExerciseList } from '../selected-exercise-list/selected-exercise-list';
import { Exercise } from '../../../../shared/models/exercise.model';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [DaySelector, SelectedExerciseList],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss'
})
export class TemplateForm {
  templateService = inject(TemplateService);

  filter = signal<'All' | 'Upper' | 'Lower'>('All');
  searchText = signal('');

  filteredExercises = computed(() =>
    this.templateService.availableExercises.filter(exercise =>
      (this.filter() === 'All' ||
       exercise.category === this.filter()) &&
      exercise.name.toLowerCase().includes(
        this.searchText().toLowerCase()
      )
    )
  );

  addExercise(exercise: Exercise) {
    this.templateService.addExercise(exercise);
  }

  removeExercise(id: string) {
    this.templateService.removeExercise(id);
  }

  isSelected(id: string) {
    return this.templateService.selectedExercises()
      .some(exercise => exercise.id === id);
  }
}
