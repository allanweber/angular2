import { Directive, HostListener, HostBinding
  /*,ElementRef, Renderer*/ } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover(){
    //this._renderer.setElementStyle(this._elemtentRef.nativeElement,'background-color','yellow')
    //this.backgroundColorHostBinding = 'yellow';
    this.backColor = 'yellow';
  }
  
  @HostListener('mouseleave') onmouseLeave(){
    //this._renderer.setElementStyle(this._elemtentRef.nativeElement,'background-color','white')
    //this.backgroundColorHostBinding = 'white';
    this.backColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColorHostBinding:string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backColor;
  }

  private backColor: string;

  constructor(
    //private _elemtentRef:ElementRef, 
    //private _renderer: Renderer
  ) { }

}
