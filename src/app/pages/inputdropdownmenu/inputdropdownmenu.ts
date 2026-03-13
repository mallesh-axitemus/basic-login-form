import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DropdownIconType = 'default' | 'user' | 'dot';

@Component({
  selector: 'app-inputdropdownmenu',
  imports: [CommonModule],
  templateUrl: './inputdropdownmenu.html',
  styleUrl: './inputdropdownmenu.scss',
})
export class Inputdropdownmenu {
  iconTypes: DropdownIconType[] = ['default', 'user', 'dot'];

  options: { label: string; suffix?: string }[] = [
    { label: 'Phoenix Baker', suffix: '@phoenix' },
    { label: 'Olivia Rhye', suffix: '@olivia' },
    { label: 'Lana Steiner', suffix: '@lana' },
    { label: 'Demi Wilkinson', suffix: '@demi' },
    { label: 'Candice Wu', suffix: '@candice' },
    { label: 'Natali Craig', suffix: '@natali' },
    { label: 'Drew Cano', suffix: '@drew' },
  ];

  selectedIndexByType: Record<DropdownIconType, number> = {
    default: 1,
    user: 1,
    dot: 1,
  };

  selectOption(type: DropdownIconType, index: number): void {
    this.selectedIndexByType[type] = index;
  }
}
