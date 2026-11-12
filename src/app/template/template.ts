import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-template',
  styleUrl: './template.css',
  templateUrl: './template.html',
})
export class Template {
  templates = [
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
    { id: 7, name: 'Sunday' }
  ];
}
