import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'lifecycle',
    template: `<p #variavelLocalP >{{valorInicial}}</p>
                <p>{{ variavelLocalP.textContent }}</p>
              `,
})
export class LifeCycleComponent
    implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
    constructor() { 
        console.log(this.variavelLocalP);
    }

    @Input() valorInicial:number = 10;

    @ViewChild('variavelLocalP') variavelLocalP:HTMLElement;

    ngOnInit() {
        console.log('ngOnInit');
        console.log(this.variavelLocalP);
    }

    ngOnChanges(){
        console.log('ngOnChanges');
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }
    
    ngAfterContentInit(){
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked');
        console.log(this.variavelLocalP);
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked');
        console.log(this.variavelLocalP);
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }
}