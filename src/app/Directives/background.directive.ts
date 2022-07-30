import { asNativeElements, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BavkgroundDirective {

  @Input() appBackground: any;
  @Input() onMouseoverColor: any;

  @HostListener('mouseover')
  mouseEnter() {
    this.renderer.setStyle(this.elementRrf.nativeElement, 'background-color', this.onMouseoverColor)
  }
  @HostListener('mouseleave')
  mouseLeave(){
    this.renderer.setStyle(this.elementRrf.nativeElement, 'background-color', this.appBackground )
  }
  constructor(private elementRrf: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    // this.elementRrf.nativeElement.style.background='red'
    // this.elementRrf.nativeElement.style.background=this.appBackground
    // this.renderer.setStyle(this.elementRrf.nativeElement,'background-color','lightblue')
    this.renderer.setStyle(this.elementRrf.nativeElement, 'background-color', this.appBackground)

  }

}
