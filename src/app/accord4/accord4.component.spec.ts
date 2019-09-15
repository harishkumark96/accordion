import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accord4Component } from './accord4.component';

describe('Accord4Component', () => {
  let component: Accord4Component;
  let fixture: ComponentFixture<Accord4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accord4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accord4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
