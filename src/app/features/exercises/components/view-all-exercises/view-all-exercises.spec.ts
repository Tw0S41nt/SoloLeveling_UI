import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAllExercises } from './view-all-exercises';

describe('ViewAllExercises', () => {
  let component: ViewAllExercises;
  let fixture: ComponentFixture<ViewAllExercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllExercises],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllExercises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
