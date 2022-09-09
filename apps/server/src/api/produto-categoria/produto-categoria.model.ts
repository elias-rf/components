import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class ProdutoCategoriaModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "produto_categoria");
  }
}
