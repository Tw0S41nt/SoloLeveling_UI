import { Component, inject, signal } from '@angular/core';
import { TemplateService } from '../../services/templateService';
import { TemplateCardComponent } from '../../shared/components/template-card/template-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TemplateCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  templateService = inject(TemplateService);
  
  newTemplateName = signal('');

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.newTemplateName.set(value);
  }

  addNewTemplate() {
    if (this.newTemplateName().trim()) {
      this.templateService.addTemplate(this.newTemplateName());
      this.newTemplateName.set('');
    }
  }
}