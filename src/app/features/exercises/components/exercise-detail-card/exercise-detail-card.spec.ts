import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDetailCard } from './exercise-detail-card';

describe('ExerciseDetailCard', () => {
  let fixture: ComponentFixture<ExerciseDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseDetailCard);
    fixture.componentRef.setInput('exercise', {
      exerciseId: 1,
      name: 'Bench Press',
      primaryMuscle: 'Chest',
    });
    await fixture.whenStable();
  });

  it('should display the exercise name', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h3')?.textContent).toContain('Bench Press');
  });
});
