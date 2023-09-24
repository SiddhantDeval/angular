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
  totalStudents = data.length;
  searchStudentName = '';
  searchFatherName = '';
  selectedGender = 'all';
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
    this.totalStudents = this.studentList.length;
  };
  getfilteredStudentByFatherName = (text: string) => {
    if (text == '') this.studentList = this.InitData;
    else
      this.studentList = this.InitData.filter((stu) =>
        stu.father.toLowerCase().includes(text)
      );
    this.totalStudents = this.studentList.length;
  };
  getfilteredStudentByGender = (text: string) => {
    if (text == 'all') this.studentList = this.InitData;
    else
      this.studentList = this.InitData.filter(
        (stu) => stu.gender.toLowerCase() == text
      );
    this.totalStudents = this.studentList.length;
  };
  handleSearch = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.searchStudentName = value;
    this.getfilteredStudentByName(value);
  };
  handleFatherSearch = (value: string) => {
    this.getfilteredStudentByFatherName(value);
  };
  handleGender = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.selectedGender = value;
    this.getfilteredStudentByGender(value);
  };
}
