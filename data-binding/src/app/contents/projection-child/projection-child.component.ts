import {
  Component,
  ContentChild,
  ElementRef,
  AfterContentChecked,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ProjComponentChildComponent } from '../contents/proj-component-child/proj-component-child.component';

@Component({
  selector: 'projection-child',
  templateUrl: './projection-child.component.html',
  styleUrls: ['./projection-child.component.css'],
})
export class ProjectionChildComponent
  implements AfterContentChecked, AfterViewInit
{
  edit = false;
  paraContent = '';
  // Element as a chlid
  @ContentChild('para') paraElement: ElementRef<HTMLParagraphElement>;
  @ViewChild('InputParaRef') InputParaRef: ElementRef<HTMLInputElement>;
  ngAfterContentChecked(): void {
    //  run each time after projected content was checked
    this.paraContent = this.paraElement.nativeElement.innerText;
  }

  //component as a chlid
  @ContentChild(ProjComponentChildComponent)
  ComponentElement: ProjComponentChildComponent;
  ngAfterViewInit() {
    console.log(this.ComponentElement.username);
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
