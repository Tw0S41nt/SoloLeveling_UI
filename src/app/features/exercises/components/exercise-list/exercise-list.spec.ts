import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseList } from './exercise-list';

describe('ExerciseList', () => {
  let fixture: ComponentFixture<ExerciseList>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseList],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ExerciseList);
  });

  it('should render a card for each exercise from the API', async () => {
    httpTesting.expectOne('http://localhost:8080/SoloFit/api/exercises').flush([
      { exerciseId: 1, name: 'Bench Press' },
      { exerciseId: 2, name: 'Squat' },
    ]);
    await fixture.whenStable();

    const cards = fixture.nativeElement.querySelectorAll('app-exercise-detail-card');
    expect(cards.length).toBe(2);
  });

  it('should show an error when the API is unreachable', async () => {
    httpTesting
      .expectOne('http://localhost:8080/SoloFit/api/exercises')
      .flush('down', { status: 0, statusText: 'Unknown Error' });
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('.error')).toBeTruthy();
  });
});
