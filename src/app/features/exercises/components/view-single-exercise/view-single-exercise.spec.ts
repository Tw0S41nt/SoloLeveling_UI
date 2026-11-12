import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSingleExercise } from './view-single-exercise';

describe('ViewSingleExercise', () => {
  let component: ViewSingleExercise;
  let fixture: ComponentFixture<ViewSingleExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSingleExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSingleExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
