import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accord3Component } from './accord3.component';

describe('Accord3Component', () => {
  let component: Accord3Component;
  let fixture: ComponentFixture<Accord3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accord3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accord3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
