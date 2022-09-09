import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class FornecedorModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "fornecedor");
  }
}
