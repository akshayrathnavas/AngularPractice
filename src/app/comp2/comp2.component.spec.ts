import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COmp2Component } from './comp2.component';

describe('COmp2Component', () => {
  let component: COmp2Component;
  let fixture: ComponentFixture<COmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
