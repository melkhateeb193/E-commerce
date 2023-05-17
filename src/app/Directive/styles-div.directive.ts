import { Directive ,ElementRef , HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStylesDiv]'
})
export class StylesDivDirective {
@Input() raduis1:string = "60px";

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.borderRadius = `this.raduis1`;
    this.element.nativeElement.style.boxShadow= "0 5px 10px rgba(0, 0, 0, 0.3)";
  }
  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.boxShadow= "0 15px 15px rgba(0, 0, 0, 0.9)";
  }
  @HostListener('mouseout') func2() {
      this.element.nativeElement.style.boxShadow= "0 5px 10px rgba(0, 0, 0, 0.3)";
}
}
