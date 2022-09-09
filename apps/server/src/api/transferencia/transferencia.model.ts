import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class TrasferenciaPlanoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "transferencia");
  }
}
