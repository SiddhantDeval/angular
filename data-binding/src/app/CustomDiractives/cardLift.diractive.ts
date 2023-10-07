import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
} from '@angular/core';
@Directive({
  selector: '[cardLift]',
})
export class CardLift implements OnInit {
  div?: HTMLDivElement;
  constructor(
    private element: ElementRef,
    private render: Renderer2
  ) {}
  ngOnInit() {
    this.div = this.element.nativeElement as HTMLDivElement;
    this.render.addClass(this.div, 'card-transition');
  }
  @HostListener('mouseenter') OnMouseEnter() {
    this.render.addClass(this.div, 'card-lift');
  }
  @HostListener('mouseleave') OnMouseExit() {
    this.render.removeClass(this.div, 'card-lift');
  }
}
