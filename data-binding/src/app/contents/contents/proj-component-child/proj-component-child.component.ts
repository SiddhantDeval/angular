import { Component, Input } from '@angular/core';

@Component({
  selector: 'proj-component-child',
  templateUrl: './proj-component-child.component.html',
  styleUrls: ['./proj-component-child.component.css'],
})
export class ProjComponentChildComponent {
  title = 'single component projection';
  @Input()
  username: string = '';
}
