import {
  Component,
  ContentChild,
  ElementRef,
  AfterContentChecked,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'projection-child',
  templateUrl: './projection-child.component.html',
  styleUrls: ['./projection-child.component.css'],
})
export class ProjectionChildComponent implements AfterContentChecked {
  edit = false;
  paraContent = '';
  @ContentChild('para') paraElement: ElementRef<HTMLParagraphElement>;
  @ViewChild('InputParaRef') InputParaRef: ElementRef<HTMLInputElement>;

  ngAfterContentChecked(): void {
    //  run each time after projected content was checked
    this.paraContent = this.paraElement.nativeElement.innerText;
  }

  handleEdit() {
    this.edit = !this.edit;
  }
  handleSave() {
    this.edit = false;
    const areaTextValue = this.InputParaRef.nativeElement.value;
    this.paraElement.nativeElement.innerText = areaTextValue;
  }
}
