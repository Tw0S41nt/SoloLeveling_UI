import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciseList } from './exercise-list/exercise-list';

@Component({
  imports: [RouterOutlet, ExerciseList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('SoloFit');
}
