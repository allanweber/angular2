import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgswichComponent } from './diretiva-ngswich.component';

describe('DiretivaNgswichComponent', () => {
  let component: DiretivaNgswichComponent;
  let fixture: ComponentFixture<DiretivaNgswichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgswichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgswichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
