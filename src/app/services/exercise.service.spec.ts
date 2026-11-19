import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ExerciseService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should GET exercises from the API', () => {
    let result: unknown;
    service.getExercises().subscribe((exercises) => (result = exercises));

    const request = httpTesting.expectOne('http://localhost:8080/SoloFit/api/exercises');
    expect(request.request.method).toBe('GET');
    request.flush([{ exerciseId: 1, name: 'Bench Press' }]);

    expect(result).toEqual([{ exerciseId: 1, name: 'Bench Press' }]);
  });
});
