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
  InitData: Student[] | [] = [];
  color = [
    // 'primary',  'warning',
    'secondary',
    'light',
    'dark',
  ];
  totalStudents = data.length;
  searchStudentName = '';
  searchFatherName = '';
  getTransformedData = () =>
    data.map((item) => ({
      ...item,
      color: this.color[Math.floor(Math.random() * this.color.length)],
    }));
  getRndmColor = () =>
    this.color[Math.floor(Math.random() * this.color.length)];

  ngOnInit() {
    this.InitData = this.studentList = this.getTransformedData();
  }

  getfilteredStudentByName = (text: string) => {
    if (text == '') this.studentList = this.InitData;
    else
      this.studentList = this.InitData.filter((stu) =>
        stu.name.toLowerCase().includes(text)
      );
  };
  getfilteredStudentByFatherName = (text: string) => {
    if (text == '') this.studentList = this.InitData;
    else
      this.studentList = this.InitData.filter((stu) =>
        stu.father.toLowerCase().includes(text)
      );
  };
  handleSearch = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.searchStudentName = value;
    this.getfilteredStudentByName(value);
  };
  handleFatherSearch = (value: string) => {
    this.getfilteredStudentByFatherName(value);
  };
}
