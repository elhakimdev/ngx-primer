import { Component } from '@angular/core';
import { PrimerAlertComponent } from '@ngx-primer/primer-ui';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    PrimerAlertComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primer-ui-playground';
}
