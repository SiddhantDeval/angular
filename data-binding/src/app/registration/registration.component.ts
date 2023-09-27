import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { type RegistrationStudent } from '../Modules/Registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  studentList: RegistrationStudent[] = [];
  @ViewChildren('registrationInputs') registrationInputs: QueryList<
    ElementRef<HTMLInputElement>
  >;
  getValueFromHtmlInputElement = (element: HTMLInputElement) => {
    let value: string | boolean = element.value;
    if (element.type === 'chackbox') value = element.checked;
    return value;
  };
  addStudentToList() {
    let studentDetails: RegistrationStudent = {} as any;
    this.registrationInputs.forEach(InputItem => {
      const { nativeElement } = InputItem;
      studentDetails = Object.assign(studentDetails, {
        [nativeElement.name]: this.getValueFromHtmlInputElement(nativeElement),
      });
      nativeElement.value = '';
    });
    this.studentList.push(studentDetails);
  }
}
