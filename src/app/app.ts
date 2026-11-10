import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateCardComponent } from './components/template-card/template-card';

@Component({
  imports: [RouterOutlet, TemplateCardComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('solo-leveling-ui');
}
