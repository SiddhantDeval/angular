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
  searchStudentName = '';
  searchFatherName = '';
  selectedGender = 'all';

  @Output()
  customEventProviderStudentList = new EventEmitter<Student[]>();
  emitCustomEventProviderStudentList = () => {
    this.customEventProviderStudentList.emit(this.filterStudents);
  };
  filter = () => {
    let filteredStudentList = this.students;

    if (this.searchStudentName != '') {
      filteredStudentList = filteredStudentList.filter((stu) =>
        stu.name.toLowerCase().includes(this.searchStudentName)
      );
    }
    if (this.searchFatherName != '') {
      filteredStudentList = filteredStudentList.filter((stu) =>
        stu.father.toLowerCase().includes(this.searchFatherName)
      );
    }
    if (this.selectedGender != 'all') {
      filteredStudentList = filteredStudentList.filter(
        (stu) => stu.gender.toLowerCase() == this.selectedGender
      );
    }
    this.filterStudents = filteredStudentList;
  };

  handleSearch = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.searchStudentName = value;
    this.filter();
    // custom event emmiter called
    this.emitCustomEventProviderStudentList();
  };
  handleFatherSearch = (value: string) => {
    // two way data binding
    this.filter();
    // custom event emmiter called
    this.emitCustomEventProviderStudentList();
  };
  handleGender = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.selectedGender = value;
    this.filter();
    // custom event emmiter called
    this.emitCustomEventProviderStudentList();
  };
}
