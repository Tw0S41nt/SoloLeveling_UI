import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseService } from '../../../../services/exercise.service';
import { ExerciseList } from './exercise-list';

describe('ExerciseList', () => {
  let fixture: ComponentFixture<ExerciseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseList],
      providers: [ExerciseService],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseList);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
