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
  searchStudentName = '';
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

  getfilteredStudentByName = (text: string) => {
    if (text == '') this.studentList = this.getTransformedData();
    else
      this.studentList = this.studentList.filter((stu) =>
        stu.name.toLowerCase().includes(text)
      );
  };
  handleSearch = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.searchStudentName = value;
    console.log(value);
    this.getfilteredStudentByName(value);
  };
}
