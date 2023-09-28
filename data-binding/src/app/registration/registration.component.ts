import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
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
  @ViewChild('formElement') formElement: ElementRef<HTMLFormElement>;
  toggle = false;

  getValueFromHtmlInputElement = (element: HTMLInputElement) => {
    let value: string | boolean = element.value;
    if (element.type === 'chackbox') value = element.checked;
    return value;
  };
  handleReset() {
    this.formElement.nativeElement.classList.remove('was-validated');
    for (const { nativeElement } of this.registrationInputs)
      nativeElement.value = '';
  }
  addStudentToList() {
    this.toggle = !this.toggle;
    this.formElement.nativeElement.classList.add('was-validated');
    let isFormValidate = true;
    let studentDetails: RegistrationStudent = {} as any;
    for (const { nativeElement } of this.registrationInputs) {
      const isValid = nativeElement.checkValidity();
      if (!isValid) isFormValidate = isFormValidate && isValid;
      studentDetails = Object.assign(studentDetails, {
        [nativeElement.name]: this.getValueFromHtmlInputElement(nativeElement),
      });
    }
    if (isFormValidate) {
      this.studentList.push(studentDetails);
      this.handleReset();
    }
  }
}
