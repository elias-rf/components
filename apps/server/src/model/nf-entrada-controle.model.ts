import { TConnections } from "../dal/connections";
import { TNfEntradaControle } from "../type/nf-entrada-controle.type";
import { Entity } from "./entity";

export class NfEntradaControleModel extends Entity<TNfEntradaControle> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_controle");
  }
}
