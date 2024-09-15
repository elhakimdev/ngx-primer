import { CommonModule } from '@angular/common';
/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-primer-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primer-alert.component.html',
  styleUrl: './primer-alert.component.scss',
})
export class PrimerAlertComponent {}
