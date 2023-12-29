import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContadorStore} from "../data-access/contador.store";

@Component({
  selector: 'app-counter-shell',
  standalone: true,
  templateUrl: './counter-wrapper.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterWrapperComponent {

  contadorStore = inject(ContadorStore);

  constructor() { }

  decrementar() {
    this.contadorStore.decrementar();
  }

  incrementar() {
    this.contadorStore.incrementar();
  }

}
