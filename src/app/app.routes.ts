import {Routes} from '@angular/router';
import {CounterWrapperComponent} from "./modules/contador/wrapper/counter-wrapper.component";

export const routes: Routes = [
  /**{
    path: 'todos',
    //component: TodoShellComponent,
  },**/
  {
    path: 'counter',
    component: CounterWrapperComponent,
  },
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
];
