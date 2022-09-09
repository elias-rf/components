import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class VendaPlanoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "venda");
  }
}
