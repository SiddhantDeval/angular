import { Component, Input } from '@angular/core';
import { Student } from '../../mock';

@Component({
  selector: 'app-student-card-body',
  templateUrl: './student-card-body.component.html',
  styleUrls: ['./student-card-body.component.css'],
})
export class StudentCardBodyComponent {
  @Input()
  student: Student;
}
