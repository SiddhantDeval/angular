import { Component } from '@angular/core';
import data from './mock.data.json';
import { Student } from './mock';
@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  studentList: Student[] | [] = [];
  color = [
    // 'primary',  'warning',
    'secondary',
    'light',
    'dark',
  ];
  totalStudents = data.length;
  getTransformedData = () =>
    data.map((item) => ({
      ...item,
      color: this.color[Math.floor(Math.random() * this.color.length)],
    }));
  getRndmColor = () =>
    this.color[Math.floor(Math.random() * this.color.length)];
  ngOnInit() {
    this.studentList = this.getTransformedData();
  }
}
