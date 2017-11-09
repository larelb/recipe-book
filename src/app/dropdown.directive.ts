import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  constructor(private _el: ElementRef) {}

  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
  }
  @HostListener('document:click', ['$event.target']) close (targetElement) {
    const inside: boolean = this._el.nativeElement.contains(targetElement);
    if (!inside) {
      this.isOpen = false;
      this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
  }

}
