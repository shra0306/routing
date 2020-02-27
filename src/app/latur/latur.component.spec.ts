import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaturComponent } from './latur.component';

describe('LaturComponent', () => {
  let component: LaturComponent;
  let fixture: ComponentFixture<LaturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
