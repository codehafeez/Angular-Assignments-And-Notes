import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
       // el.nativeElement.style.display = 'none';
    }
}

