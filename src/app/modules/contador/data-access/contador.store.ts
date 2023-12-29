import {Injectable} from "@angular/core";
import {SignalStore} from "../../../shared/signal.store";

export type IContadorState = {
  contador: number,
}

const initialContadorState: IContadorState = {
  contador: 0,
}

@Injectable()
export class ContadorStore extends SignalStore<IContadorState> {

  //View Model
  public readonly vm = this.selectMany([
    'contador'
  ]);

  constructor() {
    super();
    this.initialize(initialContadorState);
  }

  public incrementar() {
    this.patch({
      contador: this.state().contador + 1
    })
  }

  public decrementar() {
    this.patch({
      contador: this.state().contador - 1
    })
  }

}

