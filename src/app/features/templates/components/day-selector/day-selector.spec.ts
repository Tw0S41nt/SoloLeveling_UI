import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaySelector } from './day-selector';

describe('DaySelector', () => {
  let component: DaySelector;
  let fixture: ComponentFixture<DaySelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaySelector],
    }).compileComponents();

    fixture = TestBed.createComponent(DaySelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
