import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toasts.component.js';

describe('ToastsComponentTs', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
