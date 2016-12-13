import 'prismjs/components/prism-icon';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'codeblock[icon]'
})
export class IconDirective implements OnInit {

  public codeblock: any;
  public el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = '{{lang}}';
  }

}
