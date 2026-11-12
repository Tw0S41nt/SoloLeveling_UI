import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSingleTemplate } from './view-single-template';

describe('ViewSingleTemplate', () => {
  let component: ViewSingleTemplate;
  let fixture: ComponentFixture<ViewSingleTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSingleTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSingleTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
