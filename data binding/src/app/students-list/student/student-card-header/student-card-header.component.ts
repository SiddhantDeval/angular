import { Component, Input } from '@angular/core';
import { Student } from '../../mock';

@Component({
  selector: 'app-student-card-header',
  templateUrl: './student-card-header.component.html',
  styleUrls: ['./student-card-header.component.css'],
})
export class StudentCardHeaderComponent {
  @Input()
  student: Student;
}
