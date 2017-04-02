import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template:
    `
        <div>
          <button type="button" class="btn btn-primary" (click)="decrement()">-</button>
          <input type="text" readonly [value]="valor">
          <button type="button" class="btn btn-primary" (click)="increment()">+</button>
        </div> 
    `
})
export class OutPutPropertyComponent {

    @Input() valor: number = 0;

    @Output() mudouValor = new EventEmitter();

    constructor() { }

    decrement() {
        this.valor--;
        this.mudouValor.emit({ novoValor: this.valor });
    }

    increment() {
        this.valor++;
        this.mudouValor.emit({ novoValor: this.valor });
    }
}