//import { Directive, ElementRef } from '@angular/core';
import { Directive,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' //p[fundoAmarelo] button[fundoAmarelo] qualquer tag até angular[fundoAmarelo]
})
export class FundoAmareloDirective {

  constructor(
    private _elemtentRef:ElementRef, 
    private _renderer: Renderer
    ) { 
    //this._elemtentRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(this._elemtentRef.nativeElement, 'background-color','yellow')
  }

}
