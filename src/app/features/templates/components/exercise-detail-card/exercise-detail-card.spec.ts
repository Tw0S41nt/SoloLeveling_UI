import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseDetailCard } from './exercise-detail-card';

describe('ExerciseDetailCard', () => {
  let component: ExerciseDetailCard;
  let fixture: ComponentFixture<ExerciseDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseDetailCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
