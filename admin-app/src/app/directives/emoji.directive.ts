import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: 'appEmoji'
})
export class EmojiDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.textContent += "✌️"
  }

}
