import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appIntegerInput]'
})
export class IntegerInputDirective {

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    this.elementRef.nativeElement.value = (<HTMLInputElement>event.currentTarget).value.replace(/[^1-9]/g, '');
  }

}
