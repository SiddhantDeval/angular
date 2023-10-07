import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[txtPri]',
})
export class TestColor implements OnInit {
  constructor(
    private element: ElementRef,
    private render2: Renderer2
  ) {}
  ngOnInit() {
    const p = this.element.nativeElement as HTMLParagraphElement;
    /*one way ,not a best practice
     p.classList.add('text-primary'); */

    //second way , good practice
    this.render2.addClass(p, 'text-primary');
  }
}
