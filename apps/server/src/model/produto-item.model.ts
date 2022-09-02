import { TConnections } from "../dal/connections";
import { TProdutoItem } from "../type/produto-item.type";
import { Entity } from "./entity";

export class ProdutoItemModel extends Entity<TProdutoItem> {
  constructor(connections: TConnections) {
    super(connections, "produto_item");
  }
}
