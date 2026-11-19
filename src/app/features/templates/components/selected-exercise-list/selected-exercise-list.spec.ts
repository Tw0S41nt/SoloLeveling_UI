import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedExerciseList } from './selected-exercise-list';

describe('SelectedExerciseList', () => {
  let component: SelectedExerciseList;
  let fixture: ComponentFixture<SelectedExerciseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedExerciseList],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedExerciseList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
