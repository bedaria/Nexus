import { Component, ViewEncapsulation } from '@angular/core';

import './rxjs-operators';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styles: [require('./app.scss')]
})
export class AppComponent {
  title = 'Nexus Dashboard';
}
