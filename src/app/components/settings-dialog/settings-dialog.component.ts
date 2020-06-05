import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  constructor() { }

  screen = 'Settings';

  fonts: string[] = ['Noto Sans Syriac Estrangela', 'Noto Sans Syriac Eastern'];

  selectedFont: string;

  ngOnInit(): void {
    this.selectedFont = 'Noto Sans Syriac Estrangela';
  }

  openLanguageSettings() {
    this.screen = 'Language';
  }

  openPersonalizationSettings() {
    this.screen = 'Personalization';
  }

}
