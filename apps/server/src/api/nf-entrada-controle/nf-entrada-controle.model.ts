import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TNfEntradaControle } from "./nf-entrada-controle.type";

export class NfEntradaControleModel extends Entity<TNfEntradaControle> {
  constructor(connections: TConnections) {
    super(connections, "nf_entrada_controle");
  }
}
