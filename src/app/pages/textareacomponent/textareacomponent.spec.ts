import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textareacomponent } from './textareacomponent';

describe('Textareacomponent', () => {
  let component: Textareacomponent;
  let fixture: ComponentFixture<Textareacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textareacomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textareacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
