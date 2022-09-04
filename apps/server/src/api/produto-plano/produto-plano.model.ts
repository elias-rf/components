import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class ProdutoPlanoModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "produto");
  }
}
