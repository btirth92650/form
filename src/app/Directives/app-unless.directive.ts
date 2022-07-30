import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppUnless]'
})
export class AppUnlessDirective {

  @Input() set
  appAppUnless(condition:boolean){
    if(!condition){
      this.viewRef.createEmbeddedView(this.tempRef)
    }
    else{
      this.viewRef.clear();
    }
  }

  constructor(private tempRef:TemplateRef<any>, private viewRef:ViewContainerRef) { }

}
