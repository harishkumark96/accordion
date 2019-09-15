import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accord1Component } from './accord1.component';

describe('Accord1Component', () => {
  let component: Accord1Component;
  let fixture: ComponentFixture<Accord1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accord1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accord1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
