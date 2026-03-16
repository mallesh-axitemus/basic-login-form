import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Dropdownmenu } from './dropdownmenu';

describe('Dropdownmenu', () => {
  let component: Dropdownmenu;
  let fixture: ComponentFixture<Dropdownmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dropdownmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dropdownmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all dropdown items', () => {
    const items = fixture.debugElement.queryAll(By.css('.dropdown-item'));
    expect(items.length).toBe(11);
  });

  it('should display correct menu item labels', () => {
    const items = fixture.debugElement.queryAll(By.css('.dropdown-item'));
    const labels = items.map(i => i.nativeElement.textContent.trim());
    expect(labels).toEqual([
      'View profile', 'Settings', 'Keyboard shortcuts', 'Company profile',
      'Team', 'Invite colleagues', 'Changelog', 'Slack Community',
      'Support', 'API', 'Log out'
    ]);
  });

  it('should render dropdown container', () => {
    const container = fixture.debugElement.query(By.css('.dropdown-container'));
    expect(container).toBeTruthy();
  });
});
