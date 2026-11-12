import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyPartFilter } from './body-part-filter';

describe('BodyPartFilter', () => {
  let component: BodyPartFilter;
  let fixture: ComponentFixture<BodyPartFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPartFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyPartFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
