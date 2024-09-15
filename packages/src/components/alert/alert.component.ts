import { Component, Input, forwardRef } from '@angular/core';

/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-primer-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  providers: [
    forwardRef(() => PrimerAlertComponent)
  ]
})
export class PrimerAlertComponent {
  @Input() id!: string;
}
