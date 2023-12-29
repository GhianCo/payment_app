import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ContadorStore} from "./modules/contador/data-access/contador.store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app-store';

  contadorStore = inject(ContadorStore)

}
