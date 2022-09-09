import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";

export class ProdutoPlanoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "produto_plano");
  }
}
