import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputdropdownmenu } from './inputdropdownmenu';

describe('Inputdropdownmenu', () => {
  let component: Inputdropdownmenu;
  let fixture: ComponentFixture<Inputdropdownmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputdropdownmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputdropdownmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
