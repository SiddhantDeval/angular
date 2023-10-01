import { Component, Input } from '@angular/core';

@Component({
  selector: 'proj-component-children',
  templateUrl: './proj-component-children.component.html',
  styleUrls: ['./proj-component-children.component.css'],
})
export class ProjComponentChildrenComponent {
  title = 'multiple component projection';
  @Input()
  username: string = '';
}
