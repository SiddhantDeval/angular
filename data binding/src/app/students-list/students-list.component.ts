import { Component } from '@angular/core';
import data from './mock.data.json';
import { Student } from './mock';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent {
  studentList: Student[] | [] = [];
  InitData: Student[] | [] = [];
  color = [
    // 'primary',  'warning',
    'secondary',
    'light',
    'dark',
  ];

  getTransformedData = () =>
    data.map((item) => ({
      ...item,
      color: this.color[Math.floor(Math.random() * this.color.length)],
    }));
  ngOnInit() {
    this.InitData = this.studentList = this.getTransformedData();
  }
  customEventConsumerFilteredStudents = (students: Student[]) => {
    this.studentList = students;
  };
}
