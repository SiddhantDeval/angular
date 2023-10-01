import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ProjComponentChildrenComponent } from '../contents/proj-component-children/proj-component-children.component';

@Component({
  selector: 'projection-children',
  templateUrl: './projection-children.component.html',
  styleUrls: ['./projection-children.component.css'],
})
export class ProjectionChildrenComponent {
  edit = false;
  parasContent = ['', '', ''];

  @ContentChildren('paras') parasElement: QueryList<
    ElementRef<HTMLParagraphElement>
  >;
  @ViewChildren('InputParasRef') InputParasRef: QueryList<
    ElementRef<HTMLInputElement>
  >;
  ngAfterContentChecked(): void {
    //  run each time after projected content was checked
    this.parasContent = this.parasElement.map(el => el.nativeElement.innerHTML);
  }

  //component as a chlidren
  @ContentChildren(ProjComponentChildrenComponent)
  ComponentsElement: QueryList<ProjComponentChildrenComponent>;
  ngAfterViewInit() {
    console.log(
      this.ComponentsElement.reduce(
        (p, c) => p + ', ' + c.username,
        'usernames'
      )
    );
  }

  handleEdit() {
    this.edit = !this.edit;
  }
  handleSave() {
    this.edit = false;
    this.parasElement.forEach((el, idx) => {
      el.nativeElement.innerHTML = this.InputParasRef.get(idx)?.nativeElement
        .value as string;
    });
  }
}
