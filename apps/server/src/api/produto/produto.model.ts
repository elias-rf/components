import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class ProdutoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
