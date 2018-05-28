import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
  
  constructor(private element: ElementRef) { }

  @HostListener('blur') onblur() {
    let value: string = this.element.nativeElement.value;
    this.element.nativeElement.value = this.format == 'uppercase' ? value.toUpperCase() : value.toLowerCase();
  }

}
