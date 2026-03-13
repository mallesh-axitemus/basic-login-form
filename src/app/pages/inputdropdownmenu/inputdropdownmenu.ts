import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DropdownIconType = 'default' | 'user' | 'dot' | 'search';

@Component({
  selector: 'app-inputdropdownmenu',
  imports: [CommonModule],
  templateUrl: './inputdropdownmenu.html',
  styleUrl: './inputdropdownmenu.scss',
})
export class Inputdropdownmenu {
  placeholderByType: Record<DropdownIconType, string> = {
    default: 'Select team member',
    user: 'Select team member',
    dot: 'Select team member',
    search: 'Search',
  };
  iconTypes: DropdownIconType[] = ['default', 'user', 'dot', 'search'];

  /** Optional label above the field (e.g. "Team member"). Set to null or '' to hide. */
  fieldLabel: string | null = 'Team member';

  options: { label: string }[] = [
    { label: 'Phoenix Baker' },
    { label: 'Olivia Rhye' },
    { label: 'Lana Steiner' },
    { label: 'Demi Wilkinson' },
    { label: 'Candice Wu' },
    { label: 'Natali Craig' },
    { label: 'Drew Cano' },
  ];

  selectedIndexByType: Record<DropdownIconType, number | null> = { default: null, user: null, dot: null, search: null };
  isOpenByType: Record<DropdownIconType, boolean> = { default: false, user: false, dot: false, search: false };
  isFocusedByType: Record<DropdownIconType, boolean> = { default: false, user: false, dot: false, search: false };

  /** For search type: typed query filters the options list. */
  searchQuery = '';

  /** Options list: for search type filtered by searchQuery; each item has option + originalIndex. */
  getFilteredOptions(iconType: DropdownIconType): { option: { label: string }; originalIndex: number }[] {
    if (iconType !== 'search') {
      return this.options.map((option, originalIndex) => ({ option, originalIndex }));
    }
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      return this.options.map((option, originalIndex) => ({ option, originalIndex }));
    }
    return this.options
      .map((option, originalIndex) => ({ option, originalIndex }))
      .filter(({ option }) => option.label.toLowerCase().includes(q));
  }

  /** Display value in search input: when open show searchQuery, when closed show selected label or empty. */
  getSearchDisplayValue(): string {
    if (this.isOpenByType['search']) return this.searchQuery;
    const idx = this.selectedIndexByType['search'];
    return idx !== null ? this.options[idx].label : '';
  }

  onSearchInput(value: string): void {
    this.searchQuery = value;
    if (!this.isOpenByType['search']) this.isOpenByType['search'] = true;
  }

  onSearchTriggerClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).tagName !== 'INPUT') this.toggle('search');
  }

  toggle(iconType: DropdownIconType): void {
    this.isOpenByType[iconType] = !this.isOpenByType[iconType];
    if (this.isOpenByType[iconType]) {
      this.iconTypes.forEach((t) => {
        if (t !== iconType) this.isOpenByType[t] = false;
      });
      if (iconType === 'search') this.searchQuery = this.getSearchDisplayValue();
    }
  }

  close(iconType?: DropdownIconType): void {
    if (iconType) this.isOpenByType[iconType] = false;
    else this.iconTypes.forEach((t) => (this.isOpenByType[t] = false));
  }

  onTriggerBlur(iconType: DropdownIconType): void {
    this.isFocusedByType[iconType] = false;
  }

  selectOption(iconType: DropdownIconType, originalIndex: number): void {
    this.selectedIndexByType[iconType] = originalIndex;
    if (iconType === 'search') this.searchQuery = this.options[originalIndex].label;
    this.close(iconType);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as Node;
    const wrappers = document.querySelectorAll('.dropdown-wrapper');
    const insideAny = Array.from(wrappers).some((el) => el.contains(target));
    if (!insideAny) this.close();
  }
}
