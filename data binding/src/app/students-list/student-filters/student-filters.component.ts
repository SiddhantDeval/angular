import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../mock';

@Component({
  selector: 'app-student-filters',
  templateUrl: './student-filters.component.html',
  styleUrls: ['./student-filters.component.css'],
})
export class StudentFiltersComponent {
  @Input()
  students: Student[] | [] = [];

  filterStudents: Student[] | [] = this.students;
  totalStudents = this.filterStudents.length;
  searchStudentName = '';
  searchFatherName = '';
  selectedGender = 'all';

  @Output()
  customEventProviderStudentList = new EventEmitter<Student[]>();
  emitCustomEventProviderStudentList = () => {
    this.customEventProviderStudentList.emit(this.filterStudents);
    console.log('emit');
  };

  getfilteredStudentByName = (text: string) => {
    if (text == '') this.filterStudents = this.students;
    else
      this.filterStudents = this.students.filter((stu) =>
        stu.name.toLowerCase().includes(text)
      );
  };
  getfilteredStudentByFatherName = (text: string) => {
    if (text == '') this.filterStudents = this.students;
    else
      this.filterStudents = this.students.filter((stu) =>
        stu.father.toLowerCase().includes(text)
      );
  };
  getfilteredStudentByGender = (text: string) => {
    if (text == 'all') this.filterStudents = this.students;
    else
      this.filterStudents = this.students.filter(
        (stu) => stu.gender.toLowerCase() == text
      );
  };
  handleSearch = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.searchStudentName = value;
    this.getfilteredStudentByName(value);
    this.emitCustomEventProviderStudentList();
  };
  handleFatherSearch = (value: string) => {
    this.getfilteredStudentByFatherName(value);
    this.emitCustomEventProviderStudentList();
  };
  handleGender = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.selectedGender = value;
    this.getfilteredStudentByGender(value);
    this.emitCustomEventProviderStudentList();
  };
}
