import { Directive, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onmouseover(){
    this.backColor = this.highLightColor;
  }
  
  @HostListener('mouseleave') onmouseLeave(){
    this.backColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backColor;
  }

  private backColor: string;

  @Input() defaultColor:string = 'white';
  @Input() highLightColor:string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backColor = this.defaultColor;
  }

}
