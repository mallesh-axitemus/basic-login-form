import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dropdownmenu',
  imports: [FormsModule, NgFor],
  templateUrl: './dropdownmenu.html',
  styleUrl: './dropdownmenu.scss',
})
export class Dropdownmenu {
  items = [
    { label: 'View profile', icon: 'dropdownmenu/user.svg', checked: false, shortcut: '⌘K→P' },
    { label: 'Settings', icon: 'dropdownmenu/settings.svg', checked: false, shortcut: '⌘S' },
    { label: 'Keyboard shortcuts', icon: 'dropdownmenu/zap.svg', checked: false, shortcut: '?' },
    { label: 'Company profile', icon: 'dropdownmenu/home.svg', checked: false, shortcut: '⌘K→C' },
    { label: 'Team', icon: 'dropdownmenu/users.svg', checked: false, shortcut: '⌘K→T' },
    { label: 'Invite colleagues', icon: 'dropdownmenu/user-plus.svg', checked: false, shortcut: '⌘I' },
    { label: 'Changelog', icon: 'dropdownmenu/2-layers.svg', checked: false, shortcut: '⌘K→C' },
    { label: 'Slack Community', icon: 'dropdownmenu/slack.svg', checked: false, shortcut: '⌘K→S' },
    { label: 'Support', icon: 'dropdownmenu/help-circle.svg', checked: false, shortcut: '⌘/' },
    { label: 'API', icon: 'dropdownmenu/code.svg', checked: false, shortcut: '⌘A' },
    { label: 'Log out', icon: 'dropdownmenu/log-out.svg', checked: false, shortcut: '⌥⇧Q' },
  ];
}
