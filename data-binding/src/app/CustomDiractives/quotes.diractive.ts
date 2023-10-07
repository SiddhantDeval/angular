import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[txtPri]',
})
export class TestColor implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    const p = this.element.nativeElement as HTMLParagraphElement;
    p.classList.add('text-primary');
  }
}
