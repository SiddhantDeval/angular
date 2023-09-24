import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardHeaderComponent } from './student-card-header.component';

describe('StudentCardHeaderComponent', () => {
  let component: StudentCardHeaderComponent;
  let fixture: ComponentFixture<StudentCardHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCardHeaderComponent]
    });
    fixture = TestBed.createComponent(StudentCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
