import { Directive, InjectionToken, Input } from '@angular/core';

import { AutoHideAlert } from '../interfaces/alert.interfaces';
import { NgxPrimerAlertRootInterface } from '../public-api';

let nextID: number = 0;

export const ngxPrimeAlertRootContext = new InjectionToken<"ngxPrimeAlertRootContext">("ngxPrimeAlertRootContext");

@Directive({
  selector: '[ngxPrimeAlertRoot]',
  standalone: true,
  providers: [
    { provide: ngxPrimeAlertRootContext, useExisting: NgxPrimerAlertRootDirective }
  ]
})
export class NgxPrimerAlertRootDirective implements NgxPrimerAlertRootInterface {

  readonly id: string = `ngx-primer-alert-root-${nextID++}`;

  @Input() dismissable!: boolean;

  @Input() autoHide!: AutoHideAlert;

  constructor() { }
}
