import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFiltersComponent } from './student-filters.component';

describe('StudentFiltersComponent', () => {
  let component: StudentFiltersComponent;
  let fixture: ComponentFixture<StudentFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFiltersComponent],
    });
    fixture = TestBed.createComponent(StudentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
