import { Component, Input } from '@angular/core';
import { Student } from '../mock';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  @Input()
  student: Student;
}
