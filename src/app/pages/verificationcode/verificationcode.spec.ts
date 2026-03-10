import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verificationcode } from './verificationcode';

describe('Verificationcode', () => {
  let component: Verificationcode;
  let fixture: ComponentFixture<Verificationcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verificationcode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verificationcode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
