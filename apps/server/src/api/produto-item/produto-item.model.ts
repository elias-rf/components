import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";

export class ProdutoItemModel extends Entity {
  constructor(connections: TConnections) {
    super(connections, "produto_item");
  }
}
