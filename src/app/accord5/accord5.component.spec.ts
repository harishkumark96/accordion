import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accord5Component } from './accord5.component';

describe('Accord5Component', () => {
  let component: Accord5Component;
  let fixture: ComponentFixture<Accord5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accord5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accord5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
