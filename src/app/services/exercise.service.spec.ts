import { TestBed } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an exercise with the next id', () => {
    service.addExercise('  Deadlift  ');
    const added = service.exercises().at(-1);
    expect(added?.name).toBe('Deadlift');
    expect(added?.exerciseId).toBe(5);
  });

  it('should ignore blank names', () => {
    service.addExercise('   ');
    expect(service.exercises().length).toBe(4);
  });
});
