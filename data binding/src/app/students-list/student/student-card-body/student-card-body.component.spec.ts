import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardBodyComponent } from './student-card-body.component';

describe('StudentCardBodyComponent', () => {
  let component: StudentCardBodyComponent;
  let fixture: ComponentFixture<StudentCardBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCardBodyComponent]
    });
    fixture = TestBed.createComponent(StudentCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
